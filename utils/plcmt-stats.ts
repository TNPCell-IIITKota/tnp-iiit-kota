import type { Branch, Year } from '@types';

const branchWiseData: Record<
  Year,
  Record<Branch, { Strength: number; Eligible: number; Placed: number }>
> = {
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
};

const placementPC = {} as Record<Year, Array<{ branch: Branch; 'Placement %': number }>>;

const eligibleVsOffers = {
  2020: [
    { branch: 'CSE', 'Number of Offers': 41 },
    { branch: 'ECE', 'Number of Offers': 33 },
    { branch: 'Total', 'Number of Offers': 74 },
  ],
  2021: [
    { branch: 'CSE', 'Number of Offers': 63 },
    { branch: 'ECE', 'Number of Offers': 35 },
    { branch: 'Total', 'Number of Offers': 98 },
  ],
} as Record<
  Year,
  Array<{ branch: Branch; 'Eligible Students': number; 'Number of Offers': number }>
>;

Object.entries(branchWiseData).forEach(([key, value]) => {
  const year = parseInt(key, 10) as Year;
  placementPC[year] = [];

  Object.entries(value).forEach(([br, { Eligible, Placed }]) => {
    const branch = br as Branch;
    placementPC[year].push({ branch, 'Placement %': Math.round((Placed * 1e4) / Eligible) / 1e2 });
    eligibleVsOffers[year].find((x) => x.branch === branch)!['Eligible Students'] = Eligible;
  });
});

const aggregateData: Record<Year, Array<{ branch: Branch; Average: number; Maximum: number }>> = {
  2020: [
    { branch: 'CSE', Average: 11.7, Maximum: 29.0 },
    { branch: 'ECE', Average: 8.9, Maximum: 29.0 },
    { branch: 'Total', Average: 10.4, Maximum: 29.0 },
  ],
  2021: [
    { branch: 'CSE', Average: 10.6, Maximum: 43.0 },
    { branch: 'ECE', Average: 7.4, Maximum: 15.5 },
    { branch: 'Total', Average: 9.0, Maximum: 43.0 },
  ],
};

export { aggregateData, branchWiseData, eligibleVsOffers, placementPC };
