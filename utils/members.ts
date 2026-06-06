const members: Record<
  | '2020'
  | '2021'
  | '2022'
  | '2023'
  | '2024'
  | '2025'
  | '2026'
  | '2027'
  | '2028'
  | 'faculty'
  | 'webmaster',
  Array<{ name: string; linkedIn: string; mobile?: string; role?: string }>
> = {
  faculty: [
    { name: 'Prof. K K Sharma', linkedIn: 'prof-k-k-sharma', role: 'Dean' },
    { name: 'Dr. Chetna Sharma', linkedIn: 'chetna-sharma-phd-8ba8a337', role: 'Associate Dean' },
    {
      name: 'Dr. Shivang Tripathi',
      linkedIn: 'shivang-tripathi-11561418',
      role: 'Faculty Co-ordinator',
    },
  ],
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
  2024: [
    { name: 'Abhinav Jain', linkedIn: 'jaintle' },
    { name: 'Ankur Agarwal', linkedIn: 'ankur-8' },
    { name: 'Ashpreet Kaur', linkedIn: 'ashpreetkaur12' },
    { name: 'Dev Agrawal', linkedIn: 'dev-agrawal-223b211bb' },
    { name: 'S Ramesh Kumar', linkedIn: 'ramesh-kumar-saragadam-9b2617142' },
    { name: 'Sharang Verma', linkedIn: 'sharang-verma-43b582207' },
    { name: 'Shivani', linkedIn: 'shivani-choudhary-36bab01bb' },
  ],
  2025: [
    { name: 'Harshit Arora', linkedIn: 'harshit556' },
    { name: 'Kartik Mehandiratta', linkedIn: 'kartik-mehandiratta-91666022b' },
    { name: 'Romit Das', linkedIn: 'romit-das' },
    { name: 'Shantanu Kapse', linkedIn: 'raycurve' },
    { name: 'Yug Modi', linkedIn: 'yug-modi-27b965215' },
  ],
  2026: [
    { name: 'Abhishek Pant', linkedIn: 'abhishek-pant-5921a1257' },
    { name: 'Dhairya Majmudar', linkedIn: 'dhairya-majmudar' },
    { name: 'Hiteshwar Kaushik', linkedIn: 'hiteshwarkaushik' },
    { name: 'Kanishq Tahalyani', linkedIn: 'kanishq-tahalyani-551119257' },
    { name: 'Partik Malasi', linkedIn: 'partik-malasi-736686249' },
    { name: 'Tarsh Swarnkar', linkedIn: 'tarshswarnkar' },
    { name: 'Vansh Nigam', linkedIn: 'vansh-nigam-740675204' },
    { name: 'Varun Dhaundiyal', linkedIn: 'varun-dhaundiyal' },
  ],
  2027: [
    { name: 'Nitesh Kumar', linkedIn: 'nitesh-kumar-680525290', mobile: '+91 8957754513' },
    { name: 'Arijit Ajay Kumar', linkedIn: 'arijitajaykumar', mobile: '+91 7451016676' },
    { name: 'Rajesh Kumar', linkedIn: 'rajesh-kumar-625b53302', mobile: '+91 8868029745' },
    { name: 'Devina Yadav', linkedIn: 'devina-yadav-516965295', mobile: '+91 7073381092' },
    { name: 'Mehak Verma', linkedIn: 'mehak-verma-1b1353291', mobile: '+91 9817871305' },
    { name: 'Ritika Mittal', linkedIn: 'ritika-mittal-5454sr', mobile: '+91 7310433888' },
    {
      name: 'Aayansh Chaudhary',
      linkedIn: 'aayansh-chaudhary-b18a28310',
      mobile: '+91 7895252271',
    },
    { name: 'Gourang Jain', linkedIn: 'gourang-jain-92b15a294', mobile: '+91 9079938651' },
    { name: 'Parth Sharma', linkedIn: 'parth-sharma-7845942a2', mobile: '+91 8302619541' },
    { name: 'Lalit Kumar', linkedIn: 'lalit-kumar-298595298', mobile: '+91 6378850328' },
    { name: 'Tanveer Singh', linkedIn: 'tanveer-singh005', mobile: '+91 7779538411' },
  ],
  2028: [
    { name: 'Harsh Gupta', linkedIn: 'harshgupta9129', mobile: '+91 8808477272' },
    { name: 'Piyush Garg', linkedIn: 'piyush-garg-806734323', mobile: '+91 7988034887' },
    { name: 'Gaurav Patil', linkedIn: 'gaurav-patil-4a48b528a', mobile: '+91 8411806972' },
    { name: 'Om Upadhyay', linkedIn: 'om-upadhyay-7a235831b', mobile: '+91 8736803609' },
  ],
  webmaster: [
    { name: 'Divyansh Singh', linkedIn: 'brc-dd' },
    { name: 'Pavnesh Chaturvedi', linkedIn: 'pavnesh-chaturvedi-208b15197' },
  ],
};

export default members;
