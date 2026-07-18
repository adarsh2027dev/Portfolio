"use client";

import { motion } from "framer-motion";
import {
Award,
BadgeCheck,
ExternalLink,
GraduationCap,
} from "lucide-react";

import type { Certification } from "@/types/home";

type CertificationsSectionProps = {
certifications: Certification[];
};

export function CertificationsSection({
certifications,
}: CertificationsSectionProps) {
return ( <section
   id="certifications"
   aria-labelledby="certifications-title"
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
        Certifications
      </span>

      <h2
        id="certifications-title"
        className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl"
      >
        Verified Skills &{" "}
        <span className="hero-heading-accent">
          Professional Credentials
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
        Industry-recognized certifications that
        demonstrate continuous learning, technical
        expertise, and commitment to professional
        growth.
      </p>
    </motion.div>

    {/* Stats */}

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="mt-12 grid gap-4 md:grid-cols-3"
    >
      {[
        {
          value: "5+",
          label: "Certifications",
        },
        {
          value: "IBM",
          label: "Industry Training",
        },
        {
          value: "Forage",
          label: "Job Simulations",
        },
      ].map((item) => (
        <div
          key={item.label}
          data-card
          className="p-6 text-center"
        >
          <h3 className="text-3xl font-bold text-[var(--text-strong)]">
            {item.value}
          </h3>

          <p className="mt-2 text-[var(--text-muted)]">
            {item.label}
          </p>
        </div>
      ))}
    </motion.div>

    {/* Certification Grid */}

    <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {certifications.map((cert, index) => (
        <motion.a
          key={cert.title}
          href={cert.href}
          target="_blank"
          rel="noreferrer"
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
          className="spotlight-panel group flex flex-col p-0"
        >
          {/* Certificate Image */}

          <div className="relative aspect-[4/3]">
            <img
              src={cert.image}
              alt={cert.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute right-4 top-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/20 backdrop-blur-xl">
                <ExternalLink
                  size={18}
                  className="text-white"
                />
              </div>
            </div>
          </div>

          {/* Content */}

          <div className="p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <BadgeCheck
                  size={18}
                  className="text-[var(--accent-secondary)]"
                />

                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--text-soft)]">
                  Verified
                </span>
              </div>

              <span className="kbd">
                {cert.date}
              </span>
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[var(--text-strong)]">
              {cert.title}
            </h3>

            <p className="mt-3 text-[var(--text-muted)]">
              {cert.issuer}
            </p>

            <div className="mt-6 border-t border-[var(--border-soft)] pt-4">
              <div className="flex items-center gap-2">
                <Award
                  size={16}
                  className="text-[var(--accent-secondary)]"
                />

                <span className="text-sm text-[var(--text-soft)]">
                  Industry Recognized Credential
                </span>
              </div>
            </div>
          </div>
        </motion.a>
      ))}
    </div>

    {/* Bottom CTA */}

    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="mt-14"
    >
      <div
        data-card
        className="p-8 text-center"
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[var(--accent-tertiary)] to-[var(--accent-strong)] text-white shadow-lg">
          <GraduationCap size={28} />
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-[var(--text-strong)]">
          Lifelong Learning Mindset
        </h3>

        <p className="mx-auto mt-4 max-w-3xl leading-8 text-[var(--text-muted)]">
          Continuous learning is an essential part of
          becoming a better engineer. These
          certifications reflect practical experience,
          industry exposure, and dedication to
          mastering modern technologies and development
          practices.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "IBM",
            "Postman",
            "Deloitte",
            "Tata Group",
            "Full-Stack",
            "APIs",
            "Cloud",
            "Software Engineering",
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
