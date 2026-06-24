import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import ClientsMarquee from "@/components/shared/ClientsMarquee";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import SectionTitle from "@/components/shared/SectionTitle";

export default function Home() {
  return (
    <main className="min-h-screen bg-voya-black text-slate-950">
      <Navbar />
      <PortfolioHero />
      <ClientsMarquee />

      <section id="selects" className="mx-auto max-w-[1440px] px-6 py-24 md:px-20 md:py-32">
        <SectionTitle
          eyebrow="Selected Work"
          title="Portfolio systems for reels, posts, and stories."
          copy="A focused showcase for the core marketing assets VOYA produces, organized so each category can grow into full portfolio case studies."
        />
        <PortfolioGrid />
      </section>

      <Footer />
    </main>
  );
}
