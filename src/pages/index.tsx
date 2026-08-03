import Head from "next/head";

import { CommandPalette } from "@/components/home/CommandPalette";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { GitHubSection } from "@/components/home/GitHubSection";
import { HeroSection } from "@/components/home/HeroSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { SiteShell } from "@/components/layout/SiteShell";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { AchievementsSection } from "@/components/home/AchievementsSection";
import { CertificationsSection } from "@/components/home/CertificationsSection";
import {
  navigation,
  profile,
  projects,
  socialLinks,
  heroHighlights,
  engineeringExperience,
  recruiterActions,
  aboutItems,
  skillCategories,
  achievements,
  certifications,
  testimonials,
  githubMetrics,
} from "@/data/home";
import { useCommandPalette } from "@/hooks/use-command-palette";

const siteUrl = "https://www.adarshtiwaridev.com";
const title = "Adarsh Tiwari | Software Engineer & Full-Stack Developer";
const description =
  "Portfolio of Adarsh Tiwari, Software Engineer & Product Developer specializing in Next.js, React, Node.js, TypeScript, MongoDB, and modern web application architecture.";
const ogImage = `${siteUrl}/image/Hero/Hero.png`;

// Build a lightweight JSON-LD person schema for SEO. Use safe fallbacks if data is missing.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: (profile && profile.name) || "Adarsh Tiwari",
  url: siteUrl,
  image: siteUrl + ((profile && profile.portrait && profile.portrait.src) || ""),
  jobTitle: (profile && profile.role) || "Software Engineer",
  description,
  email: profile && profile.email ? `mailto:${profile.email}` : undefined,
  sameAs: (socialLinks || []).map((link) => link.href).filter(Boolean),
  knowsAbout: [
    "Full-Stack Web Development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "REST APIs",
    "System Design",
  ],
  mainEntityOfPage: siteUrl,
};

// Map available data to the shapes expected by components.
const proofPoints = (heroHighlights || []).map((h) => ({
  label: h.label,
  value: h.value,
  detail: "",
}));

// Experience timeline component expects an array named `timeline` — the data file uses `engineeringExperience`.
const experienceTimeline = engineeringExperience || [];

// The command palette expects actions with `{ id, label, description, href, kind, keywords }`.
const commandActions = (recruiterActions || []).map((r) => ({
  id: r.id,
  label: r.label,
  description: r.reply || "",
  href: r.cta && r.cta.href ? r.cta.href : "#contact",
  kind: (r.cta ? "external" : "info") as "anchor" | "external" | "info",
  keywords: [r.label?.toLowerCase?.() || ""],
}));

export default function HomePage() {
  const palette = useCommandPalette(commandActions);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Adarsh Tiwari, Software Engineer, Full Stack Developer, Next.js Engineer, React Engineer, TypeScript Portfolio, Web Developer"
        />
        <meta name="author" content={profile.name} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#07111f" />

        <link rel="canonical" href={siteUrl} />
        <link rel="icon" href="/favicon.jpg" />
        <link rel="apple-touch-icon" href="/favicon.jpg" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Adarsh Tiwari Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:creator" content="@adarsh_tiwari27" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </Head>

      <SiteShell
        navigation={navigation}
        onOpenCommandPalette={palette.openPalette}
      >
        <main id="main-content" role="main">
          <HeroSection
            commandShortcut="Ctrl+K / Cmd+K"
            onOpenCommandPalette={palette.openPalette}
            profile={profile}
            proofPoints={proofPoints}
            socialLinks={socialLinks}
          />
          <AboutSection aboutItems={aboutItems} />
          <ProjectsSection projects={projects} />
          <SkillsSection categories={skillCategories} />
          <ExperienceSection timeline={experienceTimeline} />
          <GitHubSection metrics={githubMetrics} />
          <AchievementsSection achievements={achievements} />
          <CertificationsSection certifications={certifications} />
          <TestimonialsSection testimonials={testimonials} />
          <ContactSection profile={profile} socialLinks={socialLinks} />
        </main>

        <CommandPalette
          activeIndex={palette.activeIndex}
          filteredActions={palette.filteredActions}
          isOpen={palette.isOpen}
          onClose={palette.closePalette}
          onQueryChange={palette.setQuery}
          onSelect={palette.runAction}
          query={palette.query}
          setActiveIndex={palette.setActiveIndex}
        />
      </SiteShell>
    </>
  );
}
