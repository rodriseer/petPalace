import Link from "next/link";
import type { Pet } from "@/data/pets";
import { PetImage } from "@/components/PetImage";

interface PetCardProps {
  pet: Pet;
  showFavorite?: boolean;
  favorited?: boolean;
}

export function PetCard({
  pet,
  showFavorite = false,
  favorited = false
}: PetCardProps) {
  const location = `${pet.city}, ${pet.state}`;
  const ageLabel =
    pet.ageYears === 0 ? "Under 1 year" : `${pet.ageYears} yr${pet.ageYears === 1 ? "" : "s"}`;
  const statusLabel =
    pet.status === "available"
      ? "Available"
      : pet.status === "pending"
      ? "Pending"
      : "Adoption soon";

  const statusStyles =
    pet.status === "available"
      ? "bg-accent/10 text-accent"
      : pet.status === "pending"
      ? "bg-amber-50 text-amber-700"
      : "bg-slate-100 text-slate-700";

  return (
    <Link
      href={`/pets/${pet.id}`}
      className="group flex flex-col rounded-3xl bg-white/90 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:bg-white hover:shadow-soft"
    >
      <div className="relative overflow-hidden rounded-3xl">
        <PetImage
          src={pet.imageUrl}
          alt={pet.name}
          width={480}
          height={320}
          className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur">
          {pet.type.charAt(0).toUpperCase() + pet.type.slice(1)} ·{" "}
          {ageLabel}
        </div>

        <div
          className={[
            "absolute right-4 rounded-full px-3 py-1 text-[11px] font-medium shadow-sm backdrop-blur",
            showFavorite ? "top-12" : "top-4",
            statusStyles
          ].join(" ")}
        >
          {statusLabel}
        </div>

        {showFavorite ? (
          <div className="absolute right-4 top-4">
            <div className="inline-flex items-center justify-center rounded-full bg-white/85 p-2 text-slate-800 shadow-sm backdrop-blur">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill={favorited ? "#6BA48A" : "none"}
                stroke="#6BA48A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-label="Save pet"
                role="img"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">{pet.name}</h3>
            <p className="text-xs text-slate-500">{pet.breed}</p>
          </div>
        </div>

        <div className="mt-auto space-y-1">
          <p className="text-[11px] text-slate-600">
            {ageLabel} · {location}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-[11px] font-medium text-slate-700">{statusLabel}</p>
            <span className="text-[11px] font-medium text-slate-700 group-hover:text-accent">
              View details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

