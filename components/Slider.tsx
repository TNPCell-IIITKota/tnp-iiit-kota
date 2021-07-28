import Image from 'next/image';

import companies from '@assets/companies';
import cyrb53 from '@utils/hash-string';

const Slider: React.FC = () => (
  <section cx="sect" id="past-recruiters">
    <h1 cx="title">Past Recruiters</h1>

    {[0, 1].map((level) => (
      <div key={cyrb53(`recruiters-${level}`)} cx="slider">
        {[0, 1].map((i) =>
          Object.entries(companies[level as keyof typeof companies]).map(([name, src]) => (
            <div key={cyrb53(`${level}${i}-${name}`)} cx="slide">
              <Image alt={name} src={src} priority />
            </div>
          )),
        )}
      </div>
    ))}
  </section>
);

export default Slider;
