import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Reveal from "@/components/motion/Reveal";
import DrawLine from "@/components/motion/DrawLine";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Anza Partners to discuss potential transactions, partnership opportunities, or any of our portfolio companies.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        size="short"
        meta="Contact"
        heading="Let's talk."
        subtext="Whether you're seeking a strategic partner to grow or considering a sale, we'd welcome the conversation."
      />

      <section className="section-y relative">
        <DrawLine className="absolute inset-x-0 top-0" />
        <div className="container-x">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <h2 className="display-3 text-ink">Start a conversation</h2>
              <p className="mt-5 leading-relaxed text-ink-muted">
                Tell us a little about you and your business. We read every
                message and respond personally.
              </p>
              <div className="mt-8 border-t border-line pt-6">
                <p className="meta mb-2">Direct</p>
                <a
                  href="mailto:info@anzapartners.com"
                  className="text-ink-muted transition-colors hover:text-accent"
                >
                  info@anzapartners.com
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
