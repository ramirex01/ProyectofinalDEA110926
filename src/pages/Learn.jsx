import { useState } from "react";
import { ArrowRight, Check, MoveHorizontal, RotateCcw } from "lucide-react";
import { PageIntro, Citation } from "../components/PageBits.jsx";
import { image } from "../data/assets.js";
import { quiz } from "../data/content.js";
import { commitments, situations } from "../data/experience.js";

const activities = ["Comparador", "Simulador", "Compromiso", "Cuestionario"];

function Comparator() {
  const [value, setValue] = useState(50);
  return (
    <div className="activity-content">
      <div className="activity-copy">
        <span className="eyebrow dark">REPRESENTACIÓN EDUCATIVA</span>
        <h2>
          Dos escenarios <em>ilustrativos.</em>
        </h2>
        <p>
          Desliza para comparar el mismo paisaje imaginado con prevención y con
          residuos. Las imágenes no documentan el estado real de Los Cóbanos ni
          cuantifican una intervención.
        </p>
      </div>
      <div className="comparison">
        <div className="comparison-images">
          <img
            src={image("comparador-residuos.webp")}
            alt="Ilustración educativa de una costa con residuos sólidos"
          />
          <img
            className="comparison-clean"
            src={image("comparador-prevencion.webp")}
            alt="Ilustración educativa del mismo escenario sin residuos visibles"
            style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
          />
          <div
            className="comparison-line"
            style={{ left: `${value}%` }}
            aria-hidden="true"
          >
            <MoveHorizontal size={20} />
          </div>
          <span className="comparison-label left">Prevención</span>
          <span className="comparison-label right">
            Acumulación ilustrativa
          </span>
        </div>
        <label htmlFor="compare-range">Comparar escenarios</label>
        <input
          id="compare-range"
          type="range"
          min="0"
          max="100"
          value={value}
          aria-valuetext={`${value} por ciento del escenario de prevención visible`}
          onChange={(event) => setValue(Number(event.target.value))}
        />
        <p>
          <strong>Ilustraciones, no fotografías documentales.</strong> Reducir
          productos innecesarios, reutilizar y gestionar bien los residuos puede
          evitar que lleguen al entorno. <Citation id="F7" />{" "}
          <Citation id="F8" />
        </p>
      </div>
    </div>
  );
}

