import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-voya-border bg-voya-surface text-slate-950">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-6 py-14 md:flex-row md:items-end md:justify-between md:px-20">
        <div>
          <img src="/voya_logo_blue.svg" alt="VOYA Marketing" className="h-10 w-auto object-contain" />
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-voya-muted">
            &copy; 2026 VOYA Marketing. Portfolio presentation.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
          <Link className="transition hover:text-voya-royal" to="/portfolio">
            Portfolio
          </Link>
          <Link className="transition hover:text-voya-royal" to="/case-studies">
            Case Studies
          </Link>
          <a className="transition hover:text-voya-royal" href="mailto:voyamarketing3@gmail.com">
            Inquiry
          </a>
          <a className="transition hover:text-voya-royal" href="#">
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
}
