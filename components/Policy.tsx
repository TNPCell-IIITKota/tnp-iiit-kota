import React from 'react';
import { motion } from 'framer-motion';

const Policy: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section cx="sect" id="policy">
      {/* Background ambient accents */}
      <div cx="bg-accent-1" />
      <div cx="bg-accent-2" />

      <div cx="ctr">
        {/* Section Header */}
        <div cx="title-wrapper">
          <h2 cx="title">
            Placement <span cx="highlight">Policy</span>
          </h2>
          <div cx="divider-line" />
        </div>

        {/* Centralized Policy Container */}
        <motion.div
          cx="policy-card"
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
        >
          {/* Main Introduction Text */}
          <p cx="intro-text">
            The placement season in IIIT Kota runs throughout the year, commencing tentatively from
            the mid of July. The Training and Placement (TnP) Cell oversees the placement process,
            following established institute guidelines for both placements and internships.
          </p>

          {/* Policy Guidelines Grid */}
          <div cx="guidelines-grid">
            <div cx="guideline-card">
              <div
                cx="icon-wrapper"
                style={{ color: '#2b406a', backgroundColor: 'rgba(43, 64, 106, 0.08)' }}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div cx="guideline-info">
                <h4 cx="guideline-title">Student & Company Eligibility</h4>
                <p cx="guideline-desc">
                  The placement policy applies to all registered students of IIIT Kota seeking
                  campus recruitment, as well as participating recruiters interested in hiring.
                </p>
              </div>
            </div>

            <div cx="guideline-card">
              <div
                cx="icon-wrapper"
                style={{ color: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.08)' }}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div cx="guideline-info">
                <h4 cx="guideline-title">Communication Protocols</h4>
                <p cx="guideline-desc">
                  Please utilize the official contact information listed at the bottom of this
                  website for all placement communications, rather than outdated contacts in older
                  documents.
                </p>
              </div>
            </div>
          </div>

          {/* Alert note box */}
          <div cx="note-box">
            <div cx="note-icon-wrapper">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p cx="note-text">
              <strong cx="note-highlight">Recruiter Query Note:</strong> Companies may refer
              to&nbsp;
              <a
                cx="link-underlined"
                href="https://files.iiitkota.ac.in/pdf/placements/Institute_Placement_Policy-IIITK_2025.pdf#page=6"
                rel="noopener noreferrer"
                target="_blank"
              >
                Section 5.2 – Section 5.7
              </a>
              &nbsp;of the policy document or contact us directly in case of specific queries.
            </p>
          </div>

          {/* Integrated CTA Banner for Policy PDF Download */}
          <div cx="download-cta">
            <div cx="cta-text">
              <h4 cx="cta-title">Official Placement Policy Document</h4>
              <p cx="cta-desc">
                For detailed rules regarding grades, registration, debarment, and placement
                schedules, please refer to the official document.
              </p>
            </div>
            <div cx="cta-action">
              <a
                cx="download-btn"
                href="https://files.iiitkota.ac.in/pdf/placements/Institute_Placement_Policy-IIITK_2025.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg
                  cx="btn-icon"
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
                <span>Read Policy Document</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Policy;
