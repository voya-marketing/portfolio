import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Reels", href: "/portfolio/reels" },
  { label: "Posts", href: "/portfolio/posts" },
  { label: "Stories", href: "/portfolio/stories" },
  { label: "Case Studies", href: "/case-studies" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-voya-border bg-white/85 text-slate-950 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-[1440px] items-center justify-between px-6 md:px-20">
        <Link to="/" className="flex items-center">
          <img src="/voya_logo_blue.svg" alt="VOYA Marketing" className="h-12 w-auto object-contain drop-shadow-sm" />
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
          href="mailto:voyamarketing3@gmail.com"
          className="hidden rounded-full border border-voya-royal bg-gradient-to-r from-voya-royal to-voya-electric px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_14px_32px_rgba(0,85,255,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(0,85,255,0.26)] md:inline-flex"
        >
          Contact
        </a>

        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((c) => !c)}
          className="inline-flex size-11 items-center justify-center border border-voya-border text-slate-950 md:hidden"
          type="button"
        >
          {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-voya-border bg-white px-6 py-6 md:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="font-mono text-[12px] uppercase tracking-[0.22em] text-slate-600 transition hover:text-voya-royal"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:voyamarketing3@gmail.com"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full border border-voya-royal bg-gradient-to-r from-voya-royal to-voya-electric px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_14px_32px_rgba(0,85,255,0.2)] transition"
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
