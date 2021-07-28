import type { Branch, Year } from '@types';
import type { LabelProps, TooltipProps } from 'recharts';

import { branchWiseData } from '@utils/plcmt-stats';

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>): React.ReactElement | null => {
  if (active && payload && payload.length) {
    return (
      <div cx="tooltip">
        <p cx="label">{label}</p>
        <p cx="intro">
          <span>Eligible Students: {payload[0].value}</span>
          <span>Number of Offers: {payload[1].value}</span>
          <span>
            Jobs Offered: {Math.round((payload[1].value! * 1e4) / payload[0].value!) / 1e2}%
          </span>
        </p>
      </div>
    );
  }

  return null;
};

const CustomizedLabel = ({ x, y, width, height, value }: LabelProps): React.ReactElement => (
  <text
    dominantBaseline="middle"
    fill="#fff"
    textAnchor="middle"
    x={(x as number) + (width as number) - 40}
    y={(y as number) + (height as number) / 2}
  >
    {(value as number).toFixed(2)} %
  </text>
);

const DetailedTooltip = (
  { active, payload, label }: TooltipProps<number, string>,
  year: Year,
): React.ReactElement | null => {
  if (active && payload && payload.length) {
    const { Strength, Eligible, Placed } = branchWiseData[year][label as Branch];

    return (
      <div cx="tooltip">
        <p cx="label">{label}</p>
        <p cx="intro">
          <span>Strength: {Strength}</span>
          <span>Eligible: {Eligible}</span>
          <span>Placed: {Placed}</span>
        </p>
      </div>
    );
  }

  return null;
};

export { CustomizedLabel, CustomTooltip, DetailedTooltip };
