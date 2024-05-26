import React from 'react';
import Image from 'next/image';

import cyrb53 from '@utils/hash-string';
import { academia, corporate, iaf } from '@utils/star-perfs';

const WrappedImage: React.FC<{ name: string }> = ({ name }) => (
  <div cx="image-wrapper">
    <Image
      alt={name}
      cx="image"
      height="160"
      src={`/stars/${name.toLowerCase().replace(/\.?\s+/g, '-')}.jpg`}
      width="160"
    />
  </div>
);

const OverlayWrapper: React.FC<{ name: string; year: number | string; children: React.ReactNode }> =
  ({ name, year, children }) => (
    <div cx="overlay-wrapper">
      <h3 cx="name">
        {name.substr(0, name.indexOf(' '))}
        <br />
        {name.substr(name.indexOf(' ') + 1)}
        <span cx="year">&nbsp;Y&apos;{year}</span>
      </h3>
      {children}
    </div>
  );

const Stars: React.FC = () => (
  <section cx="sect" id="featured-stars">
    <div cx="ctr">
      <div cx="title-wrapper">
        <h2 cx="title">Featured Stars</h2>
        <p cx="desc">
          The alumni of IIIT Kota have made their mark on various government, academia and corporate
          fronts. Meet some of our alumni who we are proud of producing.
        </p>
      </div>

      <div cx="stars">
        {iaf.map(({ name, service, year }) => (
          <div key={cyrb53(name)} cx="star-i">
            <div cx="wrapper">
              <WrappedImage name={name} />

              <OverlayWrapper {...{ name, year }}>
                <h4 cx="service">{service}</h4>
              </OverlayWrapper>
            </div>
          </div>
        ))}

        {academia.map(({ name, college, year }) => (
          <div key={cyrb53(name)} cx="star-a">
            <div cx="wrapper">
              <WrappedImage name={name} />

              <OverlayWrapper {...{ name, year }}>
                <h4 cx="college">{college}</h4>
              </OverlayWrapper>
            </div>
          </div>
        ))}
      </div>

      <div cx="stars">
        {Object.keys(corporate)
          .sort()
          .reverse()
          .map((year) => (
            <React.Fragment key={cyrb53(`stars-y'${year}`)}>
              {corporate[year as keyof typeof corporate].map(({ name, company }) => (
                <div key={cyrb53(name)} cx="star-c">
                  <div cx="wrapper">
                    <WrappedImage name={name} />

                    <OverlayWrapper {...{ name, year }}>
                      <h4 cx="company">{company}</h4>
                      {/* <p cx="lpa">{lpa} LPA</p> */}
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
