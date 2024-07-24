const exams = [
  { name: 'Aditya Raj Sharma', rank: 'GATE AIR 242' },
  { name: 'Vatsal Adhiya', rank: 'GATE AIR 313' },
  { name: 'Kuldeep Soni', rank: 'GATE AIR 669' },
  { name: 'Aditya Raj Singh', rank: 'CAT 99.72%' },
];

const achivers: Record<'24', Array<{ name: string; achievements: Array<string> }>> = {
  24: [
    { name: 'Sankalp Pareek', achievements: [`GSoC'24 - GFOSS`] },
    { name: 'Ashish Soni', achievements: [`C4GT'24`, `GSoC'23 - Tor`] },
    {
      name: 'Dhairya Majmudar',
      achievements: [`GSoD'24 - JSON Schema`, `SoK'24 - KDE`],
    },
    { name: 'Aaryan Singh', achievements: [`Amazon ML Summer School'24`] },
    { name: 'Tarsh Swarnkar', achievements: [`Amazon ML Summer School'24`] },
    { name: 'Lakshita Saxena', achievements: [`Amazon ML Summer School'24`] },
    { name: 'Srishti Singh', achievements: [`Google WE Scholar'24`] },
    { name: 'Anishka Verma', achievements: [`Google WE Scholar'24`] },
    { name: 'Pranam Srivastava', achievements: [`Infosys SpringBoard'24`] },
  ],
};

export { achivers, exams };
