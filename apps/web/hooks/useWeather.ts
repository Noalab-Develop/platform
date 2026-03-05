"use client";

import { useEffect, useState } from "react";

type WeatherType =
  | "clear"
  | "clouds"
  | "rain"
  | "sunrise"
  | "sunset"
  | "night";

function getTimeBasedWeather(): WeatherType {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 7) return "sunrise";
  if (hour >= 19 && hour < 21) return "sunset";
  if (hour < 5 || hour >= 21) return "night";
  return "clear";
}

export function useWeather(): WeatherType {
  const [weather, setWeather] = useState<WeatherType>(getTimeBasedWeather);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    if (!apiKey || !navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`
          );

          if (!res.ok) throw new Error(`API error: ${res.status}`);

          const data = await res.json();

          const main = data.weather?.[0]?.main?.toLowerCase();
          const now = Date.now() / 1000;
          const sunrise: number = data.sys.sunrise;
          const sunset: number = data.sys.sunset;

          // Noite
          if (now < sunrise || now > sunset) {
            setWeather("night");
            return;
          }

          // Sunrise / Sunset (janela de 30 min)
          if (now - sunrise < 1800) {
            setWeather("sunrise");
            return;
          }

          if (sunset - now < 1800) {
            setWeather("sunset");
            return;
          }

          // Chuva
          if (
            main?.includes("rain") ||
            main?.includes("storm") ||
            main?.includes("drizzle")
          ) {
            setWeather("rain");
            return;
          }

          // Nublado
          if (main?.includes("cloud")) {
            setWeather("clouds");
            return;
          }

          // Limpo
          setWeather("clear");
        } catch (err) {
          console.error("Weather error:", err);
          // Mantém o fallback baseado em horário já definido no estado inicial
        }
      },
      () => {
        // Se usuário negar localização, mantém o fallback por horário
      }
    );
  }, []);

  return weather;
}
