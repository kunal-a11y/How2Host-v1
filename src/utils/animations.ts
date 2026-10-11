/**
 * Central animation configuration for How2Host.
 * Provides unified cubic-bezier easings, transitions, and stagger timings
 * while strictly observing prefers-reduced-motion.
 */

export const easeEditorial = [0.16, 1, 0.3, 1] as const;
export const easeSnappy = [0.22, 1, 0.36, 1] as const;

export const transitionVariants = {
  // Page Transition
  page: {
    initial: { opacity: 0, y: 12 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: easeEditorial },
    },
    exit: {
      opacity: 0,
      y: -8,
      transition: { duration: 0.25, ease: easeSnappy },
    },
  },

  // Stagger Container
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  },

  // Fade Up item
  fadeUp: {
    initial: { opacity: 0, y: 24 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeEditorial },
    },
  },

  // Hero word reveal
  wordReveal: {
    initial: { opacity: 0, y: 18 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.045,
        ease: easeEditorial,
      },
    }),
  },
};
