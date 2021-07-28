import type { Year } from '@types';

import { useState } from 'react';

import Charts from '@components/Charts';
import Table from '@components/Table';
import cyrb53 from '@utils/hash-string';

const Tabs: React.FC = () => {
  const now = 2021;
  const [openTab, setOpenTab] = useState(0);

  return (
    <div cx="wrapper">
      <ul cx="list-wrapper">
        {[0, 1].map((i) => (
          <li key={cyrb53(`placement-tab-${i}`)} cx="tab">
            <a
              aria-selected={openTab === i}
              cx="tab-link"
              href={`#placement-stats-${now - i}`}
              role="tab"
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
            id={`placement-stats-${now - i}`}
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
