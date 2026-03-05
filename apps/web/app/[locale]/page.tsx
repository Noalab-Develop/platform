import Image from "next/image";
import { notFound } from "next/navigation";
import { HeroBanner } from "@/components/HeroBanner";
import { ServicesCarousel } from "@/components/ServiceCarousel";
import { Reveal } from "@/components/Reveal";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { getDictionary, locales, type Locale } from "@/locales";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getDictionary(locale);
  return {
    title: t.meta.title,
    description: t.meta.description,
    icons: { icon: "/favicon.ico" },
  };
}

export default async function LocalePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) notFound();

  const t = getDictionary(locale);
  const l = locale as Locale;

  const navItems = [
    { href: "servicos", label: t.nav.services },
    { href: "beneficios", label: t.nav.benefits },
    { href: "contato", label: t.nav.contact },
  ];

  return (
    <main className="min-h-screen bg-[#0A2540] text-white">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0A2540]/80 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo-128.png"
              alt="Noalab"
              width={40}
              height={40}
              className="rounded-lg"
              priority
            />
            <div className="leading-tight">
              <span className="block font-[var(--font-sora)] text-base font-semibold text-white">
                Noalab
              </span>
              <span className="block text-xs tracking-wide text-blue-400">
                {t.brand.tagline}
              </span>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-300 md:flex">
            {navItems.map(({ href, label }) => (
              <a
                key={href}
                href={`#${href}`}
                className="relative transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
              >
                {label}
              </a>
            ))}
            <a
              href="#contato"
              className="rounded-full border border-blue-500/40 bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-300 transition hover:bg-blue-600 hover:border-blue-600 hover:text-white"
            >
              {t.nav.cta}
            </a>
            <LanguageSwitcher locale={l} />
          </nav>
        </div>
      </header>

      {/* Hero */}
      <HeroBanner title={t.hero.title} subtitle={t.hero.subtitle} />

      {/* Pillars */}
      <section className="border-b border-white/10 bg-[#071220] py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 sm:grid-cols-3">
          {t.pillars.map(({ label, detail }, i) => (
            <Reveal key={label} direction="up" delay={i * 120}>
              <div className="flex flex-col gap-2">
                <span className="block h-px w-8 bg-blue-500" />
                <h3 className="text-sm font-semibold text-white">{label}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="mx-auto max-w-7xl px-6 py-24">
        <Reveal direction="up">
          <div className="rounded-2xl border border-white/8 bg-[#0b1f38] px-8 py-14">
            <h2 className="font-[var(--font-sora)] text-2xl font-semibold text-center text-white">
              {t.services.heading}
            </h2>
            <p className="mt-3 text-center text-sm text-gray-400 max-w-xl mx-auto">
              {t.services.description}
            </p>
            <div className="mt-10">
              <ServicesCarousel services={t.services.items} />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          <Reveal direction="left">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                {t.benefits.tag}
              </span>
              <h2 className="mt-3 font-[var(--font-sora)] text-2xl font-semibold text-white leading-snug">
                {t.benefits.heading}
              </h2>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-md">
                {t.benefits.intro}
              </p>
              <ul className="mt-8 space-y-4">
                {t.benefits.items.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-blue-400 text-[11px] font-bold">
                      ✓
                    </span>
                    <span className="text-sm text-gray-300 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="right" delay={150}>
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl h-full">
              <Image
                src="/benefits.jpg"
                alt={t.imageAlt.benefits}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="mx-auto max-w-5xl px-6 pb-24">
        <Reveal direction="up">
          <div className="rounded-2xl border border-blue-500/10 bg-gradient-to-br from-[#0f2a50] to-[#071220] px-8 py-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
              {t.cta.tag}
            </span>
            <h2 className="mt-4 font-[var(--font-sora)] text-3xl font-semibold text-white leading-snug">
              {t.cta.heading}
            </h2>
            <p className="mt-4 text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
              {t.cta.description}
            </p>
            <a
              href={`mailto:noalabconsulting@protomail.com?subject=${t.cta.emailSubject}&body=${t.cta.emailBody}`}
              className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 hover:shadow-blue-500/30"
            >
              {t.cta.button}
            </a>
            <p className="mt-4 text-xs text-gray-500">{t.cta.trust}</p>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0A2540]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-gray-500 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Noalab. {t.footer.rights}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navItems.map(({ href, label }) => (
              <a key={href} href={`#${href}`} className="transition hover:text-gray-300">
                {label}
              </a>
            ))}
            <a
              href="mailto:noalabconsulting@protomail.com"
              className="transition hover:text-gray-300"
            >
              noalabconsulting@protomail.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
