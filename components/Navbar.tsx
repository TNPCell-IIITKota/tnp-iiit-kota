/* eslint-disable no-nested-ternary */
import { useEffect, useState } from 'react';
import Link from 'next/link';

import Logo from '@assets/logo.svg';
import cyrb53 from '@utils/hash-string';

const Navbar: React.FC = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [transparent, setTransparent] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    let prev = window.pageYOffset;
    const handleScroll = (): void => {
      setTransparent(window.pageYOffset < 40);

      const curr = window.pageYOffset;
      setIsScrollingUp(curr < window.innerHeight - 40 || prev > curr);
      prev = curr;
    };

    window.addEventListener('scroll', handleScroll);
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      cx="navbar"
      style={
        transparent
          ? { backgroundColor: 'transparent' }
          : isScrollingUp
          ? {
              boxShadow:
                '0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            }
          : { top: '-6rem' }
      }
    >
      <div cx="wrapper">
        <Link href="/">
          <a cx="logo-wrapper">
            <Logo
              cx="logo"
              role="img"
              aria-label="IIIT Kota"
              onClick={(): void => {
                window.scroll({ top: 0, left: 0, behavior: 'smooth' });
              }}
            />
          </a>
        </Link>

        <ul cx="links">
          {[
            'Why Recruit',
            'Statistics',
            'Featured Stars',
            'Past Recruiters',
            'Our Team',
            'Policy',
            'Contact Us',
          ].map((s) => (
            <li key={cyrb53(s)}>
              <Link href={`/#${s.toLowerCase().replace(/\s+/g, '-')}`}>
                <a cx="nav-link">{s}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
