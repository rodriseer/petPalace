import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { EmptyState } from "@/components/EmptyState";

export default function FavoritesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <section className="fade-in">
        <SectionHeader
          eyebrow="Favorites"
          title="Saved pets"
          subtitle="Heart icons are ready for future favorites functionality."
        />

        <div className="mt-8">
          <EmptyState
            title="You haven't saved any pets yet"
            description="When you save a pet, it will appear here for quick access."
            action={
              <Link
                href="/pets"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white shadow-soft transition hover:bg-slate-800"
              >
                Browse pets
              </Link>
            }
          />
        </div>
      </section>
    </div>
  );
}

