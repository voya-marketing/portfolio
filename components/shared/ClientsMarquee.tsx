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

function Band({ reverse = false }: Readonly<{ reverse?: boolean }>) {
  // Second band runs the list reversed so the two strips never mirror each other.
  const ordered = reverse ? [...clients].reverse() : clients;
  // Repeated wide enough to fill the over-sized strip, then duplicated once so
  // translateX(-50%) loops seamlessly.
  const base = [...ordered, ...ordered, ...ordered];
  const track = [...base, ...base];

  return (
    <div className="overflow-hidden bg-white py-4 shadow-[0_10px_40px_rgba(0,0,0,0.45)]">
      <div
        className={`flex w-max items-center gap-12 pr-12 md:gap-20 md:pr-20 [animation:voya-marquee_45s_linear_infinite] ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {track.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap font-display text-2xl font-black uppercase tracking-tight text-neutral-500 transition-colors md:text-3xl"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ClientsMarquee() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-20 md:py-28">
      <h3 className="mb-14 text-center font-display text-4xl font-black tracking-tight text-white md:mb-20 md:text-6xl">
        Trusted By
      </h3>

      {/* Skewed, over-sized band stack — corners bleed off-screen and are clipped. */}
      <div className="w-[140%] -translate-x-[20%] -rotate-6 space-y-4">
        <Band />
        <Band reverse />
      </div>
    </section>
  );
}
