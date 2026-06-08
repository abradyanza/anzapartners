import type { Metadata } from "next";
import Hero from "@/components/Hero";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Anza Partners to discuss potential transactions, partnership opportunities, or any of our portfolio companies.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        size="short"
        heading="Contact Us"
        subtext="Whether you're looking for a strategic partner to help you grow or are considering a sale, we would love to get in touch. Please feel free to reach out to discuss questions around potential transactions or any of our portfolio companies."
      />

      <section className="section-y bg-white">
        <div className="container-x">
          <FadeIn>
            <div className="max-w-2xl mx-auto">
              <ContactForm />

              <div className="mt-16 pt-10 border-t border-slate-200 text-center">
                <p className="text-sm text-slate">
                  Or email us directly at{" "}
                  <a
                    href="mailto:info@anzapartners.com"
                    className="text-steel font-medium hover:text-navy transition-colors"
                  >
                    info@anzapartners.com
                  </a>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
