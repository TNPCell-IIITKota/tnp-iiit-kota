const Question: React.FC = ({ children }) => (
  <div className="p-2 w-full lg:w-1/2">
    <button
      type="button"
      className="flex relative items-center p-4 w-full h-full bg-gray-100 rounded"
    >
      <span className="font-semibold">{children}</span>
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        className="absolute right-0 flex-shrink-0 mr-4 w-6 h-6 text-indigo-500"
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
  <section className="mx-auto mt-4 text-gray-600 xl:w-3/5">
    <div className="container px-5 pt-16 mx-auto border-t border-gray-200">
      <h1 className="mt-2 mb-14 text-2xl font-semibold text-center text-gray-900 sm:text-3xl">
        Frequently Asked Questions
      </h1>

      <div className="flex flex-wrap -mx-2 sm:mx-auto sm:mb-2">
        <Question>Authentic Cliche Forage</Question>
        <Question>Kinfolk Chips Snackwave</Question>
        <Question>Coloring Book Ethical</Question>
        <Question>Typewriter Polaroid Cray</Question>
        <Question>Pack Truffaut Blue</Question>
        <Question>The Catcher In The Rye</Question>
      </div>

      <p className="mx-auto mt-4 text-sm leading-relaxed text-center">
        Can&apos;t find the answers you&apos;re looking for? Reach out to our team using the
        information given below.
      </p>
    </div>
  </section>
);

export default FAQs;
