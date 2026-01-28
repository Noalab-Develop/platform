"use client";

import { useWeather } from "@/hooks/useWeather";

export function HeroBanner() {
  const weather = useWeather();

  return (
    <section className={`hero hero-${weather}`}>
      {/* Sky base */}
      <div className="hero-sky sky-layer" />

      {/* Sun / light */}
      <div className="hero-light" />

      {/* Clouds (parallax) */}
      <div className="hero-clouds-layer clouds-slow" />
      <div className="hero-clouds-layer clouds-fast" />

      {/* Rain / effects */}
      <div className="hero-effects" />

      {/* Overlay for contrast */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Liderança técnica para decisões críticas em tecnologia
        </h1>
        <p className="hero-subtitle">
          Apoio estratégico para acelerar seu negócio, reduzir riscos e aumentar resultados.
        </p>
      </div>
    </section>
  );
}