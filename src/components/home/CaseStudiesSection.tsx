"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
ArrowRight,
CheckCircle2,
Layers3,
Lightbulb,
Rocket,
Target,
} from "lucide-react";

import type { CaseStudy } from "@/types/home";

type CaseStudiesSectionProps = {
caseStudies: CaseStudy[];
};

export function CaseStudiesSection({
caseStudies,
}: CaseStudiesSectionProps) {
const [activeIndex, setActiveIndex] = useState(0);

const activeStudy = caseStudies[activeIndex];

return ( <section
   id="case-studies"
   aria-labelledby="case-studies-title"
   className="section-space relative"
 > 
    <div className="grid-shell relative z-10">
      {/* Header */}

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto max-w-4xl text-center"
    >
      <span className="hero-pill">
        Case Studies
      </span>

      <h2
        id="case-studies-title"
        className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl"
      >
        Engineering Decisions &{" "}
        <span className="hero-heading-accent">
          Product Impact
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
        Explore the challenges, architecture decisions,
        implementation strategies, and measurable
        outcomes behind the products I've built.
      </p>
    </motion.div>

    {/* Content */}

    <div className="mt-14 grid gap-6 xl:grid-cols-[0.38fr_0.62fr]">
      {/* Left Navigation */}

      <div className="space-y-4">
        {caseStudies.map((study, index) => (
          <motion.button
            key={study.projectName}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`w-full rounded-[1.75rem] p-5 text-left transition-all duration-300 ${
              activeIndex === index
                ? "spotlight-panel border-[var(--accent-secondary)]"
                : "border border-[var(--border-soft)] bg-[var(--surface)] hover:border-[var(--border-strong)]"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold text-[var(--text-strong)]">
                {study.projectName}
              </h3>

              <ArrowRight
                size={18}
                className="text-[var(--accent-secondary)]"
              />
            </div>

            <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--text-muted)]">
              {study.problem}
            </p>
          </motion.button>
        ))}
      </div>

      {/* Right Content */}

      <AnimatePresence mode="wait">
        <motion.div
          key={activeStudy?.projectName}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.35,
          }}
          className="spotlight-panel p-8"
        >
          {/* Top */}

          <div className="flex flex-wrap items-center gap-4">
            <span className="hero-pill">
              {activeStudy?.projectName}
            </span>

            <span className="kbd">
              Featured Case Study
            </span>
          </div>

          {/* Problem & Architecture */}

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div data-card className="p-6">
              <div className="flex items-center gap-3">
                <Target
                  size={20}
                  className="text-[var(--accent-secondary)]"
                />
                <h3 className="font-semibold text-[var(--text-strong)]">
                  Problem
                </h3>
              </div>

              <p className="mt-4 leading-7 text-[var(--text-muted)]">
                {activeStudy?.problem}
              </p>
            </div>

            <div data-card className="p-6">
              <div className="flex items-center gap-3">
                <Layers3
                  size={20}
                  className="text-[var(--accent-secondary)]"
                />
                <h3 className="font-semibold text-[var(--text-strong)]">
                  Architecture
                </h3>
              </div>

              <p className="mt-4 leading-7 text-[var(--text-muted)]">
                {activeStudy?.architecture}
              </p>
            </div>
          </div>

          {/* Features & Challenges */}

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div data-card className="p-6">
              <h3 className="font-semibold text-[var(--text-strong)]">
                Key Features
              </h3>

              <ul className="mt-4 space-y-3">
                {activeStudy?.features.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[var(--text-muted)]"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[var(--accent-secondary)]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div data-card className="p-6">
              <h3 className="font-semibold text-[var(--text-strong)]">
                Challenges
              </h3>

              <ul className="mt-4 space-y-3">
                {activeStudy?.challenges.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[var(--text-muted)]"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[var(--accent-secondary)]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution & Results */}

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div data-card className="p-6">
              <div className="flex items-center gap-3">
                <Lightbulb
                  size={20}
                  className="text-[var(--accent-secondary)]"
                />
                <h3 className="font-semibold text-[var(--text-strong)]">
                  Solution
                </h3>
              </div>

              <p className="mt-4 leading-7 text-[var(--text-muted)]">
                {activeStudy?.solution}
              </p>
            </div>

            <div data-card className="p-6">
              <div className="flex items-center gap-3">
                <Rocket
                  size={20}
                  className="text-[var(--accent-secondary)]"
                />
                <h3 className="font-semibold text-[var(--text-strong)]">
                  Results
                </h3>
              </div>

              <ul className="mt-4 space-y-3">
                {activeStudy?.results.map((result) => (
                  <li
                    key={result}
                    className="flex gap-3 text-[var(--text-muted)]"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[var(--accent-secondary)]"
                    />
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Learnings */}

          <div
            data-card
            className="mt-6 p-6"
          >
            <h3 className="font-semibold text-[var(--text-strong)]">
              Key Learnings
            </h3>

            <ul className="mt-4 space-y-3">
              {activeStudy?.learning.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[var(--text-muted)]"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-[var(--accent-secondary)]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
</section>


);
}
