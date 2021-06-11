import Tabs from '@components/Tabs';

const Stats: React.FC = () => (
  <section cx="sect">
    <div cx="ctr">
      <div cx="wrapper">
        <div cx="separator-wrapper">
          <div cx="separator" />
        </div>
        <div cx="title-wrapper">
          <h1 cx="title">Placement Statistics</h1>
        </div>
      </div>
      <Tabs />
    </div>
  </section>
);

export default Stats;
