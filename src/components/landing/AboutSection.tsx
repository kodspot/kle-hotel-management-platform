import Image from "next/image";

const pillars = [
  { label: "Live Training Labs", desc: "Basic & advanced kitchens, training restaurant, bakery lab" },
  { label: "29-Room Guesthouse", desc: "Real front office & accommodation training" },
  { label: "IFCA Accredited", desc: "Indian Federation of Culinary Associations" },
];

export function AboutSection() {
  return (
    <section id="about" data-chapter className="relative w-full">
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(209,178,122,0.22)] to-transparent" />

      <div data-chapter-content className="grid min-h-[80vh] md:grid-cols-2">
        {/* Left — image fills entire half */}
        <div data-parallax className="relative min-h-[55vw] overflow-hidden md:min-h-0">
          <Image
            src="/kle/fb-service.jpg"
            alt="KLE Hotel Management students in Food & Beverage Service training"
            fill
            unoptimized
            priority
            className="object-cover"
            style={{ objectPosition: "left center" }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=75";
            }}
          />
          {/* Gradient fade into right side on desktop */}
          <div className="absolute inset-0 hidden bg-[linear-gradient(to_right,rgba(5,5,4,0)_55%,rgba(5,5,4,1)_100%)] md:block" />
          {/* Bottom fade for mobile */}
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,5,4,0.85)_0%,transparent_40%)] md:hidden" />
          {/* KAHER badge */}
          <div className="absolute bottom-6 left-6 z-10 rounded-xl border border-[rgba(209,178,122,0.25)] px-4 py-3" style={{ background: "rgba(5,5,4,0.85)", backdropFilter: "blur(10px)" }}>
            <p className="text-[9px] uppercase tracking-[0.28em] text-[#d1b27a]">Constituent of</p>
            <p className="mt-0.5 text-xs text-zinc-300">KAHER Deemed University</p>
          </div>
        </div>

        {/* Right — text content */}
        <div className="flex flex-col justify-center px-8 py-16 md:px-14 md:py-28 lg:px-20">
          <p data-reveal className="text-[10px] uppercase tracking-[0.36em] text-[#d1b27a]">
            KLE Society — Est. 1916
          </p>
          <div className="mt-3 h-px w-10 bg-[rgba(209,178,122,0.45)]" />

          <h2
            data-reveal
            className="mt-7 text-4xl leading-[1.1] tracking-[-0.01em] text-zinc-100 md:text-5xl lg:text-[3.25rem]"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Your place in the wide world{" "}
            <span className="text-zinc-400">of hospitality.</span>
          </h2>

          <p data-reveal className="mt-8 text-[1.05rem] leading-relaxed text-zinc-300">
            KLE Graduate School of Hotel Management and Catering Technology, Belagavi — the <strong className="font-medium text-white">first hotel management programme in North Karnataka</strong>, recognised among India&apos;s top 4 institutions.
          </p>
          <p data-reveal className="mt-4 text-sm leading-relaxed text-zinc-500">
            Part of KLE Academy of Higher Education &amp; Research (KAHER) — a UGC Deemed University with 1,35,000+ students across 272 institutions since 1916.
          </p>
          <p data-reveal className="mt-4 text-sm leading-relaxed text-zinc-500">
            Accredited to the <span className="text-zinc-300">Indian Federation of Culinary Associations (IFCA)</span>. Curriculum built by industry experts on global training standards.
          </p>

          {/* Three pillars */}
          <div data-reveal className="mt-10 grid grid-cols-1 gap-4 border-t border-white/8 pt-8 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.label}>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#d1b27a]">{p.label}</p>
                <p className="mt-1 text-xs leading-snug text-zinc-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(209,178,122,0.15)] to-transparent" />
    </section>
  );
}

