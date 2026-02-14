import { NavLink } from "react-router-dom";

const base =
  "px-3 py-2 rounded-xl text-sm font-semibold transition hover:bg-zinc-900";
const active = "bg-zinc-900 text-white";
const idle = "text-zinc-300";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-900 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-violet-600 text-white grid place-items-center font-black">
            K
        </div>
          <div className="leading-tight">
            <p className="font-extrabold">KorvTech</p>
            <p className="text-xs text-zinc-400 -mt-0.5">Digital & Systems</p>
          </div>
        </NavLink>

       <nav className="hidden md:flex items-center gap-1">
  <NavLink
    to="/"
    className={({ isActive }) => `${base} ${isActive ? active : idle}`}
  >
    Início
  </NavLink>

  <NavLink
    to="/servicos"
    className={({ isActive }) => `${base} ${isActive ? active : idle}`}
  >
    Serviços
  </NavLink>

  <NavLink
    to="/sobre"
    className={({ isActive }) => `${base} ${isActive ? active : idle}`}
  >
    Sobre
  </NavLink>

  <NavLink
    to="/contato"
    className={({ isActive }) => `${base} ${isActive ? active : idle}`}
  >
    Contato
  </NavLink>
</nav>
        <a
          className="rounded-xl bg-white text-zinc-950 px-4 py-2 text-sm font-bold hover:bg-zinc-200 transition"
          href="https://wa.me/5511994754350"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
