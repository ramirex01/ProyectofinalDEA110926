import { useState } from "react";
import { ArrowRight, Fish, Leaf, Waves, Wind } from "lucide-react";
import { PageIntro, Citation, CitationGroup } from "../components/PageBits.jsx";
import { relations } from "../data/experience.js";

const icons = [Wind, Fish, Leaf, Waves];

export default function Impacts() {
  const [active, setActive] = useState(0);
  const relation = relations[active];
  const Icon = icons[active];
  return (
    <>
      <PageIntro
        number="02"
        eyebrow="CAUSAS Y CONSECUENCIAS"
        title={
          <>
            Lo que llega al mar <em>tiene consecuencias.</em>
          </>
        }
      >
        Explora las relaciones descritas por las fuentes. Una observación en Los
        Cóbanos y un efecto general señalado por el PNUMA no tienen el mismo
        alcance.
      </PageIntro>
      <section
        className="container impact-workspace"
        aria-label="Explorador de causas e impactos"
      >
        <div
          className="impact-tabs"
          role="tablist"
          aria-label="Causas de la contaminación"
        >
          {relations.map((item, index) => {
            const TabIcon = icons[index];
            return (
              <button
                key={item.cause}
                type="button"
                role="tab"
                id={`impact-tab-${index}`}
                aria-controls="impact-panel"
                aria-selected={active === index}
                tabIndex={active === index ? 0 : -1}
                className={active === index ? "selected" : ""}
                onClick={() => setActive(index)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                    event.preventDefault();
                    setActive((index + 1) % relations.length);
                    document
                      .getElementById(
                        `impact-tab-${(index + 1) % relations.length}`,
                      )
                      ?.focus();
                  }
                  if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                    event.preventDefault();
                    setActive(
                      (index + relations.length - 1) % relations.length,
                    );
                    document
                      .getElementById(
                        `impact-tab-${(index + relations.length - 1) % relations.length}`,
                      )
                      ?.focus();
                  }
                }}
              >
                <TabIcon size={23} />
                <span>
                  <small>VÍA 0{index + 1}</small>
                  {item.cause}
                </span>
                <ArrowRight size={17} />
              </button>
            );
          })}
        </div>
        <article
          className="impact-panel"
          id="impact-panel"
          role="tabpanel"
          aria-labelledby={`impact-tab-${active}`}
          tabIndex={0}
          key={active}
        >
          <span className="eyebrow">{relation.scope}</span>
          <Icon size={46} strokeWidth={1.5} />
          <h2>{relation.effect}</h2>
          <p>{relation.detail}</p>
          <div className="source-row">
            Fuentes: <CitationGroup ids={relation.refs} />
          </div>
        </article>
      </section>
      <section className="container impact-context">
        <div>
          <span className="eyebrow dark">FAUNA Y HÁBITATS</span>
          <h3>Riesgos descritos, sin extrapolar.</h3>
          <p>
            Las redes pueden provocar enredos. El PNUMA describe riesgos
            generales de los plásticos para especies, corales y otros
            ecosistemas marinos <Citation id="F6" />.
          </p>
        </div>
        <div>
          <span className="eyebrow dark">PESCA Y TURISMO</span>
          <h3>Sin pérdidas locales cuantificadas.</h3>
          <p>
            La basura puede perjudicar el entorno y generar costos, pero las
            fuentes reunidas no cuantifican pérdidas económicas ni
            microplásticos en Los Cóbanos <Citation id="F6" />.
          </p>
        </div>
      </section>
    </>
  );
}
