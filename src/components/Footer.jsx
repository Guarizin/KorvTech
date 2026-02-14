export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 mt-10">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <p className="font-extrabold">
            KorvTech <span className="text-violet-500">•</span> Digital & Systems
          </p>
          <p className="text-sm text-zinc-400 mt-1">
            Sites, sistemas e automações com visual premium e performance.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            className="rounded-xl border border-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-200 hover:bg-zinc-900 transition"
            href="/servicos"
          >
            Serviços
          </a>

          <a
            className="rounded-xl border border-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-200 hover:bg-zinc-900 transition"
            href="/contato"
          >
            Contato
          </a>

          <a
            className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-bold text-white hover:bg-violet-500 transition"
            href="https://wa.me/5511994754350"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-4 py-5 text-xs text-zinc-500 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} KorvTech. Todos os direitos reservados.</p>
          <p>
            Feito com <span className="text-violet-500">❤</span> e código limpo.
          </p>
        </div>
      </div>
    </footer>
  );
}
