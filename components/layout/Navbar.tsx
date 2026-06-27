import { Link } from "react-router-dom";

const links = [
  { label: "Reels", href: "/portfolio/reels" },
  { label: "Posts", href: "/portfolio/posts" },
  { label: "Stories", href: "/portfolio/stories" },
  { label: "Case Studies", href: "/case-studies" }
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-voya-border bg-white/85 text-slate-950 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:h-24 md:px-20">
        <Link to="/" className="flex items-center">
          <img src="/voya_logo_blue.svg" alt="VOYA Marketing" className="h-11 w-auto object-contain drop-shadow-sm md:h-12" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="relative font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500 transition hover:text-voya-royal"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="mailto:info@voyamarketing.in"
          className="inline-flex rounded-full border border-voya-royal bg-gradient-to-r from-voya-royal to-voya-electric px-5 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white shadow-[0_14px_32px_rgba(0,85,255,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(0,85,255,0.26)] md:px-6 md:py-3 md:text-[11px] md:tracking-[0.2em]"
        >
          Contact
        </a>
      </div>

      <nav
        className="grid grid-cols-4 gap-2 border-t border-voya-border px-4 py-2.5 md:hidden"
        aria-label="Mobile navigation"
      >
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="flex items-center justify-center rounded-full border border-voya-border px-1 py-2 text-center font-mono text-[9px] uppercase leading-tight tracking-[0.1em] text-slate-600 transition hover:border-voya-royal hover:text-voya-royal"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
