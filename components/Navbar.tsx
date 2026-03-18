import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-[rgba(247,245,242,0.9)] backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-slate-900 transition hover:opacity-80"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-accent/10 text-lg font-semibold text-accent shadow-soft">
            🐾
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-tight">
              PetPalace
            </span>
            <span className="text-xs text-slate-500">
              Warm, modern pet adoption
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium text-slate-700">
          <Link
            href="/pets"
            className="hidden rounded-full px-3 py-1.5 text-sm transition hover:bg-white hover:text-slate-900 sm:inline-flex"
          >
            Browse pets
          </Link>
          <Link
            href="#chat"
            className="hidden rounded-full px-3 py-1.5 text-sm transition hover:bg-white hover:text-slate-900 sm:inline-flex"
          >
            Ask our assistant
          </Link>
          <Link
            href="/pets"
            className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-slate-800"
          >
            Start adoption
          </Link>
        </div>
      </nav>
    </header>
  );
}

