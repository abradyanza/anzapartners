import type { TeamMember } from "@/data/team";
import Headshot from "./Headshot";
import LinkedInIcon from "./LinkedInIcon";
import DrawLine from "./motion/DrawLine";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <article>
      <DrawLine className="mb-10" />
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        <Headshot
          initials={member.initials}
          src={member.headshot}
          name={member.name}
          size="lg"
        />

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h3 className="display-3 break-words text-ink">{member.name}</h3>
              <p className="mt-1.5 text-sm font-medium tracking-tight text-accent">
                {member.title}
              </p>
            </div>
            <LinkedInIcon href={member.linkedin} name={member.name} />
          </div>

          <ul className="mt-6 space-y-4 leading-relaxed text-ink-muted">
            {member.bio.map((paragraph, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="mt-2.5 inline-block h-px w-3 flex-shrink-0 bg-accent/50"
                  aria-hidden="true"
                />
                <span>{paragraph}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
