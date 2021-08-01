import Image from 'next/image';
import Link from 'next/link';

import logo from '@assets/logo.svg';

const Footer: React.FC = () => (
  <footer cx="footer">
    <div cx="ctr">
      <Link href="/">
        <a cx="logo-wrapper">
          <Image
            alt="IIIT Kota"
            cx="logo"
            height="40"
            layout="fixed"
            quality="100"
            src={logo}
            width="40"
            priority
            unoptimized
            onClick={(): void => {
              window.scroll({ top: 0, left: 0, behavior: 'smooth' });
            }}
          />
        </a>
      </Link>

      <p cx="copyright">
        © 2021 Training and Placement Cell —
        <a
          aria-label="Visit IIIT Kota"
          cx="institute"
          href="https://iiitkota.ac.in"
          rel="noopener noreferrer"
          target="_blank"
        >
          IIIT Kota
        </a>
      </p>
      <span cx="social">
        <a
          aria-label="Visit Facebook Page"
          href="https://www.facebook.com/placementsiiitkota"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            aria-label="facebook"
            fill="currentColor"
            role="img"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a
          aria-label="Visit Twitter Handle"
          href="https://twitter.com/IIITKotaOffice"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            aria-label="twitter"
            fill="currentColor"
            role="img"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a
          aria-label="Visit Instagram Account"
          href="https://www.instagram.com/iiitkotaoffice"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            aria-label="instagram"
            fill="none"
            role="img"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a
          aria-label="Visit LinkedIn Page"
          href="https://www.linkedin.com/company/training-placement-cell-iiit-kota/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <svg
            aria-label="linkedin"
            fill="currentColor"
            role="img"
            stroke="currentColor"
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
      </span>
    </div>
  </footer>
);

export default Footer;
