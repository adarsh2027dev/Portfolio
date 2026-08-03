import { motion } from "framer-motion";

import type { GitHubMetric } from "@/types/home";

type GitHubSectionProps = {
  metrics: GitHubMetric[];
};

export function GitHubSection({ metrics }: GitHubSectionProps) {
  return (
    <section id="github" aria-labelledby="github-title" className="section-space">
      <div className="grid-shell space-y-10">
        <div className="space-y-4">
          <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.32em] text-[color:var(--text-soft)]">
            GitHub
          </p>
          <h2 id="github-title" className="text-3xl font-semibold tracking-tight text-[color:var(--text-strong)] sm:text-4xl">
            Contribution metrics that reflect consistent growth.
          </h2>
          <p className="max-w-3xl text-base leading-7 text-[color:var(--text-muted)] sm:text-lg">
            Recruiters can quickly scan the active engineering signals I deliver across code, open source, and collaboration.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.article
              key={metric.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="rounded-[1.75rem] border border-[color:var(--border-soft)] bg-[color:var(--surface)] p-6 shadow-[0_28px_80px_rgba(2,8,23,0.16)] backdrop-blur-xl"
            >
              <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--text-soft)]">{metric.label}</p>
              <p className="mt-4 text-4xl font-semibold text-[color:var(--text-strong)]">{metric.value}</p>
              <p className="mt-3 text-sm leading-6 text-[color:var(--text-muted)]">{metric.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
