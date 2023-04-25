export interface CoursesInterface {
    name: string,
    location: string,
    author?: string,
    accreditation: string,
}

export const courses: CoursesInterface[] = [
    {
        name: 'JavaScript: Understanding the Weird Parts',
        location: 'Udemi',
        author: "Anthony Alicea",
        accreditation: "Certificate",
    },
    {
        name: 'Vue.js The complete guide',
        location: 'Udemi',
        author: "Maximilian Schwarzmüller",
        accreditation: "Certificate",
    },
    {
        name: 'Angular The Complete Guide',
        location: 'Udemi',
        author: "Maximilian Schwarzmüller",
        accreditation: "Certificate",
    },
    {
        name: 'Illustrator CC MasterClass',
        location: 'Udemi',
        author: "Martin Perhiniak",
        accreditation: "Certificate",
    },
    {
        name: 'Photoshop The Platform\'s Biggest & Most Popular Photoshop Course',
        location: 'Udemi',
        author: "Manfred Werner",
        accreditation: "Certificate",
    },
    {
        name: 'Conversation and gramatic in English',
        location: 'Dominico Americano',
        accreditation: "Certificate",
    },
]

export interface DetailInterface {
    name: string,
    year: string,
    description?: string,
    list?: string[],
}

export const educations: DetailInterface[] = [
    {
        name: 'Psychology, Universidad Católica de Sando Domingo',
        year: "2014-2017",
        description: "Graduated with Honor",
    },
]

export const employments: DetailInterface[] = [
    {
        name: 'Freelancer',
        year: "2021-2023",
        description: "",
        list: [
            "Creating Web Application for medical industry.",
            "Creating Websites for Non Profit and Physicians",
            "Building relationships with clients.",
            "Managing client relationships.",
        ]
    },
    {
        name: 'Bits & Bytes Media',
        year: "2018-2020",
        list: [
            "Working as Full-Stack Web Developer.",
            "Building with as a Lead developer an electoral roll aplication with PHP, MySQL, HTML5/CSS3 and Javascript.",
            "Building variety of websites with CMS Software.",
            "Building a ERP for ecommerse sites, law firms, dealers.",
        ]
    },
    {
        name: 'Media Revolution',
        year: "2017-mar. to 2017-nov.",
        list: [
            "Working as Front-End Web Developer.",
            "Building a mobile application with Ionic.",
            "Building a CRM for the mobile application with Angular.",
            "Working with a team of developer.",
        ]
    },
    {
        name: 'Berry Dominicana',
        year: "2013-2015",
        list: [
            "Service Order Keyer.",
        ]
    },
]


export interface ItemInterface {
    name: string,
    score: string
}

export const programingLanguages: ItemInterface[] = [
    {
        name: 'Javascript',
        score: "w-[100%]"
    },
    {
        name: 'SQL',
        score: "w-[100%]"
    },
    {
        name: 'Python',
        score: "w-[70%]"
    },
    {
        name: 'PHP',
        score: "w-[60%]"
    },
]

export const frontEnd: ItemInterface[] = [
    {
        name: 'React.js',
        score: "w-[90%]"
    },
    {
        name: 'Vue.js',
        score: "w-[100%]"
    },
    {
        name: 'Angular',
        score: "w-[100%]"
    },
    {
        name: 'Next.js',
        score: "w-[90%]"
    },
    {
        name: 'Typescript',
        score: "w-[80%]"
    },
    {
        name: 'Vite',
        score: "w-[70%]"
    },
    {
        name: 'Tailwind CSS',
        score: "w-[95%]"
    },
]

export const backEnd: ItemInterface[] = [
    {
        name: 'Nodejs',
        score: "w-[100%]"
    },
    {
        name: 'Express.js',
        score: "w-[100%]"
    },
    {
        name: 'MySQL',
        score: "w-[100%]"
    },
    {
        name: 'PostgreSQL',
        score: "w-[80%]"
    },
    {
        name: 'Babel',
        score: "w-[80%]"
    },
    {
        name: 'Linux',
        score: "w-[80%]"
    },
    {
        name: 'Nginx',
        score: "w-[80%]"
    },
    {
        name: 'Apache',
        score: "w-[70%]"
    },
]

export const design: ItemInterface[] = [
    {
        name: 'Illustrator',
        score: "w-[100%]"
    },
    {
        name: 'Photoshop',
        score: "w-[50%]"
    },
]

export const principles: ItemInterface[] = [
    {
        name: 'Clean Code',
        score: "w-[100%]"
    },
    {
        name: 'Keep It Simple',
        score: "w-[100%]"
    },
    {
        name: 'Don\'t repeat yourself',
        score: "w-[100%]"
    },
]

export const languages: ItemInterface[] = [
    {
        name: 'Spanish',
        score: "w-[100%]"
    },
    {
        name: 'English',
        score: "w-[80%]"
    },
]