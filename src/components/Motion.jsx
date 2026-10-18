import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Devuelve [ref, visible]. Sin IntersectionObserver o con movimiento reducido,
 * el contenido se considera visible desde el inicio (sin animación).
 */
export function useInView({ threshold = 0.35, once = true } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(true);
  const [armed, setArmed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || prefersReducedMotion() || !("IntersectionObserver" in window))
      return undefined;
    setVisible(false);
    setArmed(true);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) setVisible(false);
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, once]);

  return [ref, visible, armed];
}

/** Cuenta de 0 a `value` cuando entra en pantalla. Sin JS muestra el valor final. */
export function CountUp({ value, duration = 1400 }) {
  const [ref, visible, armed] = useInView({ threshold: 0.6 });
  const [shown, setShown] = useState(value);

  useEffect(() => {
    if (!armed) return undefined;
    if (!visible) {
      setShown(0);
      return undefined;
    }
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setShown(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [armed, visible, value, duration]);

  return (
    <span ref={ref}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">{shown}</span>
    </span>
  );
}

/** Reemplaza el primer número de un texto por un contador animado. */
export function AnimatedText({ text }) {
  const match = text.match(/^(.*?)(\d+)(.*)$/);
  if (!match) return text;
  return (
    <>
      {match[1]}
      <CountUp value={Number(match[2])} />
      {match[3]}
    </>
  );
}
