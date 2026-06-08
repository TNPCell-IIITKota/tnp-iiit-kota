import type { Year } from '@types';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Charts from '@components/Charts';
import Table from '@components/Table';
import cyrb53 from '@utils/hash-string';

const Tabs: React.FC = () => {
  const now = 2026;
  const [openTab, setOpenTab] = useState(0);

  return (
    <div cx="wrapper">
      <ul aria-owns="placement-tab-0 placement-tab-1" cx="list-wrapper" role="tablist">
        {[0, 1, 2, 3].map((i) => (
          <li key={cyrb53(`placement-tab-${i}`)} cx="tab" role="none">
            <a
              aria-controls={`placement-stats-${now - i}`}
              aria-selected={openTab === i}
              cx={openTab === i ? 'tab-link-active' : 'tab-link'}
              href={`#placement-stats-${now - i}`}
              id={`placement-tab-${i}`}
              role="tab"
              tabIndex={openTab === i ? 0 : -1}
              onClick={(e): void => {
                e.preventDefault();
                setOpenTab(i);
              }}
            >
              {openTab === i && (
                <motion.div
                  cx="active-bg"
                  layoutId="activeYearTab"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
              <span cx="tab-text">
                {now - i - 1} – {now - i}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div cx="tab-content">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={openTab}
            animate={{ opacity: 1, y: 0 }}
            aria-labelledby={`placement-tab-${openTab}`}
            exit={{ opacity: 0, y: -15 }}
            id={`placement-stats-${now - openTab}`}
            initial={{ opacity: 0, y: 15 }}
            role="tabpanel"
            tabIndex={0}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {openTab === 0 && (
              <p cx="footnote">
                * Placement stats with Full-Time Offers, Internships, and PPO conversions included.
              </p>
            )}
            <div cx="data-layout">
              <div cx="table-pane">
                <Table year={(now - openTab) as Year} />
              </div>
              <div cx="charts-pane">
                <Charts year={(now - openTab) as Year} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
