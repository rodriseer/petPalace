"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { MOCK_PETS, type Pet } from "@/data/pets";
import { PetCard } from "@/components/PetCard";
import { SectionHeader } from "@/components/SectionHeader";

type Living = "apartment" | "house" | null;
type Activity = "low" | "medium" | "high" | null;
type Experience = "new" | "some" | "experienced" | null;
type Kids = "yes" | "no" | null;

function scorePet(pet: Pet, answers: Required<{
  living: Exclude<Living, null>;
  activity: Exclude<Activity, null>;
  experience: Exclude<Experience, null>;
  kids: Exclude<Kids, null>;
}>) {
  const traits = pet.personalityTraits.map((t) => t.toLowerCase());

  let score = 0;

  if (answers.living === "apartment") {
    if (pet.size === "small") score += 3;
    if (pet.size === "medium") score += 1;
    if (traits.some((t) => t.includes("apartment friendly"))) score += 3;
    if (traits.some((t) => t.includes("low maintenance"))) score += 2;
    if (traits.some((t) => t.includes("low noise"))) score += 2;
  }

  if (answers.living === "house") {
    if (pet.size === "large") score += 2;
    if (pet.size === "medium") score += 1;
    if (traits.some((t) => t.includes("active"))) score += 2;
    if (traits.some((t) => t.includes("playful"))) score += 2;
  }

  if (answers.activity === "low") {
    if (traits.some((t) => t.includes("calm"))) score += 3;
    if (traits.some((t) => t.includes("gentle"))) score += 2;
    if (traits.some((t) => t.includes("quiet"))) score += 2;
    if (traits.some((t) => t.includes("low maintenance"))) score += 2;
    if (traits.some((t) => t.includes("indoor"))) score += 2;
  }

  if (answers.activity === "medium") {
    if (traits.some((t) => t.includes("affectionate"))) score += 2;
    if (traits.some((t) => t.includes("independent"))) score += 1;
    if (traits.some((t) => t.includes("family friendly"))) score += 2;
  }

  if (answers.activity === "high") {
    if (traits.some((t) => t.includes("playful"))) score += 3;
    if (traits.some((t) => t.includes("active"))) score += 3;
  }

  if (answers.experience === "new") {
    if (traits.some((t) => t.includes("low maintenance"))) score += 3;
    if (traits.some((t) => t.includes("gentle"))) score += 2;
    if (traits.some((t) => t.includes("calm"))) score += 2;
  }

  if (answers.experience === "some") {
    if (traits.some((t) => t.includes("gentle"))) score += 1;
    if (traits.some((t) => t.includes("calm"))) score += 1;
    if (traits.some((t) => t.includes("family friendly"))) score += 2;
  }

  if (answers.experience === "experienced") {
    if (traits.some((t) => t.includes("active"))) score += 2;
    if (traits.some((t) => t.includes("playful"))) score += 2;
  }

  if (answers.kids === "yes") {
    if (pet.isGoodWithKids) score += 4;
    else score -= 2;
  }

  if (answers.kids === "no") {
    if (pet.isGoodWithKids) score += 1;
    else score += 2;
  }

  if (pet.status === "available") score += 1;

  return score;
}

