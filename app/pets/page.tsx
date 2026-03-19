"use client";

import { useEffect, useMemo, useState } from "react";
import { MOCK_PETS, type PetType, type PetSize } from "@/data/pets";
import { PetCard } from "@/components/PetCard";
import { EmptyState } from "@/components/EmptyState";

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
type LocationFilter = string | "all";

const GENDERS: { label: string; value: "all" | "male" | "female" }[] = [
  { label: "Any gender", value: "all" },
  { label: "Male", value: "male" },
  { label: "Female", value: "female" }
];

export default function PetsPage() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState<PetType | "all">("all");
  const [size, setSize] = useState<PetSize | "all">("all");
  const [age, setAge] = useState<AgeFilter>("any");
  const [gender, setGender] = useState<"all" | "male" | "female">("all");
  const [locationFilter, setLocationFilter] = useState<LocationFilter>("all");

  const [visibleCount, setVisibleCount] = useState(9);
  const [isLoading, setIsLoading] = useState(true);

  const stateOptions = useMemo(() => {
    return Array.from(new Set(MOCK_PETS.map((p) => p.state))).sort();
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => setIsLoading(false), 250);
    return () => window.clearTimeout(t);
  }, []);

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
      const genderMatch = gender === "all" || pet.gender === gender;

      const ageMatch =
        age === "any" ||
        (age === "under1" && pet.ageYears < 1) ||
        (age === "oneToFive" && pet.ageYears >= 1 && pet.ageYears <= 5) ||
        (age === "sixPlus" && pet.ageYears >= 6);

      const locationMatch =
        locationFilter === "all" || pet.state === locationFilter;

      return (
        searchMatch &&
        typeMatch &&
        sizeMatch &&
        genderMatch &&
        ageMatch &&
        locationMatch
      );
    });
  }, [search, type, size, gender, age, locationFilter]);

  useEffect(() => {
    setVisibleCount(9);
  }, [search, type, size, gender, age, locationFilter]);

  const visiblePets = filteredPets.slice(0, visibleCount);

  function clearFilters() {
    setSearch("");
    setType("all");
    setSize("all");
    setGender("all");
    setAge("any");
    setLocationFilter("all");
  }

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
              value={gender}
              onChange={(event) =>
                setGender(event.target.value as "all" | "male" | "female")
              }
            >
              {GENDERS.map((option) => (
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
              <option value="all">Any state</option>
              {stateOptions.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="fade-in mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-600">
        <p>
          Showing{" "}
          <span className="font-semibold">{visiblePets.length}</span> of{" "}
          <span className="font-semibold">{filteredPets.length}</span> matching pets
        </p>

        <button
          type="button"
          onClick={clearFilters}
          className="rounded-full border border-slate-200 bg-white px-3 py-2 text-[11px] font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Reset filters
        </button>
      </section>

      <section className="fade-in mt-4">
        {isLoading ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, idx) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={idx}
                className="animate-pulse rounded-3xl bg-white/90 shadow-sm ring-1 ring-slate-100"
              >
                <div className="h-56 rounded-3xl bg-slate-50" />
                <div className="space-y-2 p-4">
                  <div className="h-4 w-2/3 rounded bg-slate-50" />
                  <div className="h-3 w-1/2 rounded bg-slate-50" />
                  <div className="mt-4 h-3 w-full rounded bg-slate-50" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredPets.length === 0 ? (
          <EmptyState
            title="No pets match your filters"
            description="Try adjusting species, age, size, gender, or state."
            action={
              <button
                type="button"
                onClick={clearFilters}
                className="rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-slate-800"
              >
                Show all pets
              </button>
            }
          />
        ) : (
          <>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visiblePets.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
              ))}
            </div>

            {filteredPets.length > visiblePets.length ? (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((c) => c + 9)}
                  className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700 shadow-soft transition hover:bg-slate-50"
                >
                  Load more
                </button>
              </div>
            ) : (
              <p className="mt-8 text-center text-xs text-slate-500">
                You are viewing all matching pets.
              </p>
            )}
          </>
        )}
      </section>
    </div>
  );
}

