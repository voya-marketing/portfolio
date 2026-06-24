import FadeUp from "@/components/animations/FadeUp";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import { featuredPortfolioItems } from "@/data/portfolio";

export default function PortfolioGrid() {
  return (
    <div className="space-y-24 md:space-y-32">
      {featuredPortfolioItems.map((item, index) => (
        <FadeUp key={item.id} delay={index * 0.08}>
          <PortfolioCard item={item} featured />
        </FadeUp>
      ))}
    </div>
  );
}