function OptionButton({
  selected,
  onClick,
  children
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full border px-4 py-2 text-xs font-medium transition",
        selected
          ? "border-accent/60 bg-accent/10 text-accent shadow-soft"
          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default function MatchPage() {
  const [step, setStep] = useState(0);
  const [living, setLiving] = useState<Living>(null);
  const [activity, setActivity] = useState<Activity>(null);
  const [experience, setExperience] = useState<Experience>(null);
  const [kids, setKids] = useState<Kids>(null);
  const [showResults, setShowResults] = useState(false);

  const answersComplete =
    living && activity && experience && kids;

  const recommendedPets = useMemo(() => {
    if (!answersComplete) return [];

    const required = {
      living,
      activity,
      experience,
      kids
    } as Required<{
      living: Exclude<Living, null>;
      activity: Exclude<Activity, null>;
      experience: Exclude<Experience, null>;
      kids: Exclude<Kids, null>;
    }>;

    return [...MOCK_PETS]
      .map((pet) => ({ pet, score: scorePet(pet, required) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((x) => x.pet);
  }, [activity, answersComplete, experience, kids, living]);

  function next() {
    setStep((s) => {
      const nextStep = Math.min(3, s + 1);
      if (nextStep < 3) setShowResults(false);
      return nextStep;
    });
  }

  function back() {
    setStep((s) => {
      const prevStep = Math.max(0, s - 1);
      setShowResults(false);
      return prevStep;
    });
  }

  function reset() {
    setStep(0);
    setLiving(null);
    setActivity(null);
    setExperience(null);
    setKids(null);
    setShowResults(false);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="fade-in grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
        <div className="space-y-4">
          <SectionHeader
            eyebrow="AI match"
            title="Find your match in a few calm steps"
            subtitle="Answer a few questions about your home and routine. We will recommend thoughtful pets you can explore right away."
          />

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Clear, fast recommendations
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Adoption first guidance
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-white/70 p-4 shadow-soft ring-1 ring-slate-100">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/1.jpeg"
              alt="Warm pet adoption"
              width={900}
              height={620}
              className="h-64 w-full object-cover sm:h-72"
              priority
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-600">
            <span className="rounded-full bg-slate-50 px-3 py-1">
              Simple answers
            </span>
            <span className="rounded-full bg-slate-50 px-3 py-1">
              Real pet profiles
            </span>
            <span className="rounded-full bg-slate-50 px-3 py-1">
              Built for clarity
            </span>
          </div>
        </div>
      </div>

      <section className="fade-in mt-10">
        <div className="rounded-3xl bg-white/70 p-4 shadow-soft ring-1 ring-slate-100 sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent shadow-soft">
                <span className="text-sm font-semibold">{step + 1}</span>
              </div>
              <h2 className="text-sm font-semibold text-slate-900 sm:text-base">
                {step === 0
                  ? "Living situation"
                  : step === 1
                  ? "Activity level"
                  : step === 2
                  ? "Pet experience"
                  : "Kids at home"}
              </h2>
            </div>

            <div className="text-xs text-slate-500">
              Step {step + 1} of 4
            </div>
          </div>

          {step === 0 ? (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                What best describes your home?
              </p>
              <div className="flex flex-wrap gap-2">
                <OptionButton
                  selected={living === "apartment"}
                  onClick={() => setLiving("apartment")}
                >
                  Apartment
                </OptionButton>
                <OptionButton
                  selected={living === "house"}
                  onClick={() => setLiving("house")}
                >
                  House
                </OptionButton>
              </div>
            </div>
          ) : null}

          {step === 1 ? (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                How active is your routine?
              </p>
              <div className="flex flex-wrap gap-2">
                <OptionButton
                  selected={activity === "low"}
                  onClick={() => setActivity("low")}
                >
                  Low
                </OptionButton>
                <OptionButton
                  selected={activity === "medium"}
                  onClick={() => setActivity("medium")}
                >
                  Medium
                </OptionButton>
                <OptionButton
                  selected={activity === "high"}
                  onClick={() => setActivity("high")}
                >
                  High
                </OptionButton>
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                How would you describe your experience with pets?
              </p>
              <div className="flex flex-wrap gap-2">
                <OptionButton
                  selected={experience === "new"}
                  onClick={() => setExperience("new")}
                >
                  New
                </OptionButton>
                <OptionButton
                  selected={experience === "some"}
                  onClick={() => setExperience("some")}
                >
                  Some experience
                </OptionButton>
                <OptionButton
                  selected={experience === "experienced"}
                  onClick={() => setExperience("experienced")}
                >
                  Experienced
                </OptionButton>
              </div>
            </div>
          ) : null}

          {step === 3 ? (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                Do kids live in your home?
              </p>
              <div className="flex flex-wrap gap-2">
                <OptionButton
                  selected={kids === "yes"}
                  onClick={() => setKids("yes")}
                >
                  Yes
                </OptionButton>
                <OptionButton
                  selected={kids === "no"}
                  onClick={() => setKids("no")}
                >
                  No
                </OptionButton>
              </div>
            </div>
          ) : null}

          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={back}
              disabled={step === 0}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50 disabled:opacity-40"
            >
              Back
            </button>

            {step < 3 ? (
              <button
                type="button"
                onClick={next}
                disabled={
                  (step === 0 && !living) ||
                  (step === 1 && !activity) ||
                  (step === 2 && !experience)
                }
                className="rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-slate-800 disabled:opacity-40"
              >
                Continue
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setShowResults(true)}
                disabled={!answersComplete}
                className="rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white shadow-soft transition hover:bg-slate-800 disabled:opacity-40"
              >
                Show matches
              </button>
            )}
          </div>
        </div>
      </section>

      {showResults && answersComplete ? (
        <section className="fade-in mt-10">
          <SectionHeader
            eyebrow="Recommended"
            title="A few pets to explore next"
            subtitle="These suggestions are based on your answers. Each pet profile includes clear details so you can decide confidently."
          />

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {recommendedPets.map((pet) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              Want to refine your match?
            </p>
            <button
              type="button"
              onClick={reset}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Start over
            </button>
          </div>
        </section>
      ) : null}
    </div>
  );
}

