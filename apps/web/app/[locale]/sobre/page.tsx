import Link from "next/link";
import { notFound } from "next/navigation";
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
    title: t.profile.meta.title,
    description: t.profile.meta.description,
    icons: { icon: "/favicon.ico" },
  };
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) notFound();

  const t = getDictionary(locale);
  const l = locale as Locale;
  const p = t.profile;

  return (
    <main className="min-h-screen bg-[#0A2540] text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0A2540]/80 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href={`/${l}`}
            className="flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-white"
          >
            <span aria-hidden>←</span>
            {p.nav.back}
          </Link>

          <div className="flex items-center gap-4">
            <a
              href="#projetos"
              className="hidden text-sm font-medium text-gray-300 transition hover:text-white sm:block"
            >
              {p.hero.ctaProjects}
            </a>
            <a
              href="#contato"
              className="rounded-full border border-blue-500/40 bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-300 transition hover:bg-blue-600 hover:border-blue-600 hover:text-white"
            >
              {p.hero.ctaContact}
            </a>
            <LanguageSwitcher locale={l} />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
        <Reveal direction="up">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400">
            {p.hero.kicker}
          </span>
          <h1 className="mt-4 font-[var(--font-sora)] text-4xl font-semibold text-white sm:text-5xl">
            {p.hero.name}
          </h1>
          <p className="mt-2 text-lg text-blue-300">{p.hero.role}</p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300">
            {p.hero.pitch}
          </p>
        </Reveal>
      </section>

      {/* Bio */}
      <section className="border-y border-white/10 bg-[#071220] py-16">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal direction="up">
            <h2 className="font-[var(--font-sora)] text-2xl font-semibold text-white">
              {p.bio.heading}
            </h2>
            <div className="mt-6 space-y-4">
              {p.bio.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-sm leading-relaxed text-gray-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Focus areas */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal direction="up">
          <h2 className="text-center font-[var(--font-sora)] text-2xl font-semibold text-white">
            {p.focus.heading}
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {p.focus.items.map(({ title, description }, i) => (
            <Reveal key={title} direction="up" delay={i * 100}>
              <div className="h-full rounded-2xl border border-white/8 bg-[#0b1f38] p-6">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projetos" className="border-t border-white/10 bg-[#071220] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal direction="up">
            <h2 className="text-center font-[var(--font-sora)] text-2xl font-semibold text-white">
              {p.projects.heading}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-gray-400">
              {p.projects.description}
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {p.projects.items.map((project, i) => (
              <Reveal key={project.name} direction="up" delay={i * 120}>
                <a
                  href={project.link}
                  className="flex h-full flex-col rounded-2xl border border-white/8 bg-[#0A2540] p-6 transition hover:border-blue-500/40"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold text-white">
                      {project.name}
                    </h3>
                    <span className="shrink-0 rounded-full bg-blue-600/15 px-2.5 py-1 text-[11px] font-semibold text-blue-300">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal direction="up">
          <h2 className="text-center font-[var(--font-sora)] text-2xl font-semibold text-white">
            {p.skills.heading}
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {p.skills.groups.map(({ label, items }, i) => (
            <Reveal key={label} direction="up" delay={i * 100}>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-400">
                  {label}
                </h3>
                <ul className="mt-3 space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-gray-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="mx-auto max-w-5xl px-6 pb-24">
        <Reveal direction="up">
          <div className="rounded-2xl border border-blue-500/10 bg-gradient-to-br from-[#0f2a50] to-[#071220] px-8 py-16 text-center">
            <h2 className="font-[var(--font-sora)] text-3xl font-semibold text-white leading-snug">
              {p.contact.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-gray-400">
              {p.contact.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {p.contact.links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 hover:shadow-blue-500/30"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0A2540]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-gray-500 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {p.hero.name}. {t.footer.rights}
          </span>
          <Link href={`/${l}`} className="transition hover:text-gray-300">
            {p.nav.back}
          </Link>
        </div>
      </footer>
    </main>
  );
}
