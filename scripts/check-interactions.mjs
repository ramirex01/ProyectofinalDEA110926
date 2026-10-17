import { createServer } from "vite";
import React from "react";
import TestRenderer, { act } from "react-test-renderer";

const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};
const textOf = (node) =>
  node.children
    .map((child) => (typeof child === "string" ? child : textOf(child)))
    .join("");
const button = (tree, phrase) =>
  tree.root
    .findAllByType("button")
    .find((item) => textOf(item).includes(phrase));
globalThis.document = { getElementById: () => ({ focus() {} }) };

try {
  const { default: PageApp } = await vite.ssrLoadModule("/src/PageApp.jsx");

  let home;
  act(() => {
    home = TestRenderer.create(
      React.createElement(PageApp, { page: "inicio" }),
    );
  });
  act(() =>
    home.root.findByProps({ "aria-label": "Abrir menú" }).props.onClick(),
  );
  assert(home.root.findByProps({ id: "mobile-menu" }), "El menú móvil no abre");
  act(() =>
    home.root.findByProps({ "aria-label": "Cerrar menú" }).props.onClick(),
  );
  assert(
    !home.root.findAllByProps({ id: "mobile-menu" }).length,
    "El menú móvil no cierra",
  );

  let impacts;
  act(() => {
    impacts = TestRenderer.create(
      React.createElement(PageApp, { page: "impactos" }),
    );
  });
  act(() => button(impacts, "Gestión inadecuada").props.onClick());
  assert(
    textOf(impacts.root.findByProps({ id: "impact-panel" })).includes("PNUMA"),
    "La pestaña de impactos no cambió",
  );
  act(() =>
    impacts.root.findByProps({ id: "impact-tab-2" }).props.onKeyDown({
      key: "ArrowRight",
      preventDefault() {},
    }),
  );
  assert(
    impacts.root.findByProps({ id: "impact-tab-3" }).props["aria-selected"],
    "La navegación de pestañas con teclado no funciona",
  );

  let solutions;
  act(() => {
    solutions = TestRenderer.create(
      React.createElement(PageApp, { page: "soluciones" }),
    );
  });
  act(() => button(solutions, "Comercios").props.onClick());
  assert(
    textOf(solutions.root.findByProps({ id: "audience-panel" })).includes(
      "Reducir empaques",
    ),
    "El selector de públicos no cambió",
  );
  assert(
    solutions.root.findAllByType("details").length === 3,
    "Faltan propuestas desplegables",
  );

  let learn;
  act(() => {
    learn = TestRenderer.create(
      React.createElement(PageApp, { page: "aprende" }),
    );
  });
  const range = learn.root.findByProps({ id: "compare-range" });
  act(() => range.props.onChange({ target: { value: "75" } }));
  assert(
    learn.root
      .findByProps({ className: "comparison-clean" })
      .props.style.clipPath.includes("25%"),
    "El comparador no responde",
  );
  act(() => button(learn, "Simulador").props.onClick());
  act(() => button(learn, "Una botella reutilizable").props.onClick());
  assert(
    textOf(learn.root.findByProps({ className: "feedback" })).includes(
      "Reducir desechables",
    ),
    "Falta retroalimentación del simulador",
  );
  act(() => button(learn, "Siguiente situación").props.onClick());
  assert(
    textOf(learn.root.findByProps({ className: "scenario" })).includes(
      "refrigerio",
    ),
    "El simulador no avanzó",
  );
  act(() => button(learn, "Guardas tus residuos").props.onClick());
  act(() => button(learn, "Siguiente situación").props.onClick());
  act(() => button(learn, "Avisas a responsables").props.onClick());
  act(() => button(learn, "Ver resumen").props.onClick());
  assert(
    textOf(learn.root.findByProps({ className: "scenario" })).includes(
      "Aprender permite elegir mejor",
    ),
    "El simulador no muestra el resumen",
  );
  act(() => button(learn, "Explorar otras decisiones").props.onClick());
  assert(
    textOf(learn.root.findByProps({ className: "scenario" })).includes(
      "Preparas una visita",
    ),
    "El simulador no se reinicia",
  );
  act(() => button(learn, "Compromiso").props.onClick());
  act(() => button(learn, "Llevar una botella reutilizable.").props.onClick());
  assert(
    textOf(
      learn.root.findByProps({ className: "commitment-options" }),
    ).includes("1 de 3"),
    "El compromiso no se registró en la sesión",
  );
  act(() => button(learn, "Cuestionario").props.onClick());
  act(() =>
    button(
      learn,
      "Redes abandonadas, botellas, bolsas y latas",
    ).props.onClick(),
  );
  assert(
    learn.root.findAllByProps({ className: "correct" }).length > 0,
    "El cuestionario no marca la respuesta correcta",
  );

  console.log(
    "Menú móvil, pestañas, propuestas, comparador, simulador, compromisos y cuestionario verificados.",
  );
} finally {
  await vite.close();
}
