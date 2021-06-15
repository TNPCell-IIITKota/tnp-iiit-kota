import Image from 'next/image';

import cyrb53 from '@utils/hash-string';
import topPerformers from '@utils/star-perf';

const Stars: React.FC = () => (
  <section cx="sect">
    <div cx="ctr">
      <div cx="title-wrapper">
        <h1 cx="title">Featured Stars</h1>
        <p cx="desc">Meet some of our alumni who secured the highest packages.</p>
      </div>
      <div cx="stars">
        {topPerformers.map(({ name, company, lpa }) => (
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
                <h2 cx="name">{name}</h2>
                <h3 cx="company">{company}</h3>
                <p cx="lpa">{lpa} LPA</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Stars;
