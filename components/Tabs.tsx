import type { Year } from '@types';

import { useState } from 'react';

import Charts from '@components/Charts';
import Table from '@components/Table';

const Tabs: React.FC = () => {
  const now = 2021;
  const [openTab, setOpenTab] = useState(0);

  return (
    <div cx="wrapper">
      <ul cx="list-wrapper">
        {[0, 1].map((i) => (
          <li key={`placement-tab-${i}`} cx="tab">
            <a
              cx="tab-link"
              href={`#placement-stats-${now - i}`}
              style={
                openTab === i
                  ? { color: '#fff', background: '#0e407c' }
                  : { background: '#fff', color: '#0e407c' }
              }
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
            key={`placement-content-${i}`}
            id={`placement-stats-${now - i}`}
            style={{ display: openTab === i ? 'block' : 'none' }}
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
