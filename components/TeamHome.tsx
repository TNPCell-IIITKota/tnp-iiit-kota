import Image from 'next/image';

import cyrb53 from '@utils/hash-string';
import members from '@utils/members';

const Members: React.FC<{ level: keyof typeof members }> = ({ level }) => (
  <>
    {members[level].map(({ name, linkedIn, mobile, role }) => (
      <div key={cyrb53(name)} cx="member">
        <div cx="wrapper">
          <div cx="image-wrapper">
            <Image
              alt={name}
              cx="image"
              height="160"
              src={`/members/${name
                .toLowerCase()
                .replace(/\.?\s+/g, '-')
                .replace(/-\(.*\)/g, '')}.jpg`}
              width="160"
            />

            {/* LinkedIn overlay on hover */}
            <a
              cx="overlay"
              href={`https://www.linkedin.com/in/${linkedIn}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg
                aria-label="linkedin"
                cx="linkedin-icon"
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
          </div>

          <div cx="info-wrapper">
            <h3 cx="name">{name}</h3>
            {/* Show SPC/SPCT mobile number with click-to-call support */}
            {mobile && (
              <a cx="mobile" href={`tel:${mobile.replace(/\s+/g, '')}`}>
                {mobile}
              </a>
            )}
            {/* Show Faculty role info */}
            {role && <p cx="role">{role}</p>}
          </div>
        </div>
      </div>
    ))}
  </>
);

const TeamHome: React.FC = () => (
  <section cx="sect" id="our-team">
    {/* Ambient Glows */}
    <div cx="bg-accent-1" />
    <div cx="bg-accent-2" />

    <div cx="ctr">
      <div cx="title-wrapper">
        <h2 cx="title">
          Our <span cx="highlight">Team</span>
        </h2>
        <div cx="divider-line" />
      </div>

      <h3 cx="lead">Dean, Associate Dean & Faculty Coordinator, Training and Placements</h3>
      <div cx="members">
        <Members level="faculty" />
      </div>

      <h3 cx="lead">Student Placement Coordinators — Y&apos;27</h3>
      <div cx="members">
        <Members level="2027" />
      </div>

      <h3 cx="lead">Student Placement Trainees — Y&apos;28</h3>
      <div cx="members">
        <Members level="2028" />
      </div>
    </div>
  </section>
);

export default TeamHome;
