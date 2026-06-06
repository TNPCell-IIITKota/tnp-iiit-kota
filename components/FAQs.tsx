/* eslint-disable react/no-danger */
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import cyrb53 from '@utils/hash-string';
import questions from '@utils/questions';

const FAQs: React.FC = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<{
    question: string;
    answer: string;
  } | null>(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section cx="sect" id="faqs">
      {/* Background ambient accents */}
      <div cx="bg-accent-1" />
      <div cx="bg-accent-2" />

      <div cx="ctr">
        {/* Section Header */}
        <motion.div
          cx="title-wrapper"
          initial={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 cx="title">
            Frequently Asked <span cx="highlight">Questions</span>
          </h2>
          <div cx="divider-line" />
          <p cx="subtitle">
            Click on any question below to view detailed information regarding schedules,
            registration, and guidelines.
          </p>
        </motion.div>

        {/* Compact Row Cards Grid */}
        <motion.div
          cx="grid-container"
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
          whileInView="visible"
        >
          {questions.map(({ question: q, answer: a }) => (
            <button
              key={cyrb53(q)}
              cx="faq-row-card"
              type="button"
              onClick={(): void => {
                setSelectedQuestion({ question: q, answer: a });
              }}
            >
              <div cx="card-left">
                {/* Number indicator / icon */}
                <div cx="q-icon-wrapper">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span cx="row-question">{q}</span>
              </div>
              <div cx="card-right">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          ))}
        </motion.div>

        <p cx="desc">
          Can&apos;t find the answers you&apos;re looking for? Feel free to{' '}
          <a cx="contact-link" href="#our-team">
            reach out to our team
          </a>
          .
        </p>
      </div>

      <AnimatePresence>
        {selectedQuestion && (
          <div cx="modal-overlay">
            <motion.div
              animate={{ opacity: 1 }}
              cx="modal-backdrop"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              onClick={(): void => {
                setSelectedQuestion(null);
              }}
            />

            {/* Square Detail Box */}
            <motion.div
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { type: 'spring', damping: 25, stiffness: 350 },
              }}
              cx="modal-wrapper"
              exit={{ opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.2 } }}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
            >
              <div cx="modal-box">
                {/* Close Button */}
                <button
                  aria-label="Close details"
                  cx="close-btn"
                  type="button"
                  onClick={(): void => {
                    setSelectedQuestion(null);
                  }}
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div cx="modal-content">
                  <div cx="modal-header">
                    <span cx="question-badge">Question</span>
                    <h3 cx="modal-question">{selectedQuestion.question}</h3>
                  </div>

                  <div cx="modal-divider" />

                  <div cx="modal-answer-scroll">
                    <div
                      cx="modal-answer"
                      dangerouslySetInnerHTML={{ __html: selectedQuestion.answer }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FAQs;
