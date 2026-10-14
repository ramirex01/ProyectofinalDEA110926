import { useState } from 'react';
import { ArrowRight, RotateCcw, ShieldCheck } from 'lucide-react';
import { ChapterIntro, External } from '../components/StoryUI.jsx';
import { sources } from '../data/content.js';

const scenarios = [
  { context: 'ANTES DE SALIR', question: 'Preparas una visita a la playa. ¿Qué llevas para beber?', options: [
    { label: 'Una botella reutilizable', good: true, response: 'Reducir desechables desde el inicio evita generar un envase que después habría que gestionar.' },
    { label: 'Varias botellas desechables', good: false, response: 'Si usas envases desechables, debes llevarlos de regreso o depositarlos donde exista una recolección adecuada. Reducirlos sigue siendo preferible.' },
  ], source: 'F7' },
  { context: 'DURANTE LA VISITA', question: 'Terminas un refrigerio y no encuentras un recipiente. ¿Qué haces?', options: [
    { label: 'Guardas tus residuos para llevarlos contigo', good: true, response: 'Evitas que envases y empaques queden en la arena o sean desplazados hacia el agua.' },
    { label: 'Los dejas junto a una roca para recogerlos luego', good: false, response: 'Dejarlos en la costa aumenta el riesgo de abandono o transporte por viento y agua. Es mejor conservarlos contigo.' },
  ], source: 'F3' },
  { context: 'EN LA COSTA', question: 'Observas una red en el agua. ¿Cómo actúas?', options: [
    { label: 'Avisas a responsables del área y mantienes distancia', good: true, response: 'La extracción subacuática necesita coordinación y equipos capacitados. El MARN documentó trabajos de buzos en 2021.' },
    { label: 'Entras al agua para retirarla por tu cuenta', good: false, response: 'Podría ser peligroso. La recuperación de redes en el fondo marino corresponde a personal preparado y autorizado.' },
  ], source: 'F2' },
];

export default function Decide({ goTo }) {
  const [step, setStep] = useState(0);
  const [selections, setSelections] = useState({});
  const scenario = scenarios[step];
  const choice = selections[step];
  const source = sources.find(item => item.id === scenario.source);
  function reset() { setStep(0); setSelections({}); }
  return <section className="story-chapter decide-chapter layout-width"><ChapterIntro number="04" eyebrow="DECIDE" title="Cada decisión cambia lo que dejamos atrás.">Esta simulación educativa presenta situaciones cotidianas. Sus respuestas explican medidas de prevención; no calculan impactos ni representan datos recogidos en Los Cóbanos.</ChapterIntro>
    <div className="decision-stage"><div className="decision-rail"><span className="micro-label">TU RECORRIDO</span>{scenarios.map((item,index) => <button key={item.context} onClick={() => setStep(index)} className={step === index ? 'active' : ''} aria-current={step === index ? 'step' : undefined}><span>0{index + 1}</span><strong>{item.context}</strong><small>{selections[index] === undefined ? 'Por explorar' : 'Decisión explorada'}</small></button>)}<button className="reset-button" onClick={reset}><RotateCcw size={16}/> Reiniciar recorrido</button></div><div className="decision-main"><span className="micro-label">SITUACIÓN 0{step + 1} / 03 · {scenario.context}</span><h2>{scenario.question}</h2><div className="decision-options">{scenario.options.map((option,index) => <button key={option.label} className={choice === index ? 'selected' : ''} aria-pressed={choice === index} onClick={() => setSelections({ ...selections, [step]: index })}><span>{String.fromCharCode(65 + index)}</span>{option.label}<ArrowRight size={19}/></button>)}</div>{choice !== undefined && <div className="decision-feedback" role="status"><ShieldCheck size={24}/><div><span className="micro-label">EXPLICACIÓN EDUCATIVA</span><p>{scenario.options[choice].response}</p><External href={source.url}>Consultar fuente {source.id}</External></div></div>}{choice !== undefined && (step < 2 ? <button className="chapter-inline-next" onClick={() => setStep(step + 1)}>Siguiente situación <ArrowRight size={18}/></button> : <button className="chapter-inline-next" onClick={() => goTo(4)}>Pasar a la acción <ArrowRight size={18}/></button>)}</div></div>
    <p className="simulation-label">Simulación educativa · Las consecuencias son explicaciones cualitativas basadas en las fuentes, no resultados medidos.</p>
  </section>;
}
