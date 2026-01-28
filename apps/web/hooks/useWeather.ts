"use client";

import { useEffect, useState } from "react";

export type Weather =
  | "clear"
  | "clouds"
  | "rain"
  | "night"
  | "sunrise"
  | "sunset";

export function useWeather(): Weather {
  const [weather, setWeather] = useState<Weather>("clear");

  useEffect(() => {
    async function load() {
      try {
        const hour = new Date().getHours();

        if (hour >= 5 && hour <= 7) {
          setWeather("sunrise");
          return;
        }

        if (hour >= 17 && hour <= 19) {
          setWeather("sunset");
          return;
        }

        if (hour >= 20 || hour <= 4) {
          setWeather("night");
          return;
        }

        const locRes = await fetch("https://ipapi.co/json/");
        const loc = await locRes.json();

        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${loc.latitude}&longitude=${loc.longitude}&current_weather=true`
        );
        const data = await res.json();

        const code = data?.current_weather?.weathercode;

        if (code <= 1) setWeather("clear");
        else if (code <= 3) setWeather("clouds");
        else setWeather("rain");
      } catch {
        setWeather("clear");
      }
    }

    load();
  }, []);

  return weather;
}