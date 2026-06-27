import { Link } from "react-router-dom";
import { ArrowUp, Mail, Phone } from "lucide-react";

type IconProps = { size?: number; className?: string };

function InstagramIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const EMAIL = "info@voyamarketing.in";
const PHONE_DISPLAY = "+91 89808 03321";
const PHONE_HREF = "tel:+918980803321";

const portfolioLinks = [
  { label: "Reels", href: "/portfolio/reels" },
  { label: "Posts", href: "/portfolio/posts" },
  { label: "Stories", href: "/portfolio/stories" },
  { label: "Case Studies", href: "/case-studies" }
];

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Privacy", href: "/privacy" }
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/voya.marketing/", Icon: InstagramIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/voya-marketing/", Icon: LinkedinIcon }
];

export default function Footer() {
  return (
    <footer className="border-t border-voya-border bg-voya-surface text-slate-950">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-20 md:py-20">
        {/* Top — brand + columns */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr] lg:gap-12">
          {/* Brand */}
          <div className="max-w-md">
            <img src="/voya_logo_blue.svg" alt="VOYA Marketing" className="h-10 w-auto object-contain" />
            <p className="mt-6 text-base leading-7 text-voya-muted">
              A premium portfolio for short-form reels, social posts, and story
              sequences built for modern brand attention.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-voya-border text-slate-600 transition hover:-translate-y-0.5 hover:border-voya-royal hover:text-voya-royal"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Portfolio */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
              Portfolio
            </h3>
            <ul className="mt-5 space-y-3">
              {portfolioLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-mono text-[12px] uppercase tracking-[0.16em] text-slate-600 transition hover:text-voya-royal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-mono text-[12px] uppercase tracking-[0.16em] text-slate-600 transition hover:text-voya-royal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group inline-flex items-start gap-3 text-slate-600 transition hover:text-voya-royal"
                >
                  <Mail aria-hidden="true" size={18} className="mt-0.5 shrink-0 text-voya-royal" />
                  <span className="break-all text-[15px] leading-6">{EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-3 text-slate-600 transition hover:text-voya-royal"
                >
                  <Phone aria-hidden="true" size={18} className="shrink-0 text-voya-royal" />
                  <span className="text-[15px] leading-6">{PHONE_DISPLAY}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-voya-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-voya-muted">
            &copy; 2026 VOYA Marketing. Portfolio presentation.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 self-start font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 transition hover:text-voya-royal sm:self-auto"
          >
            Back to top
            <ArrowUp aria-hidden="true" size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
