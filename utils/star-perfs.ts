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
  // 21: [
  //   { name: 'Jayansh Goyal', company: 'Microsoft', lpa: 43 },
  //   { name: 'Shivam Garg', company: 'Amazon', lpa: 32 },
  //   { name: 'Vibhor Rawal', company: 'Gameskraft', lpa: 32 },
  // ],
  // 20: [
  //   { name: 'Saransh Jain', company: 'Amazon', lpa: 29 },
  //   { name: 'Shubham Guglani', company: 'Amazon', lpa: 29 },
  // ],

  // 19: [{ name: 'Nilesh Agarwal', company: 'Amazon', lpa: 27 }],

  // 18: [
  //   { name: 'Gaurav Agarwal', company: 'Amazon', lpa: 27 },
  //   { name: 'Nikhil Chetule', company: 'Amazon', lpa: 27 },
  //   { name: 'Yash Sharma', company: 'Amazon', lpa: 27 },
  // ],

  // 17: [{ name: 'Arushi Gupta', company: 'Amazon', lpa: 26 }],
};

export { academia, corporate, iaf };
