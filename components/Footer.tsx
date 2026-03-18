export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-[#f4f1ec]">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} PetPalace. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4">
          <span className="opacity-80">
            Built for modern, thoughtful pet adoption.
          </span>
        </div>
      </div>
    </footer>
  );
}

