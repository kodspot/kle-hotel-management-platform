export function PsychologySection() {
  return (
    <section data-chapter className="relative w-full">
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(209,178,122,0.18)] to-transparent" />

      <div data-chapter-content className="grid md:grid-cols-2">
        {/* Urgency — warm tint */}
        <article
          data-reveal
          className="relative overflow-hidden px-8 py-16 md:px-14 md:py-24"
          style={{ background: "linear-gradient(150deg, #0e0a04 0%, #1a1108 50%, #0c0904 100%)" }}
        >
          <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 -translate-y-1/3 translate-x-1/3 rounded-full bg-[#d1b27a] opacity-[0.04] blur-3xl" />

          <p className="text-[10px] uppercase tracking-[0.32em] text-[#d1b27a]">Limited Seats Available</p>
          <h3
            className="mt-5 text-3xl leading-tight text-zinc-100 md:text-4xl"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Admissions close early once premium training batches are full.
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-zinc-500">
            Every intake is intentionally capped to maintain practical lab quality, recruiter attention, and high-touch mentoring.
          </p>
          <div className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-[rgba(209,178,122,0.3)] px-5 py-2.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d1b27a]" />
            <p className="text-[9px] uppercase tracking-[0.26em] text-[#d1b27a]">Intake Open Now</p>
          </div>
        </article>

        {/* Placement guarantee — cool tint */}
        <article
          data-reveal
          className="relative overflow-hidden border-t border-white/[0.05] px-8 py-16 md:border-l md:border-t-0 md:px-14 md:py-24"
          style={{ background: "linear-gradient(150deg, #06080e 0%, #0a1018 50%, #060708 100%)" }}
        >
          <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/3 rounded-full bg-blue-800 opacity-[0.05] blur-3xl" />

          <p className="text-[10px] uppercase tracking-[0.32em] text-zinc-500">Placement Guarantee Focus</p>
          <h3
            className="mt-5 text-3xl leading-tight text-zinc-100 md:text-4xl"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Structured training pathway designed around placement outcomes.
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-zinc-500">
            Resume labs, mock interviews, and recruiter-facing grooming modules are integrated into the curriculum.
          </p>
          <p className="mt-8 text-[10px] uppercase tracking-[0.22em] text-[#d1b27a]">
            → Outcome-first hospitality education
          </p>
        </article>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(209,178,122,0.15)] to-transparent" />
    </section>
  );
}
