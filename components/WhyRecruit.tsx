/* eslint-disable react/no-array-index-key, react/no-danger */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import cyrb53 from '@utils/hash-string';
import content from '@utils/why-recruit';

const WhyRecruit: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Responsively calculate visible cards in the viewport frame
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Autoplay functionality with hover pausing
  useEffect(() => {
    if (isPaused) {
      return (): void => {};
    }
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = content.length - visibleCards;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4000);
    return (): void => {
      clearInterval(interval);
    };
  }, [visibleCards, isPaused]);

  const handlePrev = (): void => {
    setCurrentIndex((prev) => {
      const maxIndex = content.length - visibleCards;
      return prev === 0 ? maxIndex : prev - 1;
    });
  };

  const handleNext = (): void => {
    setCurrentIndex((prev) => {
      const maxIndex = content.length - visibleCards;
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  // Entrance animations when page first renders
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section cx="sect" id="why-recruit">
      <div cx="bg-accent-1" />
      <div cx="bg-accent-2" />

      <div cx="ctr">
        {/* Centered Header Title Block */}
        <motion.div
          cx="title-wrapper"
          initial={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 cx="title">
            Why Recruit <span cx="highlight">IIIT Kota?</span>
          </h2>
          <div cx="divider-line" />
          <p cx="desc">
            Discover what makes our students exceptional — from rigorous curriculum to proven track
            records.
          </p>
        </motion.div>

        {/* Symmetrical Slider Row wrapping Navigation Arrows and Track */}
        <div cx="slider-row">
          {/* Left Arrow Button */}
          <button aria-label="Previous slide" cx="arrow-btn" type="button" onClick={handlePrev}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Cards Viewport Mask Container */}
          <motion.div
            cx="slider-container"
            initial="hidden"
            variants={containerVariants}
            viewport={{ once: true, amount: 0.15 }}
            whileInView="show"
          >
            <div
              cx="slider-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {content.map((item) => (
                <motion.div
                  key={cyrb53(item.lead)}
                  cx="card-wrapper"
                  style={{
                    width: `calc(100% / ${visibleCards})`,
                  }}
                  variants={cardVariants}
                >
                  <div
                    cx="card"
                    onMouseEnter={(): void => {
                      setIsPaused(true);
                    }}
                    onMouseLeave={(): void => {
                      setIsPaused(false);
                    }}
                  >
                    <div cx="card-icon" dangerouslySetInnerHTML={{ __html: item.icon }} />
                    <h3 cx="card-title">{item.lead}</h3>
                    <p cx="card-desc">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Arrow Button */}
          <button aria-label="Next slide" cx="arrow-btn" type="button" onClick={handleNext}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Slide Indicator Dots */}
        {content.length - visibleCards + 1 > 1 && (
          <div cx="dots">
            {Array.from({ length: content.length - visibleCards + 1 }).map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                cx={idx === currentIndex ? 'dot-active' : 'dot'}
                type="button"
                onClick={(): void => {
                  setCurrentIndex(idx);
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyRecruit;
