import { useState } from 'react';

const now = 2021;

const summary = {
  2020: 'Summary 2020-2021',
  2019: 'Summary 2019-2020',
  2018: 'Summary 2018-2019',
};

const Tabs: React.FC = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div cx="wrapper">
      <ul cx="list-wrapper">
        {[1, 2, 3].map((i) => (
          <li cx="tab" key={`placement-tab-${i}`}>
            <a
              cx="tab-link"
              style={
                openTab === i
                  ? { color: '#fff', background: '#4F46E5' }
                  : { background: '#fff', color: '#4F46E5' }
              }
              onClick={(e): void => {
                e.preventDefault();
                setOpenTab(i);
              }}
              href={`#link${i}`}
            >
              {now - i} &ndash; {now - i + 1}
            </a>
          </li>
        ))}
      </ul>
      <div cx="tab-content">
        {[1, 2, 3].map((i) => (
          <div
            style={{ display: openTab === i ? 'block' : 'none' }}
            id="link1"
            key={`placement-content-${i}`}
          >
            <p>{summary[(now - i) as keyof typeof summary]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
