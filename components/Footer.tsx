import Image from 'next/image';
import Link from 'next/link';

import logo from '@assets/logo.svg';

const year = new Date().getFullYear();

const Footer: React.FC = () => (
  <footer cx="footer">
    <div cx="ctr">
      {/* Top Footer Content Grid */}
      <div cx="top-footer">
        {/* Left Side: Brand and Contact Info */}
        <div cx="brand-col">
          <div cx="brand-header">
            <Image alt="IIIT Kota Logo" cx="logo" height="48" src={logo} width="48" unoptimized />
            <div cx="logo-text">
              <h3 cx="hindi-text">भारतीय सूचना प्रौद्योगिकी संस्थान कोटा</h3>
              <h4 cx="english-text">Indian Institute of Information Technology Kota</h4>
              <p cx="sub-text">Training & Placement Cell</p>
            </div>
          </div>

          <p cx="brand-desc">An Institute of National Importance under an Act of Parliament.</p>

          <div cx="contact-list">
            <div cx="contact-item">
              <svg
                cx="contact-icon"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>RIICO Industrial Area, Ranpur, Kota, RJ 325003</span>
            </div>

            <div cx="contact-item">
              <svg
                cx="contact-icon"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a href="mailto:placements@iiitkota.ac.in">placements@iiitkota.ac.in</a>
            </div>

            <div cx="contact-item">
              <svg
                cx="contact-icon"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <a href="tel:+911412743494">0141 274 3494</a>
            </div>
          </div>

          {/* Social Icons */}
          <div cx="social">
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
              <svg fill="currentColor" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
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
          </div>
        </div>

        {/* Right Side: Columns of Links */}
        <div cx="links-col">
          <div cx="links-grid">
            {/* Column 1: Placement Info */}
            <div cx="link-group">
              <h4 cx="group-title">Placement Info</h4>
              <ul cx="group-list">
                <li>
                  <Link href="/#statistics">
                    <a cx="group-link">Placement Statistics</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#our-esteemed-recruiters">
                    <a cx="group-link">Our Esteemed Recruiters</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#policy">
                    <a cx="group-link">Placement Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#why-recruit">
                    <a cx="group-link">Why Recruit IIITK?</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#contact-us">
                    <a cx="group-link">Contact TnP Cell</a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Quick Links */}
            <div cx="link-group">
              <h4 cx="group-title">Quick Links</h4>
              <ul cx="group-list">
                <li>
                  <a
                    cx="group-link"
                    href="https://iiitkota.ac.in"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    IIIT Kota Main Site
                  </a>
                </li>
                <li>
                  <Link href="/#our-team">
                    <a cx="group-link">Our Team</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#our-team">
                    <a cx="group-link">Student SPC Team</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#faqs">
                    <a cx="group-link">Frequently Asked FAQs</a>
                  </Link>
                </li>
                <li>
                  <a
                    cx="group-link"
                    href="https://iiitkota.ac.in/calendar"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Academic Calendar
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources & Highlights */}
            <div cx="link-group">
              <h4 cx="group-title">Resources & Highlights</h4>
              <ul cx="group-list">
                <li>
                  <a
                    cx="group-link"
                    href="/docs/Brochure-IIIT-KOTA-2026-27.pdf"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Placement Brochure
                  </a>
                </li>
                <li>
                  <a
                    cx="group-link"
                    href="https://files.iiitkota.ac.in/pdf/placements/Institute_Placement_Policy-IIITK_2025.pdf"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Placement Policy Document
                  </a>
                </li>
                <li>
                  <Link href="/#featured-stars">
                    <a cx="group-link">Our Alumni</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#placement-highlights">
                    <a cx="group-link">Placement Highlights - Batch of 2026</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#student-achievements">
                    <a cx="group-link">Student Achievements - Batch of 2027</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Copyright & Team Details */}
      <div cx="bottom-footer">
        <p cx="copyright">© {year} Training & Placement Cell, IIIT Kota. All Rights Reserved.</p>
        <p cx="dev-credit">
          Developed By <span cx="dev-highlight">Placement Portal Dev Team</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
