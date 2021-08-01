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
        </div>
      </div>
      <Tabs />
    </div>
  </section>
);

export default Stats;
