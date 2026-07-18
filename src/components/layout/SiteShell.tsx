"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { type PropsWithChildren, useState, useEffect } from "react";

import { AmbientBackground } from "@/components/home/AmbientBackground";
import { useTheme } from "@/hooks/use-theme";
import type { NavItem } from "@/types/home";

type SiteShellProps = PropsWithChildren<{
  navigation: NavItem[];
  onOpenCommandPalette: () => void;
}>;

export function SiteShell({
  children,
  navigation,
  onOpenCommandPalette,
}: SiteShellProps) {
  const { mounted, theme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();
  
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const observers = new Map();
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: "-20% 0px -80% 0px", // Detect when section is roughly in top third
    });

    navigation.forEach((item) => {
      const id = item.href.replace("#", "");
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navigation]);

  return (
    <div className="min-h-screen relative z-0 flex flex-col">
      <AmbientBackground />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <motion.header
        initial="visible"
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-150%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="floating-nav inset-x-0 mx-auto flex items-center justify-between gap-4 px-4 py-3 sm:px-6 w-[92%] sm:w-[85%] max-w-4xl"
      >
        <a
          href="#main-content"
          className="font-[var(--font-mono)] text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[color:var(--text-strong)] shrink-0 transition-transform hover:scale-105"
        >
          AT / Portfolio
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.href}
                href={item.href}
                className="relative text-xs font-semibold tracking-wide transition-colors duration-200"
                style={{
                  color: isActive ? "var(--text-strong)" : "var(--text-muted)",
                }}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--accent-strong)] rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--border-soft)] bg-[var(--surface-muted)] text-[var(--text-strong)] transition-colors hover:bg-[var(--surface)] hover:border-[var(--border-strong)]"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            disabled={!mounted}
          >
            <motion.span
              animate={{ rotate: theme === "dark" ? 0 : 40 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {theme === "dark" ? <Moon size={14} aria-hidden="true" /> : <Sun size={14} aria-hidden="true" />}
            </motion.span>
          </motion.button>

          <button
            type="button"
            onClick={onOpenCommandPalette}
            aria-label="Open command palette"
            className="hidden sm:flex h-8 items-center gap-1.5 rounded-xl border border-[var(--border-soft)] bg-[var(--surface-muted)] px-2.5 text-xs text-[var(--text-strong)] transition-colors hover:bg-[var(--surface)] hover:border-[var(--border-strong)]"
          >
            <span className="font-medium">Cmd</span>
            <span className="kbd bg-transparent !py-0.5 !px-1.5 !text-[10px]">K</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--border-soft)] bg-[var(--surface-muted)] text-[var(--text-strong)] transition-colors hover:bg-[var(--surface)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-strong)] p-4 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navigation.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold tracking-wide text-[var(--text-strong)] hover:text-[var(--accent-strong)]"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navigation.length * 0.05 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--surface-muted)] py-3 text-sm font-medium text-[var(--text-strong)]"
              >
                Search <span className="kbd">⌘K</span>
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1 flex flex-col">
        {children}
      </main>

      <footer className="shell-footer py-8 mt-auto">
        <div className="grid-shell flex flex-col gap-3 text-sm text-[color:var(--text-soft)] sm:flex-row sm:items-center sm:justify-between">
          <p>Designed as a production-grade homepage system, not a one-off mockup.</p>
          <p className="font-[var(--font-mono)] uppercase tracking-[0.18em]">
            Semantic · Typed · Keyboard-first
          </p>
        </div>
      </footer>
    </div>
  );
}
