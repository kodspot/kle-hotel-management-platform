const chapters = [
  {
    num: "01",
    title: "Learn",
    subtitle: "Foundation",
    body: "Master food production, F&B service, front office operations, and culinary fundamentals through guided practical immersion in our state-of-the-art training labs.",
    img: "/kle/culinary-kitchen.jpg",
    fallback: "https://images.unsplash.com/photo-1543332164-6e82f355badc?auto=format&fit=crop&w=900&q=70",
    objectPosition: "left center",
    imgFilter: undefined,
  },
  {
    num: "02",
    title: "Refine",
    subtitle: "Excellence",
    body: "Build executive communication, luxury guest handling, and recruiter-ready confidence. Abroad internship opportunities in France, Germany, Mauritius, USA, and Arab countries.",
    img: "/kle/front-office.jpg",
    fallback: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=70",
    objectPosition: "left center",
    imgFilter: undefined,
  },
  {
    num: "03",
    title: "Launch",
    subtitle: "Career",
    body: "Enter star hotels, cruise lines, and international brands with placement support backed by MOUs with Fairfield by Marriott, The Fern UK 27, Regenta Resort, and Walt Disney USA.",
    img: "/kle/team.jpg",
    fallback: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=70",
    objectPosition: "center 65%",
    imgFilter: "brightness(0.45) saturate(0.4)",
  },
];

export function StudentJourneyWowSection() {
  return (
    <section
      data-wow-section
      data-chapter
      className="relative w-full overflow-hidden py-24 md:py-36"
      style={{ background: "linear-gradient(165deg, #080806 0%, #0e0b07 40%, #080807 100%)" }}
    >
      {/* Top border */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(209,178,122,0.25)] to-transparent" />

      <div data-chapter-content className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20">
        {/* Heading */}
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.42em] text-[#d1b27a]">The Journey</p>
          <h2
            data-wow-title
            className="mx-auto mt-5 max-w-4xl text-4xl leading-[1.07] tracking-tight text-zinc-100 md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            From Student to{" "}
            <span className="text-zinc-400">World-Class Professional</span>
          </h2>
          <div
            data-wow-line
            className="mx-auto mt-6 h-px w-20"
            style={{ background: "linear-gradient(90deg, transparent, #d1b27a, transparent)" }}
          />
        </div>

        {/* Chapter cards */}
        <div className="mt-16 grid gap-7 md:mt-20 md:grid-cols-3">
          {chapters.map((ch) => (
            <article
              key={ch.num}
              data-wow-card
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8"
              style={{ background: "#0d0d0b" }}
            >
              {/* Image */}
              <div className="relative h-60 shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ch.img}
                  alt={ch.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: ch.objectPosition, filter: ch.imgFilter }}
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = ch.fallback;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0b] via-[rgba(13,13,11,0.3)] to-transparent" />
                <p className="absolute bottom-3 left-5 text-[9px] uppercase tracking-[0.35em] text-[#d1b27a]">
                  Chapter {ch.num}
                </p>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3
                  className="text-3xl text-white"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {ch.title}
                </h3>
                <p className="mt-1 text-[9px] uppercase tracking-[0.22em] text-zinc-600">{ch.subtitle}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-500">{ch.body}</p>
                {/* Gold arrow */}
                <div className="mt-6 flex items-center gap-2">
                  <div className="h-px w-6 bg-[rgba(209,178,122,0.5)]" />
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#d1b27a]">Learn more</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(209,178,122,0.2)] to-transparent" />
    </section>
  );
}
