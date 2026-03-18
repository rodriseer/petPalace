import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MOCK_PETS } from "@/data/pets";
import type { Pet } from "@/data/pets";

interface PetPageProps {
  params: {
    id: string;
  };
}

function getPet(id: string): Pet | undefined {
  return MOCK_PETS.find((pet) => pet.id === id);
}

export default function PetDetailsPage({ params }: PetPageProps) {
  const pet = getPet(params.id);
  if (!pet) return notFound();

  const similar = MOCK_PETS.filter(
    (p) => p.id !== pet.id && (p.type === pet.type || p.size === pet.size)
  ).slice(0, 3);

  const location = `${pet.city}, ${pet.state}`;

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <Link
        href="/pets"
        className="text-xs text-slate-500 transition hover:text-slate-800"
      >
        ← Back to all pets
      </Link>

      <section className="fade-in mt-5 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
        <div className="space-y-5">
          <div className="relative overflow-hidden rounded-3xl bg-slate-100">
            <Image
              src={pet.imageUrl}
              alt={pet.name}
              width={900}
              height={640}
              className="h-80 w-full object-cover sm:h-96 lg:h-[420px] lg:rounded-3xl"
            />
            <div className="absolute left-4 top-4 flex gap-2">
              <span className="rounded-full bg-white/85 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
                {pet.type.charAt(0).toUpperCase() + pet.type.slice(1)} ·{" "}
                {pet.breed}
              </span>
              <span className="rounded-full bg-slate-900/90 px-3 py-1 text-xs font-medium text-white shadow-soft">
                {location}
              </span>
            </div>
          </div>

          <div className="grid gap-4 rounded-3xl border border-slate-100 bg-white/80 p-5 text-xs text-slate-700 sm:grid-cols-3 sm:p-6">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                Overview
              </p>
              <div className="mt-2 space-y-1.5">
                <p>
                  Age:{" "}
                  <span className="font-medium">
                    {pet.ageYears === 0 ? "Puppy/Kitten" : `${pet.ageYears} yr`}
                  </span>
                </p>
                <p>
                  Size:{" "}
                  <span className="font-medium capitalize">{pet.size}</span>
                </p>
                <p>
                  Gender:{" "}
                  <span className="font-medium capitalize">{pet.gender}</span>
                </p>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                Compatibility
              </p>
              <div className="mt-2 space-y-1.5">
                <p>
                  Good with kids:{" "}
                  <span className="font-medium">
                    {pet.isGoodWithKids ? "Yes" : "Best with adults"}
                  </span>
                </p>
                <p>
                  Good with other pets:{" "}
                  <span className="font-medium">
                    {pet.isGoodWithOtherPets ? "Yes" : "Prefer to be only pet"}
                  </span>
                </p>
              </div>
            </div>
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                Health & status
              </p>
              <div className="mt-2 space-y-1.5">
                <p>
                  Vaccinated:{" "}
                  <span className="font-medium">
                    {pet.isVaccinated ? "Up to date" : "To be completed"}
                  </span>
                </p>
                <p>
                  Spayed / neutered:{" "}
                  <span className="font-medium">
                    {pet.isNeutered ? "Yes" : "Not yet"}
                  </span>
                </p>
                <p>
                  Status:{" "}
                  <span className="font-medium capitalize">
                    {pet.status === "available"
                      ? "Available"
                      : pet.status === "pending"
                      ? "Application in review"
                      : "Likely to be adopted soon"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="rounded-3xl border border-slate-100 bg-white/90 p-5 shadow-soft">
            <h1 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              Meet {pet.name}
            </h1>
            <p className="mt-2 text-sm text-slate-600">{pet.description}</p>

            <div className="mt-4 space-y-3">
              <div>
                <p className="text-xs font-medium text-slate-700">
                  Personality highlights
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {pet.personalityTraits.map((trait) => (
                    <span
                      key={trait}
                      className="rounded-full bg-slate-50 px-2.5 py-1 text-[11px] text-slate-700"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              className="mt-6 flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-slate-800"
            >
              Start adoption interest form
            </button>
            <p className="mt-2 text-[11px] text-slate-500">
              You&apos;ll be able to share a bit about your home and timeline.
              We&apos;ll connect you with the partner shelter who currently
              cares for {pet.name}.
            </p>
          </div>

          {similar.length > 0 && (
            <div className="rounded-3xl border border-slate-100 bg-white/80 p-4">
              <h2 className="text-xs font-semibold text-slate-900">
                Similar pets you may like
              </h2>
              <div className="mt-3 space-y-3">
                {similar.map((other) => (
                  <Link
                    key={other.id}
                    href={`/pets/${other.id}`}
                    className="flex items-center gap-3 rounded-2xl bg-slate-50/70 p-2.5 text-xs text-slate-700 transition hover:bg-slate-100"
                  >
                    <div className="h-10 w-10 overflow-hidden rounded-2xl bg-slate-100">
                      <Image
                        src={other.imageUrl}
                        alt={other.name}
                        width={80}
                        height={80}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-slate-900">
                        {other.name}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {other.breed} · {other.city}
                      </p>
                    </div>
                    <span className="text-[11px] text-slate-500">View</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </section>
    </div>
  );
}

