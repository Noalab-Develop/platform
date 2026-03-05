import { pt } from "./pt";
import { en } from "./en";

export type Locale = "pt" | "en";

export const locales: Locale[] = ["pt", "en"];
export const defaultLocale: Locale = "pt";

export type Dictionary = typeof pt;

export function getDictionary(locale: string): Dictionary {
  if (locale === "en") return en;
  return pt;
}
