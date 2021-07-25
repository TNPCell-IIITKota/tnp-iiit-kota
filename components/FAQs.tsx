import Question from '@components/Question';
import cyrb53 from '@utils/hash-string';
import questions from '@utils/questions';

const FAQs: React.FC = () => (
  <section cx="sect">
    <div cx="ctr">
      <h1 cx="title">Frequently Asked Questions</h1>

      <div cx="questions">
        {questions.map(({ question: q, answer: a }) => (
          <Question key={cyrb53(q)} answer={a}>
            {q}
          </Question>
        ))}
      </div>

      <p cx="desc">
        Can&apos;t find the answers you&apos;re looking for? Reach out to our team using the
        information given below.
      </p>
    </div>
  </section>
);

export default FAQs;
