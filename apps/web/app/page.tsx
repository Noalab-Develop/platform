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
      <header className="sticky top-0 z-50 bg-[#0A2540]/90 backdrop-blur-md border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">Noalab</span>
          <nav className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#servicos" className="hover:text-white transition">
              Serviços
            </a>
            <a href="#beneficios" className="hover:text-white transition">
              Benefícios
            </a>
            <a href="#contato" className="hover:text-white transition">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero / Banner */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[280px] sm:h-[360px] lg:h-[500px] w-full">
          <Image
            src="/hero-banner.jpg"
            alt="Tecnologia, IA e liderança técnica"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              CTO as a Service com foco em IA e Engenharia
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-200">
              Liderança técnica para arquitetura, integrações e segurança de sistemas.
            </p>
          </div>
        </div>
      </section>

      {/* Blue Highlight Strip */}
      <section className="bg-[#0A2540] py-8">
        <p className="mx-auto max-w-5xl px-6 text-center text-lg font-medium text-white">
          Decisões técnicas sólidas hoje evitam custos exponenciais amanhã.
        </p>
      </section>

      {/* Serviços */}
      <section id="servicos" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-2xl bg-[#F9FAFB] px-8 py-14 shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-[#111827]">
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
      <section id="beneficios" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Por que escolher a Noalab
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
          <h2 className="text-2xl font-semibold text-white">
            Vamos estruturar sua tecnologia?
          </h2>
          <p className="mt-3 text-gray-400">
            Comece com uma avaliação técnica e um roadmap claro.
          </p>
          <a
            href="mailto:noalabconsulting@protomail.com"
            className="mt-6 inline-block rounded-full bg-[#1F4FD8] px-6 py-3 text-sm font-semibold text-white hover:bg-[#38BDF8] transition"
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