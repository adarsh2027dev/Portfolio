type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-[color:var(--text-soft)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-[color:var(--text-muted)] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
