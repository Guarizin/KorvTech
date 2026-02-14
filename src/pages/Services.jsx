const services = [
  {
    title: "Sites institucionais",
    desc: "Site completo, responsivo e moderno pra passar confiança e gerar contato.",
    tags: ["Responsivo", "SEO básico", "WhatsApp"],
  },
  {
    title: "Landing pages",
    desc: "Página única focada em conversão (orçamento, contato, venda).",
    tags: ["Conversão", "Rápido", "CTA"],
  },
  {
    title: "Sistemas sob medida",
    desc: "Painéis e ferramentas internas pra organizar atendimento e processos.",
    tags: ["Dashboard", "Login", "Banco de dados"],
  },
  {
    title: "Automações e integrações",
    desc: "Integração com WhatsApp, APIs, formulários, planilhas e rotinas automáticas.",
    tags: ["API", "Zap", "Automação"],
  },
  {
    title: "SaaS para chaveiro (exemplo real)",
    desc: "Sistema pra gerenciar chamados, clientes, serviços, status e histórico — tudo em um painel.",
    tags: ["Chamados", "Clientes", "Status"],
    highlight: true,
  },
  {
    title: "Manutenção e evolução",
    desc: "Ajustes, melhorias, novas páginas/funcionalidades e suporte contínuo.",
    tags: ["Suporte", "Evolução", "Performance"],
  },
];

export default function Services() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
        Serviços
      </p>

      <h1 className="mt-2 text-4xl md:text-5xl font-black">
        O que a <span className="text-violet-500">KorvTech</span> faz
      </h1>

      <p className="mt-4 max-w-2xl text-zinc-300">
        Soluções simples e diretas: sites, sistemas e automações — com visual premium e foco em resultado.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {services.map((s) => (
          <div
            key={s.title}
            className={[
              "rounded-3xl border p-6 transition",
              s.highlight
                ? "border-violet-600/60 bg-gradient-to-b from-violet-600/15 to-zinc-950"
                : "border-zinc-900 bg-zinc-950 hover:bg-zinc-900/40",
            ].join(" ")}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-extrabold">{s.title}</h3>
              {s.highlight && (
                <span className="text-xs font-bold text-violet-300 border border-violet-600/40 px-3 py-1 rounded-full">
                  Destaque
                </span>
              )}
            </div>

            <p className="mt-3 text-zinc-300">{s.desc}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-semibold text-zinc-200 border border-zinc-800 bg-zinc-950 px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-violet-600 px-5 py-3 font-bold text-white hover:bg-violet-500 transition"
              href="https://wa.me/5511994754350"
              target="_blank"
              rel="noreferrer"
            >
              Quero isso no meu negócio
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
