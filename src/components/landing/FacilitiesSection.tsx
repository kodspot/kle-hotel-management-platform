import Image from "next/image";
import { collegeFacilities, curriculumHighlights } from "@/data/content";

export function FacilitiesSection() {
  return (
    <section id="facilities" data-chapter className="relative w-full py-24 md:py-32">
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(209,178,122,0.18)] to-transparent" />

      <div data-chapter-content className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — campus image + facility tags */}
          <div>
            <p data-reveal className="text-[10px] uppercase tracking-[0.32em] text-[#d1b27a]">
              College Facilities
            </p>
            <h2
              data-reveal
              className="mt-5 text-4xl leading-tight text-zinc-100 md:text-5xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              A campus built for mastery.
            </h2>
            <p data-reveal className="mt-4 text-sm leading-relaxed text-zinc-500">
              State-of-the-art training labs, 29-room live guesthouse, swimming pool, tennis court, hostels, and KLE Centenary Convention Centre with 2,500+ seating capacity.
            </p>

            {/* Campus image */}
            <div data-reveal className="relative mt-8 h-64 overflow-hidden rounded-2xl border border-white/8 md:h-80">
              <Image
                src="/kle/campus.jpg"
                alt="KLE Centenary Convention Centre Campus"
                fill
                unoptimized
                className="object-cover"
                style={{ objectPosition: "0% 85%" }}
                loading="lazy"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=70";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <p className="absolute bottom-4 left-5 text-[10px] uppercase tracking-[0.28em] text-[#d1b27a]">
                KLE Centenary Convention Centre, Belagavi
              </p>
            </div>

            {/* Facility grid */}
            <div data-reveal className="mt-8 grid grid-cols-2 gap-3">
              {collegeFacilities.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] px-4 py-3"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <span className="text-base">{f.icon}</span>
                  <p className="text-xs text-zinc-400">{f.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — curriculum highlights */}
          <div>
            <p data-reveal className="text-[10px] uppercase tracking-[0.32em] text-[#d1b27a]">
              Curriculum Highlights
            </p>
            <h2
              data-reveal
              className="mt-5 text-4xl leading-tight text-zinc-100 md:text-5xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Learn how the world&apos;s best hotels actually work.
            </h2>

            {/* Subjects */}
            <div data-reveal className="mt-8">
              <p className="mb-4 text-[9px] uppercase tracking-[0.26em] text-zinc-600">Subjects Covered</p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Food Production",
                  "Food & Beverage Service",
                  "Front Office Management",
                  "Accommodation Management",
                  "Bakery & Confectionery",
                  "Event Management",
                  "Hospitality Sales & Marketing",
                  "Hospitality Financial Aspects",
                  "Management Principles",
                ].map((subj) => (
                  <p key={subj} className="flex items-center gap-2 py-1.5 text-[11px] text-zinc-500 border-b border-white/[0.04]">
                    <span className="text-[#d1b27a]">—</span> {subj}
                  </p>
                ))}
              </div>
            </div>

            {/* Curriculum highlights */}
            <div data-reveal className="mt-8 space-y-3">
              <p className="mb-4 text-[9px] uppercase tracking-[0.26em] text-zinc-600">Program Advantages</p>
              {curriculumHighlights.map((h) => (
                <div key={h} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#d1b27a]" />
                  <p className="text-sm text-zinc-400">{h}</p>
                </div>
              ))}
            </div>

            {/* IET callout */}
            <div data-reveal className="mt-8 rounded-2xl border border-[rgba(209,178,122,0.15)] p-5" style={{ background: "rgba(209,178,122,0.03)" }}>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#d1b27a]">Industrial Exposure Training</p>
              <p className="mt-2 text-sm text-zinc-400">
                4th Year (Semester VII) — 24 to 28 weeks of industrial training in a leading hotel identified by the university. International internship: 6–12 months in 5-star properties abroad.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(209,178,122,0.15)] to-transparent" />
    </section>
  );
}
