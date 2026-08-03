"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  TrendingUp,
  Sparkles
} from "lucide-react";

import type { ExperienceItem } from "@/types/home";

type ExperienceSectionProps = {
  timeline: ExperienceItem[];
};

export function ExperienceSection({
  timeline,
}: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="section-space relative"
    >
      <div className="grid-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="hero-pill shadow-lg shadow-blue-500/10">
            <Sparkles className="mr-2 inline size-4 text-[var(--accent-secondary)]" />
            Experience
          </span>

          <h2
            id="experience-title"
            className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Building Products Through{" "}
            <span className="hero-heading-accent block mt-2">
              Real-World Execution
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[var(--text-muted)]">
            Professional experience across startups,
            internships, and product
            engineering environments where ownership,
            collaboration, and scale mattered.
          </p>
        </motion.div>

        <div className="mt-20 relative mx-auto max-w-5xl">
          {/* Vertical Glowing Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--border-strong)] via-[var(--accent-secondary)] to-[var(--border-strong)] opacity-20 hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative md:pl-24"
              >
                {/* Timeline Node */}
                <div className="hidden md:flex absolute left-8 top-8 h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--canvas)] border-2 border-[var(--accent-strong)] shadow-[0_0_15px_rgba(0,112,243,0.5)] z-10" />

                <div className="spotlight-panel group p-6 sm:p-8 md:p-10 transition-all hover:bg-white/5">
                  <div className="grid gap-8 lg:grid-cols-[0.4fr_0.6fr]">
                    <div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--surface-muted)] to-[var(--surface)] text-[var(--text-strong)] border border-[var(--border-soft)] shadow-inner">
                        <Briefcase size={24} className="text-[var(--accent-strong)]" />
                      </div>

                      <h3 className="mt-6 text-2xl font-bold tracking-tight text-[var(--text-strong)] group-hover:text-[var(--accent-secondary)] transition-colors">
                        {item.role}
                      </h3>

                      <div className="mt-4 flex items-center gap-3 text-sm font-medium text-[var(--text-muted)]">
                        <div className="flex items-center gap-1.5 bg-[var(--surface-muted)] px-3 py-1 rounded-full border border-[var(--border-soft)]">
                          <Building2 size={14} />
                          <span>{item.company}</span>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-4 text-sm text-[var(--text-soft)]">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="flex items-center gap-2 mb-6">
                        <TrendingUp
                          size={18}
                          className="text-[var(--accent-secondary)]"
                        />
                        <h4 className="font-semibold text-[var(--text-strong)]">
                          Key Contributions
                        </h4>
                      </div>

                      <ul className="space-y-4">
                        {item.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex gap-4 text-[var(--text-muted)] group-hover:text-[var(--text-strong)] transition-colors"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-secondary)] shadow-[0_0_8px_rgba(121,40,202,0.6)]" />
                            <span className="leading-relaxed">
                              {outcome}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}