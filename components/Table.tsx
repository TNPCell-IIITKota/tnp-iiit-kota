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
              ...(hasPercentage
                ? [year === 2025 ? 'FTE/PPO/Intern Rate' : 'Overall Offer Rate']
                : []),
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
                  <span cx="pkg-badge-max">
                    <svg
                      cx="badge-icon"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {row.Maximum} LPA
                  </span>
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
                    <span cx="rate-badge-secondary">
                      <svg
                        cx="badge-icon"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {row.Percentage}%
                    </span>
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
