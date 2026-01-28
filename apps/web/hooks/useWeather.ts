"use client";

import { useEffect, useState } from "react";

type WeatherType =
  | "clear"
  | "clouds"
  | "rain"
  | "sunrise"
  | "sunset"
  | "night";

export function useWeather(): WeatherType {
  const [weather, setWeather] = useState<WeatherType>("clear");

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
          );

          const data = await res.json();

          const main = data.weather?.[0]?.main?.toLowerCase();
          const now = Date.now() / 1000;

          const sunrise = data.sys.sunrise;
          const sunset = data.sys.sunset;

          // 🌙 Noite
          if (now < sunrise || now > sunset) {
            setWeather("night");
            return;
          }

          // 🌅 Sunrise / 🌇 Sunset (30 min window)
          if (Math.abs(now - sunrise) < 1800) {
            setWeather("sunrise");
            return;
          }

          if (Math.abs(now - sunset) < 1800) {
            setWeather("sunset");
            return;
          }

          // 🌧️ Chuva
          if (main?.includes("rain") || main?.includes("storm")) {
            setWeather("rain");
            return;
          }

          // ☁️ Nublado
          if (main?.includes("cloud")) {
            setWeather("clouds");
            return;
          }

          // ☀️ Limpo
          setWeather("clear");
        } catch (err) {
          console.error("Weather error:", err);
          setWeather("clear");
        }
      },
      () => {
        // Se usuário negar localização
        setWeather("clear");
      }
    );
  }, []);

  return weather;
}