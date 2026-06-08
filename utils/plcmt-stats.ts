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
  2022: {
    CSE: { Strength: 102, Eligible: 97, Placed: 92 },
    ECE: { Strength: 52, Eligible: 42, Placed: 36 },
    Total: { Strength: 154, Eligible: 139, Placed: 128 },
  },
  2023: {
    CSE: { Strength: 119, Eligible: 111, Placed: 94 },
    ECE: { Strength: 51, Eligible: 42, Placed: 33 },
    Total: { Strength: 170, Eligible: 153, Placed: 127 },
  },
  2024: {
    CSE: { Strength: 131, Eligible: 109, Placed: 84 },
    ECE: { Strength: 65, Eligible: 53, Placed: 39 },
    Total: { Strength: 196, Eligible: 162, Placed: 123 },
  },
  2025: {
    CSE: { Strength: 138, Eligible: 107, Placed: 81 },
    ECE: { Strength: 66, Eligible: 50, Placed: 31 },
    Total: { Strength: 204, Eligible: 157, Placed: 112 },
  },
  2026: {
    CSE: { Strength: 171, Eligible: 116, Placed: 109 },
    ECE: { Strength: 84, Eligible: 52, Placed: 51 },
    Total: { Strength: 255, Eligible: 168, Placed: 160 },
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
  2022: [
    { branch: 'CSE', 'Number of Offers': 145 },
    { branch: 'ECE', 'Number of Offers': 55 },
    { branch: 'Total', 'Number of Offers': 200 },
  ],
  2023: [
    { branch: 'CSE', 'Number of Offers': 132 },
    { branch: 'ECE', 'Number of Offers': 49 },
    { branch: 'Total', 'Number of Offers': 181 },
  ],
  2024: [
    { branch: 'CSE', 'Number of Offers': 91 },
    { branch: 'ECE', 'Number of Offers': 49 },
    { branch: 'Total', 'Number of Offers': 140 },
  ],
  2025: [
    { branch: 'CSE', 'Number of Offers': 81 },
    { branch: 'ECE', 'Number of Offers': 31 },
    { branch: 'Total', 'Number of Offers': 112 },
  ],
  2026: [
    { branch: 'CSE', 'Number of Offers': 109 },
    { branch: 'ECE', 'Number of Offers': 51 },
    { branch: 'Total', 'Number of Offers': 160 },
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

const aggregateData: Record<
  Year,
  Array<{ branch: Branch; Average: number; Maximum: number; Median?: number; Percentage?: number }>
> = {
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
  2022: [
    { branch: 'CSE', Average: 15.25, Maximum: 81.0, Median: 13.5 },
    { branch: 'ECE', Average: 12.37, Maximum: 61.0, Median: 10 },
    { branch: 'Total', Average: 14.37, Maximum: 81.0, Median: 13.5 },
  ],
  2023: [
    { branch: 'CSE', Average: 15.76, Maximum: 53.6, Median: 12.47 },
    { branch: 'ECE', Average: 11.31, Maximum: 25.0, Median: 8.5 },
    { branch: 'Total', Average: 14.6, Maximum: 53.6, Median: 12.47 },
  ],
  2024: [
    { branch: 'CSE', Average: 13.39, Maximum: 65, Median: 10 },
    { branch: 'ECE', Average: 12.41, Maximum: 53.6, Median: 8 },
    { branch: 'Total', Average: 13.09, Maximum: 65, Median: 10 },
  ],
  2025: [
    { branch: 'CSE', Average: 11.44, Maximum: 40, Median: 9.1, Percentage: 80.37 },
    { branch: 'ECE', Average: 10.34, Maximum: 54, Median: 9.5, Percentage: 74 },
    { branch: 'Total', Average: 11.13, Maximum: 54, Median: 9.1, Percentage: 78.34 },
  ],
  2026: [
    { branch: 'CSE', Average: 20.09, Maximum: 56, Median: 14 },
    { branch: 'ECE', Average: 14.73, Maximum: 47, Median: 14 },
    { branch: 'Total', Average: 18.66, Maximum: 56, Median: 14 },
  ],
};

export { aggregateData, branchWiseData, eligibleVsOffers, placementPC };
