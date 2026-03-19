import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <section className="fade-in grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
        <div className="space-y-4">
          <SectionHeader
            eyebrow="About"
            title="PetPalace helps you find the right companion"
            subtitle="A minimalist pet adoption experience designed to feel calm, clear, and trustworthy from the first scroll to adoption."
          />
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-white/70 p-4 shadow-soft ring-1 ring-slate-100">
          <Image
            src="/2.jpeg"
            alt="Warm pet adoption"
            width={900}
            height={620}
            className="h-64 w-full rounded-2xl object-cover sm:h-72"
            priority
          />
        </div>
      </section>

      <section className="fade-in mt-10 grid gap-5 lg:grid-cols-3">
        <div className="rounded-3xl bg-white/80 p-6 shadow-soft ring-1 ring-slate-100">
          <h3 className="text-sm font-semibold text-slate-900">
            Mission
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Make adoption feel simple and respectful by connecting people with pets
            they can care for confidently.
          </p>
        </div>

        <div className="rounded-3xl bg-white/80 p-6 shadow-soft ring-1 ring-slate-100">
          <h3 className="text-sm font-semibold text-slate-900">
            Why PetPalace exists
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Browsing should not be stressful. We focus on clear details, easy
            filtering, and a warm experience that helps you choose with less
            uncertainty.
          </p>
        </div>

        <div className="rounded-3xl bg-white/80 p-6 shadow-soft ring-1 ring-slate-100">
          <h3 className="text-sm font-semibold text-slate-900">
            Our value statement
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Thoughtful recommendations and adoption-first guidance, built for
            real people and real homes.
          </p>
        </div>
      </section>
    </div>
  );
}

