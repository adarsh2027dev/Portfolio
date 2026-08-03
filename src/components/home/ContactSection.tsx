"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
CheckCircle2,
Github,
Linkedin,
Mail,
MapPin,
Send,
} from "lucide-react";

import type { ContactFormValues, Profile, SocialLink } from "@/types/home";

type ContactSectionProps = {
profile: Profile;
socialLinks: SocialLink[];
};

function validateEmail(email: string) {
return /^[^\s@]+@[^\s@]+.[^\s@]+$/.test(email);
}

export function ContactSection({
profile,
socialLinks,
}: ContactSectionProps) {
const [formValues, setFormValues] = useState<ContactFormValues>({
name: "",
email: "",
subject: "",
message: "",
});

const [errors, setErrors] = useState<Record<string, string>>({});
const [status, setStatus] = useState<
"idle" | "loading" | "success" | "error"

> ("idle");

const [serverMessage, setServerMessage] = useState("");

const contactItems = [
{
label: "Email",
value: profile.email,
icon: Mail,
href: `mailto:${profile.email}`,
},
{
label: "LinkedIn",
value: "Professional Profile",
icon: Linkedin,
href: "https://www.linkedin.com/in/adarshtiwaridev",
},
{
label: "GitHub",
value: "View Open Source Work",
icon: Github,
href: "https://github.com/adarshtiwaridev",
},
{
label: "Location",
value: "India • Available Worldwide",
icon: MapPin,
href: "#contact",
},
];

const handleChange = (
field: keyof ContactFormValues,
value: string
) => {
setFormValues((prev) => ({
...prev,
[field]: value,
}));


setErrors((prev) => ({
  ...prev,
  [field]: "",
}));

};

const validate = () => {
const nextErrors: Record<string, string> = {};


if (!formValues.name.trim()) {
  nextErrors.name = "Please enter your full name.";
}

if (!validateEmail(formValues.email.trim())) {
  nextErrors.email = "Please enter a valid email address.";
}

if (!formValues.subject.trim()) {
  nextErrors.subject = "Subject is required.";
}

if (!formValues.message.trim()) {
  nextErrors.message = "Please describe your project or inquiry.";
}

setErrors(nextErrors);

return Object.keys(nextErrors).length === 0;

};

const handleSubmit = async (
event: React.FormEvent<HTMLFormElement>
) => {
event.preventDefault();


if (!validate()) {
  setStatus("error");
  return;
}

setStatus("loading");
setServerMessage("");

try {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      subject: formValues.subject.trim(),
      message: formValues.message.trim(),
    }),
  });

  if (!response.ok) {
    const payload = await response.json();

    throw new Error(
      payload.message || "Unable to send message."
    );
  }

  setStatus("success");

  setServerMessage(
    "Thanks for reaching out. I&apos;ll get back to you as soon as possible."
  );

  setFormValues({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  setErrors({});
} catch (error) {
  setStatus("error");

  setServerMessage(
    error instanceof Error
      ? error.message
      : "Something went wrong. Please try again."
  );
}

};

