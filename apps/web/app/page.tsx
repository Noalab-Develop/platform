export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-28">
        <span className="inline-block rounded-full bg-blue-500/10 px-4 py-1 text-sm text-blue-400">
          Noalab • Consultoria em Tecnologia
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          Engenharia de software <br />
          <span className="text-blue-500">confiável e escalável</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-neutral-400">
          A Noalab é uma consultoria em tecnologia focada em engenharia de
          software, desenvolvimento de sistemas, integrações e segurança da
          informação — ajudando empresas a construir soluções sólidas desde o
          início.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#contato"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-500 transition"
          >
            Solicitar diagnóstico técnico
          </a>
          <a
            href="#servicos"
            className="rounded-lg border border-neutral-800 px-6 py-3 font-medium text-neutral-300 hover:border-neutral-700 transition"
          >
            Nossos serviços
          </a>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section
        id="servicos"
        className="border-t border-neutral-900 bg-neutral-900/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-semibold">Serviços</h2>
          <p className="mt-3 max-w-xl text-neutral-400">
            Atuação técnica, pragmática e orientada a resultado.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Engenharia de Software",
                desc: "APIs, backend, arquitetura de sistemas, performance e escalabilidade."
              },
              {
                title: "Integrações de Sistemas",
                desc: "APIs, webhooks, filas, pipelines de dados e serviços terceiros."
              },
              {
                title: "Cloud & DevOps",
                desc: "CI/CD, infraestrutura como código, arquitetura em nuvem e otimização de custos."
              },
              {
                title: "Segurança da Informação",
                desc: "Autenticação, autorização, segurança de APIs e práticas secure-by-design."
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-neutral-800 bg-neutral-950 p-6"
              >
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="mt-3 text-sm text-neutral-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-semibold">Por que a Noalab</h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-xl font-medium">Atuação sênior</h3>
            <p className="mt-3 text-neutral-400">
              Trabalho direto com engenheiros experientes, sem camadas
              desnecessárias ou repasses de responsabilidade.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Segurança desde a base</h3>
            <p className="mt-3 text-neutral-400">
              Segurança integrada à arquitetura, pipelines e código — não como
              correção tardia.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Mentalidade de startup</h3>
            <p className="mt-3 text-neutral-400">
              Decisões técnicas focadas em baixo custo, velocidade e evolução
              contínua do produto.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium">Base para escalar</h3>
            <p className="mt-3 text-neutral-400">
              Sistemas pensados para crescer do MVP à escala produtiva sem
              retrabalho.
            </p>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="border-t border-neutral-900 bg-neutral-900/40"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-semibold">Contato</h2>
          <p className="mt-3 max-w-xl text-neutral-400">
            Precisa de apoio técnico ou quer evoluir sua arquitetura com
            segurança? Vamos conversar.
          </p>

          <div className="mt-8">
            <a
              href="mailto:contato@noalab.tech"
              className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-500 transition"
            >
              contato@noalab.tech
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-900">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} Noalab • Consultoria em Tecnologia
        </div>
      </footer>
    </main>
  );
}