const iaf = [
  { name: 'Priya Sharma', service: 'Indian Air Force', rank: 'Flying Officer', year: 17 },
  { name: 'Navneet Poonia', service: 'Indian Air Force', rank: 'Flying Officer', year: 19 },
];

const academia = [
  {
    name: 'Shashwat Singh',
    college: 'Columbia University in the City of New York',
    degree: 'MS (Data Science)',
    year: 21,
  },
  {
    name: 'Joey Pinto',
    college: 'Carnegie Mellon University Silicon Valley',
    degree: 'MS (Software Engineering)',
    year: 17,
  },
];

const corporate: Record<'23' | '24', Array<{ name: string; company: string }>> = {
  24: [
    { name: 'Ankur Agarwal', company: 'Coinbase' },
    { name: 'Akash Tureha', company: 'Tangapp' },
    { name: 'Ashpreet Kaur', company: 'Google' },
  ],
  23: [
    { name: 'Omkar Deshmukh', company: 'Google' },
    { name: 'Yash Tripathi', company: 'Browserstack' },
  ],
};

export { academia, corporate, iaf };
