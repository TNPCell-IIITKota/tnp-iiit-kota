import type { Year } from '@types';

import { useState } from 'react';

import Charts from '@components/Charts';
import Table from '@components/Table';
import cyrb53 from '@utils/hash-string';

const Tabs: React.FC = () => {
  const now = 2022;
  const [openTab, setOpenTab] = useState(0);

  return (
    <div cx="wrapper">
      <ul aria-owns="placement-tab-0 placement-tab-1" cx="list-wrapper" role="tablist">
        {[0, 1, 2].map((i) => (
          <li key={cyrb53(`placement-tab-${i}`)} cx="tab" role="none">
            <a
              aria-controls={`placement-stats-${now - i}`}
              aria-selected={openTab === i}
              cx="tab-link"
              href={`#placement-stats-${now - i}`}
              id={`placement-tab-${i}`}
              role="tab"
              tabIndex={openTab === i ? 0 : -1}
              onClick={(e): void => {
                e.preventDefault();
                setOpenTab(i);
              }}
            >
              {now - i - 1} – {now - i}
            </a>
          </li>
        ))}
      </ul>
      <div cx="tab-content">
        {[0, 1].map((i) => (
          <div
            key={cyrb53(`placement-content-${i}`)}
            aria-hidden={openTab !== i}
            aria-labelledby={`placement-tab-${i}`}
            id={`placement-stats-${now - i}`}
            role="tabpanel"
            tabIndex={0}
          >
            <Table year={(now - i) as Year} />
            <Charts year={(now - i) as Year} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
