import {
  ArrowRight,
  BookOpen,
  CircleHelp,
  Compass,
  Lightbulb,
  Microscope,
  Waves,
} from "lucide-react";
import { PhotoCredit } from "../components/StoryUI.jsx";
import { Citation } from "../components/PageBits.jsx";
import { image } from "../data/assets.js";

const destinations = [
  {
    href: "./diagnostico.html",
    number: "01",
    title: "Diagnóstico",
    text: "Conoce el territorio y las jornadas documentadas.",
    icon: Microscope,
  },
  {
    href: "./impactos.html",
    number: "02",
    title: "Impactos",
    text: "Explora causas, efectos y límites de la evidencia.",
    icon: Compass,
  },
  {
    href: "./soluciones.html",
    number: "03",
    title: "Soluciones",
    text: "Tres alternativas para prevenir, gestionar y registrar.",
    icon: Lightbulb,
  },
  {
    href: "./aprende.html",
    number: "04",
    title: "Aprende",
    text: "Compara escenarios y practica decisiones responsables.",
    icon: CircleHelp,
  },
  {
    href: "./referencias.html",
    number: "05",
    title: "Referencias",
    text: "Consulta fuentes, fotografía y contexto académico.",
    icon: BookOpen,
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero" id="descubre" aria-labelledby="home-title">
        <img
          src={image("los-cobanos.jpg")}
          alt="Costa rocosa del Complejo Los Cóbanos"
        />
        <div className="home-shade" />
        <div className="container home-hero-content">
          <span className="eyebrow">SONSONATE · EL SALVADOR</span>
          <h1 id="home-title">
            Los Cóbanos.
            <br />
            <em>Una costa que necesita</em>
            <br />
            nuestra atención.
          </h1>
          <p>
            Un recorrido educativo por la contaminación por residuos sólidos y
            las alternativas para prevenirla.
          </p>
          <a className="button coral" href="./diagnostico.html">
            Comenzar recorrido <ArrowRight size={18} />
          </a>
        </div>
        <div className="hero-credit container">
          <PhotoCredit />
        </div>
      </section>
      <section className="home-after container">
        <div className="featured-evidence">
          <div>
            <span className="eyebrow dark">EVIDENCIA LOCAL · MARZO 2026</span>
            <h2>Cerca de una tonelada</h2>
            <p>
              de desechos fue retirada de la orilla en una jornada coordinada
              por FIAES; por separado se recogieron 25 libras de basura
              subacuática. Es el resultado de esa actividad, no una medición
              anual.
            </p>
            <a href="./diagnostico.html">
              Leer el diagnóstico <ArrowRight size={17} />
            </a>
          </div>
          <div className="evidence-number">
            2026
            <span>
              Los Cóbanos <Citation id="F4" />
            </span>
          </div>
        </div>
        <div className="route-heading">
          <div>
            <span className="eyebrow dark">EL RECORRIDO</span>
            <h2>
              Cinco vistas para <em>comprender y actuar.</em>
            </h2>
          </div>
          <p>
            Elige un tema y explora a tu ritmo. Cada página reúne información
            respaldada por fuentes identificables.
          </p>
        </div>
        <div className="route-grid">
          {destinations.map((item) => {
            const Icon = item.icon;
            return (
              <a className="route-card" key={item.href} href={item.href}>
                <span>{item.number}</span>
                <Icon size={27} strokeWidth={1.6} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ArrowRight
                  className="card-arrow"
                  size={20}
                  aria-hidden="true"
                />
              </a>
            );
          })}
        </div>
        <div className="home-disclaimer">
          <Waves size={24} />
          <p>
            Proyecto académico de Educación Ambiental y Cambio Climático de la
            Universidad de El Salvador. La página sintetiza publicaciones
            externas; no presenta trabajo de campo propio ni datos inventados.
          </p>
        </div>
      </section>
    </>
  );
}
