const clients = [
  "DHANKUBER",
  "SBR Prime",
  "Twilight Brew",
  "Cafe en Route",
  "PAZZ",
  "Mahendra Thal",
  "Verve",
  "Hariom",
];

function Row({ reverse = false }: Readonly<{ reverse?: boolean }>) {
  // Second row runs the list reversed so the two strips never mirror each other.
  const ordered = reverse ? [...clients].reverse() : clients;
  // Repeated wide enough to overflow the viewport, then duplicated once so
  // translateX(-50%) loops seamlessly.
  const base = [...ordered, ...ordered, ...ordered];
  const track = [...base, ...base];

  return (
    <div
      className={`flex w-max items-center gap-3 [animation:voya-marquee_40s_linear_infinite] [will-change:transform] md:gap-5 ${
        reverse ? "[animation-direction:reverse]" : ""
      }`}
    >
      {track.map((name, i) => (
        <div
          key={`${name}-${i}`}
          className="group flex shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-colors duration-300 hover:border-voya-royal/70 hover:bg-white/[0.08] md:gap-4 md:rounded-2xl md:px-6 md:py-4"
        >
          {/* Logo placeholder — swap for an <img> once logo links are provided. */}
          <span className="size-9 shrink-0 rounded-full bg-white md:size-11" aria-hidden="true" />
          <span className="whitespace-nowrap font-display text-base font-bold uppercase tracking-wide text-neutral-300 transition-colors duration-300 group-hover:text-white md:text-xl">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function ClientsMarquee() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-20 md:py-28">
      <h3 className="mb-12 text-center font-display text-4xl font-black tracking-tight text-white md:mb-16 md:text-6xl">
        Trusted By
      </h3>

      <div className="relative space-y-3 md:space-y-5">
        {/* Edge fades — chips dissolve into the background at both ends. */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent md:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent md:w-40" />

        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
