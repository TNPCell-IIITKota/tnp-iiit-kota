import { motion } from 'framer-motion';

import Tabs from '@components/Tabs';

const Stats: React.FC = () => (
  <section cx="sect" id="statistics">
    <div cx="ctr">
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        cx="title-wrapper"
        initial={false}
        transition={{ duration: 0.5 }}
      >
        <h2 cx="title">
          Placement <span cx="highlight">Statistics</span>
        </h2>
        <div cx="divider-line" />
        <p cx="desc">
          Comprehensive summary of placement data, student participation, and compensation trends
          over the years.
          <span cx="update-time">
            Last updated: August 4<sup>th</sup>, 2026
          </span>
        </p>
      </motion.div>
      <Tabs />
    </div>
  </section>
);

export default Stats;
