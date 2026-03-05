"use client";

import { useWeather } from "@/hooks/useWeather";

export function HeroBanner() {
  const weather = useWeather();

  return (
    <section className={`hero hero-${weather} relative`}>
      {/* Sky gradient + sol/lua/estrelas via CSS */}
      <div className="hero-sky z-10" />

      {/* Clouds */}
      {(weather === "clouds" || weather === "rain") && (
        <>
          <div className="hero-clouds-layer clouds-slow z-20" />
          <div className="hero-clouds-layer clouds-fast z-20" />
        </>
      )}

      {/* Weather effects */}
      <div className="hero-effects z-30" />

      {/* Overlay */}
      <div className="hero-overlay z-40" />

      {/* Content */}
      <div className="hero-content z-50">
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
