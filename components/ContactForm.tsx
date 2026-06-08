"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Role = "Bank or Business Broker" | "Business Owner" | "Investor" | "Other" | "";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  website: string;
  role: Role;
  message: string;
}

const INITIAL_STATE: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  website: "",
  role: "",
  message: "",
};

const ROLES: Role[] = [
  "Bank or Business Broker",
  "Business Owner",
  "Investor",
  "Other",
];

const inputClass =
  "w-full bg-transparent border-b border-slate-300 py-3 text-navy placeholder-silver focus:border-steel focus:outline-none transition-colors";
const labelClass = "block text-xs font-medium uppercase tracking-widest text-steel mb-1";

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [toast, setToast] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // No backend yet — log and surface a success toast. Wire up Formspree or
    // a similar provider here when ready.
    console.log("Contact form submission:", form);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setForm(INITIAL_STATE);
    setToast("Thank you. We'll be in touch shortly.");
    setTimeout(() => setToast(null), 5000);
  };

  return (
    <div className="relative">
      <form onSubmit={onSubmit} className="space-y-8" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div>
            <label htmlFor="firstName" className={labelClass}>
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              value={form.firstName}
              onChange={(e) => update("firstName", e.target.value)}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="lastName" className={labelClass}>
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              value={form.lastName}
              onChange={(e) => update("lastName", e.target.value)}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="website" className={labelClass}>
            Company Website
          </label>
          <input
            id="website"
            name="website"
            type="url"
            autoComplete="url"
            placeholder="https://"
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="role" className={labelClass}>
            I am a&hellip;
          </label>
          <select
            id="role"
            name="role"
            required
            value={form.role}
            onChange={(e) => update("role", e.target.value as Role)}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="" disabled>
              Select an option
            </option>
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            className={`${inputClass} resize-none`}
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={submitting}
            className="group inline-flex items-center gap-3 bg-navy text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-steel transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <span>{submitting ? "Sending…" : "Send Message"}</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </form>

      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-navy text-white px-6 py-4 text-sm border border-steel"
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
