export function PsychologySection() {
  return (
    <section data-chapter className="mx-auto w-full max-w-6xl px-6 py-10 md:px-10 md:py-16">
      <div data-chapter-content className="grid gap-6 md:grid-cols-2">
        <article data-reveal className="lux-glass-panel rounded-3xl p-7 md:p-9">
          <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Limited Seats Available</p>
          <h3 className="mt-4 text-3xl leading-tight text-zinc-100 md:text-4xl">Admissions close early once premium training batches are full.</h3>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            Every intake is intentionally capped to maintain practical lab quality, recruiter attention, and high-touch mentoring.
          </p>
        </article>

        <article data-reveal className="lux-glass-panel rounded-3xl p-7 md:p-9">
          <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">Placement Guarantee Focus</p>
          <h3 className="mt-4 text-3xl leading-tight text-zinc-100 md:text-4xl">Structured training pathway designed around placement outcomes.</h3>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            Resume labs, mock interviews, and recruiter-facing grooming modules are integrated into the curriculum.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.18em] text-[#d1b27a]">Outcome-first hospitality education</p>
        </article>
      </div>
    </section>
  );
}
