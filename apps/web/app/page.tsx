import Image from "next/image";
import { ServicesCarousel } from "@/components/ServiceCarousel";

export const metadata = {
  title: "Noalab | CTO as a Service – Engenharia, Segurança, Integrações",
  description:
    "CTO as a Service para acelerar sua tecnologia com engenharia de software, arquitetura, integrações e segurança da informação.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A2540] text-white">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0A2540]/80 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center font-bold text-white">
              N
            </div>

            <div className="leading-tight">
              <span className="block font-[var(--font-sora)] text-lg font-semibold text-white">
                Noalab
              </span>
              <span className="block text-xs tracking-wide text-blue-400">
                Tech Consulting
              </span>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden items-center gap-10 text-sm font-medium tracking-wide text-gray-300 md:flex">
            {["serviços", "benefícios", "contato"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="relative transition hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all hover:after:w-full"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero / Banner */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[280px] w-full sm:h-[360px] lg:h-[500px]">
          <Image
            src="/hero-banner.jpg"
            alt="Tecnologia, IA e liderança técnica"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
            <h1 className="font-[var(--font-sora)] text-3xl font-semibold sm:text-4xl lg:text-5xl">
              Liderança técnica para decisões críticas em tecnologia
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-200">
              Apoio estratégico para você acelerar tecnologia, reduzir riscos e aumentar resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Blue Highlight Strip */}
      <section className="bg-[#0A2540] py-8">
        <p className="mx-auto max-w-5xl px-6 text-center text-lg font-medium text-white">
          `Obtenha liderança técnica experiente sob demanda, sem custo de um executivo em tempo integral.
          Estratégias claras em engenharia, arquitetura de software, integrações e segurança da Informação.`
        </p>
      </section>

      {/* Serviços */}
      <section id="serviços" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-2xl bg-[#F9FAFB] px-8 py-14 shadow-lg">
          <h2 className="font-[var(--font-sora)] text-2xl font-semibold text-center text-[#111827]">
            O que fazemos
          </h2>
          <p className="mt-3 text-center text-gray-600">
            Atuação estratégica como CTO para decisões críticas em tecnologia.
          </p>

          <div className="mt-10">
            <ServicesCarousel />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="benefícios" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-[var(--font-sora)] text-2xl font-semibold text-white">
              Por que contratar a Noalab
            </h2>
            <ul className="mt-6 space-y-3 text-gray-300">
              <li>• Liderança técnica sem custo de CTO full-time</li>
              <li>• Redução de dívida técnica e retrabalho</li>
              <li>• Arquitetura preparada para escala</li>
              <li>• Segurança desde o início</li>
            </ul>
          </div>

          <div className="relative h-[240px] overflow-hidden rounded-xl md:h-[320px]">
            <Image
              src="/benefits.jpg"
              alt="Consultoria técnica e decisões estratégicas"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-2xl bg-[#111827] px-8 py-14 text-center shadow-md">
          <h2 className="font-[var(--font-sora)] text-2xl font-semibold text-white">
            Vamos estruturar sua tecnologia?
          </h2>
          <p className="mt-3 text-gray-400">
            Comece com uma avaliação técnica e um roadmap claro.
          </p>
          <a
            href="mailto:noalabconsulting@protomail.com"
            className="mt-6 inline-block rounded-full bg-[#1F4FD8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#38BDF8]"
          >
            Solicitar avaliação
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A2540] px-6 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Noalab. Todos os direitos reservados.
      </footer>
    </main>
  );
}