function Simulator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [summary, setSummary] = useState(false);
  const item = situations[step];
  const answer = answers[step];
  const complete = situations.every((_, index) => answers[index] !== undefined);
  const reset = () => {
    setStep(0);
    setAnswers({});
    setSummary(false);
  };
  return (
    <div className="simulator">
      <div className="activity-copy">
        <span className="eyebrow dark">SIMULACIÓN EDUCATIVA</span>
        <h2>
          Decide durante <em>una visita.</em>
        </h2>
        <p>
          Las respuestas explican decisiones posibles; no calculan efectos
          reales ni recogen datos personales.
        </p>
      </div>
      <div className="simulator-box">
        <div className="step-list" aria-label="Progreso de situaciones">
          {situations.map((s, index) => (
            <button
              key={s.stage}
              type="button"
              className={!summary && step === index ? "selected" : ""}
              aria-current={!summary && step === index ? "step" : undefined}
              onClick={() => {
                setSummary(false);
                setStep(index);
              }}
            >
              <span>
                {answers[index] !== undefined ? (
                  <Check size={15} />
                ) : (
                  `0${index + 1}`
                )}
              </span>
              {s.stage}
            </button>
          ))}
          <button
            type="button"
            className={summary ? "selected" : ""}
            disabled={!complete}
            onClick={() => setSummary(true)}
          >
            <span>04</span>Resumen
          </button>
        </div>
        {summary ? (
          <div className="scenario">
            <span className="eyebrow dark">TU RECORRIDO</span>
            <h3>Aprender permite elegir mejor.</h3>
            <p>
              Exploraste tres situaciones: reducir desechables, llevarte tus
              residuos y dejar la recuperación subacuática a personal
              capacitado.
            </p>
            <ul>
              {situations.map((s, index) => (
                <li key={s.stage}>
                  <strong>{s.stage}:</strong>{" "}
                  {s.options[answers[index]].feedback}
                </li>
              ))}
            </ul>
            <button type="button" className="button ocean" onClick={reset}>
              Explorar otras decisiones <RotateCcw size={17} />
            </button>
          </div>
        ) : (
          <div className="scenario">
            <span className="eyebrow dark">
              ESCENARIO 0{step + 1} / 03 · {item.stage}
            </span>
            <h3>{item.question}</h3>
            <div className="scenario-options">
              {item.options.map((option, index) => (
                <button
                  key={option.label}
                  type="button"
                  className={answer === index ? "selected" : ""}
                  aria-pressed={answer === index}
                  onClick={() =>
                    setAnswers((previous) => ({ ...previous, [step]: index }))
                  }
                >
                  <span>{String.fromCharCode(65 + index)}</span>
                  {option.label}
                  <ArrowRight size={17} />
                </button>
              ))}
            </div>
            {answer !== undefined && (
              <div className="feedback" role="status">
                {item.options[answer].feedback} <Citation id={item.source} />
              </div>
            )}
            {answer !== undefined && (
              <button
                type="button"
                className="text-action"
                onClick={() => {
                  if (step < 2) setStep(step + 1);
                  else if (complete) setSummary(true);
                  else
                    setStep(
                      situations.findIndex(
                        (_, index) => answers[index] === undefined,
                      ),
                    );
                }}
              >
                {step < 2
                  ? "Siguiente situación"
                  : complete
                    ? "Ver resumen"
                    : "Completar situaciones pendientes"}{" "}
                <ArrowRight size={17} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Commitment() {
  const [selected, setSelected] = useState([]);
  return (
    <div className="commitment activity-content">
      <div className="activity-copy">
        <span className="eyebrow dark">COMPROMISO PERSONAL</span>
        <h2>
          Una decisión <em>concreta.</em>
        </h2>
        <p>
          Marca lo que quieres intentar. La selección solo existe en esta sesión
          de la página: no se envía ni se almacena información personal.
        </p>
      </div>
      <div className="commitment-options">
        {commitments.map((item, index) => (
          <button
            key={item}
            type="button"
            aria-pressed={selected.includes(index)}
            className={selected.includes(index) ? "selected" : ""}
            onClick={() =>
              setSelected((previous) =>
                previous.includes(index)
                  ? previous.filter((value) => value !== index)
                  : [...previous, index],
              )
            }
          >
            <span>{selected.includes(index) && <Check size={17} />}</span>
            {item}
          </button>
        ))}
        <p role="status">
          {selected.length
            ? `${selected.length} de ${commitments.length} compromisos seleccionados.`
            : "Elige uno o varios compromisos."}
        </p>
      </div>
    </div>
  );
}

function Quiz() {
  const [answers, setAnswers] = useState({});
  return (
    <div className="quiz">
      <div className="activity-copy">
        <span className="eyebrow dark">COMPRUEBA LO APRENDIDO</span>
        <h2>
          Cuatro preguntas, <em>con fuentes.</em>
        </h2>
      </div>
      <div className="quiz-grid">
        {quiz.map((item, index) => (
          <fieldset key={item.question}>
            <legend>
              {index + 1}. {item.question}
            </legend>
            <div>
              {item.options.map((option, optionIndex) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={answers[index] === optionIndex}
                  className={
                    answers[index] === optionIndex
                      ? optionIndex === item.correct
                        ? "correct"
                        : "incorrect"
                      : ""
                  }
                  onClick={() =>
                    setAnswers((previous) => ({
                      ...previous,
                      [index]: optionIndex,
                    }))
                  }
                >
                  {option}
                </button>
              ))}
            </div>
            {answers[index] !== undefined && (
              <p role="status">
                {answers[index] === item.correct
                  ? "Correcto. "
                  : "Revisa la explicación: "}
                {item.explanation} <Citation id={item.source} />
              </p>
            )}
          </fieldset>
        ))}
      </div>
    </div>
  );
}

export default function Learn() {
  const [active, setActive] = useState(0);
  const panels = [<Comparator />, <Simulator />, <Commitment />, <Quiz />];
  return (
    <>
      <PageIntro
        number="04"
        eyebrow="APRENDE Y PARTICIPA"
        title={
          <>
            Explora, decide <em>y lleva algo contigo.</em>
          </>
        }
      >
        Cuatro experiencias breves convierten la información en decisiones
        prácticas. Cada una conserva el contexto y los límites de las fuentes.
      </PageIntro>
      <section className="container learning-space">
        <div
          className="learning-tabs"
          role="tablist"
          aria-label="Actividades educativas"
        >
          {activities.map((label, index) => (
            <button
              key={label}
              type="button"
              id={`learning-tab-${index}`}
              role="tab"
              aria-selected={active === index}
              aria-controls={`learning-panel-${index}`}
              tabIndex={active === index ? 0 : -1}
              className={active === index ? "selected" : ""}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  const next = (index + 1) % activities.length;
                  setActive(next);
                  document.getElementById(`learning-tab-${next}`)?.focus();
                }
                if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  const next =
                    (index + activities.length - 1) % activities.length;
                  setActive(next);
                  document.getElementById(`learning-tab-${next}`)?.focus();
                }
              }}
            >
              <span>0{index + 1}</span>
              {label}
            </button>
          ))}
        </div>
        {panels.map((panel, index) => (
          <div
            key={activities[index]}
            id={`learning-panel-${index}`}
            role="tabpanel"
            aria-labelledby={`learning-tab-${index}`}
            tabIndex={0}
            hidden={active !== index}
          >
            {panel}
          </div>
        ))}
      </section>
    </>
  );
}
