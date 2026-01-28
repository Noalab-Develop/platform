"use client";

import { useEffect, useState } from "react";

const WEATHER_SEQUENCE = [
  "clear",
  "clouds",
  "rain",
  "sunrise",
  "sunset",
  "night",
] as const;

type WeatherType = typeof WEATHER_SEQUENCE[number];

export function useWeather(): WeatherType {
  const [weather, setWeather] = useState<WeatherType>("clear");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % WEATHER_SEQUENCE.length;
      setWeather(WEATHER_SEQUENCE[index]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return weather;
}