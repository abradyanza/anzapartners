import Link from "next/link";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";
import SectionLabel from "@/components/SectionLabel";

const FOCUS_AREAS = [
  {
    title: "Vertical Software",
    description:
      "Mission-critical software built for specific industries with high customer retention and recurring revenue.",
  },
  {
    title: "Tech-Enabled Services",
    description:
      "Service businesses leveraging proprietary technology to deliver differentiated value at scale.",
  },
  {
    title: "Business Services",
    description:
      "Established services firms with durable customer relationships and clear avenues for operational improvement.",
  },
];

const INVESTMENT_CRITERIA = [
  {
    number: "01",
    title: "Repeat Customer Behavior",
    body: "We look for businesses that have a proven track record of predictability, rooted in high levels of customer satisfaction, diversified customer bases, and consistent purchasing behavior.",
  },
  {
    number: "02",
    title: "Actionable Avenues for Growth",
    body: "We are growth oriented and look to supplement businesses' strong core foundations with investment in existing and new growth opportunities.",
  },
  {
    number: "03",
    title: "Defensible End Market",
    body: "We focus on enduring verticals and end markets, which exhibit stability, acyclicality, and go-forward growth potential.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        size="full"
        scrollIndicator
        heading={
          <>
            Building Exceptional
            <br />
            <span className="italic text-sky">Businesses</span>
          </>
        }
        subtext="We partner with founder-owned companies in the lower middle market to drive long-term growth and value creation."
        cta={
          <Link
            href="/team"
            className="group inline-flex items-center gap-3 bg-white text-navy px-7 py-4 text-sm font-medium tracking-wide hover:bg-light transition-colors"
          >
            <span>Meet the Team</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        }
      />

      {/* Our Story */}
      <section className="section-y bg-white">
        <div className="container-x">
          <FadeIn>
            <SectionLabel>About</SectionLabel>
          </FadeIn>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <FadeIn delay={0.1} className="lg:col-span-5">
              <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] text-navy">
                Who We Are
              </h2>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:col-span-7 space-y-6 text-slate text-base md:text-lg leading-relaxed">
              <p>
                Anza Partners is a private investment firm that focuses on
                investments in lower middle market companies. Our approach is
                growth-focused in nature, and we aim to bring deep vertical and
                operational expertise to complement established, successful
                small firms and their people.
              </p>
              <p>
                Anza maintains a highly experienced committee of advisors and
                operating executives, which focuses on development and
                implementation of value creation plans in partnership with our
                management teams. Our team has extensive experience in private
                company investment and deep sector knowledge across technology
                and services-oriented businesses.
              </p>
              <p>
                Our commitment is to provide our partner companies with the
                resources and expertise they need to succeed. We are passionate
                about helping our partners build and grow their businesses,
                creating long-term value for all stakeholders.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-steel font-medium hover:text-navy transition-colors"
                >
                  <span>Get in Touch</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <hr className="border-t border-slate-200" />

      {/* Focus Areas */}
      <section className="section-y bg-light">
        <div className="container-x">
          <FadeIn>
            <SectionLabel>Where We Excel</SectionLabel>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="mt-8 font-serif text-4xl md:text-5xl text-navy max-w-3xl leading-[1.1]">
              Sectors where our expertise compounds.
            </h2>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-slate-200">
            {FOCUS_AREAS.map((area, i) => (
              <FadeIn
                key={area.title}
                delay={0.15 + i * 0.1}
                className="bg-light"
              >
                <div className="border-t-2 border-steel pt-8 pb-2 px-1 md:px-6 h-full">
                  <h3 className="font-serif text-2xl md:text-3xl text-navy">
                    {area.title}
                  </h3>
                  <p className="mt-4 text-slate text-base leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <p className="mt-16 text-sm text-silver leading-relaxed max-w-4xl">
              <span className="font-medium text-slate">Illustrative End Markets:</span>{" "}
              Government, Healthcare, Education, Professional Services, Farming
              &amp; Agriculture, Real Estate &amp; Construction, Aerospace
              &amp; Automotive, Transportation, Logistics
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="section-y bg-white">
        <div className="container-x">
          <FadeIn>
            <SectionLabel>What We Look For</SectionLabel>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="mt-8 font-serif text-4xl md:text-5xl text-navy max-w-3xl leading-[1.1]">
              The qualities that define a great partnership.
            </h2>
          </FadeIn>

          <div className="mt-20 space-y-16 md:space-y-20">
            {INVESTMENT_CRITERIA.map((item, i) => (
              <FadeIn key={item.number} delay={0.15 + i * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 border-t border-slate-200 pt-10">
                  <div className="lg:col-span-3">
                    <span className="font-serif text-6xl md:text-7xl text-steel leading-none">
                      {item.number}
                    </span>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="font-serif text-3xl md:text-4xl text-navy leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-slate text-base md:text-lg leading-relaxed max-w-3xl">
                      {item.body}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
