import { ArrowDown, ArrowRight } from 'lucide-react';
import { PhotoCredit } from '../components/StoryUI.jsx';

export default function Hero() {
  return <section id="inicio" className="hero" aria-labelledby="hero-title">
    <span id="descubre" className="absolute left-0 top-0 h-px w-px" aria-hidden="true" />
    <img className="hero-image" src={`${import.meta.env.BASE_URL}images/los-cobanos.jpg`} alt="Costa rocosa del Área Natural Protegida Complejo Los Cóbanos" fetchPriority="high" />
    <div className="hero-overlay" aria-hidden="true" />
    <div className="container hero-content"><span className="eyebrow hero-eyebrow">SONSONATE, EL SALVADOR · EDUCACIÓN AMBIENTAL</span><h1 id="hero-title">Los Cóbanos.<br /><em>Una costa que necesita</em><br />nuestra atención.</h1><p>Explora la contaminación por residuos sólidos, sus riesgos para la vida marina y las acciones que pueden impedir que nuevos desechos lleguen al mar.</p><div className="hero-actions"><a className="button button-coral" href="#diagnostico">Conocer el diagnóstico <ArrowRight size={18} /></a><a className="button button-glass" href="#soluciones">Explorar soluciones <ArrowRight size={18} /></a></div><a className="scroll-cue" href="#los-cobanos">Desliza para descubrir <ArrowDown size={17} /></a></div>
    <div className="hero-credit container"><PhotoCredit /></div>
  </section>;
}
