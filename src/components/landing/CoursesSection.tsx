import Image from "next/image";
import { courses } from "@/data/content";

// Use real KLE images if placed in /public/kle/ — Unsplash fallback otherwise
const fallbackImages = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=70",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=70",
  "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=70",
];

export function CoursesSection() {
  return (
    <section id="courses" data-chapter className="relative w-full py-24 md:py-32">
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(209,178,122,0.18)] to-transparent" />

      <div data-chapter-content className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20">
        <p data-reveal className="text-[10px] uppercase tracking-[0.32em] text-[#d1b27a]">
          Programs — IFCA Accredited
        </p>
        <h2
          data-reveal
          className="mt-5 max-w-4xl text-4xl leading-tight tracking-tight text-zinc-100 md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          North Karnataka&apos;s first dedicated Hotel Management degree.
        </h2>
        <p data-reveal className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
          The 4-year BHMCT programme at KLE is structured on global hospitality training standards — combining theory, live labs, and international internships.
        </p>

        <div data-sequence className="mt-14 grid gap-7 md:grid-cols-3">
          {courses.map((course, i) => (
            <article
              key={course.title}
              data-reveal
              data-seq-item
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8"
              style={{ background: "#0c0c0a" }}
            >
              {/* Course image — uses real KLE photo if available, else Unsplash */}
              <div className="relative h-60 shrink-0 overflow-hidden">
                <Image
                  src={course.image || fallbackImages[i] || fallbackImages[0]!}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: "left center" }}
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = fallbackImages[i] ?? fallbackImages[0]!;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0a] via-[rgba(12,12,10,0.45)] to-transparent" />
                <p className="absolute bottom-3 left-5 text-[9px] uppercase tracking-[0.28em] text-[#d1b27a]">
                  {course.duration}
                </p>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3
                  className="text-xl leading-tight text-zinc-100 transition-colors group-hover:text-white"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {course.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-500">{course.summary}</p>

                {/* Highlights */}
                <ul className="mt-4 space-y-1.5">
                  {course.highlights.slice(0, 3).map((h) => (
                    <li key={h} className="flex items-center gap-2 text-[10px] text-zinc-600">
                      <span className="text-[#d1b27a]">—</span> {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-[rgba(209,178,122,0.35)] to-transparent" />
                  <p className="text-[9px] uppercase tracking-[0.22em] text-[#d1b27a]">IFCA Accredited</p>
                </div>
              </div>

              {/* Hover glow border */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-1 ring-[rgba(209,178,122,0.35)] transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>

        {/* Eligibility callout */}
        <div data-reveal className="mt-10 flex flex-wrap items-center gap-5 rounded-2xl border border-[rgba(209,178,122,0.15)] px-6 py-5" style={{ background: "rgba(209,178,122,0.03)" }}>
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#d1b27a]">Eligibility</p>
          <p className="text-sm text-zinc-400">Passed 10th + 12th / PUC in any stream</p>
          <div className="h-3 w-px bg-zinc-700" />
          <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-600">Aadhar • Mark Sheets • Transfer Certificate • Caste Certificate (if applicable)</p>
        </div>
      </div>
    </section>
  );
}

