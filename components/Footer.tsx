import Image from 'next/image';
import Link from 'next/link';

import logo from '@assets/logo.svg';

const Footer: React.FC = () => (
  <footer cx="footer">
    <div cx="ctr">
      <Link href="/">
        <a cx="logo-wrapper">
          <Image
            cx="logo"
            height="40"
            width="40"
            src={logo}
            priority
            alt="IIIT Kota"
            onClick={(): void => {
              window.scroll({ top: 0, left: 0, behavior: 'smooth' });
            }}
          />
        </a>
      </Link>

      <p cx="copyright">
        © 2021 Training &amp; Placement Cell —
        <a
          href="https://iiitkota.ac.in"
          cx="institute"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit IIIT Kota"
        >
          IIIT Kota
        </a>
      </p>
      <span cx="social">
        <a
          href="https://www.facebook.com/placementsiiitkota"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Facebook Page"
        >
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            role="img"
            aria-label="facebook"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a
          href="https://twitter.com/IIITKotaOffice"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Twitter Handle"
        >
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            role="img"
            aria-label="twitter"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/iiitkotaoffice"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Instagram Account"
        >
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            role="img"
            aria-label="instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/company/training-placement-cell-iiit-kota/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn Page"
        >
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0"
            viewBox="0 0 24 24"
            role="img"
            aria-label="linkedin"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx="4" cy="4" r="2" stroke="none" />
          </svg>
        </a>
      </span>
    </div>
  </footer>
);

export default Footer;
