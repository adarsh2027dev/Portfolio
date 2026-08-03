"use client";

import { motion } from "framer-motion";
import {
Quote,
Star,
MessageSquare,
} from "lucide-react";

import type { Testimonial } from "@/types/home";

type TestimonialsSectionProps = {
testimonials: Testimonial[];
};

export function TestimonialsSection({
testimonials,
}: TestimonialsSectionProps) {
return (
  <section
    id="testimonials"
    aria-labelledby="testimonials-title"
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
        Testimonials
      </span>

      <h2
        id="testimonials-title"
        className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl"
      >
        Trusted By Clients, Teams &{" "}
        <span className="hero-heading-accent">
          Collaborators
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
        Feedback from project stakeholders,
        collaborators, mentors, and teams who have
        worked closely with me throughout various
        product and engineering initiatives.
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
          value: "100%",
          label: "Commitment",
        },
        {
          value: "Fast",
          label: "Execution",
        },
        {
          value: "Reliable",
          label: "Delivery",
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

    {/* Testimonials Grid */}

    <div className="mt-14 grid gap-6 lg:grid-cols-2">
      {testimonials.map(
        (testimonial, index) => (
          <motion.article
            key={`${testimonial.author}-${index}`}
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
              delay: index * 0.1,
            }}
            className="spotlight-panel p-6 sm:p-8"
          >
            {/* Top */}

            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[var(--accent-tertiary)] to-[var(--accent-strong)] text-white shadow-lg">
                <Quote size={24} />
              </div>

              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(
                  (star) => (
                    <Star
                      key={star}
                      size={16}
                      className="fill-[var(--accent-secondary)] text-[var(--accent-secondary)]"
                    />
                  )
                )}
              </div>
            </div>

            {/* Quote */}

            <blockquote className="mt-8">
              <p className="text-lg leading-8 text-[var(--text-muted)]">
                &quot;{testimonial.quote}&quot;
              </p>
            </blockquote>

            {/* Footer */}

            <div className="mt-8 border-t border-[var(--border-soft)] pt-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-tertiary)] to-[var(--accent-strong)] text-white">
                  <MessageSquare size={18} />
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--text-strong)]">
                    {testimonial.author}
                  </h3>

                  <p className="text-sm text-[var(--text-soft)]">
                    {testimonial.role}
                  </p>

                  <p className="text-sm text-[var(--accent-secondary)]">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </motion.article>
        )
      )}
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
        <h3 className="text-2xl font-semibold text-[var(--text-strong)]">
          Building Long-Term Professional Relationships
        </h3>

        <p className="mx-auto mt-4 max-w-3xl text-[var(--text-muted)] leading-8">
          Great products are built through collaboration,
          communication, and trust. I focus on delivering
          reliable solutions, maintaining high engineering
          standards, and creating positive experiences for
          teams, clients, and stakeholders.
        </p>
      </div>
    </motion.div>
  </div>
</section>


);
}
