import Image from 'next/image';
import { motion } from 'framer-motion';

import companies from '@assets/companies';
import cyrb53 from '@utils/hash-string';

const OurEsteemedRecruiters: React.FC = () => {
  // Flat map all recruiter groups into a single list of companies
  const allCompanies = Object.values(companies).flatMap((group) => Object.entries(group));

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.015,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section cx="sect" id="our-esteemed-recruiters">
      <div cx="ctr">
        {/* Section Header */}
        <motion.div
          cx="title-wrapper"
          initial="hidden"
          variants={titleVariants}
          viewport={{ once: true, amount: 0.5 }}
          whileInView="visible"
        >
          <h2 cx="title">
            Our Esteemed <span cx="highlight">Recruiters</span>
          </h2>
          <div cx="divider-line" />
          <p cx="subtitle">
            IIIT Kota graduates are hired by leading tech corporations, premium engineering firms,
            and top startups.
          </p>
        </motion.div>

        {/* Logo Grid Section with Entrance Stagger Animation */}
        <motion.div
          cx="logo-grid"
          initial="hidden"
          variants={containerVariants}
          viewport={{ once: true, amount: 0.1 }}
          whileInView="visible"
        >
          {allCompanies.map(([name, src]) => (
            <motion.div
              key={cyrb53(`recruiter-card-${name}`)}
              cx="grid-item"
              variants={cardVariants}
            >
              <div cx="logo-card">
                <div cx="img-container">
                  <Image alt={name} src={src} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurEsteemedRecruiters;
