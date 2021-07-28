import Image from 'next/image';

import cyrb53 from '@utils/hash-string';
import members from '@utils/members';

const Members: React.FC<{ level: keyof typeof members }> = ({ level }) => (
  <>
    {members[level].map(({ name, linkedIn }) => (
      <div key={cyrb53(name)} cx="member">
        <div cx="wrapper">
          <Image
            alt={name}
            cx="image"
            height="96"
            src={`/members/${name.toLowerCase().replace(/\.?\s+/g, '-')}.jpg`}
            width="96"
          />

          <a
            cx="overlay"
            href={`https://www.linkedin.com/in/${linkedIn}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              aria-label="linkedin"
              fill="white"
              role="img"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              viewBox="0 0 24 24"
            >
              <path
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                stroke="none"
              />
              <circle cx="4" cy="4" r="2" stroke="none" />
            </svg>
          </a>

          <div cx="content">
            <h2 cx="name">{name}</h2>
          </div>
        </div>
      </div>
    ))}
  </>
);

const Team: React.FC = () => (
  <section cx="sect" id="our-team">
    <div cx="ctr">
      <div cx="title-wrapper">
        <h1 cx="title">Our Team</h1>
      </div>
      <h2 cx="lead">Faculty Coordinator</h2>
      <div cx="members">
        <Members level="faculty" />
      </div>
      <h2 cx="lead">Student Placement Coordinators — Y&apos;22</h2>
      <div cx="members">
        <Members level="2022" />
      </div>
      <h2 cx="lead">Former Student Placement Coordinators</h2>
      <div cx="members">
        <Members level="2020" />
        <Members level="2021" />
      </div>
      <h2 cx="lead">Webmasters</h2>
      <div cx="members">
        <Members level="webmaster" />
      </div>
    </div>
  </section>
);

export default Team;
