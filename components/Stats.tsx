import Tabs from '@components/Tabs';

const Stats: React.FC = () => (
  <section cx="sect" id="statistics">
    <div cx="ctr">
      <div cx="wrapper">
        <div cx="separator-wrapper">
          <div cx="separator" />
        </div>
        <div cx="title-wrapper">
          <h2 cx="title">Placement Statistics</h2>
          <a
            href="/docs/placement-report-2022.pdf"
            rel="noopener noreferrer"
            target="_blank"
            title="Download latest report"
          >
            <svg
              cx="download"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <Tabs />
    </div>
  </section>
);

export default Stats;
