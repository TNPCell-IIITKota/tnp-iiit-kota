import Image from 'next/image';

import logo from '@assets/logo.svg';

const Hero: React.FC = () => (
  <section cx="sect">
    <div cx="shapes">
      <span cx="span-150" />
      <span cx="span-50" />
      <span cx="span-50" />
      <span cx="span-75" />
      <span cx="span-100" />
      <span cx="span-200" />
      <span cx="span-50" />
      <span cx="span-100" />
      <span cx="span-50" />
      <span cx="span-100" />
    </div>
    <div cx="ctr">
      <Image
        alt="IIIT Kota"
        cx="logo"
        height="192"
        layout="fixed"
        quality="100"
        src={logo}
        width="192"
        priority
        unoptimized
      />
      <div cx="lead">Training &amp; Placement Cell, IIIT Kota</div>
      <div cx="about">
        We act as a facilitator for training and placement, and work enthusiastically towards the
        overall development of the students, helping them connect with industries.
      </div>
    </div>
    <div cx="separator">
      <svg
        aria-label="separator"
        preserveAspectRatio="none"
        role="img"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        y="0"
      >
        <polygon fill="#fff" points="2560 0 2560 100 0 100" />
      </svg>
    </div>
  </section>
);

export default Hero;
