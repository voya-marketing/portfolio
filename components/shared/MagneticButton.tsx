import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function MagneticButton({
  href,
  children,
  variant = "primary"
}: Readonly<{
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}>) {
  const classes =
    variant === "primary"
      ? "border-voya-royal bg-gradient-to-r from-voya-royal to-voya-electric text-white shadow-[0_14px_32px_rgba(0,85,255,0.2)] hover:shadow-[0_18px_42px_rgba(0,85,255,0.26)]"
      : "border-voya-border bg-white text-voya-royal shadow-[0_12px_28px_rgba(0,85,255,0.08)] hover:border-voya-electric hover:text-voya-electric";

  const className = `inline-flex items-center gap-3 rounded-full border px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] transition hover:-translate-y-0.5 ${classes}`;

  if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={className}>
        {children}
        <ArrowUpRight aria-hidden="true" size={16} />
      </a>
    );
  }

  return (
    <Link to={href} className={className}>
      {children}
      <ArrowUpRight aria-hidden="true" size={16} />
    </Link>
  );
}
