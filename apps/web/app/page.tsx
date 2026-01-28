// apps/web/app/page.tsx
import Image from "next/image";

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
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo Noalab" width={40} height={40} priority />
          <span className="text-lg font-semibold">Noalab</span>
        </div>
        <nav className="hidden gap-8 text-sm text-gray-300 md:flex">
          <a href="#servicos" className="hover:text-white">Serviços</a>
          <a href="#beneficios" className="hover:text-white">Benefícios</a>
          <a href="#contato" className="hover:text-white">Contato</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-28 md:grid-cols-2">
        <div className="z-10">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            CTO as a Service para estruturar, escalar e proteger sua tecnologia.
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            Liderança técnica sob demanda para decisões estratégicas em engenharia
            de software, arquitetura, integrações e segurança da informação.
          </p>
          <div className="mt-10">
            <a
              href="#contato"
              className="inline-block rounded-md bg-[#1F4FD8] px-6 py-3 text-sm font-semibold text-white hover:bg-[#38BDF8]"
            >
              Solicitar avaliação técnica
            </a>
          </div>
        </div>

        {/* Hero Image + Overlay */}
        <div className="relative h-[320px] w-full overflow-hidden rounded-lg md:h-[420px]">
          <Image
            src="/hero-tech.jpg"
            alt="Tecnologia e engenharia de software"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-[#F9FAFB] px-6 py-24 text-[#111827]">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold">O que fazemos</h2>
          <p className="mt-4 max-w-3xl text-gray-600">
            Atuação estratégica como CTO para garantir decisões técnicas sólidas,
            redução de riscos e crescimento sustentável.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <ServiceCard
              title="Engenharia de Software"
              description="Padrões, revisão de código e direcionamento técnico."
              image="/services/engineering.jpg"
            />
            <ServiceCard
              title="Arquitetura de Software"
              description="Sistemas escaláveis, resilientes e de baixo custo."
              image="/services/architecture.jpg"
            />
            <ServiceCard
              title="Integrações"
              description="APIs, webhooks, filas e pipelines de dados."
              image="/services/integrations.jpg"
            />
            <ServiceCard
              title="Segurança da Informação"
              description="Autenticação, autorização e proteção de dados."
              image="/services/security.jpg"
            />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section
        id="beneficios"
        className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 md:grid-cols-2"
      >
        <div className="z-10">
          <h2 className="text-3xl font-semibold">Por que escolher a Noalab</h2>
          <ul className="mt-8 space-y-4 text-gray-300">
            <li>• Liderança técnica sem custo de CTO full-time</li>
            <li>• Redução de dívida técnica e retrabalho</li>
            <li>• Decisões orientadas a negócio e escala</li>
            <li>• Segurança e arquitetura desde o início</li>
          </ul>
        </div>

        {/* Benefits Image + Overlay */}
        <div className="relative h-[320px] w-full overflow-hidden rounded-lg">
          <Image
            src="/benefits.jpg"
            alt="Consultoria técnica e tomada de decisão"
            fill
            className="object-cover"
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

function ServiceCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="relative mb-4 h-14 w-14 overflow-hidden rounded-md">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-3 text-sm text-gray-600">{description}</p>
    </div>
  );
}