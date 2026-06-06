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
        <motion.div
          animate="visible"
          cx="grid-layout"
          initial="hidden"
          variants={containerVariants}
        >
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
              animate={{ y: [0, -8, 0] }}
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
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div cx="stat-info">
                  <span cx="stat-value">56 LPA</span>
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
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div cx="stat-info">
                  <span cx="stat-value">18.66 LPA</span>
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
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div cx="stat-info">
                  <span cx="stat-value">95.23%</span>
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
