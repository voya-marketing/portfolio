import Link from "next/link";

const links = [
  "Home",
  "Portfolio",
  "Services",
  "About",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-voya-border bg-white/85 text-slate-950 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.25em]"
        >
          VOYA
        </Link>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link}
              href="#"
              className="text-sm text-slate-500 transition hover:text-voya-royal"
            >
              {link}
            </Link>
          ))}
        </nav>

        <button className="border border-voya-royal bg-voya-royal px-5 py-2 text-sm text-white transition hover:border-voya-electric hover:bg-voya-electric">
          Let’s Talk
        </button>
      </div>
    </header>
  );
}
