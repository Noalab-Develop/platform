"use client";

import Image from "next/image";
import { useWeather } from "@/hooks/useWeather";

const WEATHER_IMAGES: Record<string, string> = {
  clear: "/weather/clear.jpg",
  clouds: "/weather/clouds.jpg",
  rain: "/weather/rain.jpg",
  sunrise: "/weather/sunrise.jpg",
  sunset: "/weather/sunset.jpg",
  night: "/weather/night.jpg",
};

export function HeroBanner() {
  const weatherRaw = useWeather();

  // Fallback seguro
  const weather = WEATHER_IMAGES[weatherRaw] ? weatherRaw : "clear";

  return (
    <section className={`hero hero-${weather}`}>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={WEATHER_IMAGES[weather]}
          alt={`Céu ${weather}`}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Sky gradient / animation */}
      <div className="hero-sky" />

      {/* Clouds (apenas quando aplicável) */}
      {(weather === "clouds" || weather === "rain") && (
        <>
          <div className="hero-clouds-layer clouds-slow" />
          <div className="hero-clouds-layer clouds-fast" />
        </>
      )}

      {/* Weather effects (chuva, etc) */}
      <div className="hero-effects" />

      {/* Overlay para contraste */}
      <div className="hero-overlay" />

      {/* Conteúdo */}
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