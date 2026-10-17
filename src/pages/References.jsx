import { ArrowUpRight, BookOpen, Camera, GraduationCap } from "lucide-react";
import { PageIntro } from "../components/PageBits.jsx";
import { sources } from "../data/content.js";
import { External } from "../components/StoryUI.jsx";

export default function References() {
  return (
    <>
      <PageIntro
        number="05"
        eyebrow="FUENTES Y AUTORÍA"
        title={
          <>
            Una historia respaldada <em>por fuentes verificables.</em>
          </>
        }
      >
        La información procede de publicaciones identificables. Consulta los
        vínculos originales y distingue las observaciones locales de la
        literatura internacional.
      </PageIntro>
      <section className="container references-layout">
        <div className="reference-intro">
          <BookOpen size={34} />
          <span className="eyebrow dark">REFERENCIAS · APA 7</span>
          <h2>Fuentes utilizadas</h2>
          <p>
            Los identificadores [F1]–[F8] conectan las afirmaciones de las otras
            páginas con sus publicaciones originales.
          </p>
        </div>
        <ol className="reference-list">
          {sources.map((source) => (
            <li key={source.id} id={`ref-${source.id}`}>
              <span className="ref-id">[{source.id}]</span>
              <p>
                {source.author}
                {source.author.endsWith(".") ? "" : "."} ({source.date}).{" "}
                <cite>{source.title}</cite>.{" "}
                {source.publisher && <>{source.publisher}. </>}
                <External href={source.url}>Consultar fuente</External>
              </p>
            </li>
          ))}
        </ol>
      </section>
      <section className="reference-band">
        <div className="container reference-bottom">
          <div>
            <Camera size={31} />
            <h2>Créditos de imágenes</h2>
            <p>
              <External href="https://commons.wikimedia.org/wiki/File:Playa_Los_C%C3%B3banos.jpg">
                «Playa Los Cóbanos» (2020), Pollito03
              </External>{" "}
              y{" "}
              <External href="https://commons.wikimedia.org/wiki/File:Playa_Los_C%C3%B3banos_2026.jpg">
                «Playa Los Cóbanos 2026», Bubulina26
              </External>
              . Ambas fotografías tienen{" "}
              <External href="https://creativecommons.org/licenses/by-sa/4.0/">
                licencia CC BY-SA 4.0
              </External>
              . Archivos sin editar, visualizados mediante recorte CSS.
            </p>
            <p>
              Las dos imágenes del comparador son ilustraciones educativas
              generadas para el sitio; no son fotografías ni evidencia
              documental.
            </p>
          </div>
          <div>
            <GraduationCap size={31} />
            <h2>Carácter académico</h2>
            <p>
              Trabajo de Educación Ambiental y Cambio Climático · Universidad de
              El Salvador · 2026. Es una síntesis educativa independiente, no
              una investigación de campo propia ni comunicación oficial de la
              UES o de las instituciones citadas.
            </p>
            <p>
              <strong>Integrantes:</strong> Valery Crisela Zelaya León y Mario
              Elmer Ramírez Grande.
            </p>
            <p>
              <a
                className="inline-link"
                href="https://www.unep.org/interactives/pollution-to-solution/?lang=ES"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reportaje interactivo complementario del PNUMA (alcance global){" "}
                <ArrowUpRight size={16} />
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
