export const nepaliNames = [
  { firstName: "Aaska", lastName: "prajapati", gender: "female" },
  { firstName: "Anjali", lastName: "Adhikari", gender: "female" },
  { firstName: "Bishal", lastName: "Thapa", gender: "male" },
  { firstName: "Deepika", lastName: "Gurung", gender: "female" },
  { firstName: "Ishaan", lastName: "Karki", gender: "male" },
  { firstName: "Kusum", lastName: "Magar", gender: "female" },
  { firstName: "Nabin", lastName: "Rai", gender: "male" },
  { firstName: "Pratikshya", lastName: "Poudel", gender: "female" },
  { firstName: "Rohan", lastName: "Bista", gender: "male" },
  { firstName: "leejaw", lastName: "Chitrakar", gender: "male" },
  { firstName: "Siddharth", lastName: "Lama", gender: "male" },
  { firstName: "Trishna", lastName: "Tamang", gender: "female" },
  { firstName: "sudip", lastName: "tiwari", gender: "male" },
  { firstName: "Yojana", lastName: "Basnet", gender: "female" },
  { firstName: "Bibek", lastName: "Dahal", gender: "male" },
  { firstName: "Srijana", lastName: "Gautam", gender: "female" },
  { firstName: "Manish", lastName: "Shrestha", gender: "male" },
  { firstName: "Nikita", lastName: "Baniya", gender: "female" },
  { firstName: "Suraj", lastName: "Acharya", gender: "male" },
  { firstName: "Priyanka", lastName: "Giri", gender: "female" }
];

export const getRandomNepaliName = (gender, count) => {
  let filtered = nepaliNames;
  if (gender !== 'all') {
    filtered = nepaliNames.filter(n => n.gender === gender);
  }
  
  const shuffled = [...filtered].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map((n, i) => ({
    id: `np-${Date.now()}-${i}`,
    firstName: n.firstName,
    lastName: n.lastName,
    email: `${n.firstName.toLowerCase()}.${n.lastName.toLowerCase()}@example.com`,
    nat: "NP",
    nickname: ""
  }));
};
