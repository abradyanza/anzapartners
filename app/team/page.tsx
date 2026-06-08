import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";
import SectionLabel from "@/components/SectionLabel";
import TeamCard from "@/components/TeamCard";
import AdvisorCard from "@/components/AdvisorCard";
import { ADVISORS, FOUNDERS } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the founders, operating partners, and senior advisors of Anza Partners — a private investment firm focused on the lower middle market.",
};

export default function TeamPage() {
  return (
    <>
      <Hero
        size="medium"
        heading="Our Team"
        subtext="With a dedicated team of experienced investment professionals, Anza Partners is committed to taking an innovative approach to helping businesses maximize their long-term value and reach their next stage of growth."
      />

      {/* Founders */}
      <section className="section-y bg-white">
        <div className="container-x">
          <FadeIn>
            <SectionLabel>Founders</SectionLabel>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
            {FOUNDERS.map((founder, i) => (
              <FadeIn key={founder.name} delay={0.1 + i * 0.1}>
                <TeamCard member={founder} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t border-slate-200" />

      {/* Operating Partners & Senior Advisors */}
      <section className="section-y bg-light">
        <div className="container-x">
          <FadeIn>
            <SectionLabel>Operating Partners &amp; Senior Advisors</SectionLabel>
          </FadeIn>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <FadeIn delay={0.1} className="lg:col-span-5">
              <h2 className="font-serif text-4xl md:text-5xl text-navy leading-[1.1]">
                Dedication. Expertise. Purpose.
              </h2>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:col-span-7">
              <p className="text-slate text-base md:text-lg leading-relaxed">
                Our operating partners and advisors have years of deep
                operational expertise spanning from startups to billion dollar
                enterprises, combined with decades of investment experience,
                allowing us to provide valuable insights and unique guidance to
                the companies we work with.
              </p>
            </FadeIn>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {ADVISORS.map((advisor, i) => (
              <FadeIn key={advisor.name} delay={0.1 + i * 0.08}>
                <AdvisorCard member={advisor} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
