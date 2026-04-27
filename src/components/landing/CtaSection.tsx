import { whatsappNumber } from "@/data/content";

type CtaSectionProps = {
  onOpenApply: () => void;
};

export function CtaSection({ onOpenApply }: CtaSectionProps) {
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi, I want to know more about admissions at KLE Hotel Management.",
  )}`;

  return (
    <section id="apply" data-chapter className="relative w-full overflow-hidden">
      {/* Background hotel image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=60')",
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(5,5,4,0.97) 0%, rgba(18,12,5,0.93) 45%, rgba(5,5,4,0.96) 100%)" }} />

      {/* Gold top border */}
      <div className="absolute left-0 right-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(209,178,122,0.45), transparent)" }} />

      {/* Ambient gold glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/4 rounded-full bg-[#d1b27a] opacity-[0.04] blur-[100px]" />

      <div data-chapter-content data-reveal className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-12 md:py-36 lg:px-20">
        <div className="max-w-5xl">
          <p className="text-[10px] uppercase tracking-[0.34em] text-[#d1b27a]">Admissions Open 2026 — Belagavi, Karnataka</p>

          <h2
            className="mt-6 text-5xl leading-[1.06] tracking-tight text-white md:text-7xl lg:text-8xl"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Begin your journey in the world of hospitality.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400">
            BHMCT — 4-Year Degree. 100% Placement Assistance. International Internships. IFCA Accredited.
          </p>

          <p className="mt-3 text-sm text-[#d1b27a]">
            Apply in 30 seconds — WhatsApp: 6364504056
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={onOpenApply}
              className="lux-button rounded-full px-9 py-4 text-sm font-medium tracking-wide text-black"
              style={{ background: "#d1b27a" }}
            >
              Apply Now
            </button>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="lux-outline rounded-full border border-white/30 px-9 py-4 text-sm font-medium tracking-wide text-white"
            >
              WhatsApp Admissions
            </a>
          </div>

          {/* Trust points */}
          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/[0.07] pt-8">
            {[
              "Apply in 30 seconds",
              "Priority counselling",
              "Placement-focused training",
              "Industry mentors",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-[#d1b27a]" />
                <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-500">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
