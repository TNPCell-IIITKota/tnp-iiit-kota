import React from 'react';

const Contact: React.FC = () => (
  <section cx="sect" id="contact-us">
    {/* Background ambient accents */}
    <div cx="bg-accent-1" />
    <div cx="bg-accent-2" />

    <div cx="ctr">
      {/* Section Header */}
      <div cx="title-wrapper">
        <h2 cx="title">
          Contact <span cx="highlight">Information</span>
        </h2>
        <div cx="divider-line" />
      </div>

      {/* 3-Column Grid of Contact Cards */}
      <div cx="cards">
        {/* Card 1: Office Headquarters */}
        <div cx="card">
          <div cx="card-header">
            <span cx="role-badge" style={{ backgroundColor: '#172b4d' }}>
              TnP Cell
            </span>
            <h3 cx="card-title">Training and Placement Cell</h3>
          </div>
          <div cx="info-list">
            <div cx="info-item">
              <div cx="info-icon">
                <svg
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
              </div>
              <p cx="info-text">
                IIIT Kota Office, G Floor, Academic Block, Ranpur, Kota, RJ 325003
              </p>
            </div>

            <div cx="info-item">
              <div cx="info-icon">
                <svg
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
              </div>
              <a cx="info-link" href="mailto:placements@iiitkota.ac.in">
                placements@iiitkota.ac.in
              </a>
            </div>

            <div cx="info-item">
              <div cx="info-icon">
                <svg
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
              </div>
              <a cx="info-link" href="tel:+911412743494">
                0141 274 3494
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: Associate Dean */}
        <div cx="card">
          <div cx="card-header">
            <span cx="role-badge" style={{ backgroundColor: '#10b981' }}>
              Associate Dean
            </span>
            <h3 cx="card-title">Dr. Chetna Sharma</h3>
          </div>
          <div cx="info-list">
            <div cx="info-item">
              <div cx="info-icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p cx="info-text">Associate Dean, Training & Placements</p>
            </div>

            <div cx="info-item">
              <div cx="info-icon">
                <svg
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
              </div>
              <a cx="info-link" href="mailto:ad.tnp@iiitkota.ac.in">
                ad.tnp@iiitkota.ac.in
              </a>
            </div>

            <div cx="info-item">
              <div cx="info-icon">
                <svg
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
              </div>
              <a cx="info-link" href="tel:+919549650234">
                +91 95496 50234
              </a>
            </div>
          </div>
        </div>

        {/* Card 3: Faculty Coordinator */}
        <div cx="card">
          <div cx="card-header">
            <span cx="role-badge" style={{ backgroundColor: '#8b5cf6' }}>
              Faculty Co-ordinator
            </span>
            <h3 cx="card-title">Dr. Shivang Tripathi</h3>
          </div>
          <div cx="info-list">
            <div cx="info-item">
              <div cx="info-icon">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p cx="info-text">Faculty Co-ordinator, Training & Placements</p>
            </div>

            <div cx="info-item">
              <div cx="info-icon">
                <svg
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
              </div>
              <a cx="info-link" href="mailto:shivang.aide@iiitkota.ac.in">
                shivang.aide@iiitkota.ac.in
              </a>
            </div>

            <div cx="info-item">
              <div cx="info-icon">
                <svg
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
              </div>
              <a cx="info-link" href="tel:+919626065668">
                +91 96260 65668
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
