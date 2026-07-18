"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import type { Achievement } from "@/types/home";

type AchievementsSectionProps = {
  achievements: Achievement[];
};

export function AchievementsSection({ achievements }: AchievementsSectionProps) {
  return (
    <section id="achievements" aria-labelledby="achievements-title" className="section-space relative">
      <div className="grid-shell relative z-10 space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center space-y-6"
        >
          <span className="hero-pill shadow-lg shadow-blue-500/10">
            <Sparkles className="mr-2 inline size-4 text-[var(--accent-secondary)]" />
            Achievements
          </span>
          <h2 id="achievements-title" className="text-4xl font-bold tracking-tight text-[var(--text-strong)] sm:text-5xl lg:text-6xl">
            Track record of meaningful{" "}
            <span className="hero-heading-accent block mt-2">
              Engineering Progress
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[var(--text-muted)]">
            These metrics reflect sustained effort in development, continuous learning, and product delivery.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="spotlight-panel group p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--text-soft)] group-hover:text-[var(--accent-secondary)] transition-colors">
                {achievement.label}
              </p>
              <p className="mt-6 text-5xl font-bold tracking-tight text-[var(--text-strong)]">
                {achievement.value}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-muted)]">
                {achievement.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