return ( <section
   id="contact"
   aria-labelledby="contact-title"
   className="section-space relative"
 > 


  <div className="grid-shell">
    <div className="mb-16 text-center">
      <span className="hero-pill">
        Let&apos;s Connect
      </span>

      <h2
        id="contact-title"
        className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl"
      >
        Let&apos;s Build Your Next{" "}
        <span className="hero-heading-accent">
          Product
        </span>
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--text-muted)]">
        Available for full-stack engineering roles,
        freelance projects, startup collaborations,
        and innovative product development
        opportunities.
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
      {/* Left Side */}

      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="contact-panel rounded-[2rem] p-8 ring-1 ring-[var(--border-soft)] backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <span className="hero-status-indicator" />
          <span className="text-sm font-medium text-[var(--text-muted)]">
            Available for Opportunities
          </span>
        </div>

        <h3 className="mt-5 text-3xl font-bold text-[var(--text-strong)]">
          Get In Touch
        </h3>

        <p className="mt-4 leading-8 text-[var(--text-muted)]">
          Whether you&apos;re hiring, building a startup,
          looking for a developer, or simply want to
          discuss an idea, I&apos;d love to hear from you.
        </p>

        <div className="mt-10 grid gap-4">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={
                  item.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-tertiary)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent-tertiary)] to-[var(--accent-strong)] text-white">
                  <Icon size={20} />
                </div>

                <div>
                  <p className="font-semibold text-[var(--text-strong)]">
                    {item.label}
                  </p>

                  <p className="text-sm text-[var(--text-muted)]">
                    {item.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-[var(--border-soft)] bg-[var(--surface)] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--text-soft)]">
            Connect Elsewhere
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="hero-social-chip"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right Side */}

      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="contact-panel rounded-[2rem] p-8 ring-1 ring-[var(--border-soft)] backdrop-blur-xl"
      >
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-soft)]">
            Start a Conversation
          </p>

          <h3 className="mt-3 text-3xl font-bold text-[var(--text-strong)]">
            Tell Me About Your Project
          </h3>

          <p className="mt-3 text-[var(--text-muted)]">
            Have a project, opportunity, or idea?
            Let&apos;s discuss how we can bring it to life.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-8 space-y-6"
          aria-live="polite"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-soft)] mb-2">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formValues.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={`w-full rounded-xl border bg-[var(--surface-muted)] px-4 py-3 text-sm text-[var(--text-strong)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent-strong)]/50 ${
                  errors.name ? "border-red-500/80 ring-1 ring-red-500/30" : "border-[var(--border-soft)] hover:border-[var(--border-strong)]"
                }`}
                placeholder="John Doe"
                aria-invalid={!!errors.name}
                aria-required="true"
                disabled={status === "loading"}
              />
              {errors.name && <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-soft)] mb-2">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={formValues.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={`w-full rounded-xl border bg-[var(--surface-muted)] px-4 py-3 text-sm text-[var(--text-strong)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent-strong)]/50 ${
                  errors.email ? "border-red-500/80 ring-1 ring-red-500/30" : "border-[var(--border-soft)] hover:border-[var(--border-strong)]"
                }`}
                placeholder="john@example.com"
                aria-invalid={!!errors.email}
                aria-required="true"
                disabled={status === "loading"}
              />
              {errors.email && <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-soft)] mb-2">
              Subject <span className="text-red-400">*</span>
            </label>
            <input
              id="subject"
              type="text"
              value={formValues.subject}
              onChange={(e) => handleChange("subject", e.target.value)}
              className={`w-full rounded-xl border bg-[var(--surface-muted)] px-4 py-3 text-sm text-[var(--text-strong)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent-strong)]/50 ${
                errors.subject ? "border-red-500/80 ring-1 ring-red-500/30" : "border-[var(--border-soft)] hover:border-[var(--border-strong)]"
              }`}
              placeholder="Full-Stack Engineer Role / Project Inquiry"
              aria-invalid={!!errors.subject}
              aria-required="true"
              disabled={status === "loading"}
            />
            {errors.subject && <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.subject}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-soft)] mb-2">
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              value={formValues.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className={`w-full rounded-xl border bg-[var(--surface-muted)] px-4 py-3 text-sm text-[var(--text-strong)] resize-none transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent-strong)]/50 ${
                errors.message ? "border-red-500/80 ring-1 ring-red-500/30" : "border-[var(--border-soft)] hover:border-[var(--border-strong)]"
              }`}
              placeholder="Hello Adarsh, I would like to discuss..."
              aria-invalid={!!errors.message}
              aria-required="true"
              disabled={status === "loading"}
            />
            {errors.message && <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="hero-button-primary w-full justify-center py-3.5 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Sending Message...
              </span>
            ) : (
              <>
                Send Message
                <Send size={16} />
              </>
            )}
          </button>

          <AnimatePresence>
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300 backdrop-blur-md"
              >
                <div className="flex items-center gap-2.5 font-medium">
                  <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                  {serverMessage || "Thank you! Your message has been sent successfully."}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {status === "error" && serverMessage && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="rounded-2xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300 backdrop-blur-md"
              >
                {serverMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </div>
  </div>
</section>

);
}
