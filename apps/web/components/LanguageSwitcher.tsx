"use client";

import Link from "next/link";
import type { Locale } from "@/locales";

interface Props {
  locale: Locale;
}

export function LanguageSwitcher({ locale }: Props) {
  return (
    <div className="flex items-center gap-0.5 rounded-full border border-white/15 bg-white/5 p-0.5 text-xs font-semibold">
      <Link
        href="/pt"
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 transition ${
          locale === "pt"
            ? "bg-white/15 text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        <span className="text-sm leading-none">🇧🇷</span>
        <span>PT</span>
      </Link>
      <Link
        href="/en"
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 transition ${
          locale === "en"
            ? "bg-white/15 text-white"
            : "text-gray-400 hover:text-white"
        }`}
      >
        <span className="text-sm leading-none">🇺🇸</span>
        <span>EN</span>
      </Link>
    </div>
  );
}
