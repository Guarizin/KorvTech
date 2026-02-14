export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
        Sobre
      </p>

      <h1 className="mt-2 text-4xl md:text-5xl font-black">
        A <span className="text-violet-500">KorvTech</span> é simples:
        <br className="hidden md:block" />
        tecnologia que resolve e vende
      </h1>

      <p className="mt-4 max-w-2xl text-zinc-300">
        A gente cria sites, sistemas e automações com estrutura profissional,
        visual premium e foco em resultado. Menos enrolação, mais entrega.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {[
          {
            t: "Missão",
            d: "Transformar ideias em soluções digitais que geram valor de verdade.",
          },
          {
            t: "Visão",
            d: "Ser referência em projetos modernos, rápidos e bem estruturados.",
          },
          {
            t: "Valores",
            d: "Clareza, qualidade, responsabilidade e evolução contínua.",
          },
        ].map((i) => (
          <div
            key={i.t}
            className="rounded-3xl border border-zinc-900 bg-zinc-950 p-6 hover:bg-zinc-900/40 transition"
          >
            <p className="text-violet-400 text-sm font-bold">{i.t}</p>
            <p className="mt-2 text-zinc-300">{i.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-zinc-900 bg-gradient-to-b from-violet-600/15 to-zinc-950 p-8">
        <h2 className="text-2xl font-extrabold">Como a gente trabalha</h2>

        <div className="mt-6 grid md:grid-cols-4 gap-3">
          {[
            { n: "1", t: "Entender", d: "objetivo e público" },
            { n: "2", t: "Desenhar", d: "estrutura e visual" },
            { n: "3", t: "Construir", d: "rápido e organizado" },
            { n: "4", t: "Evoluir", d: "melhorias contínuas" },
          ].map((s) => (
            <div
              key={s.n}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5"
            >
              <p className="text-violet-400 text-sm font-black">
                {s.n}. {s.t}
              </p>
              <p className="mt-2 text-zinc-300">{s.d}</p>
            </div>
          ))}
        </div>

        <a
          className="mt-8 inline-flex items-center justify-center rounded-2xl bg-violet-600 px-6 py-3 font-bold text-white hover:bg-violet-500 transition"
          href="https://wa.me/5511994754350"
          target="_blank"
          rel="noreferrer"
        >
          Falar com a KorvTech no WhatsApp
        </a>
      </div>
    </div>
  );
}
