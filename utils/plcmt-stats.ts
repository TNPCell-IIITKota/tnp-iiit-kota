import type { Branch, Year } from '@types';

const eligibleVsOffers = {
  2020: [
    { branch: 'CSE', 'Eligible Students': 40, 'Number of Offers': 41 },
    { branch: 'ECE', 'Eligible Students': 36, 'Number of Offers': 33 },
    { branch: 'Total', 'Eligible Students': 76, 'Number of Offers': 74 },
  ],
  2021: [
    { branch: 'CSE', 'Eligible Students': 46, 'Number of Offers': 63 },
    { branch: 'ECE', 'Eligible Students': 32, 'Number of Offers': 35 },
    { branch: 'Total', 'Eligible Students': 78, 'Number of Offers': 98 },
  ],
} as Record<
  Year,
  Array<{ branch: Branch; 'Eligible Students': number; 'Number of Offers': number }>
>;

const branchWiseData = {
  2020: {
    CSE: { Strength: 47, Eligible: 40, Placed: 38 },
    ECE: { Strength: 48, Eligible: 36, Placed: 31 },
    Total: { Strength: 95, Eligible: 76, Placed: 69 },
  },
  2021: {
    CSE: { Strength: 52, Eligible: 46, Placed: 44 },
    ECE: { Strength: 46, Eligible: 32, Placed: 30 },
    Total: { Strength: 98, Eligible: 78, Placed: 74 },
  },
} as Record<Year, Record<Branch, { Strength: number; Eligible: number; Placed: number }>>;

const placementPC = {} as Record<Year, Array<{ branch: Branch; 'Placement %': number }>>;

Object.entries(branchWiseData).forEach(([key, value]) => {
  const year = parseInt(key, 10) as Year;
  placementPC[year] = [];

  Object.entries(value).forEach(([branch, { Eligible, Placed }]) => {
    placementPC[year].push({
      branch: branch as Branch,

      'Placement %': Math.round((Placed * 1e4) / Eligible) / 1e2,
    });
  });
});

const aggregateData = {
  2020: { CSE: { Average: 11.7, Maximum: 29.0 }, ECE: { Average: 8.9, Maximum: 29.0 } },
  2021: { CSE: { Average: 10.6, Maximum: 43.0 }, ECE: { Average: 7.4, Maximum: 15.5 } },
} as Record<Year, Record<Branch, { Average: number; Maximum: number }>>;

export { aggregateData, branchWiseData, eligibleVsOffers, placementPC };
