import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@assets/logo.svg';
import cyrb53 from '@utils/hash-string';

const navItems = [
  { label: 'Why Recruit', href: '/#why-recruit' },
  { label: 'Statistics', href: '/#statistics' },
  {
    label: 'Featured Stars',
    href: '/#featured-stars',
    children: [
      { label: 'Our Alumni', href: '/#featured-stars' },
      { label: 'Placement Highlights - Batch of 2026', href: '/#placement-highlights' },
      { label: 'Student Achievements - Batch of 2027', href: '/#student-achievements' },
    ],
  },
  { label: 'Our Esteemed Recruiters', href: '/#our-esteemed-recruiters' },
  { label: 'Our Team', href: '/#our-team' },
  { label: 'Policy', href: '/#policy' },
  { label: 'Contact Us', href: '/#contact-us' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [transparent, setTransparent] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const btnRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const refs = [btnRef, listRef] as Array<React.RefObject<HTMLElement>>;

    const handleClickOutside: EventListener = (event) => {
      if (
        isMenuOpen &&
        refs.every((ref) => ref.current && !ref.current.contains(event.target as HTMLElement))
      )
        setIsMenuOpen(false);
    };

    ['scroll', 'click'].forEach((event) => {
      document.addEventListener(event, handleClickOutside);
    });

    return (): void => {
      ['scroll', 'click'].forEach((event) => {
        document.removeEventListener(event, handleClickOutside);
      });
    };
  }, [btnRef, listRef, isMenuOpen]);

  // ScrollSpy to track active section and handle scroll direction
  useEffect(() => {
    let prev = window.pageYOffset;

    const sections = [
      'why-recruit',
      'statistics',
      'featured-stars',
      'our-esteemed-recruiters',
      'our-team',
      'policy',
      'contact-us',
    ];

    const handleScroll = (): void => {
      const curr = window.pageYOffset;
      setTransparent(curr < 45);
      setIsScrollingUp(curr < window.innerHeight - 80 || prev > curr);
      prev = curr;

      // ScrollSpy Logic
      const scrollPosition = curr + 120; // Offset for navbar height and margins

      if (curr < 100) {
        setActiveSection('home');
        return;
      }

      const currentActive = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          return scrollPosition >= top && scrollPosition < top + height;
        }
        return false;
      });

      if (currentActive) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return (): void => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header aria-hidden={!isScrollingUp} cx="navbar" data-clear={transparent}>
      <nav cx="wrapper">
        <div cx="sm-wrapper">
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
            <a
              cx="logo-wrapper"
              onClick={(): void => {
                window.scroll({ top: 0, left: 0, behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
            >
              <Image
                alt="IIIT Kota"
                cx="logo"
                height="54"
                layout="fixed"
                quality="100"
                src={logo}
                width="54"
                priority
                unoptimized
              />
              <div cx="logo-text">
                <h1 cx="hindi-text">भारतीय सूचना प्रौद्योगिकी संस्थान कोटा</h1>
                <h2 cx="english-text">Indian Institute of Information Technology Kota</h2>
                <p cx="sub-text">An Institute of National Importance under an Act of Parliament</p>
              </div>
              <div cx="logo-text-mobile">
                <h2 cx="mobile-title">Indian Institute of Information Technology Kota</h2>
                <p cx="mobile-sub">Training & Placement Cell</p>
              </div>
            </a>
          </Link>

          <button
            ref={btnRef}
            aria-expanded={isMenuOpen}
            aria-label="Toggle Menu"
            cx="menu"
            type="button"
            onClick={(e): void => {
              e.preventDefault();
              setIsMenuOpen(!isMenuOpen);
            }}
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

        <ul ref={listRef} cx="links" data-toggle={isMenuOpen}>
          <li>
            <a
              cx="nav-link"
              href="https://iiitkota.ac.in"
              onClick={(): void => {
                setIsMenuOpen(false);
              }}
            >
              <svg
                className="mr-[6px] -mb-px inline-block h-4 w-4 align-baseline"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
                  fillRule="evenodd"
                />
              </svg>
              Home
            </a>
          </li>

          {navItems.map((item) => {
            const id = item.label.toLowerCase().replace(/\s+/g, '-');
            const isActive = activeSection === id;

            if (item.children) {
              return (
                <li key={cyrb53(item.label)} cx="dropdown-item">
                  <span cx="nav-link" data-active={isActive}>
                    {item.label}
                    <svg
                      cx="chevron-icon"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <ul cx="dropdown-menu">
                    {item.children.map((child) => (
                      <li key={cyrb53(child.label)}>
                        <Link href={child.href}>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                          <a
                            cx="dropdown-link"
                            onClick={(): void => {
                              setIsMenuOpen(false);
                            }}
                          >
                            {child.label}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            return (
              <li key={cyrb53(item.label)}>
                <Link href={item.href}>
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                  <a
                    cx="nav-link"
                    data-active={isActive}
                    onClick={(): void => {
                      setIsMenuOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
