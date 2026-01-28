"use client";

import { useWeather } from "@/hooks/useWeather";

export function HeroBanner() {
  const weather = useWeather();

  console.log("WEATHER STATE:", weather);

  return (
    <section className={`hero hero-${weather}`}>
      <div className="hero-overlay" />

      <div className="hero-content">
        <h1 className="hero-title">
          Liderança técnica para decisões críticas em tecnologia
        </h1>

        <p className="hero-subtitle">
          Clima detectado: <strong>{weather}</strong>
        </p>
      </div>
    </section>
  );
}