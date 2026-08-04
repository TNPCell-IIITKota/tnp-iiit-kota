import Image from 'next/image';
import { motion } from 'framer-motion';

import logo from '@assets/logo.svg';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 14,
      },
    },
  };

  return (
    <section cx="sect">
      {/* Ambient background glows */}
      <div cx="bg-glow-indigo" />
      <div cx="bg-glow-orange" />
      <div cx="grid-overlay" />

      <div cx="ctr">
        <motion.div animate="visible" cx="grid-layout" initial={false} variants={containerVariants}>
          {/* Left Column: Typography & Action Buttons */}
          <div cx="left-col">
            <motion.h1 cx="lead" variants={itemVariants}>
              Training & Placement Cell
              <span cx="highlight-brand"> IIIT Kota</span>
            </motion.h1>

            <motion.div cx="desc-container" variants={itemVariants}>
              <div cx="desc-accent-line" />
              <p cx="about">
                We act as a catalyst connecting academic excellence with industrial innovation. Our
                cell works proactively to empower students with industry-relevant skills,
                professional training, and exceptional career opportunities.
              </p>
            </motion.div>

            <motion.div cx="cta-group" variants={itemVariants}>
              <a
                cx="cta-primary"
                href="/docs/Brochure-IIIT-KOTA-2026-27.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  cx="cta-icon"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Download Brochure
              </a>
              <a cx="cta-secondary" href="#statistics">
                Explore Placement Stats
                <svg
                  cx="cta-icon-arrow"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          <div cx="right-col">
            <motion.div
              // animate={{ y: [0, 8, 0] }}
              cx="logo-container"
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              variants={itemVariants}
            >
              <Image
                alt="IIIT Kota Logo"
                cx="logo"
                height="160"
                layout="fixed"
                quality="100"
                src={logo}
                width="160"
                priority
                unoptimized
              />
            </motion.div>

            <div cx="stats-grid">
              <motion.div
                cx="stat-card"
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.03 }}
              >
                <div cx="stat-icon-wrapper" style={{ color: '#38bdf8' }}>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13 17V9" />
                    <path d="M18 17V5" />
                    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                    <path d="M8 17v-3" />
                  </svg>
                </div>
                <div cx="stat-info">
                  <span cx="stat-value">53 LPA</span>
                  <span cx="stat-label">HIGHEST PACKAGE</span>
                </div>
              </motion.div>

              <motion.div
                cx="stat-card"
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.03 }}
              >
                <div cx="stat-icon-wrapper" style={{ color: '#10b981' }}>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                    <path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" />
                  </svg>
                </div>
                <div cx="stat-info">
                  <span cx="stat-value">15.49 LPA</span>
                  <span cx="stat-label">AVERAGE PACKAGE</span>
                </div>
              </motion.div>

              <motion.div
                cx="stat-card"
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.03 }}
              >
                <div cx="stat-icon-wrapper" style={{ color: '#fb923c' }}>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div cx="stat-info">
                  <span cx="stat-value">94.64 %</span>
                  <span cx="stat-label">PLACEMENT SUCCESS</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Curve Separator */}
      <div cx="separator">
        <svg
          aria-label="separator"
          preserveAspectRatio="none"
          role="img"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          xmlns="http://www.w3.org/2000/svg"
          y="0"
        >
          <polygon fill="#fff" points="2560 0 2560 100 0 100" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
