import { Fragment } from 'react';

import cyrb53 from '@utils/hash-string';
import content from '@utils/why-recruit';

const Pitch: React.FC = () => (
  <section cx="sect">
    <div cx="ctr">
      <div cx="title-wrapper">
        <h1 cx="title">Why Recruit?</h1>
        <div cx="hr-wrapper">
          <div cx="hr" />
        </div>
      </div>
      {content.map(({ lead, desc }) => (
        <div cx="wrapper" key={cyrb53(lead)}>
          <div cx="feature">
            <h2 cx="lead">{lead}</h2>
            <p cx="desc">
              {desc.split('\n').map((txt, i, { length }) => (
                <Fragment key={cyrb53(txt)}>
                  {txt}
                  {i < length - 1 ? (
                    <>
                      <br />
                      <br />
                    </>
                  ) : undefined}
                </Fragment>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Pitch;
