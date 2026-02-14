import Hero from "../components/Hero.jsx";
<section className="mx-auto max-w-6xl px-4 py-16">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    <div>
      <h2 className="text-3xl md:text-4xl font-black">
        Por que escolher a <span className="text-violet-500">KorvTech</span>?
      </h2>

      <p className="mt-4 text-zinc-300">
        Não é só um site bonito. É estrutura profissional, código organizado
        e foco real em conversão e crescimento.
      </p>

      <ul className="mt-6 space-y-3 text-zinc-300">
        <li>✔ Código limpo e escalável</li>
        <li>✔ Design moderno e responsivo</li>
        <li>✔ Integração com WhatsApp e sistemas</li>
        <li>✔ Performance otimizada</li>
      </ul>
    </div>

    <div className="rounded-3xl border border-zinc-900 bg-gradient-to-br from-violet-600/20 to-zinc-900 p-10">
      <p className="text-sm uppercase tracking-widest text-violet-400">
        Tecnologia estratégica
      </p>

      <h3 className="mt-3 text-2xl font-bold">
        Projetos pensados para gerar resultado
      </h3>

      <p className="mt-4 text-zinc-300">
        Cada detalhe é planejado para transformar visitantes em clientes.
      </p>
    </div>
  </div>
</section>
export default function Home() {
  return (
    <div>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              t: "Sites rápidos e modernos",
              d: "Landing pages e sites institucionais com foco em conversão.",
            },
            {
              t: "Sistemas sob medida",
              d: "Painéis, dashboards e ferramentas internas pra sua operação.",
            },
            {
              t: "Integrações e automação",
              d: "WhatsApp, APIs e rotinas automáticas que economizam tempo.",
            },
          ].map((i) => (
            <div
              key={i.t}
              className="rounded-2xl border border-zinc-900 bg-zinc-950 p-6 hover:bg-zinc-900/40 transition"
            >
              <h3 className="text-lg font-bold">{i.t}</h3>
              <p className="mt-2 text-zinc-300">{i.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
  <p className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
    Processo
  </p>

  <h2 className="mt-2 text-3xl md:text-4xl font-black">
    Como funciona trabalhar com a{" "}
    <span className="text-violet-500">KorvTech</span>
  </h2>

  <div className="mt-10 grid md:grid-cols-4 gap-4">
    {[
      { n: "01", t: "Entender", d: "Seu objetivo e necessidade real." },
      { n: "02", t: "Planejar", d: "Estrutura, visual e estratégia." },
      { n: "03", t: "Construir", d: "Desenvolvimento rápido e organizado." },
      { n: "04", t: "Entregar", d: "Publicação e ajustes finais." },
    ].map((step) => (
      <div
        key={step.n}
        className="rounded-3xl border border-zinc-900 bg-zinc-950 p-6 hover:bg-zinc-900/40 transition"
      >
        <p className="text-violet-400 font-black">{step.n}</p>
        <p className="mt-2 font-bold">{step.t}</p>
        <p className="mt-2 text-sm text-zinc-300">{step.d}</p>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}
