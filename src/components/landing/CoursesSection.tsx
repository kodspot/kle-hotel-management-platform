import { courses } from "@/data/content";
import { SectionShell } from "./SectionShell";

export function CoursesSection() {
  return (
    <SectionShell id="courses" eyebrow="Courses" title="Curated pathways that prepare you for premium hospitality careers.">
      <div data-sequence className="grid gap-6 md:grid-cols-3">
        {courses.map((course) => (
          <article
            key={course.title}
            data-reveal
            data-seq-item
            className="group relative overflow-hidden rounded-3xl border border-[#d1b27a]/20 bg-[linear-gradient(155deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_45%,rgba(209,178,122,0.06)_100%)] p-7"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_20%_12%,rgba(209,178,122,0.26),rgba(209,178,122,0)_48%)]" />
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{course.duration}</p>
            <h3 className="relative mt-4 text-2xl leading-tight text-zinc-100 transition group-hover:text-white">{course.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">{course.summary}</p>
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-[#d1b27a]">Luxury Career Readiness</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
