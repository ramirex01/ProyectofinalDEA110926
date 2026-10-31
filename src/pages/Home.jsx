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
import { CountUp } from "../components/Motion.jsx";
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

const figures = [
  {
    year: "2021",
    source: "F2",
    lead: "Más de",
    value: 80,
    unit: "voluntarios",
    text: "Jornada del MARN en la zona marina y el manglar.",
  },
  {
    year: "2025",
    source: "F3",
    lead: "Más de",
    value: 63,
    unit: "libras",
    text: "Jornada de AES El Salvador y FUNZEL en playa Los Lagartos.",
  },
  {
    year: "2026",
    source: "F4",
    lead: "Cerca de",
    value: null,
    big: "una tonelada",
    unit: "",
    text: "Retirada de la orilla en una jornada de FIAES; aparte, 25 libras de basura subacuática.",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero" id="descubre" aria-labelledby="home-title">
        <img
          src={image("los-cobanos.jpg")}
          alt="Costa rocosa del Complejo Los Cóbanos con lanchas de pesca bajo un cielo de nubes"
        />
        <div className="home-shade" />
        <div className="container home-hero-content">
          <h1 id="home-title">
            Los Cóbanos.
            <br />
            <em>Una costa que necesita</em>
            <br />
            nuestra atención.
          </h1>
          <p className="hero-lead">
            Un recorrido educativo por la contaminación por residuos sólidos y
            las alternativas para prevenirla.
          </p>
          <div className="hero-foot">
            <a className="button coral" href="./diagnostico.html">
              Comenzar recorrido <ArrowRight size={18} />
            </a>
            <PhotoCredit />
          </div>
        </div>
      </section>
      <section className="figures" aria-labelledby="figures-title">
        <div className="container">
          <h2 id="figures-title">Tres jornadas, tres lugares distintos</h2>
          <ol className="figures-list">
            {figures.map((item) => (
              <li key={item.year}>
                <span className="figure-year">{item.year}</span>
                <p className="figure-value">
                  <span className="figure-lead">{item.lead}</span>
                  {item.value !== null ? (
                    <>
                      <span className="figure-number">
                        <CountUp value={item.value} />
                      </span>
                      <span className="figure-unit">{item.unit}</span>
                    </>
                  ) : (
                    <span className="figure-number figure-word">
                      {item.big}
                    </span>
                  )}
                </p>
                <p className="figure-text">
                  {item.text.replace(/\.$/, "")} <Citation id={item.source} />.
                </p>
              </li>
            ))}
          </ol>
          <p className="figures-note">
            Cada cifra pertenece a una jornada y a un sitio concretos: no se
            suman ni muestran una tendencia anual.{" "}
            <a href="./diagnostico.html">
              Leer el diagnóstico <ArrowRight size={16} />
            </a>
          </p>
        </div>
      </section>
      <section className="home-after container">
        <div className="route-heading">
          <div>
            <span className="eyebrow dark">EL RECORRIDO</span>
            <h2>
              Cinco secciones para <em>comprender y actuar.</em>
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
          <div>
            <strong className="academic-title">
              Contaminación por residuos sólidos en Los Cóbanos, Sonsonate, y
              alternativas de prevención desde la educación ambiental
            </strong>
            <p>
              Proyecto académico de Educación Ambiental y Cambio Climático de la
              Universidad de El Salvador. La página sintetiza publicaciones
              externas; no presenta trabajo de campo propio ni datos inventados.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
