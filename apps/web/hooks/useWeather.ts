"use client";

import { useEffect, useState } from "react";

type WeatherType = "clear" | "clouds" | "rain" | "night";

export function useWeather(): WeatherType {
  const [weather, setWeather] = useState<WeatherType>("clear");

  useEffect(() => {
    async function loadWeather() {
      try {
        // Localização por IP (sem permissão do usuário)
        const locRes = await fetch("https://ipapi.co/json/");
        const loc = await locRes.json();

        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${loc.latitude}&longitude=${loc.longitude}&current_weather=true`
        );
        const data = await weatherRes.json();

        const code = data.current_weather.weathercode;
        const hour = new Date().getHours();

        // Noite (prioridade)
        if (hour >= 19 || hour <= 6) {
          setWeather("night");
          return;
        }

        // Mapeamento simples e robusto
        if (code <= 1) setWeather("clear");
        else if (code <= 3) setWeather("clouds");
        else setWeather("rain");
      } catch {
        setWeather("clear");
      }
    }

    loadWeather();
  }, []);

  return weather;
}