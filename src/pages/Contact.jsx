export default function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">
        Contato
      </p>

      <h1 className="mt-2 text-4xl md:text-5xl font-black">
        Vamos tirar seu projeto do papel com a{" "}
        <span className="text-violet-500">KorvTech</span>
      </h1>

      <p className="mt-4 max-w-2xl text-zinc-300">
        Me chama no WhatsApp e já me diz o que você precisa. Sem formulário chato.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-4">
        <div className="rounded-3xl border border-zinc-900 bg-zinc-950 p-8">
          <p className="text-sm font-bold text-violet-400">WhatsApp</p>
          <p className="mt-2 text-2xl font-extrabold">Atendimento direto</p>
          <p className="mt-3 text-zinc-300">
            Clique no botão e envie uma mensagem. Eu respondo e já alinhamos o
            melhor caminho.
          </p>

          <a
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-violet-600 px-6 py-3 font-bold text-white hover:bg-violet-500 transition"
            href="https://wa.me/5511994754350"
            target="_blank"
            rel="noreferrer"
          >
            Abrir WhatsApp
          </a>

          <p className="mt-4 text-xs text-zinc-500">
            Dica: já manda o tipo de projeto (site / sistema / automação) e prazo.
          </p>
        </div>

        <div className="rounded-3xl border border-zinc-900 bg-gradient-to-b from-violet-600/15 to-zinc-950 p-8">
          <p className="text-sm font-bold text-violet-400">Mensagem pronta</p>
          <p className="mt-2 text-2xl font-extrabold">Copiar & enviar</p>

          <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-zinc-200">
            Olá! Quero um projeto com a KorvTech.
            <br />
            Tipo: (site / sistema / automação)
            <br />
            Objetivo:
            <br />
            Referências (se tiver):
          </div>

          <p className="mt-4 text-sm text-zinc-300">
            Se você quiser, manda também um exemplo de site que você acha bonito.
          </p>
        </div>
      </div>
    </div>
  );
}
