import React from 'react';
import Image from 'next/image';

import { achivers, gate } from '@utils/achivers';
import cyrb53 from '@utils/hash-string';

const WrappedImage: React.FC<{ name: string }> = ({ name }) => (
  <div cx="image-wrapper">
    <Image
      alt={name}
      cx="image"
      height="160"
      src={`/achivers/${name.toLowerCase().replace(/\.?\s+/g, '-')}.jpg`}
      width="160"
    />
  </div>
);

const OverlayWrapper: React.FC<{ name: string; children: React.ReactNode }> = ({
  name,
  children,
}) => (
  <div cx="overlay-wrapper">
    <h3 cx="name">
      {name.substr(0, name.indexOf(' '))}
      <br />
      {name.substr(name.indexOf(' ') + 1)}
    </h3>
    {children}
  </div>
);

const Stars: React.FC = () => (
  <section cx="sect" id="featured-stars">
    <div cx="ctr">
      <div cx="title-wrapper">
        <h2 cx="title">Student Achievements</h2>
        <p cx="desc">
          Students of IIIT Kota creating their presence in several national and international
          programs and getting exceptional national ranks in competitive exams.
        </p>
      </div>

      <div cx="stars">
        {gate.map(({ name, rank }) => (
          <div key={cyrb53(name)} cx="star-i">
            <div cx="wrapper">
              <WrappedImage name={name} />

              <OverlayWrapper {...{ name, rank }}>
                <h4 cx="service">{rank}</h4>
              </OverlayWrapper>
            </div>
          </div>
        ))}
      </div>

      <div cx="stars">
        {Object.keys(achivers).map((year) => (
          <React.Fragment key={cyrb53(`stars-y'${year}`)}>
            {achivers[year as keyof typeof achivers].map(({ name, achievements }) => (
              <div key={cyrb53(name)} cx="star-c">
                <div cx="wrapper">
                  <WrappedImage name={name} />

                  <OverlayWrapper {...{ name, achievements }}>
                    {achievements.map((achievement) => (
                      <h4 key={cyrb53(achievement)} cx="achiv">
                        {achievement}
                      </h4>
                    ))}
                  </OverlayWrapper>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default Stars;
