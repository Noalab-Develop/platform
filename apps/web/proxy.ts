import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language") ?? "";

  // Extrai o idioma principal (ex: "pt-BR,pt;q=0.9,en;q=0.8" → "pt")
  const primaryLang = acceptLanguage
    .split(",")[0]
    ?.split(";")[0]
    ?.split("-")[0]
    ?.toLowerCase()
    .trim() ?? "";

  const locale = primaryLang === "pt" ? "pt" : "en";

  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: ["/"],
};
