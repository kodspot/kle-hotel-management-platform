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
    <section id={id} data-chapter className={`mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-32 ${className}`}>
      <div data-chapter-content className="lux-glass-panel rounded-[2rem] p-8 md:p-12">
        <p data-reveal className="text-xs uppercase tracking-[0.28em] text-zinc-500">
          {eyebrow}
        </p>
        <h2 data-reveal className="mt-4 max-w-3xl text-3xl leading-tight tracking-tight text-zinc-100 md:text-6xl">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
