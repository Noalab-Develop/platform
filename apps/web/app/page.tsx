// apps/web/app/page.tsx
import Image from "next/image";

export const metadata = {
  title: "noAlab | Consultoria em Engenharia de Software",
  description:
    "Consultoria em engenharia de software focada em sistemas escaláveis, integrações e segurança da informação.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#3E4A52] text-white">
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
        <nav className="hidden gap-8 text-sm text-[#D9DEE2] md:flex">
          <a href="#servicos" className="hover:text-white">
            Serviços
          </a>
          <a href="#abordagem" className="hover:text-white">
            Abordagem
          </a>
          <a href="#contato" className="hover:text-white">
            Contato
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          Consultoria em engenharia de software para sistemas escaláveis e
          seguros.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[#D9DEE2]">
          Arquitetura, desenvolvimento, integrações e segurança pensados para
          startups e empresas em crescimento.
        </p>
        <div className="mt-10">
          <a
            href="#contato"
            className="inline-block rounded-md bg-[#4F6D7A] px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Solicitar diagnóstico técnico
          </a>
        </div>
      </section>

      {/* Serviços */}
      <section
        id="servicos"
        className="bg-white px-6 py-24 text-[#1F2A30]"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-semibold">Serviços</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <ServiceCard
              title="Engenharia de Software"
              description="Desenho de sistemas, APIs, backend e frontend com foco em performance, manutenibilidade e escala."
            />
            <ServiceCard
              title="Integrações"
              description="Integração entre sistemas via APIs, webhooks, filas e pipelines de dados."
            />
            <ServiceCard
              title="Segurança da Informação"
              description="Autenticação, autorização, arquitetura segura e boas práticas desde o início."
            />
          </div>
        </div>
      </section>

      {/* Abordagem */}
      <section
        id="abordagem"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <h2 className="text-3xl font-semibold">Abordagem</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3 text-[#D9DEE2]">
          <ApproachItem
            title="Baixo custo"
            description="Escolhas tecnológicas orientadas à eficiência e otimização de custos."
          />
          <ApproachItem
            title="Escalável"
            description="Arquiteturas preparadas para crescer junto com o negócio."
          />
          <ApproachItem
            title="Seguro por padrão"
            description="Segurança integrada desde as primeiras decisões técnicas."
          />
        </div>
      </section>

      {/* CTA */}
      <section
        id="contato"
        className="bg-[#1F2A30] px-6 py-24"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold">
            Vamos construir algo sólido.
          </h2>
          <p className="mt-4 text-[#D9DEE2]">
            Comece com um diagnóstico técnico e um roadmap claro.
          </p>
          <div className="mt-8">
            <a
              href="mailto:contato@noalab.com"
              className="inline-block rounded-md bg-[#4F6D7A] px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3E4A52] px-6 py-8 text-center text-sm text-[#D9DEE2]">
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
    <div className="rounded-lg border border-[#D9DEE2] p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-4 text-sm text-[#3E4A52]">{description}</p>
    </div>
  );
}

function ApproachItem({
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