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
              <th key={cyrb53(header)} cx="col-th" scope="col">
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
              <th cx="row-th" scope="row">
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
