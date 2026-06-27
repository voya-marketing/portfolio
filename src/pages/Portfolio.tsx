import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import PortfolioFilter from "@/components/portfolio/PortfolioFilter";
import SectionTitle from "@/components/shared/SectionTitle";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-voya-black text-slate-950">
      <Navbar />
      <section className="mx-auto max-w-[1440px] px-6 pb-16 pt-44 md:px-20 md:pb-24 md:pt-44">
        <SectionTitle
          eyebrow="Portfolio Library"
          title="A curated archive of reels, posts, and stories."
          copy="Filter by category to shape the portfolio around VOYA's core social marketing formats."
        />
        <PortfolioFilter />
      </section>
      <Footer />
    </main>
  );
}
