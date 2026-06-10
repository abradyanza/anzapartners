"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { TeamMember } from "@/data/team";
import Headshot from "./Headshot";
import LinkedInIcon from "./LinkedInIcon";

interface AdvisorCardProps {
  member: TeamMember;
}

export default function AdvisorCard({ member }: AdvisorCardProps) {
  const [open, setOpen] = useState(false);
  const contentId = `advisor-${member.initials.toLowerCase()}-bio`;

  return (
    <article className="rounded-xl border border-line bg-surface transition-colors duration-300 hover:bg-surface-2">
      <div className="p-8 md:p-10 flex flex-col gap-6">
        <div className="flex items-start gap-6">
          <Headshot
            initials={member.initials}
            src={member.headshot}
            name={member.name}
            size="md"
          />
          <div className="flex-1 min-w-0">
            <h3 className="display-3 text-ink leading-tight">
              {member.name}
            </h3>
            <p className="mt-1.5 text-accent text-sm font-medium tracking-tight">
              {member.title}
            </p>
            <div className="mt-4">
              <LinkedInIcon href={member.linkedin} name={member.name} />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={contentId}
          className="self-start inline-flex items-center gap-2 text-sm font-medium text-ink-subtle hover:text-ink transition-colors"
        >
          <span>{open ? "Hide biography" : "Read biography"}</span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            aria-hidden="true"
          >
            ↓
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              id={contentId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <ul className="space-y-4 text-ink-muted text-sm md:text-base leading-relaxed pt-2">
                {member.bio.map((paragraph, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      className="mt-2.5 inline-block h-px w-3 bg-accent/50 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>{paragraph}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
}
