import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Reveal from "@/components/motion/Reveal";
import TeamCard from "@/components/TeamCard";
import AdvisorCard from "@/components/AdvisorCard";
import { ADVISORS, FOUNDERS } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the founders, operating partners, and senior advisors of Anza Partners — a private investment firm focused on the lower middle market.",
};

export default function TeamPage() {
  return (
    <>
      <Hero
        size="medium"
        meta="The team"
        heading="Experienced operators and investors."
        subtext="A dedicated team taking a hands-on approach to helping founder-owned businesses reach their next stage of growth."
      />

      {/* Founders */}
      <section className="section-y border-t border-line/70">
        <div className="container-x">
          <Reveal>
            <h2 className="display-2 text-ink">Founders</h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-2">
            {FOUNDERS.map((founder, i) => (
              <Reveal key={founder.name} delay={0.08 * i}>
                <TeamCard member={founder} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Partners & Senior Advisors */}
      <section className="section-y border-t border-line/70 bg-surface/40">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <h2 className="display-2 text-ink">
                Dedication. Expertise. Purpose.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-relaxed text-ink-muted">
                Our operating partners and advisors pair deep operational
                experience — from startups to billion-dollar enterprises — with
                decades of investing, giving the companies we work with insight
                and guidance that is hard to find elsewhere.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
            {ADVISORS.map((advisor, i) => (
              <Reveal key={advisor.name} delay={0.06 * i}>
                <AdvisorCard member={advisor} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
