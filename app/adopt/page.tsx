import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { StepCard } from "@/components/StepCard";

export default function AdoptPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <section className="fade-in space-y-6">
        <SectionHeader
          eyebrow="Adopt"
          title="A clear adoption process"
          subtitle="Four simple steps to help you move from browsing to a caring match."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <StepCard
            number={1}
            title="Browse pets"
            description="Search and filter quickly. Open a profile to view details at a glance."
          />
          <StepCard
            number={2}
            title="Choose a pet"
            description="Look for compatibility and health information. Save favorites when you are ready."
          />
          <StepCard
            number={3}
            title="Submit interest"
            description="Start an adoption interest in a simple, guided flow."
          />
          <StepCard
            number={4}
            title="Meet and adopt"
            description="Connect with the shelter and take the next step with confidence."
          />
        </div>

        <div className="rounded-3xl bg-white/80 p-6 shadow-soft ring-1 ring-slate-100 md:flex md:items-center md:justify-between md:gap-6">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-slate-900">
              Ready to browse?
            </p>
            <p className="text-sm text-slate-600">
              Explore adoptable pets and use filters to find your best starting point.
            </p>
          </div>
          <Link
            href="/pets"
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white shadow-soft transition hover:bg-slate-800 md:mt-0 md:w-auto"
          >
            Browse pets
          </Link>
        </div>
      </section>
    </div>
  );
}

