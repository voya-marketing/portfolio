type Client = {
  name: string;
  // Path under /public. Omit when we don't have a logo yet — the chip then
  // falls back to the plain white circle.
  logo?: string;
};

const clients: Client[] = [
  { name: "DHANKUBER", logo: "/Logos/Shree Dhankuber.svg" },
  { name: "SBR Prime", logo: "/Logos/SBR Prime.svg" },
  { name: "Twilight Brew", logo: "/Logos/Twilight Brew.svg" },
  { name: "Cafe en Route", logo: "/Logos/Cafe En Route.svg" },
  { name: "PAZZ", logo: "/Logos/Pazz Cafe.svg" },
  { name: "Mahendra Thal", logo: "/Logos/Shree Mahendra Thal.svg" },
  { name: "Verve", logo: "/Logos/Verve Cafe.svg" },
  { name: "Hariom", logo: "/Logos/Hari Om Kitchen.svg" },
  // Logos that had no matching name above — added with their own names.
  { name: "In Ten Fashion", logo: "/Logos/In Ten Fashion.svg" },
  { name: "In Trend Fashion", logo: "/Logos/In Trend Fashion.svg" },
  { name: "Kaffeella Cafe", logo: "/Logos/Kaffeella Cafe.svg" },
  { name: "Kartos Designz", logo: "/Logos/Kartos Designz.svg" },
  { name: "Ozone Fashion", logo: "/Logos/Ozone Fashion.svg" },
  { name: "Shree Goverdhan Bakery", logo: "/Logos/Shree Goverdhan Bakery.svg" },
  { name: "Shree Mahendra Craters", logo: "/Logos/Shree Mahendra Craters.svg" },
  { name: "Shree Mahendra Palace", logo: "/Logos/Shree Mahendra Palace.svg" },
  { name: "Slices n Tea", logo: "/Logos/Silces n Tea.svg" },
  { name: "Veolve Tech", logo: "/Logos/Veolve Tech.svg" },
  { name: "Ishita's Art Studio", logo: "/Logos/Ishita's Art Studio.svg" },
  { name: "Butterfly Collection", logo: "/Logos/Butterfly Collection.svg" },
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
      className={`flex w-max items-center gap-3 [animation:voya-marquee_110s_linear_infinite] [will-change:transform] md:gap-5 ${
        reverse ? "[animation-direction:reverse]" : ""
      }`}
    >
      {track.map((client, i) => (
        <div
          key={`${client.name}-${i}`}
          className="group flex shrink-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition-colors duration-300 hover:border-voya-royal/70 hover:bg-white/[0.08] md:gap-4 md:rounded-2xl md:px-6 md:py-4"
        >
          {/* White circle backdrop keeps dark SVG logos visible; stays empty
              for clients we don't have a logo for yet. */}
          <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white md:size-11">
            {client.logo ? (
              <img
                src={client.logo}
                alt=""
                loading="eager"
                decoding="async"
                className="size-full scale-125 object-contain"
              />
            ) : null}
          </span>
          <span className="whitespace-nowrap font-display text-base font-bold uppercase tracking-wide text-neutral-300 transition-colors duration-300 group-hover:text-white md:text-xl">
            {client.name}
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

      {/* Narrow mask fades chips into the bg only at the very edges — smooth,
          and (unlike a dark overlay) it never greys the white logo circles. */}
      <div className="space-y-3 [-webkit-mask-image:linear-gradient(to_right,transparent,black_28px,black_calc(100%_-_28px),transparent)] [mask-image:linear-gradient(to_right,transparent,black_28px,black_calc(100%_-_28px),transparent)] md:space-y-5">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
