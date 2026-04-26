import Image from "next/image";
import { SectionShell } from "./SectionShell";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About Institute"
      title="A hospitality institute designed like a luxury brand, not a classroom."
    >
      <div data-sequence className="grid gap-8 md:grid-cols-[1.15fr_1fr]">
        <div data-reveal data-seq-item className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-2" data-parallax>
          <Image
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1400&q=70"
            alt="KLE Hotel Management campus hospitality training"
            width={1400}
            height={900}
            className="h-full min-h-[280px] w-full rounded-[1.35rem] object-cover"
            loading="lazy"
          />
        </div>

        <div data-seq-item className="space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <p data-reveal className="text-xl leading-relaxed text-zinc-200">
            KLE Hotel Management combines practical lab exposure, mentor-led coaching, and placement-first training.
          </p>
          <p data-reveal className="text-sm leading-relaxed text-zinc-400">
            Every semester is designed around real hospitality workflows, from front office etiquette to culinary precision and service excellence.
          </p>
          <p data-reveal className="text-sm leading-relaxed text-zinc-400">
            The result is simple: graduates who are interview-ready, globally employable, and operationally confident.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
