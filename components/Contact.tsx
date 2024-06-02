const Cards: React.FC = () => (
  <div cx="cards">
    <div cx="card">
      <div cx="borders" />
      <div cx="borders" />
      <div cx="borders" />
      <div cx="borders" />
      <div cx="content">
        <h3 cx="name">Training and Placement Cell</h3>
        <p cx="address">
          IIIT Kota Office
          <br />
          1st Floor, Academic Block
          <br />
          Ranpur, Kota, RJ 325003
        </p>

        <a cx="email" href="mailto:placements@iiitkota.ac.in">
          placements@iiitkota.ac.in
        </a>
        <p cx="phone">
          <a href="tel:+911412743494">0141 274 3494</a>
        </p>
      </div>
    </div>

    <div cx="card">
      <div cx="borders" />
      <div cx="borders" />
      <div cx="borders" />
      <div cx="borders" />
      <div cx="content">
        <h3 cx="name">Dr. Amit Kumar Garg</h3>
        <p cx="address">
          Associate Dean
          <br />
          Training and Placement Cell
          <br />
          IIIT Kota
        </p>

        <a cx="email" href="mailto:amitgarg.ece@iiitkota.ac.in">
          amitgarg.ece@iiitkota.ac.in
        </a>
        <p cx="phone">
          <a href="tel:+919549650432">+91 95496 50432</a>
        </p>
      </div>
    </div>
  </div>
);

const Contact: React.FC = () => (
  <section cx="sect" id="contact-us">
    <div cx="ctr">
      <h2 cx="title">Contact Information</h2>
      <Cards />
    </div>
  </section>
);

export default Contact;
