import { useState } from 'react';
import { ArrowRight, Check, CircleHelp, RotateCcw, ShieldCheck, Waves } from 'lucide-react';
import { External } from '../components/StoryUI.jsx';
import { sources } from '../data/content.js';

const situations = [
  { stage: 'Antes de salir', icon: Waves, question: 'Preparas una visita a la playa. ¿Qué llevas para beber?', options: [
    { label: 'Una botella reutilizable', good: true, feedback: 'Reducir desechables desde el inicio evita generar un envase que después habría que gestionar.' },
    { label: 'Varias botellas desechables', good: false, feedback: 'Si usas envases desechables, llévalos de regreso o deposítalos donde exista recolección adecuada. Reducirlos sigue siendo preferible.' },
  ], source: 'F7' },
  { stage: 'Durante la visita', icon: ShieldCheck, question: 'Terminas un refrigerio y no encuentras un recipiente. ¿Qué haces?', options: [
    { label: 'Guardas tus residuos para llevarlos contigo', good: true, feedback: 'Evitas que envases y empaques queden en la arena o se desplacen hacia el agua.' },
    { label: 'Los dejas junto a una roca para recogerlos luego', good: false, feedback: 'Dejarlos en la costa aumenta el riesgo de abandono o transporte por viento y agua. Es mejor conservarlos contigo.' },
  ], source: 'F3' },
  { stage: 'En la costa', icon: CircleHelp, question: 'Observas una red en el agua. ¿Cómo actúas?', options: [
    { label: 'Avisas a responsables del área y mantienes distancia', good: true, feedback: 'La extracción subacuática necesita coordinación y equipos capacitados. El MARN documentó trabajos de buzos en 2021.' },
    { label: 'Entras al agua para retirarla por tu cuenta', good: false, feedback: 'Podría ser peligroso. La recuperación de redes en el fondo marino corresponde a personal preparado y autorizado.' },
  ], source: 'F2' },
];

export default function Simulator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [summary, setSummary] = useState(false);
  const situation = situations[step];
  const Icon = situation.icon;
  const answer = answers[step];
  function reset() { setStep(0); setAnswers({}); setSummary(false); }
  return <section id="simulador" className="section simulator-section"><div className="container"><div className="section-heading"><span className="eyebrow">05 / APRENDE DECIDIENDO</span><h2>Pequeñas decisiones.<br /><em>Una costa más cuidada.</em></h2><p>Simulación educativa basada en las recomendaciones y situaciones descritas por las fuentes. No calcula impactos ni utiliza datos personales.</p></div><div className="simulator-shell"><div className="simulator-progress" aria-label="Progreso de situaciones">{situations.map((item, index) => <button key={item.stage} className={step === index && !summary ? 'active' : ''} aria-current={step === index && !summary ? 'step' : undefined} onClick={() => { setStep(index); setSummary(false); }}><span>{answers[index] !== undefined ? <Check size={16}/> : `0${index + 1}`}</span>{item.stage}</button>)}<button className={summary ? 'active' : ''} onClick={() => setSummary(true)} disabled={Object.keys(answers).length < 3}><span>04</span>Resumen</button></div>{summary ? <div className="simulator-summary"><span className="eyebrow">TU RECORRIDO</span><h3>Lo aprendido se puede poner en práctica.</h3><p>Exploraste tres situaciones: reducir desechables desde el inicio, llevarte los residuos y dejar la recuperación subacuática a personal capacitado.</p><ul>{situations.map((item, index) => <li key={item.stage}><Check size={19}/><span><strong>{item.stage}:</strong> {item.options[answers[index]]?.feedback}</span></li>)}</ul><button className="button button-ocean" onClick={reset}>Explorar otras decisiones <RotateCcw size={17}/></button></div> : <div className="simulator-body"><div className="situation-visual"><div className="situation-illustration"><Icon size={90} strokeWidth={1.1}/><span className="situation-wave" aria-hidden="true" /></div><span>ESCENARIO 0{step + 1} / 03</span><strong>{situation.stage}</strong><small>Representación educativa</small></div><div className="situation-content"><span className="eyebrow">¿QUÉ HARÍAS?</span><h3>{situation.question}</h3><div className="situation-options">{situation.options.map((option, index) => <button key={option.label} className={answer === index ? 'selected' : ''} aria-pressed={answer === index} onClick={() => setAnswers({ ...answers, [step]: index })}><span>{String.fromCharCode(65 + index)}</span>{option.label}<ArrowRight size={18}/></button>)}</div>{answer !== undefined && <div className="situation-feedback" role="status"><Check size={20}/><p>{situation.options[answer].feedback} <External href={sources.find(source => source.id === situation.source).url}>Fuente [{situation.source}]</External></p></div>}{answer !== undefined && <button className="next-situation" onClick={() => step < 2 ? setStep(step + 1) : setSummary(true)}>{step < 2 ? 'Siguiente situación' : 'Ver resumen'} <ArrowRight size={18}/></button>}</div></div>}</div></div></section>;
}
