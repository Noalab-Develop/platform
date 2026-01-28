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
  const weather = WEATHER_IMAGES[weatherRaw] ? weatherRaw : "clear";

  return (
    <section className={`hero hero-${weather} relative`}>
      {/* Background image */}
      <Image
        src={WEATHER_IMAGES[weather]}
        alt={`Céu ${weather}`}
        fill
        priority
        className="object-cover z-0"
      />

      {/* Sky gradient (leve, só para dar vida) */}
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