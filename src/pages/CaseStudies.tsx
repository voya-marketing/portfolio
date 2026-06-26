import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CaseStudyCard from "@/components/portfolio/CaseStudyCard";
import FadeUp from "@/components/animations/FadeUp";
import MagneticButton from "@/components/shared/MagneticButton";
import SectionTitle from "@/components/shared/SectionTitle";
import { sortedCaseStudies } from "@/data/caseStudies";

const CONTACT_EMAIL = "mailto:voyamarketing3@gmail.com";

export default function CaseStudies() {
  return (
    <main className="relative min-h-screen bg-voya-black text-slate-950">
      <Navbar />

      {/* ── COMING SOON OVERLAY ── */}
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-white/70 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="mx-auto max-w-lg px-8 text-center"
        >
          <div className="mx-auto mb-8 flex size-16 items-center justify-center border border-voya-border bg-voya-surface text-voya-royal shadow-[0_18px_50px_rgba(0,85,255,0.12)]">
            <Wrench aria-hidden="true" size={26} />
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-voya-electric">
            Coming Soon
          </p>
          <span className="mx-auto mt-5 block h-px w-16 bg-voya-royal" />
          <h2 className="mt-6 font-display text-4xl font-black leading-[1.02] md:text-5xl">
            We&apos;re building this page
          </h2>
          <p className="mx-auto mt-5 max-w-sm text-base leading-7 text-voya-muted">
            Our case-study library is in production. Check back soon — or reach
            out to see the work directly.
          </p>
          <div className="mt-9 flex justify-center">
            <MagneticButton href={CONTACT_EMAIL}>Get in Touch</MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-6 pb-16 pt-36 md:px-20 md:pb-24 md:pt-44">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,85,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,85,255,0.06)_1px,transparent_1px)] bg-[size:96px_96px] opacity-60" />
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-voya-royal/10 to-transparent" />
        <div className="relative mx-auto max-w-[1440px]">
          <SectionTitle
            eyebrow="Case Studies"
            title="Real campaigns. Real reach."
            copy="From grand openings to always-on content systems — every engagement is engineered to win attention and built to compound it."
          />
        </div>
      </section>

      {/* ── CASE STUDIES GRID ── */}
      <section className="px-6 pb-24 md:px-20 md:pb-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortedCaseStudies.map((item, index) => (
              <FadeUp key={item.id} delay={(index % 3) * 0.1}>
                <CaseStudyCard item={item} />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="border-t border-voya-border bg-voya-surface px-6 py-24 md:px-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-voya-electric">
            Let&apos;s Work Together
          </p>
          <span className="mx-auto mt-5 block h-px w-16 bg-voya-royal" />
          <h2 className="mt-6 font-display text-4xl font-black leading-[1.02] md:text-5xl">
            Have a campaign in mind?
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-7 text-voya-muted">
            We take on a limited number of brands each quarter. If you&apos;re
            building something ambitious, let&apos;s talk.
          </p>
          <div className="mt-9 flex justify-center">
            <MagneticButton href={CONTACT_EMAIL} variant="secondary">
              Start a Conversation
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
