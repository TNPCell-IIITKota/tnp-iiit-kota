import React from 'react';
import Image from 'next/image';

import cyrb53 from '@utils/hash-string';
import { alumni } from '@utils/our-alumni';

const getLogoPath = (logo: string): string => {
  if (logo.includes('.')) return logo;
  return `${logo}.jpg`;
};

const WrappedImage: React.FC<{ name: string; logo: string }> = ({ name, logo }) => (
  <div cx="image-wrapper">
    <Image
      alt={name}
      cx="image"
      height={160}
      src={`/ourAlumni/${name.replace(/\.?\s+/g, '-')}.jpg`}
      width={160}
    />
    <div cx="logo-wrapper">
      <Image
        alt={`${name} logo`}
        cx="logo"
        height={40}
        src={`/logo/${getLogoPath(logo)}`}
        width={40}
      />
    </div>
  </div>
);

const InfoWrapper: React.FC<{ name: string; description: string }> = ({ name, description }) => (
  <div cx="info-wrapper">
    <h3 cx="name">{name}</h3>
    <h4 cx="company">{description}</h4>
  </div>
);

const Stars: React.FC = () => (
  <section cx="sect" id="featured-stars">
    <div cx="bg-accent-1" />
    <div cx="bg-accent-2" />

    <div cx="ctr">
      <div cx="title-wrapper">
        <h2 cx="title">
          Our <span cx="highlight">Alumni</span>
        </h2>
        <div cx="divider-line" />
        <p cx="desc">
          The alumni of IIIT Kota have made their mark on various government, academia and corporate
          fronts. Meet some of our alumni who we are proud of producing.
        </p>
      </div>

      <div cx="stars">
        {alumni.map(({ name, description, logo }) => (
          <div key={cyrb53(name)} cx="star-c">
            <div cx="wrapper">
              <WrappedImage logo={logo} name={name} />
              <InfoWrapper description={description} name={name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stars;
