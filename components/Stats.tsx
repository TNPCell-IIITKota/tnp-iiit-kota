import Tabs from '@components/Tabs';

const Stats: React.FC = () => (
  <section cx="sect" id="statistics">
    <div cx="ctr">
      <div cx="header-wrapper">
        <h2 cx="title">
          Placement <span cx="highlight">Statistics</span>
        </h2>
        <div cx="divider-line" />
        <p cx="additional-info">
          Comprehensive summary of placement data, student participation, and compensation trends
          over the years.
          <span cx="update-time">
            {' '}
            Last updated: June 07<sup>th</sup>, 2026
          </span>
        </p>
      </div>
      <Tabs />
    </div>
  </section>
);

export default Stats;
