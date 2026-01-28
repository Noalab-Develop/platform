import Image from "next/image";
import { ServicesCarousel } from "@/components/ServicesCarousel";

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
      <header className="sticky top-0 z-50 bg-[#0A2540]/90 backdrop-blur border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold">Noalab</span>
          <nav className="hidden gap-8 text-sm text-gray-300 md:flex">
            <a href="#servicos" className="hover:text-white">Serviços</a>
            <a href="#beneficios" className="hover:text-white">Benefícios</a>
            <a href="#contato" className="hover:text-white">Contato</a>
          </nav>
        </div>
      </header>

      {/* Banner Top */}
      <section className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full">
        <Image
          src="/hero-banner.jpg"
          alt="Banner principal - tecnologia e liderança técnica"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
            Soluções de Tecnologia sob Medida
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl">
            Acelere sua Engenharia, Integrações e Segurança com liderança técnica sob demanda.
          </p>
        </div>
      </section>

      {/* Blue Strip */}
      <section className="bg-[#1F4FD8] py-10">
        <p className="mx-auto max-w-5xl px-6 text-center text-lg font-medium">
          Liderança técnica estratégica para decisões críticas em produto,
          arquitetura e segurança.
        </p>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-[#F9FAFB] px-6 py-24 text-[#111827]">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold text-center">O que fazemos</h2>
          <p className="mt-4 text-center max-w-3xl mx-auto text-gray-600">
            Atuação estratégica como CTO para garantir decisões técnicas sólidas,
            redução de riscos e crescimento sustentável.
          </p>

          <div className="mt-12">
            <ServicesCarousel />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section
        id="beneficios"
        className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 md:grid-cols-2"
      >
        <div>
          <h2 className="text-3xl font-semibold">Por que escolher a Noalab</h2>
          <ul className="mt-8 space-y-4 text-gray-300">
            <li>• Liderança técnica sem custo de CTO full-time</li>
            <li>• Redução de dívida técnica e retrabalho</li>
            <li>• Decisões orientadas a negócio e escala</li>
            <li>• Segurança e arquitetura desde o início</li>
          </ul>
        </div>

        <div className="relative hidden h-[320px] w-full overflow-hidden rounded-lg md:block">
          <Image
            src="/benefits.jpg"
            alt="Consultoria técnica e tomada de decisão"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </section>

      {/* CTA */}
      <section id="contato" className="bg-[#111827] px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold">
            Pronto para tomar decisões técnicas melhores?
          </h2>
          <p className="mt-4 text-gray-400">
            Comece com uma avaliação técnica e um roadmap claro.
          </p>
          <div className="mt-8">
            <a
              href="mailto:noalabconsulting@protomail.com"
              className="inline-block rounded-md bg-[#1F4FD8] px-6 py-3 text-sm font-semibold text-white hover:bg-[#38BDF8]"
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