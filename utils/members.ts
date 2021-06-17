const members: Record<
  'faculty' | 2020 | 2021 | 2022 | 2023,
  Array<{ name: string; linkedIn: string }>
> = {
  faculty: [{ name: 'Dr. Ashish Sharma', linkedIn: 'dr-ashish-sharma-a6a5491b' }],
  2020: [
    { name: 'Mohit Choudhary', linkedIn: 'mohit-choudhary-30715a159' },
    { name: 'Shrikant Deshmane', linkedIn: 'shrikant-deshmane-439791147' },
  ],
  2021: [
    { name: 'Sameer Sinha', linkedIn: 'sameer-sinha-a1a7a41b1' },
    { name: 'Shashwat Singh', linkedIn: 's10singh97' },
  ],
  2022: [
    { name: 'Anushka Joshi', linkedIn: '' },
    { name: 'Inderjeet', linkedIn: 'inderjeet-816b88176' },
    { name: 'Mayank Goyal', linkedIn: 'mayankkgoyal' },
    { name: 'Rajkumar Pareek', linkedIn: 'rajkumar-pareek-06a573170' },
    { name: 'Sanatan Shrivastava', linkedIn: 'sanatan-shrivastava-04a327171' },
  ],
  2023: [{ name: 'Divyansh Singh', linkedIn: 'brc-dd' }],
};

export default members;
