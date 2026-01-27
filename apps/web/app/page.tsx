// apps/web/app/page.tsx
import Image from "next/image";

export const metadata = {
  title: "noAlab | CTO as a Service",
  description:
    "CTO as a Service focado em engenharia de software, arquitetura, integrações e segurança da informação.",
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
          <a href="#como-funciona" className="hover:text-white">
            Como funciona
          </a>
          <a href="#contato" className="hover:text-white">
            Contato
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          CTO as a Service para estruturar, escalar e proteger seu produto.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-300">
          Apoio técnico estratégico em engenharia de software, arquitetura,
          integrações e segurança, pensado para startups e empresas em
          crescimento.
        </p>
        <div className="mt-10">
          <a
            href="#contato"
            className="inline-block rounded-md bg-[#1F4FD8] px-6 py-3 text-sm font-semibold text-white hover:bg-[#38BDF8]"
          >
            Solicitar diagnóstico técnico
          </a>
        </div>
      </section>

      {/* Serviços */}
      <section
        id="servicos"
        className="bg-[#F9FAFB] px-6 py-24 text-[#111827]"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold">O que eu faço como CTO</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <ServiceCard
              title="Engenharia de Software"
              description="Definição de padrões, revisão de código, decisões técnicas e apoio no desenvolvimento de sistemas confiáveis e escaláveis."
            />
            <ServiceCard
              title="Arquitetura de Software"
              description="Desenho de arquiteturas modernas, escaláveis e com baixo custo operacional desde o início."
            />
            <ServiceCard
              title="Integrações entre Sistemas"
              description="APIs, webhooks, filas e pipelines de dados garantindo comunicação segura e resiliente entre plataformas."
            />
            <ServiceCard
              title="Segurança da Informação"
              description="Autenticação, autorização, proteção de dados e boas práticas de segurança aplicadas à realidade do negócio."
            />
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section
        id="como-funciona"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <h2 className="text-3xl font-semibold">Como funciona</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3 text-gray-300">
          <Step
            title="Diagnóstico técnico"
            description="Análise da arquitetura, código, infraestrutura e processos atuais."
          />
          <Step
            title="Roadmap claro"
            description="Plano de evolução técnica alinhado aos objetivos do negócio."
          />
          <Step
            title="Acompanhamento contínuo"
            description="Atuação recorrente como CTO, apoiando decisões e execução técnica."
          />
        </div>
      </section>

      {/* CTA */}
      <section
        id="contato"
        className="bg-[#111827] px-6 py-24"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold">
            Estruture sua tecnologia do jeito certo.
          </h2>
          <p className="mt-4 text-gray-400">
            Comece com um diagnóstico técnico e evite decisões caras no futuro.
          </p>
          <div className="mt-8">
            <a
              href="mailto:contato@noalab.com"
              className="inline-block rounded-md bg-[#1F4FD8] px-6 py-3 text-sm font-semibold text-white hover:bg-[#38BDF8]"
            >
              Entrar em contato
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

function Step({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm">{description}</p>
    </div>
  );
}