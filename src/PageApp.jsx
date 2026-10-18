import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Menu,
  Waves,
  X,
} from "lucide-react";
import Home from "./pages/Home.jsx";
import Diagnosis from "./pages/Diagnosis.jsx";
import Impacts from "./pages/Impacts.jsx";
import Solutions from "./pages/Solutions.jsx";
import Learn from "./pages/Learn.jsx";
import References from "./pages/References.jsx";

export const pages = [
  { id: "inicio", label: "Inicio", href: "./index.html", component: Home },
  {
    id: "diagnostico",
    label: "Diagnóstico",
    href: "./diagnostico.html",
    component: Diagnosis,
  },
  {
    id: "impactos",
    label: "Impactos",
    href: "./impactos.html",
    component: Impacts,
  },
  {
    id: "soluciones",
    label: "Soluciones",
    href: "./soluciones.html",
    component: Solutions,
  },
  { id: "aprende", label: "Aprende", href: "./aprende.html", component: Learn },
  {
    id: "referencias",
    label: "Referencias",
    href: "./referencias.html",
    component: References,
  },
];

export default function PageApp({ page }) {
  const [open, setOpen] = useState(false);
  const current = pages.findIndex((item) => item.id === page);
  const index = current < 0 ? 0 : current;
  const Page = pages[index].component;
  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a
            className="brand"
            href="./index.html"
            aria-label="Los Cóbanos, inicio"
          >
            <Waves size={27} aria-hidden="true" />
            <span>
              LOS CÓBANOS<small>EDUCACIÓN AMBIENTAL · UES</small>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Navegación principal">
            {pages.map((item) => (
              <a
                key={item.id}
                href={item.href}
                aria-current={page === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav
            className="mobile-nav"
            id="mobile-menu"
            aria-label="Navegación móvil"
          >
            {pages.map((item) => (
              <a
                key={item.id}
                href={item.href}
                aria-current={page === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>
      <main id="contenido">
        <Page />
      </main>
      {index > 0 && (
        <nav
          className="page-journey container"
          aria-label="Continuar recorrido"
        >
          <a href={pages[index - 1].href}>
            <ArrowLeft size={18} /> Página anterior{" "}
            <span>{pages[index - 1].label}</span>
          </a>
          <a href="./index.html">Volver al inicio</a>
          <a href={pages[(index + 1) % pages.length].href}>
            Página siguiente{" "}
            <span>{pages[(index + 1) % pages.length].label}</span>{" "}
            <ArrowRight size={18} />
          </a>
        </nav>
      )}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <Waves size={28} />
            <strong>LOS CÓBANOS</strong>
            <p>Una costa que necesita nuestra atención.</p>
          </div>
          <div>
            <span>
              Universidad de El Salvador · Educación Ambiental y Cambio
              Climático · 2026
            </span>
            <p>
              Síntesis educativa de fuentes publicadas. No constituye
              investigación de campo propia ni comunicación oficial de la UES.
            </p>
            <p className="footer-authors">
              Elaborado por Valery Crisela Zelaya León y Mario Elmer Ramírez
              Grande
            </p>
          </div>
          <a href="./referencias.html">
            Fuentes y créditos <ArrowUpRight size={17} />
          </a>
        </div>
      </footer>
    </div>
  );
}
