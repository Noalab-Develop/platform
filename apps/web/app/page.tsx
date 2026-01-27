// apps/web/app/page.tsx
import Image from "next/image";

export const metadata = {
  title: "noAlab | CTO as a Service – Engenharia, Segurança, Integrações",
  description:
    "CTO as a Service para acelerar sua tecnologia, com expertise em engenharia de software, segurança, integrações e arquitetura.",
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
          <Image
            src="/logo.png"
            alt="Logo noAlab"
            width={40}
            height={40}
            priority
          />
          <span className="text-lg font-semibold">noAlab</span>
        </div>
        <nav className="hidden gap-8 text-sm text-gray-300 md:flex">
          <a href="#servicos" className="hover:text-white">
            Serviços
          </a>
          <a href="#beneficios" className="hover:text-white">
            Benefícios
          </a>
          <a href="#contato" className="hover:text-white">
            Contato
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          CTO as a Service para você acelerar tecnologia, reduzir riscos e aumentar resultados.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Obtenha liderança técnica experiente sob demanda, sem o custo de um executivo em tempo integral. 
          Estratégias claras em engenharia, arquitetura de software, integrações e segurança da informação.
        </p>
        <div className="mt-10">
          <a
            href="#contato"
            className="inline-block rounded-md bg-[#1F4FD8] px-6 py-3 text-sm font-semibold text-white hover:bg-[#38BDF8]"
          >
            Solicitar avaliação técnica gratuita
          </a>
        </div>
      </section>

      {/* Serviços */}
      <section
        id="servicos"
        className="bg-[#F9FAFB] px-6 py-24 text-[#111827]"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold">O que fazemos</h2>
          <p className="mt-4 text-gray-600">
            Como seu CTO as a Service, entregamos expertise em tecnologia que normalmente só se encontra em cargos executivos seniores:
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <ServiceCard
              title="Engenharia de Software"
              description="Revisão de arquitetura, qualidade de código, padrões e decisões técnicas que impulsionam produtos confiáveis."
            />
            <ServiceCard
              title="Arquitetura de Software"
              description="Desenho de sistemas escaláveis e modularizados, reduzindo riscos e acelerando entregas."
            />
            <ServiceCard
              title="Integrações entre Sistemas"
              description="Conectividade robusta de APIs, pipelines de dados e automações que mantêm seus sistemas em harmonia."
            />
            <ServiceCard
              title="Segurança da Informação"
              description="Proteção de dados, autenticação forte, autorização e políticas de segurança alinhadas a normas de mercado."
            />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section
        id="beneficios"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <h2 className="text-3xl font-semibold text-white">Por que escolher noAlab</h2>
        <ul className="mt-8 space-y-4 text-gray-300">
          <li>• Acesso imediato a liderança técnica sem custo de contratação full-time.</li>
          <li>• Decisões estratégicas que reduzem dívidas técnicas e aceleram o roadmap.</li>
          <li>• Expertise prática em soluções que já escalaram em múltiplos setores.</li>
          <li>• Foco em resultados: mais previsibilidade, menos retrabalho e entregas seguras.</li>
        </ul>
      </section>

      {/* CTA */}
      <section
        id="contato"
        className="bg-[#111827] px-6 py-24"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold">
            Pronto para transformar sua tecnologia?
          </h2>
          <p className="mt-4 text-gray-400">
            Vamos começar com uma avaliação técnica gratuita para entender seus desafios e oportunidades.
          </p>
          <div className="mt-8">
            <a
              href="mailto:contato@noalab.com"
              className="inline-block rounded-md bg-[#1F4FD8] px-6 py-3 text-sm font-semibold text-white hover:bg-[#38BDF8]"
            >
              Solicitar avaliação
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A2540] px-6 py-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} noAlab. Todos os direitos reservados.
      </footer>
    </main>
  );
}

function ServiceCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-4 text-sm text-gray-600">{description}</p>
    </div>
  );
}