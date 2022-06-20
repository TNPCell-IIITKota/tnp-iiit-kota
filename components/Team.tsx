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
            src={`/members/${name
              .toLowerCase()
              .replace(/\.?\s+/g, '-')
              .replace(/-\(.*\)/g, '')}.jpg`}
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
            <h3 cx="name">{name.replace(/\s(?![^(]*\)|\()/g, '\u00A0')}</h3>
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
        <h2 cx="title">Our Team</h2>
      </div>
      <h3 cx="lead">Faculty Coordinators</h3>
      <div cx="members">
        <Members level="faculty" />
      </div>
      <h3 cx="lead">Student Placement Coordinators — Y&apos;23</h3>
      <div cx="members">
        <Members level="2023" />
      </div>
      <h3 cx="lead">Former Student Placement Coordinators</h3>
      <div cx="members">
        <Members level="2022" />
        <Members level="2021" />
        <Members level="2020" />
      </div>
      <h3 cx="lead">Webmasters</h3>
      <div cx="members">
        <Members level="webmaster" />
      </div>
    </div>
  </section>
);

export default Team;
