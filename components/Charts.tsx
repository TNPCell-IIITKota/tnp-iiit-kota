import type { Year } from '@types';
import type { TooltipProps } from 'recharts';

import { useRef } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

import { CustomizedLabel, CustomTooltip, DetailedTooltip } from '@components/LabelsTooltips';
import useOnScreen from '@utils/on-screen';
import { eligibleVsOffers, placementPC } from '@utils/plcmt-stats';

const Charts: React.FC<{ year: Year }> = ({ year }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div ref={ref} cx="wrapper">
      <div>
        <h3>Eligible Students and Number of Offers</h3>

        <BarChart
          barSize={32}
          data={eligibleVsOffers[year]}
          height={300}
          margin={{ top: 16, right: 8, left: -14 }}
          width={480}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="branch" padding={{ left: 80, right: 80 }} scale="point" />
          <YAxis />
          <Tooltip content={CustomTooltip} />
          <Legend wrapperStyle={{ left: 18 }} />
          <Bar dataKey="Eligible Students" fill="#60A5FA" isAnimationActive={isVisible} />
          <Bar dataKey="Number of Offers" fill="#34D399" isAnimationActive={isVisible} />
        </BarChart>
      </div>

      <div>
        <h3>Placement Percentage of Registered Students</h3>

        <BarChart
          barSize={32}
          data={placementPC[year]}
          height={300}
          layout="vertical"
          margin={{ top: 16, right: 16, left: -14 }}
          width={480}
        >
          <XAxis type="number" />
          <YAxis dataKey="branch" padding={{ top: 48, bottom: 48 }} scale="point" type="category" />
          <CartesianGrid horizontal={false} strokeDasharray="3 3" />
          <Tooltip
            content={(props: TooltipProps<number, string>): React.ReactElement | null =>
              DetailedTooltip(props, year)
            }
          />
          <Bar
            animationBegin={400}
            dataKey="Placement %"
            fill="#818CF8"
            isAnimationActive={isVisible}
            label={CustomizedLabel}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default Charts;
