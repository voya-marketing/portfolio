export default function SectionTitle({
  eyebrow,
  title,
  copy
}: Readonly<{
  eyebrow: string;
  title: string;
  copy?: string;
}>) {
  return (
    <div className="mb-14 max-w-5xl md:mb-20">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-voya-electric">
        {eyebrow}
      </p>
      <h2 className="mt-5 max-w-4xl font-display text-4xl font-black leading-[1.02] md:text-6xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-6 max-w-2xl text-base leading-7 text-voya-muted md:text-lg">
          {copy}
        </p>
      ) : null}
    </div>
  );
}
