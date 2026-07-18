"use client";

import { motion } from "framer-motion";
import {
Search,
LayoutDashboard,
Palette,
Code2,
ShieldCheck,
Rocket,
LineChart,
} from "lucide-react";

import type { ProcessStep } from "@/types/home";

type ProcessSectionProps = {
steps: ProcessStep[];
};

const processIcons = [
Search,
LayoutDashboard,
Palette,
Code2,
ShieldCheck,
Rocket,
LineChart,
];

export function ProcessSection({
steps,
}: ProcessSectionProps) {
return ( <section
   id="process"
   aria-labelledby="process-title"
   className="section-space relative"
 > 

```
  <div className="grid-shell relative z-10">
    {/* Header */}

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto max-w-4xl text-center"
    >
      <span className="hero-pill">
        Development Process
      </span>

      <h2
        id="process-title"
        className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl"
      >
        From Idea To{" "}
        <span className="hero-heading-accent">
          Production
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
        A structured product development workflow
        focused on strategy, execution, quality,
        scalability, and continuous improvement.
      </p>
    </motion.div>

    {/* Process Timeline */}

    <div className="mt-16">
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => {
          const Icon =
            processIcons[
              index % processIcons.length
            ];

          return (
            <motion.article
              key={step.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="spotlight-panel relative p-7"
            >
              {/* Step Number */}

              <div className="absolute right-5 top-5">
                <span className="kbd">
                  Step {index + 1}
                </span>
              </div>

              {/* Icon */}

              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[var(--accent-tertiary)] to-[var(--accent-strong)] text-white shadow-lg">
                <Icon size={24} />
              </div>

              {/* Content */}

              <div className="mt-6">
                <h3 className="text-xl font-semibold text-[var(--text-strong)]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-[var(--text-muted)]">
                  {step.description}
                </p>
              </div>

              {/* Footer */}

              <div className="mt-8 border-t border-[var(--border-soft)] pt-4">
                <div className="flex items-center gap-2">
                  <span className="hero-status-indicator" />

                  <span className="text-sm text-[var(--text-soft)]">
                    Process Driven
                  </span>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>

    {/* Process Flow */}

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="mt-14"
    >
      <div
        data-card
        className="p-8"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-center">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex items-center gap-4"
            >
              <span className="hero-social-chip">
                {step.title}
              </span>

              {index !== steps.length - 1 && (
                <span className="text-[var(--accent-secondary)]">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>

    {/* Bottom CTA */}

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="mt-14"
    >
      <div
        data-card
        className="p-8 text-center"
      >
        <h3 className="text-2xl font-semibold text-[var(--text-strong)]">
          Building With Purpose
        </h3>

        <p className="mx-auto mt-4 max-w-3xl leading-8 text-[var(--text-muted)]">
          Every project follows a repeatable,
          quality-focused process that balances
          business objectives, technical excellence,
          user experience, and long-term scalability.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "Strategy",
            "Architecture",
            "Design",
            "Development",
            "Testing",
            "Deployment",
            "Optimization",
          ].map((item) => (
            <span
              key={item}
              className="hero-social-chip"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
</section>


);
}
