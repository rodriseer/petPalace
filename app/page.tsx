import Link from "next/link";
import { MOCK_PETS } from "@/data/pets";
import { PetCard } from "@/components/PetCard";
import { ChatbotSection } from "@/components/ChatbotSection";

export default function HomePage() {
  const featured = MOCK_PETS.slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-14">
      <section className="fade-in grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-[11px] font-medium text-accent">
            Thoughtful matches · Gentle experience
          </p>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Find a pet that fits quietly into your life.
            </h1>
            <p className="max-w-xl text-sm text-slate-600 sm:text-base">
              PetPalace is a modern adoption platform that helps you browse,
              compare, and fall in love with pets that match your home, energy,
              and routine, without the noise or overwhelm.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/pets"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-800"
            >
              Browse pets
            </Link>
            <a
              href="#chat"
              className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-800 transition hover:border-accent/50 hover:text-accent"
            >
              Talk to our assistant
            </a>
          </div>
          <div className="flex flex-wrap gap-4 pt-3 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Lifestyle based recommendations
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Friendly, adoption focused partners
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Built to feel calm and clear
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl bg-white/70 p-4 shadow-soft ring-1 ring-slate-100">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
            Featured companions
          </p>
          <div className="grid gap-3">
            {featured.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>
          <Link
            href="/pets"
            className="mt-1 inline-flex items-center justify-between rounded-2xl bg-slate-50 px-3 py-2 text-xs text-slate-700 transition hover:bg-slate-100"
          >
            <span>Explore all available pets</span>
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="fade-in mt-16 grid gap-8 rounded-3xl border border-slate-100 bg-white/70 p-6 sm:grid-cols-3 sm:p-8">
        <div className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-900">
            1. Share what you&apos;re looking for
          </h2>
          <p className="text-xs text-slate-600">
            Tell us about your home, schedule, and experience with pets. Our
            assistant will help translate that into clear guidance.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-900">
            2. Explore calm, curated matches
          </h2>
          <p className="text-xs text-slate-600">
            Browse a focused set of pets that genuinely fit your lifestyle,
            not an endless scroll.
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-900">
            3. Take the next step with clarity
          </h2>
          <p className="text-xs text-slate-600">
            When you&apos;re ready, start an adoption application with clear
            expectations, timelines, and support from our partners.
          </p>
        </div>
      </section>

      <ChatbotSection />
    </div>
  );
}

