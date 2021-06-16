import Image from 'next/image';

import cyrb53 from '@utils/hash-string';
import members from '@utils/members';

const Team: React.FC = () => (
  <section cx="sect" id="our-team">
    <div cx="ctr">
      <div cx="title-wrapper">
        <h1 cx="title">Our Team</h1>
      </div>
      <div cx="members">
        {members.map(({ name, desc }) => (
          <div cx="member" key={cyrb53(name)}>
            <div cx="wrapper">
              <Image
                src={`/members/${name.toLowerCase().replace(/\.?\s+/g, '-')}.jpg`}
                width="96"
                height="96"
                cx="image"
                role="img"
                alt={name}
                aria-label={name}
              />

              <div cx="content">
                <h2 cx="name">{name}</h2>
                <p cx="desc">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
