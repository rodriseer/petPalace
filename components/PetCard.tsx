import Link from "next/link";
import Image from "next/image";
import type { Pet } from "@/data/pets";

interface PetCardProps {
  pet: Pet;
}

export function PetCard({ pet }: PetCardProps) {
  const location = `${pet.city}, ${pet.state}`;
  const kidsLabel = pet.isGoodWithKids ? "Kids ok" : "Adults only";
  const otherPetsLabel = pet.isGoodWithOtherPets ? "Other pets ok" : "Best as only pet";

  return (
    <Link
      href={`/pets/${pet.id}`}
      className="group flex flex-col rounded-3xl bg-white/90 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:bg-white hover:shadow-soft"
    >
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          src={pet.imageUrl}
          alt={pet.name}
          width={480}
          height={320}
          className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
          {pet.type.charAt(0).toUpperCase() + pet.type.slice(1)} ·{" "}
          {pet.ageYears === 0 ? "Puppy/Kitten" : `${pet.ageYears} yr`}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              {pet.name}
            </h3>
            <p className="text-xs text-slate-500">
              {pet.breed} · {location}
            </p>
          </div>
          <span className="rounded-full bg-accent/10 px-2 py-1 text-[10px] font-medium text-accent">
            {pet.size.charAt(0).toUpperCase() + pet.size.slice(1)}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-1 text-[10px] text-slate-600">
          <span className="rounded-full bg-slate-50 px-2 py-1">{kidsLabel}</span>
          <span className="rounded-full bg-slate-50 px-2 py-1">
            {otherPetsLabel}
          </span>
        </div>

        <p className="line-clamp-2 text-xs text-slate-600">{pet.description}</p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {pet.personalityTraits.slice(0, 1).map((trait) => (
              <span
                key={trait}
                className="rounded-full bg-slate-50 px-2 py-1 text-[10px] text-slate-600"
              >
                {trait}
              </span>
            ))}
            {pet.status !== "available" && (
              <span className="rounded-full bg-amber-50 px-2 py-1 text-[10px] text-amber-700">
                Popular
              </span>
            )}
          </div>
          <span className="text-[11px] font-medium text-slate-700 group-hover:text-accent">
            View details
          </span>
        </div>
      </div>
    </Link>
  );
}

