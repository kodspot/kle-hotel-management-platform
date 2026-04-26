import { whatsappNumber } from "@/data/content";

type CtaSectionProps = {
  onOpenApply: () => void;
};

export function CtaSection({ onOpenApply }: CtaSectionProps) {
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi, I want to know more about admissions at KLE Hotel Management.",
  )}`;

  return (
    <section id="apply" data-chapter className="mx-auto w-full max-w-6xl px-6 pb-28 pt-10 md:px-10 md:pb-36">
      <div data-chapter-content data-reveal className="rounded-[2rem] border border-white/10 bg-[linear-gradient(140deg,#111,#1d1d1d_42%,#292515)] p-8 md:p-14">
        <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">Admissions Open 2026</p>
        <h3 className="mt-4 max-w-3xl text-3xl leading-tight tracking-tight text-white md:text-5xl">
          Take the first step toward a high-growth hospitality career.
        </h3>
        <p className="mt-4 max-w-2xl text-zinc-300">
          Limited seats. Personalized counseling. Priority interview prep for early applicants.
        </p>
        <p className="mt-3 text-sm text-[#d1b27a]">Apply in 30 seconds. Limited seats available in every intake.</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <button onClick={onOpenApply} className="lux-button rounded-full bg-white px-7 py-3 text-sm font-medium text-black">
            Apply Now
          </button>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="lux-outline rounded-full border border-white/40 px-7 py-3 text-sm font-medium text-white"
          >
            WhatsApp Admissions
          </a>
        </div>
      </div>
    </section>
  );
}
