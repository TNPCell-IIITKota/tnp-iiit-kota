const members: Record<
  '2020' | '2021' | '2022' | '2023' | 'faculty' | 'webmaster',
  Array<{ name: string; linkedIn: string }>
> = {
  faculty: [{ name: 'Dr. Amit Kumar Garg', linkedIn: 'dramitkrgarg' }],
  2020: [
    { name: 'Mohit Choudhary', linkedIn: 'mohit-choudhary-30715a159' },
    { name: 'Shrikant Deshmane', linkedIn: 'shrikant-deshmane-439791147' },
  ],
  2021: [
    { name: 'Sameer Sinha', linkedIn: 'sameer-sinha-a1a7a41b1' },
    { name: 'Shashwat Singh', linkedIn: 's10singh97' },
  ],
  2022: [
    { name: 'Anushka Joshi', linkedIn: 'anushka4joshi' },
    { name: 'Inderjeet', linkedIn: 'inderjeet-816b88176' },
    { name: 'Rajkumar Pareek', linkedIn: 'rajkumar-pareek-06a573170' },
    { name: 'Sanatan Shrivastava', linkedIn: 'sanatan-shrivastava-04a327171' },
  ],
  2023: [
    { name: 'Adarsh Gupta', linkedIn: 'adarsh29gupta' },
    { name: 'Anant Mehra', linkedIn: 'anant-mehra-626952190' },
    { name: 'Mehul Saxena', linkedIn: 'mehulsaxena' },
    { name: 'Priyanshi Mehta', linkedIn: 'priyanshi-mehta-247181191' },
  ],
  webmaster: [
    { name: 'Divyansh Singh', linkedIn: 'brc-dd' },
    { name: 'Pavnesh Chaturvedi', linkedIn: 'pavnesh-chaturvedi-208b15197' },
  ],
};

export default members;
