import { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({ id, eyebrow, title, children, className = "" }: SectionShellProps) {
  return (
    <section id={id} data-chapter className={`relative w-full py-24 md:py-32 ${className}`}>
      <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(209,178,122,0.2)] to-transparent" />
      <div data-chapter-content className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20">
        <p data-reveal className="text-[10px] uppercase tracking-[0.32em] text-[#d1b27a]">
          {eyebrow}
        </p>
        <h2 data-reveal className="mt-5 max-w-4xl text-4xl leading-tight tracking-tight text-zinc-100 md:text-6xl lg:text-7xl">
          {title}
        </h2>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
