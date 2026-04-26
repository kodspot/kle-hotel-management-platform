export function StudentJourneyWowSection() {
  return (
    <section data-wow-section data-chapter className="relative mx-auto mt-10 min-h-screen w-full max-w-6xl px-6 py-12 md:px-10">
      <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] bg-[radial-gradient(circle_at_22%_16%,rgba(209,178,122,0.22),rgba(209,178,122,0)_48%)]" />
      <div data-chapter-content className="relative lux-glass-panel min-h-[82vh] rounded-[2.2rem] p-8 md:p-14">
        <p data-wow-title className="max-w-4xl text-4xl leading-[1.08] tracking-tight text-zinc-100 md:text-6xl">
          From Student to Professional: your transformation into a world-class hospitality leader.
        </p>
        <div data-wow-line className="mt-7 h-px w-full bg-gradient-to-r from-[#d6b57d] via-zinc-500 to-transparent opacity-80" />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <article data-wow-card className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Chapter 01</p>
            <h3 className="mt-4 text-2xl text-white">Learn</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              Master service, etiquette, operations, and culinary fundamentals through guided practical immersion.
            </p>
          </article>

          <article data-wow-card className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Chapter 02</p>
            <h3 className="mt-4 text-2xl text-white">Refine</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              Build executive communication, luxury guest handling, and recruiter-ready confidence.
            </p>
          </article>

          <article data-wow-card className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Chapter 03</p>
            <h3 className="mt-4 text-2xl text-white">Launch</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              Enter premium hotels with placement support, interview mentoring, and global career pathways.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
