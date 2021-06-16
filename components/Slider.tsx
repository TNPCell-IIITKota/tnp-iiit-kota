import companies from '@assets/companies';
import cyrb53 from '@utils/hash-string';

const Slider: React.FC = () => (
  <section cx="sect" id="past-recruiters">
    <h1 cx="title">Past Recruiters</h1>

    <div cx="ctr">
      <div cx="slider">
        <div cx="wrapper">
          {Object.entries(companies[0]).map(([key, Svg]) => (
            <div cx="slide" key={`00-${cyrb53(key)}`}>
              <Svg role="img" aria-label={key} />
            </div>
          ))}
        </div>
        <div cx="wrapper">
          {Object.entries(companies[0]).map(([key, Svg]) => (
            <div cx="slide" key={`01-${cyrb53(key)}`}>
              <Svg role="img" aria-label={key} />
            </div>
          ))}
        </div>
      </div>
    </div>

    <div cx="ctr">
      <div cx="slider">
        <div cx="wrapper">
          {Object.entries(companies[1]).map(([key, Svg]) => (
            <div cx="slide" key={`10-${cyrb53(key)}`}>
              <Svg role="img" aria-label={key} />
            </div>
          ))}
        </div>
        <div cx="wrapper">
          {Object.entries(companies[1]).map(([key, Svg]) => (
            <div cx="slide" key={`11-${cyrb53(key)}`}>
              <Svg role="img" aria-label={key} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Slider;
