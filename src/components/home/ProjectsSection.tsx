"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Layers3, Sparkles } from "lucide-react";

import type { Project } from "@/types/home";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="section-space relative"
    >
      <div className="grid-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="hero-pill shadow-lg shadow-pink-500/10">
            <Sparkles className="mr-2 inline size-4 text-[var(--accent-tertiary)]" />
            Featured Projects
          </span>

          <h2
            id="projects-title"
            className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Building Products With{" "}
            <span className="hero-heading-accent block mt-2">
              Real-World Impact
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[var(--text-muted)]">
            A collection of full-stack applications, SaaS platforms, and business products designed to solve meaningful problems and deliver measurable outcomes.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => {
            // Make the first project span 2 columns on large screens for a bento-like feel
            const isFeatured = index === 0;

            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`spotlight-panel group relative flex flex-col p-6 sm:p-8 md:p-10 ${
                  isFeatured ? "lg:col-span-2" : ""
                }`}
              >
                <div className={`flex flex-col h-full ${isFeatured ? "lg:flex-row lg:gap-12" : "gap-8"}`}>
                  <div className={`flex-1 flex flex-col`}>
                    <div className="flex items-center justify-between gap-4 mb-8">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--surface-muted)] to-[var(--surface)] text-[var(--text-strong)] border border-[var(--border-soft)]">
                        <Layers3 size={20} className="text-[var(--accent-tertiary)]" />
                      </div>
                      <span className="kbd bg-[var(--surface-muted)] border-[var(--border-soft)] text-[var(--accent-secondary)]">
                        {project.status ?? "Featured"}
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold tracking-tight text-[var(--text-strong)] group-hover:text-[var(--accent-strong)] transition-colors">
                      {project.name}
                    </h3>

                    {project.headline ? (
                      <p className="mt-3 text-sm font-medium tracking-wide text-[var(--accent-secondary)] uppercase">
                        {project.headline}
                      </p>
                    ) : null}

                    <p className="mt-5 text-lg leading-relaxed text-[var(--text-muted)] group-hover:text-[var(--text-strong)] transition-colors">
                      {project.summary}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md border border-[var(--border-soft)] bg-[var(--canvas)] px-2.5 py-1 text-xs font-semibold text-[var(--text-soft)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Impact metrics for non-featured projects */}
                    {!isFeatured && project.metrics?.length ? (
                      <div className="mt-6 border-t border-[var(--border-soft)] pt-5">
                        <p className="text-xs font-semibold tracking-wider text-[var(--text-soft)] uppercase mb-3">
                          Key Impact & Metrics
                        </p>
                        <ul className="space-y-2">
                          {project.metrics.map((metric) => (
                            <li key={metric} className="flex items-start gap-2.5 text-xs text-[var(--text-muted)] font-medium">
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-secondary)]" />
                              <span>{metric}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    <div className="mt-auto pt-8">
                      <div className="flex flex-wrap items-center gap-4">
                        <a
                          href={project.href}
                          target={project.href.startsWith("http") ? "_blank" : undefined}
                          rel={project.href.startsWith("http") ? "noreferrer" : undefined}
                          className="hero-button-primary !py-2.5 !px-5 !text-sm"
                        >
                          View Live Demo
                          <ArrowUpRight size={16} />
                        </a>

                        {project.repoHref ? (
                          <a
                            href={project.repoHref}
                            target="_blank"
                            rel="noreferrer"
                            className="hero-button-secondary !py-2.5 !px-5 !text-sm hover:!border-[var(--text-strong)]"
                          >
                            <Github size={16} />
                            GitHub Code
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {/* Impact metrics on the side for featured project */}
                  {isFeatured && project.metrics?.length ? (
                    <div className="flex-1 lg:border-l lg:border-[var(--border-soft)] lg:pl-12 flex flex-col justify-center mt-8 lg:mt-0">
                      <h4 className="text-sm font-semibold tracking-wider text-[var(--text-soft)] uppercase mb-6">
                        Business Impact & Engineering Highlights
                      </h4>
                      <ul className="space-y-6">
                        {project.metrics.map((metric) => (
                          <li
                            key={metric}
                            className="flex items-start gap-4 text-[var(--text-muted)]"
                          >
                            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[var(--accent-tertiary)] shadow-[0_0_10px_rgba(236,72,153,0.5)]" />
                            <span className="leading-relaxed font-medium">
                              {metric}
                            </span>
                          </li>
                        ))}
                      </ul>
                      {project.impact ? (
                        <p className="mt-8 text-sm italic text-[var(--text-soft)]">
                          {project.impact}
                        </p>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
