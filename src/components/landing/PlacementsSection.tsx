import { achievements, internshipDestinations, placementSectors, placementStats, recruiterLogos, successStories } from "@/data/content";

export function PlacementsSection() {
  return (
    <section id="placements" data-chapter className="relative w-full py-24 md:py-32">
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(209,178,122,0.18)] to-transparent" />

      <div data-chapter-content className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20">
        <p data-reveal className="text-[10px] uppercase tracking-[0.32em] text-[#d1b27a]">
          Industrial Training & Placements
        </p>
        <h2
          data-reveal
          className="mt-5 max-w-4xl text-4xl leading-tight tracking-tight text-zinc-100 md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          100% placement assistance. Internships in 5 countries.
        </h2>
        <p data-reveal className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
          Students intern in leading 5-star properties for 24–28 weeks in Year 4, with international internship opportunities in France, Germany, Mauritius, USA, and Arab Countries.
        </p>

        {/* Stats */}
        <div data-sequence className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {placementStats.map((stat) => (
            <div key={stat.label} data-reveal data-seq-item className="border-l-2 border-[rgba(209,178,122,0.35)] pl-5">
              <p className="text-3xl font-light tracking-tight text-white md:text-4xl" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                {stat.value}
              </p>
              <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr]">
          {/* Left column — MOUs + Sectors + Destinations */}
          <div className="space-y-10">
            {/* MOU Partners */}
            <div data-reveal>
              <p className="mb-5 text-[9px] uppercase tracking-[0.28em] text-zinc-600">MOU Partners</p>
              <div className="grid grid-cols-2 gap-3">
                {recruiterLogos.map((logo) => (
                  <div key={logo} className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] px-4 py-3.5" style={{ background: "rgba(255,255,255,0.02)" }}>
                    <span className="h-1 w-1 rounded-full bg-[#d1b27a]" />
                    <p className="text-xs text-zinc-400">{logo}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* International destinations */}
            <div data-reveal>
              <p className="mb-4 text-[9px] uppercase tracking-[0.28em] text-zinc-600">International Internship</p>
              <div className="flex flex-wrap gap-2">
                {internshipDestinations.map((dest) => (
                  <span key={dest} className="rounded-full border border-[rgba(209,178,122,0.2)] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[#d1b27a]">
                    {dest}
                  </span>
                ))}
                <span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  + Walt Disney USA
                </span>
              </div>
            </div>

            {/* Placement sectors */}
            <div data-reveal>
              <p className="mb-4 text-[9px] uppercase tracking-[0.28em] text-zinc-600">Career Sectors</p>
              <div className="grid grid-cols-2 gap-2">
                {placementSectors.map((sector) => (
                  <p key={sector} className="flex items-center gap-2 text-[10px] text-zinc-500">
                    <span className="text-[#d1b27a]">→</span>{sector}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — Achievements + Testimonials */}
          <div className="space-y-5">
            {/* Achievements */}
            <div data-reveal className="rounded-2xl border border-white/[0.07] p-6" style={{ background: "#0d0d0b" }}>
              <p className="mb-4 text-[9px] uppercase tracking-[0.28em] text-[#d1b27a]">Achievements & Recognition</p>
              <div className="space-y-3">
                {achievements.map((ach) => (
                  <div key={ach.title} className="flex items-start gap-3 border-b border-white/[0.05] pb-3 last:border-0 last:pb-0">
                    <span className="mt-0.5 text-[9px] uppercase tracking-widest text-zinc-600">{ach.year}</span>
                    <div>
                      <p className="text-sm text-zinc-200">{ach.title}</p>
                      <p className="mt-0.5 text-[10px] text-zinc-600">{ach.by}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            {successStories.map((story) => (
              <article key={story.name} data-reveal className="rounded-2xl border border-white/[0.07] p-6" style={{ background: "#0d0d0b" }}>
                <p className="text-[10px] tracking-wider text-[#d1b27a]">★ ★ ★ ★ ★</p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">&quot;{story.quote}&quot;</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(209,178,122,0.25)] text-xs font-medium text-[#d1b27a]">
                    {story.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white">{story.name}</p>
                    <p className="text-[10px] uppercase tracking-[0.14em] text-zinc-600">{story.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

