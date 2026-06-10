import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/motion/Reveal";
import MagneticButton from "@/components/motion/MagneticButton";
import DrawLine from "@/components/motion/DrawLine";

const FOCUS_AREAS = [
  {
    index: "01",
    title: "Vertical Software",
    description:
      "Mission-critical software built for a specific industry, with high retention and recurring revenue.",
  },
  {
    index: "02",
    title: "Tech-Enabled Services",
    description:
      "Service businesses using technology to deliver differentiated value at scale.",
  },
  {
    index: "03",
    title: "Business Services",
    description:
      "Established services firms with durable relationships and clear room for operational gains.",
  },
  {
    index: "04",
    title: "Fleet-Based Services",
    description:
      "Field and fleet-driven operations with recurring service revenue, route density, and durable local demand.",
  },
];

const INVESTMENT_CRITERIA = [
  {
    number: "01",
    title: "Repeat Customer Behavior",
    body: "A proven track record of predictability — rooted in high customer satisfaction, diversified bases, and consistent purchasing behavior.",
  },
  {
    number: "02",
    title: "Actionable Avenues for Growth",
    body: "We are growth oriented, supplementing strong core foundations with investment in existing and new opportunities.",
  },
  {
    number: "03",
    title: "Defensible End Market",
    body: "Enduring verticals that exhibit stability, acyclicality, and durable go-forward growth potential.",
  },
  {
    number: "04",
    title: "Strong, High-Integrity Teams",
    body: "Honest, capable management teams with the character, judgment, and ambition to build enduring businesses.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero
        size="full"
        backdrop
        scrollIndicator
        lines={[
          "Building exceptional",
          <span key="l2">
            businesses<span className="text-accent">.</span>
          </span>,
        ]}
        subtext="We partner with founder-owned companies in the lower middle market to drive durable growth and lasting value."
        cta={
          <>
            <MagneticButton href="/team" variant="primary">
              <span>Meet the team</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </MagneticButton>
            <MagneticButton href="/contact" variant="ghost">
              <span>Get in touch</span>
            </MagneticButton>
          </>
        }
      />

      {/* About — asymmetric: a POV statement against tightened supporting copy. */}
      <section className="section-y">
        <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="meta mb-7">Who we are</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="display-2 text-ink">
                We partner with the companies that form the backbone of their
                industries.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.1}>
              <div className="space-y-6 text-lg leading-relaxed text-ink-muted">
                <p>
                  Anza Partners invests in lower middle market companies with a
                  growth-focused approach, bringing deep vertical and operational
                  expertise to complement established, successful firms and the
                  people who built them.
                </p>
                <p>
                  We maintain a seasoned committee of operators and advisors to
                  work alongside management in building and executing on
                  value-creation plans — drawing on decades of experience
                  building leading companies across technology and services.
                </p>
              </div>
              <Link
                href="/team"
                className="group mt-9 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
              >
                <span>Read about the team</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Focus areas — surface panels (a distinct family from the criteria list). */}
      <section className="section-y relative">
        <DrawLine className="absolute inset-x-0 top-0" />
        <div className="container-x">
          <Reveal>
            <h2 className="display-2 max-w-2xl text-ink">
              Sectors where our expertise compounds.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {FOCUS_AREAS.map((area, i) => (
              <Reveal key={area.title} delay={0.06 * i}>
                <div className="group relative h-full overflow-hidden rounded-xl border border-line bg-surface p-8 transition-colors duration-300 hover:bg-surface-2">
                  <span
                    aria-hidden
                    className="absolute right-5 top-4 font-mono text-sm text-ink-faint/70"
                  >
                    {area.index}
                  </span>
                  <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-accent/0 via-accent to-accent/0 transition-transform duration-500 group-hover:scale-x-100" />
                  <h3 className="display-3 mt-6 text-ink">{area.title}</h3>
                  <p className="mt-4 leading-relaxed text-ink-muted">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Investment criteria — full-width editorial rows with mono numerals. */}
      <section className="section-y relative">
        <DrawLine className="absolute inset-x-0 top-0" />
        <div className="container-x">
          <Reveal>
            <h2 className="display-2 max-w-2xl text-ink">
              What defines a great partnership.
            </h2>
          </Reveal>

          <div className="mt-16">
            {INVESTMENT_CRITERIA.map((item, i) => (
              <Reveal key={item.number} delay={0.05 * i}>
                <DrawLine />
                <div className="grid grid-cols-1 gap-5 py-10 lg:grid-cols-12 lg:gap-10">
                  <div className="lg:col-span-3">
                    <span className="font-mono text-2xl text-accent">
                      {item.number}
                    </span>
                  </div>
                  <div className="lg:col-span-9">
                    <h3 className="display-3 text-ink">{item.title}</h3>
                    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-muted">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing — a single statement band. */}
      <section className="section-y relative bg-surface/50">
        <DrawLine className="absolute inset-x-0 top-0" />
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="display-2 text-ink">
                Tell us what you&rsquo;re building.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
                We partner with a small number of exceptional companies each
                year. We&rsquo;d like to hear about yours.
              </p>
              <div className="mt-10 flex justify-center">
                <MagneticButton href="/contact" variant="primary">
                  <span>Get in touch</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
