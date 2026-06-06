import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrolled = window.scrollY;

      // Toggle button visibility after 400px of scrolling
      if (scrolled > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setProgress(scrolled / totalHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Execute initial check in case page starts pre-scrolled
    handleScroll();

    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          animate={{ opacity: 1, scale: 1, y: 0 }}
          aria-label="Scroll to top"
          cx="btn"
          exit={{ opacity: 0, scale: 0.5, y: 10 }}
          initial={{ opacity: 0, scale: 0.5, y: 10 }}
          transition={{ duration: 0.2 }}
          type="button"
          onClick={scrollToTop}
        >
          {/* Progress Circle SVG (radius 18 inside 44x44 box -> circumference = 113) */}
          <svg cx="progress-svg" viewBox="0 0 44 44">
            {/* Background Circle */}
            <circle
              cx="22"
              cy="22"
              fill="none"
              r="18"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="3.5"
            />
            {/* Active Progress Path */}
            <circle
              cx="22"
              cy="22"
              fill="none"
              r="18" // Brand orange progress color
              stroke="#ea580c"
              strokeLinecap="round"
              strokeWidth="3.5"
              style={{
                strokeDasharray: 113,
                strokeDashoffset: 113 * (1 - progress),
              }}
            />
          </svg>

          {/* Centered Arrow Icon */}
          <svg
            cx="icon"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 15l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
