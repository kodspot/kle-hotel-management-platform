import { placementStats, recruiterLogos, successStories } from "@/data/content";
import { SectionShell } from "./SectionShell";

export function PlacementsSection() {
  return (
    <SectionShell id="placements" eyebrow="Placements" title="Placement outcomes that build trust in less than 10 seconds.">
      <div data-sequence className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div data-seq-item className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {placementStats.map((stat) => (
              <div key={stat.label} data-reveal className="rounded-2xl border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-5">
                <p className="text-3xl font-semibold text-white md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.14em] text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div data-reveal className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Recruiters</p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {recruiterLogos.map((logo) => (
                <div key={logo} className="rounded-xl border border-white/10 bg-black/30 px-3 py-4 text-center text-sm text-zinc-300">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div data-seq-item className="space-y-4">
          {successStories.map((story) => (
            <article key={story.name} data-reveal className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-base leading-relaxed text-zinc-200">&quot;{story.quote}&quot;</p>
              <p className="mt-5 text-sm font-medium text-white">{story.name}</p>
              <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{story.role}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
