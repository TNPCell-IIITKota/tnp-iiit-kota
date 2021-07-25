const Question: React.FC = ({ children }) => (
  <div cx="wrapper">
    <button type="button" cx="btn">
      <span cx="question">{children}</span>
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        cx="icon"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  </div>
);

const FAQs: React.FC = () => (
  <section cx="sect">
    <div cx="ctr">
      <h1 cx="title">Frequently Asked Questions</h1>

      <div cx="questions">
        <Question>Authentic Cliche Forage</Question>
        <Question>Kinfolk Chips Snackwave</Question>
        <Question>Coloring Book Ethical</Question>
        <Question>Typewriter Polaroid Cray</Question>
        <Question>Pack Truffaut Blue</Question>
        <Question>The Catcher In The Rye</Question>
      </div>

      <p cx="desc">
        Can&apos;t find the answers you&apos;re looking for? Reach out to our team using the
        information given below.
      </p>
    </div>
  </section>
);

export default FAQs;
