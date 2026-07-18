"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Server, Cloud, Cpu, Sparkles } from "lucide-react";

import type { SkillCategory } from "@/types/home";

type SkillsSectionProps = {
  categories: SkillCategory[];
};

const categoryIcons = [Globe, Code2, Server, Database, Cloud, Cpu];

export function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="section-space relative"
    >
      <div className="grid-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="hero-pill shadow-lg shadow-purple-500/10">
            <Sparkles className="mr-2 inline size-4 text-[color:var(--accent-secondary)]" />
            Technical Arsenal
          </span>

          <h2
            id="skills-title"
            className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Technologies I Use To Build{" "}
            <span className="hero-heading-accent block mt-2">
              Modern Products
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
            A carefully selected stack of frameworks and tools used to design, develop, deploy, and scale production-ready applications.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];

            return (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="spotlight-panel group relative flex flex-col justify-between p-8"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--surface-muted)] text-[var(--text-strong)] ring-1 ring-[var(--border-soft)] transition-transform group-hover:scale-110 group-hover:bg-white/10 group-hover:ring-white/20">
                      <Icon size={22} className="text-[var(--accent-strong)]" />
                    </div>
                  </div>

                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-[var(--text-strong)]">
                    {category.label}
                  </h3>
                  
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">
                    {category.details}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center rounded-full border border-[var(--border-soft)] bg-[var(--surface-muted)] px-3 py-1.5 text-sm font-medium text-[var(--text-strong)] transition-colors hover:bg-[var(--surface)] hover:border-[var(--accent-strong)]/50 cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
