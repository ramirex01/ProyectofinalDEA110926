import { ShieldCheck } from "lucide-react";
import { PageIntro, Citation } from "../components/PageBits.jsx";
import { External, PhotoCredit } from "../components/StoryUI.jsx";
import { events, sources } from "../data/content.js";
import { image } from "../data/assets.js";
import { AnimatedText, useInView } from "../components/Motion.jsx";

function TimelineItem({ event }) {
  const [ref, visible] = useInView({ threshold: 0.3 });
  return (
    <li ref={ref} className={`timeline-item${visible ? " is-visible" : ""}`}>
      <span className="timeline-year">{event.year}</span>
      <span className="timeline-node" aria-hidden="true" />
      <article className="timeline-body">
        <p className="timeline-date">{event.date}</p>
        <h3>
          <AnimatedText text={event.title} />
        </h3>
        <p className="place">{event.place}</p>
        <p>
          {event.description} <Citation id={event.source} />
        </p>
        <External href={event.url}>
          Publicación original [{event.source}]
        </External>
      </article>
    </li>
  );
}

export default function Diagnosis() {
  return (
    <>
      <PageIntro
        number="01"
        eyebrow="EL TERRITORIO Y LA EVIDENCIA"
        title={
          <>
            Un ecosistema valioso. <em>Una presión visible.</em>
          </>
        }
      >
        Los Cóbanos es un área natural protegida y sitio Ramsar en Sonsonate. La
        protección del ambiente marino-costero se relaciona con la vida marina,
        la pesca y el turismo. <Citation id="F1" />
      </PageIntro>
      <section className="container two-column context-block">
        <figure className="photo-frame">
          <img
            src={image("los-cobanos-2026.jpg")}
            alt="Vista de la playa Los Cóbanos en 2026"
          />
          <figcaption>
            <PhotoCredit photo="recent" />
          </figcaption>
        </figure>
        <div className="context-text">
          <span className="eyebrow dark">MAR · VIDA · COMUNIDAD</span>
          <h2>
            ¿Por qué importa <em>esta costa?</em>
          </h2>
          <p>
            Sus arrecifes y ambientes marino-costeros ofrecen refugio y espacios
            de alimentación o reproducción para especies marinas. La gestión de
            residuos afecta el cuidado de esos espacios y las actividades
            humanas vinculadas a ellos.
          </p>
          <p>
            El plan de manejo del MARN describe el valor ecológico del complejo;
            una publicación institucional posterior recoge acciones de
            protección marina. <Citation id="F1" /> <Citation id="F5" />
          </p>
          <External href={sources[0].url}>Consultar plan de manejo</External>
        </div>
      </section>
      <section className="evidence-section">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow dark">JORNADAS DOCUMENTADAS</span>
            <h2>
              Lo que las fuentes <em>sí registraron.</em>
            </h2>
            <p>
              Cada cifra corresponde a una fecha y un lugar concreto. Selecciona
              las publicaciones originales para revisar el contexto.
            </p>
          </div>
          <ol className="timeline">
            {events.map((event) => (
              <TimelineItem key={event.year} event={event} />
            ))}
          </ol>
        </div>
      </section>
      <aside className="container method-note">
        <ShieldCheck size={34} />
        <div>
          <h2>Nota metodológica</h2>
          <p>
            Las cifras de 2021, 2025 y 2026 proceden de jornadas distintas. No
            se suman ni se extrapolan al año completo, y no establecen una
            tendencia estadística para toda la costa. En la inspección de 2026
            no se encontraron redes fantasmas; las redes retiradas corresponden
            a la publicación de 2021. <Citation id="F2" /> <Citation id="F3" />{" "}
            <Citation id="F4" />
          </p>
        </div>
      </aside>
    </>
  );
}
