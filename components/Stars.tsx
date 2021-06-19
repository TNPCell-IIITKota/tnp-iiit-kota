import Image from 'next/image';

import cyrb53 from '@utils/hash-string';
import topPerformers from '@utils/star-perf';

const Wrapper: React.FC<{ year: keyof typeof topPerformers }> = ({ year }) => (
  <>
    {topPerformers[year].map(({ name, company, lpa }) => (
      <div cx="star" key={cyrb53(name)}>
        <div cx="wrapper">
          <div cx="image-wrapper">
            <Image
              src={`/stars/${name.toLowerCase().replace(/\.?\s+/g, '-')}.jpg`}
              width="160"
              height="160"
              cx="image"
              role="img"
              alt={name}
              aria-label={name}
            />
          </div>

          <div cx="overlay-wrapper">
            <h2 cx="name">
              {name.substr(0, name.indexOf(' '))}
              <br />
              {name.substr(name.indexOf(' ') + 1)}
              <span cx="year">&nbsp;Y&apos;{year}</span>
            </h2>
            <h3 cx="company">{company}</h3>
            <p cx="lpa">{lpa} LPA</p>
          </div>
        </div>
      </div>
    ))}
  </>
);

const Stars: React.FC = () => (
  <section cx="sect" id="featured-stars">
    <div cx="ctr">
      <div cx="title-wrapper">
        <h1 cx="title">Featured Stars</h1>
        <p cx="desc">Meet some of our alumni who secured the highest packages.</p>
      </div>
      <div cx="stars">
        {Object.keys(topPerformers)
          .sort()
          .reverse()
          .map((year) => (
            <Wrapper year={year as keyof typeof topPerformers} key={cyrb53(`stars-y'${year}`)} />
          ))}
      </div>
    </div>
  </section>
);

export default Stars;
