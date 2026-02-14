export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-14 pb-10">
      <div className="rounded-3xl border border-zinc-900 bg-gradient-to-b from-zinc-950 to-zinc-900/30 p-8 md:p-14 overflow-hidden relative">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <p className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
          KorvTech • Tecnologia que vende e organiza
        </p>

       <h1 className="mt-3 text-4xl md:text-6xl font-black leading-tight">
        Sites e sistemas <span className="text-violet-500">modernos</span> <br className="hidden md:block" />
        com visual premium e performance
        </h1>


        <p className="mt-5 max-w-2xl text-zinc-300">
          Presença digital forte, automações e projetos com estrutura profissional.
          Você passa a ideia, a KorvTech entrega pronto pra crescer.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            className="rounded-xl bg-violet-600 text-white px-5 py-3 font-bold hover:bg-violet-500 transition"
            href="https://wa.me/5511994754350"
            target="_blank"
            rel="noreferrer"
          >
            Falar no WhatsApp
          </a>

          <a
            className="rounded-xl border border-zinc-800 bg-zinc-950 px-5 py-3 font-bold text-zinc-100 hover:bg-zinc-900 transition"
            href="/servicos"
          >
            Ver serviços
          </a>
        </div>
      </div>
    </section>
  );
}
