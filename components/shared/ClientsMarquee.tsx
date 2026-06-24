const clients = [
  { name: "DHANKUBER",             thumb: "/reels/thumbnails/grand-opening/grand-opening-grand-opening-dhankuber.webp" },
  { name: "SBR Prime Sports Turf", thumb: "/reels/thumbnails/grand-opening/grand-opening-sbr-grand-opening.webp" },
  { name: "Twilight Brew",         thumb: "/posts/reviews/review-twilight-brew.webp" },
  { name: "Cafe en Route",         thumb: "/posts/reviews/review-enroute.webp" },
  { name: "PAZZ",                  thumb: "/reels/thumbnails/grand-opening/grand-opening-pazz-coming-soon.webp" },
  { name: "Mahendra Thal",         thumb: "/reels/thumbnails/montage/montage-mahendra-thal.webp" },
  { name: "Verve",                 thumb: "/stories/verve-stories-1.jpg" },
  { name: "Hariom",                thumb: "/posts/food/food-hariom-dal-baati.webp" },
];

const doubled = [...clients, ...clients];

export default function ClientsMarquee() {
  return (
    <section
      style={{ overflow: "hidden", borderTop: "1px solid rgba(0,85,255,0.14)", borderBottom: "1px solid rgba(0,85,255,0.14)", background: "#fff", paddingTop: "2rem", paddingBottom: "2rem" }}
    >
      <p
        style={{ textAlign: "center", fontFamily: "monospace", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.32em", color: "#64748b", marginBottom: "1.5rem" }}
      >
        Brands We&apos;ve Worked With
      </p>

      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            width: "max-content",
            gap: "1.5rem",
            paddingLeft: "0.75rem",
            animation: "voya-marquee 30s linear infinite",
          }}
        >
          {doubled.map((client, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexShrink: 0,
                alignItems: "center",
                gap: "0.75rem",
                borderRadius: "9999px",
                border: "1px solid #dbeafe",
                background: "#f8fafc",
                padding: "0.625rem 1.25rem 0.625rem 0.625rem",
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={client.thumb}
                alt={client.name}
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  flexShrink: 0,
                  borderRadius: "9999px",
                  objectFit: "cover",
                  outline: "2px solid #fff",
                }}
              />
              <span
                style={{
                  whiteSpace: "nowrap",
                  fontFamily: "monospace",
                  fontSize: "11px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "#334155",
                }}
              >
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
