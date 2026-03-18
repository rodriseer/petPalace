"use client";

import { useMemo, useState } from "react";
import { MOCK_PETS, type PetType, type PetSize } from "@/data/pets";
import { PetCard } from "@/components/PetCard";

const TYPES: { label: string; value: PetType | "all" }[] = [
  { label: "All pets", value: "all" },
  { label: "Dogs", value: "dog" },
  { label: "Cats", value: "cat" },
  { label: "Rabbits", value: "rabbit" },
  { label: "Other", value: "other" }
];

const SIZES: { label: string; value: PetSize | "all" }[] = [
  { label: "Any size", value: "all" },
  { label: "Small", value: "small" },
  { label: "Medium", value: "medium" },
  { label: "Large", value: "large" }
];

type AgeFilter = "any" | "under1" | "oneToFive" | "sixPlus";
type LocationFilter = "any" | "nearby" | "sameState";

export default function PetsPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState<PetType | "all">("all");
  const [size, setSize] = useState<PetSize | "all">("all");
  const [age, setAge] = useState<AgeFilter>("any");
  const [locationFilter, setLocationFilter] = useState<LocationFilter>("any");

  const filteredPets = useMemo(() => {
    return MOCK_PETS.filter((pet) => {
      const searchMatch =
        search.trim().length === 0 ||
        [pet.name, pet.breed, pet.city, pet.state]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());

      const typeMatch = type === "all" || pet.type === type;
      const sizeMatch = size === "all" || pet.size === size;

      const ageMatch =
        age === "any" ||
        (age === "under1" && pet.ageYears < 1) ||
        (age === "oneToFive" && pet.ageYears >= 1 && pet.ageYears <= 5) ||
        (age === "sixPlus" && pet.ageYears >= 6);

      const locationMatch =
        locationFilter === "any" ||
        (locationFilter === "nearby" && pet.city === "Austin") ||
        (locationFilter === "sameState" && pet.state === "TX");

      return searchMatch && typeMatch && sizeMatch && ageMatch && locationMatch;
    });
  }, [search, type, size, age, locationFilter]);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <section className="fade-in space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Browse adoptable pets
        </h1>
        <p className="max-w-2xl text-sm text-slate-600">
          Use search and quick filters to see pets that match your home, space,
          and routine. Results update instantly as you change filters.
        </p>
      </section>

      <section className="fade-in sticky top-16 z-10 mt-8 border-y border-slate-100 bg-[rgba(247,245,242,0.9)] px-1 py-4 backdrop-blur">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <div className="flex flex-1 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 min-w-[220px]">
            <span className="font-medium text-slate-700">Search</span>
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Name, breed, city…"
              className="w-40 flex-1 bg-transparent text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none sm:w-56"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <select
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 focus:outline-none"
              value={type}
              onChange={(event) =>
                setType(event.target.value as PetType | "all")
              }
            >
              {TYPES.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <select
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 focus:outline-none"
              value={size}
              onChange={(event) =>
                setSize(event.target.value as PetSize | "all")
              }
            >
              {SIZES.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <select
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 focus:outline-none"
              value={age}
              onChange={(event) => setAge(event.target.value as AgeFilter)}
            >
              <option value="any">Any age</option>
              <option value="under1">Under 1 year</option>
              <option value="oneToFive">1 to 5 years</option>
              <option value="sixPlus">6 or more years</option>
            </select>

            <select
              className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs text-slate-700 focus:outline-none"
              value={locationFilter}
              onChange={(event) =>
                setLocationFilter(event.target.value as LocationFilter)
              }
            >
              <option value="any">Any location</option>
              <option value="nearby">Near Austin</option>
              <option value="sameState">In Texas</option>
            </select>
          </div>
        </div>
      </section>

      <section className="fade-in mt-6 flex items-center justify-between text-xs text-slate-600">
        <p>
          Showing <span className="font-semibold">{filteredPets.length}</span>{" "}
          of {MOCK_PETS.length} pets
        </p>
      </section>

      <section className="fade-in mt-4">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </section>
    </div>
  );
}

