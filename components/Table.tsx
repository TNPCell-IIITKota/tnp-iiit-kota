import type { Year } from '@types';

import React from 'react';
import { motion } from 'framer-motion';

import cyrb53 from '@utils/hash-string';
import { aggregateData, placementPC } from '@utils/plcmt-stats';

const Table: React.FC<{ year: Year }> = ({ year }) => {
  const hasPercentage = aggregateData[year].some((row) => row.Percentage !== undefined);

  return (
    <div cx="ctr">
      <table cx="table">
        <thead cx="head">
          <tr>
            {[
              'Branch',
              'Max Package',
              'Avg Package',
              'Median Package',
              'Placement Rate',
              ...(hasPercentage ? ['FTE Conversion Rate'] : []),
            ].map((header) => (
              <th key={cyrb53(header)} cx="col-th" scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody key={year} cx="body">
          {aggregateData[year].map((row, idx) => {
            const isTotal = row.branch === 'Total';
            const rate = placementPC[year].find((x) => x.branch === row.branch)?.['Placement %'];

            return (
              <motion.tr
                key={cyrb53(row.branch)}
                animate={{ opacity: 1, y: 0 }}
                cx={isTotal ? 'branch-total' : 'branch-row'}
                initial={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.35, delay: idx * 0.05, ease: 'easeOut' }}
              >
                <th cx="row-th" scope="row">
                  {row.branch}
                </th>

                <td cx="data">
                  <span cx="pkg-badge-max">{row.Maximum} LPA</span>
                </td>

                <td cx="data">
                  <span cx="pkg-text-avg">{row.Average} LPA</span>
                </td>

                <td cx="data">
                  <span cx="pkg-text-median">{row.Median ? `${row.Median} LPA` : '—'}</span>
                </td>

                <td cx="data">
                  <span cx="rate-badge">
                    <svg
                      cx="badge-icon"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {rate !== undefined ? `${rate}%` : '—'}
                  </span>
                </td>

                {row.Percentage !== undefined && (
                  <td cx="data">
                    <span cx="rate-badge-secondary">{row.Percentage}%</span>
                  </td>
                )}
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
