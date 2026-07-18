import Image from "next/image";
import { ArrowUpRight, Command, Download, Sparkles, Code2, Server, Database, Layers } from "lucide-react";
import { motion } from "framer-motion";

import { SpotlightPanel } from "@/components/home/SpotlightPanel";
import type { Profile, ProofPoint, SocialLink } from "@/types/home";

type HeroSectionProps = {
  commandShortcut: string;
  onOpenCommandPalette: () => void;
  profile: Profile;
  proofPoints: ProofPoint[];
  socialLinks: SocialLink[];
};

import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export function HeroSection({
  commandShortcut,
  onOpenCommandPalette,
  profile,
  proofPoints,
  socialLinks,
}: HeroSectionProps) {
  return (
    <header
      id="top"
      aria-labelledby="hero-title"
      className="section-space relative isolate pt-24 sm:pt-32"
    >
      <div className="grid-shell relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          aria-label="Hero introduction"
          className="space-y-8 lg:space-y-10"
        >
          <motion.div className="space-y-6">
            <motion.div variants={itemVariants}>
              <span className="hero-pill shadow-lg shadow-blue-500/10 backdrop-blur-md">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {profile.availability}
              </span>
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              id="hero-title"
              className="max-w-4xl text-4xl font-bold tracking-tight text-[color:var(--text-strong)] sm:text-5xl lg:text-7xl lg:leading-[1.1]"
            >
              <span className="bg-gradient-to-r from-[var(--text-strong)] to-[var(--text-muted)] bg-clip-text text-transparent">
                {profile.name}
              </span>
              <span className="hero-heading-accent mt-4 block">
                {profile.intro}
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="max-w-2xl text-lg leading-relaxed text-[color:var(--text-muted)]"
            >
              {profile.summary}
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3" aria-label="Tech stack badges">
            {profile.heroStack?.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ y: -2, scale: 1.05 }}
                className="rounded-full border border-[var(--border-soft)] bg-[var(--surface-muted)] px-4 py-2 text-sm font-medium text-[color:var(--text-strong)] shadow-sm backdrop-blur-md"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="hero-button-primary"
            >
              View selected work
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={profile.resumeHref}
              target="_blank"
              rel="noreferrer"
              className="hero-button-secondary backdrop-blur-md"
            >
              Open resume
              <Download className="size-4" aria-hidden="true" />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="button"
              onClick={onOpenCommandPalette}
              aria-label="Open command palette"
              className="hero-button-secondary backdrop-blur-md"
            >
              <Command className="size-4" aria-hidden="true" />
              Explore commands
              <span className="kbd ml-1">{commandShortcut}</span>
            </motion.button>
          </motion.div>

          <motion.dl variants={itemVariants} className="grid gap-4 sm:grid-cols-3">
            {proofPoints.map((item) => (
              <SpotlightPanel key={item.label} className="space-y-3 p-5">
                <dt className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[color:var(--text-soft)]">
                  {item.label}
                </dt>
                <dd className="text-3xl font-semibold text-[color:var(--text-strong)]">
                  {item.value}
                </dd>
              </SpotlightPanel>
            ))}
          </motion.dl>
        </motion.section>

        <motion.aside 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Profile summary" 
          className="space-y-6 lg:pl-8"
        >
          <SpotlightPanel className="hero-portrait-card p-2 sm:p-3 overflow-hidden">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-[4/5] rounded-[1.2rem] bg-[color:var(--surface-muted)] overflow-hidden"
            >
              <Image
                src={profile.portrait.src}
                alt={profile.portrait.alt}
                fill
                priority
                sizes="(min-width: 1024px) 34vw, 90vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="hero-image-float" aria-hidden="true">
                <span className="hero-tech-icon hero-tech-icon-1 backdrop-blur-xl">
                  <Code2 size={18} />
                </span>
                <span className="hero-tech-icon hero-tech-icon-2 backdrop-blur-xl">
                  <Server size={18} />
                </span>
                <span className="hero-tech-icon hero-tech-icon-3 backdrop-blur-xl">
                  <Database size={18} />
                </span>
                <span className="hero-tech-icon hero-tech-icon-4 backdrop-blur-xl">
                  <Layers size={18} />
                </span>
              </div>
              <div className="hero-image-shine" />
            </motion.div>
          </SpotlightPanel>

          <SpotlightPanel className="space-y-6 p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.24em] text-[color:var(--text-soft)]">
                  Base
                </p>
                <p className="mt-2 text-lg font-medium text-[color:var(--text-strong)]">
                  {profile.location}
                </p>
              </div>

              <div className="hero-status-indicator shrink-0" aria-hidden="true" />
            </div>

            <div className="rounded-[1.4rem] border border-[color:var(--border-soft)] bg-[color:var(--surface-muted)]/70 p-5 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Sparkles
                  className="mt-0.5 size-4 text-[color:var(--accent-strong)] shrink-0"
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed font-medium text-[color:var(--text-strong)]">
                  Premium interactions, production-grade structure, recruiter-first
                  storytelling.
                </p>
              </div>
            </div>

            <ul className="flex flex-wrap gap-3 pt-1" aria-label="Social links">
              {socialLinks.map((link) => (
                <motion.li key={link.label} whileHover={{ y: -2 }}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hero-social-chip backdrop-blur-md"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </SpotlightPanel>
        </motion.aside>
      </div>
    </header>
  );
}
