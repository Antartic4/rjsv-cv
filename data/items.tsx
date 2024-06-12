export interface CoursesInterface {
  name: string;
  location: string;
  author?: string;
  accreditation: string;
}

export const courses: CoursesInterface[] = [
  {
    name: 'Next Amazona: Build ECommerce Website Like Amazon By Next.JS',
    location: 'Udemy',
    author: 'Bassir Jafarzadeh',
    accreditation: 'Certificate',
  },
  {
    name: 'AWS Cloud Quest: Cloud Practitioner',
    location: 'AWS Training',
    author: 'Amazon Web Services Training and Certification',
    accreditation: 'Certificate',
  },
];

export interface DetailInterface {
  name: string;
  year: string;
  description?: string;
  gpa?: string;
  list?: string[];
}

export const educations: DetailInterface[] = [
  {
    name: 'Nova Southeastern University - NSU',
    year: '2023 - Present',
    description: 'Masters of Science in Computer Science',
    gpa: 'GPA: 3.5',
  },
  {
    name: 'Universidad Iberoamericana - UNIBE',
    year: '2018 - 2022',
    description: 'ICT Engineering Degree.',
    gpa: 'GPA: 3.6',
  },
];

export const employments: DetailInterface[] = [
  {
    name: 'Peravia Industrial - La Famosa ',
    year: '2021 - Present',
    description: 'Programmer Analyst',
    list: [
      'Led FullStack Calidad V2.0 (React, Next.JS, Node.js, Express.js, MongoDB) with focus on user experience and performance (100% engagement increase).',
      'Developed data analysis tools reducing processing time by 50%.',
      'Prioritized user-centric design in FullStack Calidad V2.0, achieving accessibile and intuitive navigation.',
      'Agile project management ensured timely delivery.',
    ],
  },
  {
    name: 'Peravia Industrial - La Famosa',
    year: '2017 - 2020',
    list: [
      'Built Siembra V2.0 (C#, MSSQL) improving user experience and streamlining workflows with Agile methodologies.',
      'Optimized Siembra V2.0 performance through innovative solutions and database expertise.',
      'Collaborated with cross-functional team.',
    ],
  },
  // {
  //   name: 'Digital Media Lab - Xavier University',
  //   year: '2014 - 2015',
  //   list: [
  //     'Created and refined educational videos for faculty and students, expanding the multimedia resources of the institution.',
  //     'Instructed students in advanced recording and editing software, contributing to a more skilled user base in the lab.',
  //     'Expanded software proficiency by learning Adobe After Effects.',
  //   ],
  // },
];

export interface ItemInterface {
  name: string;
  score: string;
}

export const programingLanguages: ItemInterface[] = [
  {
    name: 'Javascript',
    score: 'w-[100%]',
  },
  {
    name: 'SQL',
    score: 'w-[100%]',
  },
  {
    name: 'Python',
    score: 'w-[75%]',
  },
];

export const frontEnd: ItemInterface[] = [
  {
    name: 'React.js',
    score: 'w-[90%]',
  },
  {
    name: 'Next.js',
    score: 'w-[95%]',
  },
  {
    name: 'Typescript',
    score: 'w-[70%]',
  },
  {
    name: 'Tailwind CSS',
    score: 'w-[95%]',
  },
  {
    name: 'MUI',
    score: 'w-[80%]',
  },
];

export const backEnd: ItemInterface[] = [
  {
    name: 'Nodejs',
    score: 'w-[90%]',
  },
  {
    name: 'Express.js',
    score: 'w-[90%]',
  },
  {
    name: 'MongoDB',
    score: 'w-[95%]',
  },
  {
    name: 'MySQL',
    score: 'w-[100%]',
  },
  {
    name: 'PostgreSQL',
    score: 'w-[100%]',
  },
];

export const design: ItemInterface[] = [
  {
    name: 'Photoshop',
    score: 'w-[90%]',
  },
  {
    name: 'Figma',
    score: 'w-[70%]',
  },
];

export const principles: ItemInterface[] = [
  {
    name: 'Cleanliness',
    score: 'w-[98%]',
  },
  {
    name: 'Componentization',
    score: 'w-[100%]',
  },
  { name: 'Responsive Design', score: 'w-[100%]' },
];

export const languages: ItemInterface[] = [
  {
    name: 'Spanish',
    score: 'w-[100%]',
  },
  {
    name: 'English',
    score: 'w-[100%]',
  },
];
