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
    <div cx="wrapper" ref={ref}>
      <div>
        <h2>Eligible Students and Number of Offers</h2>

        <BarChart
          width={480}
          height={300}
          data={eligibleVsOffers[year]}
          barSize={32}
          margin={{ top: 16, right: 8, left: -14 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="branch" scale="point" padding={{ left: 80, right: 80 }} />
          <YAxis />
          <Tooltip content={CustomTooltip} />
          <Legend wrapperStyle={{ left: 18 }} />
          <Bar dataKey="Eligible Students" fill="#60A5FA" isAnimationActive={isVisible} />
          <Bar dataKey="Number of Offers" fill="#34D399" isAnimationActive={isVisible} />
        </BarChart>
      </div>

      <div>
        <h2>Placement Percentage of Registered Students</h2>

        <BarChart
          width={480}
          height={300}
          data={placementPC[year]}
          layout="vertical"
          barSize={32}
          margin={{ top: 16, right: 16, left: -14 }}
        >
          <XAxis type="number" />
          <YAxis scale="point" type="category" dataKey="branch" padding={{ top: 48, bottom: 48 }} />
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <Tooltip
            content={(props: TooltipProps<number, string>): React.ReactElement | null =>
              DetailedTooltip(props, year)
            }
          />
          <Bar
            dataKey="Placement %"
            fill="#818CF8"
            isAnimationActive={isVisible}
            animationBegin={400}
            label={CustomizedLabel}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default Charts;
