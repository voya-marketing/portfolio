import { useEffect, useState } from "react";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import MagneticButton from "@/components/shared/MagneticButton";
import SectionTitle from "@/components/shared/SectionTitle";

const LAST_UPDATED = "June 27, 2026";
const CONTACT_EMAIL = "info@voyamarketing.in";

type Section = {
  id: string;
  heading: string;
  body: Array<string | string[]>;
};

const sections: Section[] = [
  {
    id: "overview",
    heading: "1. Overview",
    body: [
      'VOYA Marketing ("VOYA," "we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect when you visit this portfolio website (the "Site"), how we use it, and the choices available to you.',
      "By using the Site or contacting us, you agree to the practices described in this policy. If you do not agree, please discontinue use of the Site."
    ]
  },
  {
    id: "information-we-collect",
    heading: "2. Information We Collect",
    body: [
      "We collect the following categories of information:",
      [
        "Information you provide. When you contact us by email or through an inquiry link, we receive your name, email address, and any details you choose to include in your message.",
        "Usage and device data. Like most websites, we automatically collect technical information such as your IP address, browser type, device type, operating system, referring pages, and the dates and times of your visits.",
        "Cookies and similar technologies. We may use cookies and local storage to keep the Site functioning correctly and to understand how it is used."
      ]
    ]
  },
  {
    id: "how-we-use",
    heading: "3. How We Use Your Information",
    body: [
      "We use the information we collect to:",
      [
        "Respond to your inquiries and communicate with you about potential or ongoing projects.",
        "Operate, maintain, and improve the Site and its content.",
        "Monitor and analyze traffic, usage, and trends to enhance the user experience.",
        "Protect the security and integrity of the Site and prevent fraud or abuse.",
        "Comply with applicable legal obligations."
      ]
    ]
  },
  {
    id: "cookies",
    heading: "4. Cookies & Analytics",
    body: [
      "Cookies are small text files stored on your device. We use them to remember preferences and measure Site performance. You can control or disable cookies through your browser settings, though some features of the Site may not function properly as a result.",
      "We may use third-party analytics services to understand how visitors interact with the Site. These providers process data on our behalf and are bound by their own privacy policies."
    ]
  },
  {
    id: "sharing",
    heading: "5. How We Share Information",
    body: [
      "We do not sell or rent your personal information. We may share information only in the following limited circumstances:",
      [
        "Service providers. With trusted vendors who perform services on our behalf, such as hosting and analytics, under confidentiality obligations.",
        "Legal requirements. When required by law, regulation, legal process, or an enforceable governmental request.",
        "Protection of rights. To enforce our terms, or to protect the rights, property, or safety of VOYA, our users, or the public."
      ]
    ]
  },
  {
    id: "retention",
    heading: "6. Data Retention",
    body: [
      "We retain personal information only for as long as necessary to fulfill the purposes described in this policy, comply with our legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we take reasonable steps to delete or anonymize it."
    ]
  },
  {
    id: "your-rights",
    heading: "7. Your Rights & Choices",
    body: [
      "Depending on your location, you may have rights regarding your personal information, including the right to:",
      [
        "Access the personal information we hold about you.",
        "Request correction of inaccurate or incomplete information.",
        "Request deletion of your personal information.",
        "Object to or restrict certain processing of your information.",
        "Withdraw consent where processing is based on consent."
      ],
      "To exercise any of these rights, contact us using the details below. We will respond within the timeframe required by applicable law."
    ]
  },
  {
    id: "security",
    heading: "8. Data Security",
    body: [
      "We implement reasonable technical and organizational measures designed to protect your information against unauthorized access, loss, misuse, or alteration. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security."
    ]
  },
  {
    id: "third-party",
    heading: "9. Third-Party Links",
    body: [
      "The Site may contain links to third-party websites or services that we do not operate. We are not responsible for the privacy practices or content of those third parties. We encourage you to review the privacy policy of any site you visit."
    ]
  },
  {
    id: "children",
    heading: "10. Children's Privacy",
    body: [
      "The Site is not directed to children under the age of 13 (or the equivalent minimum age in your jurisdiction), and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can remove it."
    ]
  },
  {
    id: "international",
    heading: "11. International Visitors",
    body: [
      "Your information may be processed and stored in countries other than the one in which you reside. By using the Site, you consent to the transfer of your information to such locations, which may have data-protection laws that differ from those in your jurisdiction."
    ]
  },
  {
    id: "changes",
    heading: "12. Changes to This Policy",
    body: [
      'We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. When we do, we will revise the "Last updated" date at the top of this page. We encourage you to review this policy periodically.'
    ]
  }
];

export default function Privacy() {
  const [activeId, setActiveId] = useState<string>(sections[0].id);

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen bg-voya-black text-slate-950">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden px-6 pb-14 pt-44 md:px-20 md:pb-20 md:pt-44">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,85,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,85,255,0.06)_1px,transparent_1px)] bg-[size:96px_96px] opacity-60" />
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-voya-royal/10 to-transparent" />
        <div className="relative mx-auto max-w-[1440px]">
          <SectionTitle
            eyebrow={`Legal · Last updated ${LAST_UPDATED}`}
            title="Privacy Policy"
            copy="This policy explains how VOYA Marketing collects, uses, and protects information when you use this site."
          />
        </div>
      </section>

      {/* ── BODY ── */}
      <section className="px-6 pb-24 md:px-20 md:pb-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
          {/* Table of contents */}
          <aside className="hidden lg:block">
            <nav className="sticky top-32" aria-label="Privacy sections">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-slate-400">
                On this page
              </p>
              <ul className="mt-5 space-y-3">
                {sections.map((section) => {
                  const isActive = section.id === activeId;
                  return (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        aria-current={isActive ? "true" : undefined}
                        className={`font-mono text-[11px] uppercase tracking-[0.14em] transition ${
                          isActive
                            ? "font-medium text-voya-royal"
                            : "text-slate-400 hover:text-voya-royal"
                        }`}
                      >
                        {section.heading}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div className="max-w-3xl">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-32 border-t border-voya-border py-10 first:border-t-0 first:pt-0">
                <h2 className="font-display text-2xl font-black leading-tight md:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-5">
                  {section.body.map((block, index) =>
                    Array.isArray(block) ? (
                      <ul key={index} className="space-y-3">
                        {block.map((item) => (
                          <li key={item} className="relative pl-6 text-base leading-7 text-slate-600">
                            <span className="absolute left-0 top-[0.7em] size-1.5 -translate-y-1/2 rounded-full bg-voya-royal" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p key={index} className="text-base leading-7 text-slate-600">
                        {block}
                      </p>
                    )
                  )}
                </div>
              </section>
            ))}

            {/* Contact */}
            <section id="contact" className="scroll-mt-32 border-t border-voya-border py-10">
              <h2 className="font-display text-2xl font-black leading-tight md:text-3xl">
                13. Contact Us
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-600">
                If you have any questions about this Privacy Policy or how we
                handle your information, please reach out to us at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-voya-royal underline-offset-4 transition hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
              <div className="mt-8">
                <MagneticButton href={`mailto:${CONTACT_EMAIL}`}>
                  Contact VOYA
                </MagneticButton>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
