import { useState } from "react";
import { ArrowRight, ChevronDown, Target } from "lucide-react";
import { PageIntro, Citation } from "../components/PageBits.jsx";
import { audiences, plans, proposals } from "../data/experience.js";

export default function Solutions() {
  const [active, setActive] = useState(0);
  return (
    <>
      <PageIntro
        number="03"
        eyebrow="PREVENCIÓN Y PROPUESTAS"
        title={
          <>
            La solución comienza <em>antes de limpiar.</em>
          </>
        }
      >
        Hay acciones cotidianas que podemos adoptar y alternativas de
        intervención que requieren coordinación. Estas propuestas no son
        resultados ejecutados por el proyecto.
      </PageIntro>
      <section className="container solutions-layout">
        <div className="section-title">
          <span className="eyebrow dark">ACCIONES POR PÚBLICO</span>
          <h2>
            ¿Qué puedes <em>hacer tú?</em>
          </h2>
        </div>
        <div className="audience-layout">
          <div className="audience-tabs" role="tablist" aria-label="Públicos">
            {audiences.map((group, index) => (
              <button
                key={group.label}
                id={`audience-tab-${index}`}
                role="tab"
                aria-controls="audience-panel"
                aria-selected={active === index}
                tabIndex={active === index ? 0 : -1}
                type="button"
                className={active === index ? "selected" : ""}
                onClick={() => setActive(index)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                    event.preventDefault();
                    const next = (index + 1) % audiences.length;
                    setActive(next);
                    document.getElementById(`audience-tab-${next}`)?.focus();
                  }
                  if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                    event.preventDefault();
                    const next =
                      (index + audiences.length - 1) % audiences.length;
                    setActive(next);
                    document.getElementById(`audience-tab-${next}`)?.focus();
                  }
                }}
              >
                <span>0{index + 1}</span>
                {group.label}
                <ArrowRight size={17} />
              </button>
            ))}
          </div>
          <div
            className="audience-panel"
            id="audience-panel"
            role="tabpanel"
            aria-labelledby={`audience-tab-${active}`}
            tabIndex={0}
          >
            <span className="eyebrow">
              PARA {audiences[active].label.toUpperCase()}
            </span>
            <ul>
              {audiences[active].actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="proposal-band">
        <div className="container proposal-layout">
          <div>
            <span className="eyebrow dark">INTERVENCIÓN PROPUESTA</span>
            <h2>
              Tres líneas <em>de trabajo.</em>
            </h2>
            <p>
              Estas ideas necesitan acuerdos locales, recursos y seguimiento. La
              información disponible fundamenta su planteamiento; no demuestra
              que ya se hayan implementado.
            </p>
          </div>
          <div className="proposal-list">
            {proposals.map((item) => (
              <details key={item.number}>
                <summary>
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                  <ChevronDown size={19} />
                </summary>
                <div>
                  <p>{item.description}</p>
                  <p>
                    <strong>Aplicación propuesta.</strong> {item.implementation}
                  </p>
                  <p>
                    <strong>Condiciones de viabilidad.</strong> {item.viability}
                  </p>
                  <p>
                    Fundamento:{" "}
                    {item.refs.map((id) => (
                      <Citation key={id} id={id} />
                    ))}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="container indicator-section">
        <div className="section-title">
          <Target size={31} />
          <span className="eyebrow dark">CÓMO EVALUARLAS</span>
          <h2>
            Metas e indicadores <em>por implementar.</em>
          </h2>
          <p>
            No atribuimos resultados al proyecto antes de ejecutar y registrar
            actividades.
          </p>
        </div>
        <div className="indicator-grid">
          {plans.map((plan, index) => (
            <article key={plan.title}>
              <span>0{index + 1}</span>
              <h3>{plan.title}</h3>
              <p>
                <strong>Meta propuesta.</strong> {plan.goal}
              </p>
              <p>
                <strong>Medición posible.</strong> {plan.indicators}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
