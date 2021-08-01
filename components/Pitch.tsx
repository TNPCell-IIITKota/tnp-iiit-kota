import { Fragment, useState } from 'react';

import Accordion from '@components/Accordion';
import cyrb53 from '@utils/hash-string';
import content from '@utils/why-recruit';

const WhyRecruit: React.FC = () => {
  const [current, setCurrent] = useState(1);

  return (
    <section cx="sect" id="why-recruit">
      <div cx="ctr">
        <div cx="title-wrapper">
          <h2 cx="title">Why Recruit?</h2>
          <div cx="hr-wrapper">
            <div cx="hr" />
          </div>
        </div>
        {content.map(({ lead, desc }, idx) => (
          <Accordion
            key={cyrb53(lead)}
            isOpen={current === idx + 1}
            title={lead}
            onClick={(): void => {
              if (current === idx + 1) setCurrent(0);
              else setCurrent(idx + 1);
            }}
          >
            {desc.split('\n').map((txt, i, { length }) => (
              <Fragment key={cyrb53(txt)}>
                {txt}
                {i < length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </Fragment>
            ))}
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default WhyRecruit;
