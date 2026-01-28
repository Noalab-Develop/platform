"use client";

import { useWeather } from "@/hooks/useWeather";

export function HeroBanner() {
  const weather = useWeather();

  return (
    <section className={`hero hero-${weather}`}>
      <div className="hero-sky" />
      <div className="hero-clouds layer-1" />
      <div className="hero-clouds layer-2" />
      <div className="hero-effects" />

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">
          Liderança técnica para decisões críticas em tecnologia
        </h1>
        <p className="hero-subtitle">
          Apoio estratégico para acelerar negócios, reduzir riscos e escalar com segurança.
        </p>
      </div>
    </section>
  );
}