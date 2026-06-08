import type { TeamMember } from "@/data/team";
import Headshot from "./Headshot";
import LinkedInIcon from "./LinkedInIcon";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <article className="border-t border-slate-200 pt-10">
      <div className="flex flex-col sm:flex-row sm:items-start gap-8">
        <Headshot initials={member.initials} size="lg" />

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl text-navy leading-tight">
                {member.name}
              </h3>
              <p className="mt-1 text-steel text-sm tracking-wide uppercase">
                {member.title}
              </p>
            </div>
            <LinkedInIcon href={member.linkedin} name={member.name} />
          </div>

          <ul className="mt-6 space-y-4 text-slate text-base leading-relaxed">
            {member.bio.map((paragraph, i) => (
              <li key={i} className="flex gap-3">
                <span
                  className="mt-2 inline-block h-px w-3 bg-steel flex-shrink-0"
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
