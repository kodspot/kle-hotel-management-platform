import { institution, whatsappNumber } from "@/data/content";

export function SiteFooter() {
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi, I want to know more about admissions at KLE Hotel Management.",
  )}`;

  return (
    <footer className="relative w-full border-t border-white/[0.07]" style={{ background: "#050504" }}>
      <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-200">{institution.shortName}</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-[#d1b27a]">{institution.motto}</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-zinc-500">{institution.address}</p>
            <div className="mt-5 space-y-2">
              <p className="text-sm text-zinc-400">
                <span className="text-zinc-600">Phone:</span> {institution.phone}
              </p>
              <p className="text-sm text-zinc-400">
                <span className="text-zinc-600">Mobile:</span> {institution.mobile}
              </p>
              <p className="text-sm text-zinc-400">
                <span className="text-zinc-600">Email:</span>{" "}
                <a href={`mailto:${institution.email}`} className="hover:text-[#d1b27a] transition-colors">
                  {institution.email}
                </a>
              </p>
              <p className="text-sm text-zinc-400">
                <span className="text-zinc-600">Web:</span>{" "}
                <a href={`https://${institution.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#d1b27a] transition-colors">
                  {institution.website}
                </a>
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-600">Quick Links</p>
            <div className="mt-5 space-y-3">
              {["#about", "#courses", "#placements", "#facilities", "#apply"].map((href) => (
                <a
                  key={href}
                  href={href}
                  className="block text-sm text-zinc-500 transition-colors hover:text-zinc-200"
                >
                  {href.replace("#", "").charAt(0).toUpperCase() + href.replace("#", "").slice(1)}
                </a>
              ))}
            </div>
          </div>

          {/* Accreditations + CTA */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-600">Accreditations</p>
            <div className="mt-5 space-y-2">
              <p className="text-sm text-zinc-500">IFCA — Indian Federation of Culinary Associations</p>
              <p className="text-sm text-zinc-500">KAHER — Deemed-to-be-University (UGC)</p>
              <p className="text-sm text-zinc-500">Top 4 — Higher Education Review 2022</p>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center gap-3 rounded-xl border border-[rgba(209,178,122,0.25)] px-5 py-3.5 text-sm text-[#d1b27a] transition-colors hover:border-[rgba(209,178,122,0.5)] hover:bg-[rgba(209,178,122,0.04)]"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp: 6364504056
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.05] pt-7 md:flex-row">
          <p className="text-center text-[10px] text-zinc-600">
            © {new Date().getFullYear()} KLE Graduate School of Hotel Management and Catering Technology, Belagavi. All rights reserved.
          </p>
          <p className="text-[10px] text-zinc-700">Part of KLE Society — Empowering Professionals since 1916</p>
        </div>
      </div>
    </footer>
  );
}
