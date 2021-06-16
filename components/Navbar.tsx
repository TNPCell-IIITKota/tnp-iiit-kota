import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import Logo from '@assets/logo.svg';
import cyrb53 from '@utils/hash-string';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [transparent, setTransparent] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  const btnRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const refs = [btnRef, listRef] as Array<React.RefObject<HTMLElement>>;

    const handleClickOutside: EventListener = (event) => {
      if (
        isMenuOpen &&
        refs.every((ref) => ref.current && !ref.current.contains(event.target as HTMLElement))
      )
        setIsMenuOpen(false);
    };

    ['scroll', 'touchend', 'mousedown'].forEach((event) => {
      document.addEventListener(event, handleClickOutside);
    });

    return (): void => {
      ['scroll', 'touchend', 'mousedown'].forEach((event) => {
        document.removeEventListener(event, handleClickOutside);
      });
    };
  }, [btnRef, listRef, isMenuOpen]);

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
    <header
      cx="navbar"
      data-clear={transparent}
      style={
        isScrollingUp
          ? {
              boxShadow:
                '0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            }
          : { top: '-6rem' }
      }
    >
      <nav cx="wrapper">
        <div cx="sm-wrapper">
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

          <button
            cx="menu"
            type="button"
            aria-expanded={isMenuOpen}
            onClick={(e): void => {
              e.preventDefault();
              setIsMenuOpen(!isMenuOpen);
            }}
            ref={btnRef}
          >
            <svg viewBox="0 0 100 100">
              <path
                cx="line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path cx="line2" d="M 20,50 H 80" />
              <path
                cx="line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>
        </div>

        <ul cx="links" data-toggle={isMenuOpen} ref={listRef}>
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
      </nav>
    </header>
  );
};

export default Navbar;
