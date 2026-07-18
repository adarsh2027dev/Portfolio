"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, GraduationCap, Rocket } from "lucide-react";

import type { AboutItem } from "@/types/home";

type AboutSectionProps = {
aboutItems: AboutItem[];
};

const icons = [Code2, Briefcase, Rocket, GraduationCap];

export function AboutSection({ aboutItems }: AboutSectionProps) {
return (
   <section
   id="about"
   aria-labelledby="about-title"
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
      <span className="hero-pill">
        About Me
      </span>

      <h2
        id="about-title"
        className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl"
      >
        Building Digital Products With{" "}
        <span className="hero-heading-accent">
          Purpose & Precision
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
        I'm a Full-Stack Developer focused on creating scalable web
        applications, modern user experiences, and business-driven
        solutions. My work combines engineering excellence, product
        thinking, and a commitment to building software that delivers
        measurable impact.
      </p>
    </motion.div>

    <div className="mt-16 grid gap-6 lg:grid-cols-2">
      {aboutItems.map((item, index) => {
        const Icon = icons[index % icons.length];

        return (
          <motion.article
            key={`${item.title}-${index}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            className="spotlight-panel group p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[var(--accent-tertiary)] to-[var(--accent-strong)] text-white shadow-lg">
                <Icon size={26} />
              </div>

              {item.date ? (
                <span className="kbd">
                  {item.date}
                </span>
              ) : null}
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--text-soft)]">
                {item.category}
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-[var(--text-strong)]">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-[var(--text-muted)]">
                {item.description}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[var(--accent-secondary)]" />
              <span className="text-sm text-[var(--text-soft)]">
                Continuous Growth & Learning
              </span>
            </div>
          </motion.article>
        );
      })}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="mt-12"
    >
      <div
        data-card
        className="rounded-[2rem] p-8 text-center"
      >
        <h3 className="text-2xl font-semibold text-[var(--text-strong)]">
          Beyond Writing Code
        </h3>

        <p className="mx-auto mt-4 max-w-3xl text-[var(--text-muted)] leading-8">
          I enjoy transforming ideas into products, solving real-world
          business challenges, and continuously exploring modern
          technologies across Full-Stack Development, AI, Cloud, and
          scalable software architecture. Every project is an opportunity
          to learn, innovate, and create meaningful impact.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "Next.js",
            "React",
            "Node.js",
            "MongoDB",
            "TypeScript",
            "AI Applications",
            "System Design",
            "Cloud",
          ].map((skill) => (
            <span
              key={skill}
              className="hero-social-chip"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
</section>


);
}
