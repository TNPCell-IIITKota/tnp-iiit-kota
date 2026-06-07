import React from 'react';

const MapLocation: React.FC = () => (
  <section cx="sect" id="map-location">
    <div cx="bg-accent-1" />
    <div cx="bg-accent-2" />

    <div cx="ctr">
      <div cx="split-layout">
        {/* Left Column: Office & Location Info */}
        <div cx="info-side">
          <span cx="eyebrow">Location</span>
          <h2 cx="title">
            Our <span cx="highlight">Campus</span>
          </h2>
          <div cx="divider-line" />
          <p cx="desc">
            The Indian Institute of Information Technology Kota is situated at its permanent campus
            in Ranpur, Kota.
          </p>

          <div cx="address-card">
            <div cx="icon-wrapper">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
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
            <div cx="address-details">
              <h4 cx="address-label">Address</h4>
              <p cx="address-text">Ranpur, Kota - 325003, Rajasthan, India</p>
              <p cx="coords">25.0499° N, 75.8321° E</p>
            </div>
          </div>

          <a
            cx="btn-directions"
            href="https://maps.app.goo.gl/aQ2vW7HT73BQm1kW7"
            rel="noopener noreferrer"
            target="_blank"
          >
            Get Directions
            <svg
              cx="arrow-icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Right Column: Sleek Map Widget */}
        <div cx="map-side">
          <div cx="map-wrapper">
            <iframe
              cx="map-iframe"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.5186591322046!2d75.83002631500742!3d25.049985099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f873f4fed661b%3A0x3120cfb5f427a045!2sIIIT%20Kota!5e0!3m2!1sen!2sin!4v1716982424850!5m2!1sen!2sin"
              title="IIIT Kota Permanent Campus Location"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default MapLocation;
