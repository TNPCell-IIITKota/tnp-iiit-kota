import Image from 'next/image';

import cyrb53 from '@utils/hash-string';
import members from '@utils/members';

const Team: React.FC = () => (
  <section cx="sect">
    <h1 cx="title">Our Team</h1>
    <div cx="members">
      {members.map(({ name, desc }) => (
        <div cx="member" key={cyrb53(name)}>
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
            <p cx="name">{name}</p>
            <p cx="desc">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Team;
