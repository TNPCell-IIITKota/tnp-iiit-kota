import type { Year } from '@types';

import cyrb53 from '@utils/hash-string';
import { aggregateData, placementPC } from '@utils/plcmt-stats';

const Table: React.FC<{ year: Year }> = ({ year }) => (
  <div cx="ctr">
    <div cx="wrapper">
      <table cx="table">
        <thead cx="head">
          <tr>
            {['Branch', 'Maximum Package', 'Average Package', 'Placement %'].map((header) => (
              <th scope="col" cx="col-th" key={cyrb53(header)}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody cx="body">
          {aggregateData[year].map((row) => (
            <tr
              key={cyrb53(row.branch)}
              style={row.branch.toLowerCase() === 'total' ? { fontWeight: 600 } : {}}
            >
              <th scope="row" cx="row-th">
                {row.branch}
              </th>
              <td cx="data">{row.Maximum} LPA</td>
              <td cx="data">{row.Average} LPA</td>
              <td cx="data">
                {placementPC[year].find((x) => x.branch === row.branch)?.['Placement %']}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Table;
