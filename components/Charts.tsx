import type { Year } from '@types';
import type { TooltipProps } from 'recharts';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { CustomizedLabel, CustomTooltip, DetailedTooltip } from '@components/LabelsTooltips';
import useOnScreen from '@utils/on-screen';
import { eligibleVsOffers, placementPC } from '@utils/plcmt-stats';

const Charts: React.FC<{ year: Year }> = ({ year }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} cx="wrapper">
      {/* Chart 1: Eligible vs Offers */}
      <motion.div
        cx="chart-box"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.15 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h3 cx="chart-title">Eligible Students & Placement Offers</h3>
        <div cx="chart-container">
          <ResponsiveContainer height="100%" width="100%">
            <BarChart
              barGap={6}
              data={eligibleVsOffers[year]}
              margin={{ top: 10, right: 10, left: -25 }}
            >
              <defs>
                <linearGradient id="colorEligible" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#0a2558" stopOpacity={0.95} />
                  <stop offset="100%" stopColor="#2b406a" stopOpacity={0.8} />
                </linearGradient>
                <linearGradient id="colorOffers" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ea580c" stopOpacity={0.95} />
                  <stop offset="100%" stopColor="#f97316" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <CartesianGrid
                stroke="rgba(226, 232, 240, 0.5)"
                strokeDasharray="3 3"
                vertical={false}
              />
              <XAxis
                axisLine={false}
                dataKey="branch"
                tick={{ fill: '#475569', fontSize: 13, fontWeight: 600 }}
                tickLine={false}
              />
              <YAxis axisLine={false} tick={{ fill: '#64748b', fontSize: 13 }} tickLine={false} />
              <Tooltip content={CustomTooltip} cursor={{ fill: 'rgba(241,245,249,0.3)' }} />
              <Legend
                align="center"
                height={36}
                iconType="circle"
                verticalAlign="top"
                wrapperStyle={{
                  fontSize: '11px',
                  fontWeight: 600,
                  color: '#475569',
                  paddingBottom: '10px',
                }}
              />
              <Bar
                dataKey="Eligible Students"
                fill="url(#colorEligible)"
                isAnimationActive={isVisible}
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="Number of Offers"
                fill="url(#colorOffers)"
                isAnimationActive={isVisible}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Chart 2: Branch-wise Placement Percentage */}
      <motion.div
        cx="chart-box"
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.15 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h3 cx="chart-title">Branch-wise Placement Percentage</h3>
        <div cx="chart-container">
          <ResponsiveContainer height="100%" width="100%">
            <BarChart
              barSize={24}
              data={placementPC[year]}
              layout="vertical"
              margin={{ top: 10, right: 20, left: -20 }}
            >
              <defs>
                <linearGradient id="colorPercent" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#2b406a" stopOpacity={0.95} />
                  <stop offset="100%" stopColor="#ea580c" stopOpacity={0.9} />
                </linearGradient>
              </defs>
              <XAxis
                axisLine={false}
                domain={[0, 100]}
                tick={{ fill: '#64748b', fontSize: 13 }}
                tickLine={false}
                type="number"
              />
              <YAxis
                axisLine={false}
                dataKey="branch"
                tick={{ fill: '#475569', fontSize: 13, fontWeight: 600 }}
                tickLine={false}
                type="category"
              />
              <CartesianGrid
                horizontal={false}
                stroke="rgba(226, 232, 240, 0.5)"
                strokeDasharray="3 3"
              />
              <Tooltip
                content={(props: TooltipProps<number, string>): React.ReactElement | null =>
                  DetailedTooltip(props, year)
                }
                cursor={{ fill: 'rgba(241,245,249,0.3)' }}
              />
              <Bar
                animationBegin={150}
                dataKey="Placement %"
                fill="url(#colorPercent)"
                isAnimationActive={isVisible}
                label={CustomizedLabel}
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
};

export default Charts;
