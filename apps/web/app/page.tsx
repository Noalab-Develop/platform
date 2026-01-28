import Image from "next/image";
import { ServicesCarousel } from "@/components/ServicesCarousel";

export const metadata = {
  title: "Noalab | CTO as a Service – Engenharia, Segurança, Integrações",
  description:
    "CTO as a Service para acelerar sua tecnologia com engenharia de software, arquitetura, integrações e segurança da informação.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A2540] text-white">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#0A2540]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight">Noalab</span>
          <nav className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#servicos" className="hover:text-white transition">Serviços</a>
            <a href="#beneficios" className="hover:text-white transition">Benefícios</a>
            <a href="#contato" className="hover:text-white transition">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero / Banner */}
      <section className="relative mx-auto mt-10 max-w-7xl px-6">
        <div className="relative h-[420px] overflow-hidden rounded-3xl">
          <Image
            src="/hero-banner.jpg"
            alt="Tecnologia, IA e liderança técnica"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              CTO as a Service com foco em IA e Engenharia
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-200">
              Liderança técnica estratégica para arquitetura, integrações,
              segurança e produtos escaláveis.
            </p>
          </div>
        </div>
      </section>

      {/* Blue Highlight Strip */}
      <section className="mx-auto -mt-16 max-w-5xl px-6">
        <div className="rounded-2xl bg-[#1F4FD8] px-8 py-6 text-center shadow-xl">
          <p className="text-lg font-medium">
            Decisões técnicas sólidas hoje evitam custos exponenciais amanhã.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section
        id="servicos"
        className="mx-auto mt-24 max-w-7xl px-6 py-24"
      >
        <div className="rounded-3xl bg-[#F9FAFB] px-8 py-16 text-[#111827] shadow-lg">
          <h2 className="text-3xl font-semibold text-center">
            O que fazemos
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-gray-600">
            Atuação estratégica como CTO para orientar decisões críticas em
            engenharia, arquitetura, integrações e segurança da informação.
          </p>

          <div className="mt-14">
            <ServicesCarousel />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section
        id="beneficios"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <div className="grid gap-16 rounded-3xl bg-[#0F2E5D] px-8 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">
              Por que escolher a Noalab
            </h2>
            <ul className="mt-8 space-y-4 text-gray-300">
              <li>• Liderança técnica sem custo de CTO full-time</li>
              <li>• Redução de dívida técnica e retrabalho</li>
              <li>• Arquitetura preparada para escala</li>
              <li>• Segurança aplicada desde o design</li>
            </ul>
          </div>

          <div className="relative hidden overflow-hidden rounded-2xl md:block">
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
      <section
        id="contato"
        className="mx-auto max-w-5xl px-6 pb-32"
      >
        <div className="rounded-3xl bg-[#111827] px-10 py-16 text-center shadow-xl">
          <h2 className="text-3xl font-semibold">
            Vamos estruturar sua tecnologia?
          </h2>
          <p className="mt-4 text-gray-400">
            Comece com uma avaliação técnica e um roadmap claro.
          </p>
          <div className="mt-8">
            <a
              href="mailto:noalabconsulting@protomail.com"
              className="inline-block rounded-full bg-[#1F4FD8] px-8 py-4 text-sm font-semibold text-white hover:bg-[#38BDF8] transition"
            >
              Solicitar avaliação
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A2540] px-6 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Noalab. Todos os direitos reservados.
      </footer>
    </main>
  );
}