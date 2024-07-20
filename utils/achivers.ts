const exams = [
  { name: 'Aditya Raj Sharma', rank: 'GATE AIR 242' },
  { name: 'Vatsal Adhiya', rank: 'GATE AIR 313' },
  { name: 'Kuldeep Soni', rank: 'GATE AIR 669' },
  { name: 'Aditya Raj Singh', rank: 'CAT 99.72%' },
];

const achivers: Record<'24', Array<{ name: string; achievements: Array<string> }>> = {
  24: [
    // { name: 'Ashish Soni', achievements: [`C4GT'24`, `GSoC'23 Tor`] },
    // { name: 'Sankalp Pareekh', achievements: [`GSoC'24 GFOSS`] },
    // {
    //   name: 'Dhairya Majmudar',
    //   achievements: [`GSoD'24 JSON Schema`, `SoK'24 KDE`],
    // ,
    // },
    // { name: 'Tarsh Sawarkar', achievements: [`Amazon ML Summer Camp.`] },
    // { name: 'Aaryan Singh', achievements: [`Amazon ML Summer Camp.`] },
    // { name: 'Srishti Singh', achievements: [`Google WE Scholar'24`] },
    // { name: 'Aniska Verma', achievements: [`Google WE Scholar'24`] },
    // {
    //   name: 'Pranam Srivastava',
    //   achievements: [`Infosys SpringBoard'24`],
    // ,
    // },
    { name: 'Ankur Agarwal', achievements: [`C4GT'24`, `GSoC'23 Tor`] },
    { name: 'Ankur Agarwal', achievements: [`GSoC'24 GFOSS`] },
    {
      name: 'Ankur Agarwal',
      achievements: [`GSoD'24 - JSON Schema`, `SoK'24 - KDE`],
    },
    { name: 'Ankur Agarwal', achievements: [`Amazon ML Summer Camp.`] },
    { name: 'Ankur Agarwal', achievements: [`Amazon ML Summer Camp.`] },
    { name: 'Ankur Agarwal', achievements: [`Amazon ML Summer Camp.`] },
    { name: 'Ankur Agarwal', achievements: [`Google WE Scholar'24`] },
    { name: 'Ankur Agarwal', achievements: [`Google WE Scholar'24`] },
    { name: 'Ankur Agarwal', achievements: [`Infosys SpringBoard'24`] },
  ],
};

export { achivers, exams };
