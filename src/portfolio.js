import emoji from 'react-easy-emoji';

import googlelogo from './assets/img/icons/common/google.svg'
import github from './assets/img/icons/common/github.svg'
import airbnb from './assets/img/icons/common/airbnbLogo.png'
import softitle from './assets/img/softitle.png'
import nextbrain from './assets/img/nextbrain.png'
import unpeace from './assets/img/unpeace.png'
import bitly from './assets/img/bitly.png'
import upwork from './assets/img/upwork.png'

import project1 from './assets/img/project/1.png'
import project2 from './assets/img/project/2.png'
import project3 from './assets/img/project/3.png'
import project4 from './assets/img/project/4.png'
import project5 from './assets/img/project/5.png'
import project6 from './assets/img/project/6.png'
import project7 from './assets/img/project/7.png'
import project8 from './assets/img/project/8.png'
import project16 from './assets/img/project/16.PNG'

export const greetings = {
    "name": "Tommy Lee",
    "title": "Hello everyone, I'm Tommy",
    "description": "A passionate Full Stack Web Developer having experience in building Web applications with Reactjs / Nodejs / Typescript / Tailwindcss / Laravel and some other cool libraries and frameworks.",
    "resumeLink": "https://www.dropbox.com/s/8uinmjam7hctfy9/Resume%28Tommy%29.pdf?dl=0"
}

export const openSource = {
  githubUserName: '1hanzla100',
};

export const contact = {
  
}

export const socialLinks = {
    "github": "https://github.com/spaceboy0621",
    "linkedin": "https://www.linkedin.com/in/tommy-lee-abb69620a/"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
    skills: [
      emoji(
        '⚡ Developing SPA websites using the MERN stack for you.'
      ),
      emoji('⚡ Delivering clean High-quality code, Agile Methodology, Process-oriented approach.'),
      emoji(
        '⚡ Integration of third party services such as Firebase/ AWS'
      ),
    ],
    
    softwareSkills: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'sass',
        fontAwesomeClassname: 'logos:sass',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'TypeScript',
        fontAwesomeClassname: 'logos:typescript-icon',
      },
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      {
        skillName: 'flutter',
        fontAwesomeClassname: 'logos:flutter',
      },
      {
        skillName: 'swift',
        fontAwesomeClassname: 'vscode-icons:file-type-swift',
      },
      {
        skillName: 'npm',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
      {
        skillName: 'sql-database',
        fontAwesomeClassname: 'vscode-icons:file-type-sql',
      },
      {
        skillName: 'mongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
      {
        skillName: 'aws',
        fontAwesomeClassname: 'logos:aws',
      },
      {
        skillName: 'firebase',
        fontAwesomeClassname: 'logos:firebase',
      },
      {
        skillName: 'python',
        fontAwesomeClassname: 'logos:python',
      },
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },
      {
        skillName: 'docker',
        fontAwesomeClassname: 'logos:docker-icon',
      },
    ],
}


export const SkillBars = [
    {
      Stack: 'React / Next / Gatsby / Vue / Nuxt / TypeScript / WooCommerce / Shopify',
      progressPercentage: '90',
    },
    
    {
      Stack: 'Node / Laravel / Nest',
      progressPercentage: '85',
    },
    {
      Stack: 'Firebase / MongoDB / MySQL / PostSQL / GraphQL',
      progressPercentage: '90',
    },
    {
      Stack: 'Figma / AdobeXD / Jira / CSS / SASS / TailwindCSS',
      progressPercentage: '90',
    },
    {
      Stack: 'AWS / Github / BitBucket',
      progressPercentage: '95',
    },
  ]

export const educationInfo = [
    {
      schoolName: 'The University of Hong Kong',
      subHeader: 'Bachelor Degree in Computer Science',
      duration: 'September 2009 - September 2013',
      desc: 'Participated in the research of XXX and published 3 papers.',
      descBullets: [
        'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      ],
    }
]

export const experience = [
  {
    role: 'Remote Full Stack Developer',
    company: 'Softite LLC',
    companylogo: softitle,
    date: '2020/05 – 2021/02',
    desc:
      'Web Development Company.',
    descBullets: [
      'Contributed to a fleet management project that facilitates operations between fleet owner companies and maintenance companies.',
      'Wrote unit and end-to-end tests using Nest to ensure that the APIs are working as expected.',
      'Helped create database models, relationships, and extensions.',
    ],
  },
  {
    role: 'Senior Frontend Developer',
    company: 'Nextbrain',
    companylogo: nextbrain,
    date: '2019/07 -2020/05',
    desc:'Digital Transformation Company',
    descBullets: [
      'Refactored legacy code while simultaneously creating new features and pages using React Hooks',
      'Used React to build booking web applications with React-Redux',
      'Built an auction admin using VueJS, Vuex, Tailwind CSS, Nuxt with  firebase authentication, real-time chat and user management',
    ],
  },
  {
    role: 'Freelancer',
    company: 'Upwork.com',
    companylogo: upwork,
    date: '2017/09 - 2019/07',
    desc:
      'I have done tons of works from simple apps to complex projects. These jobs required me to : ',
    descBullets: [
      'Fixing bugs.',
      'Rewrite and refactor existing code to make it maintainable.',
      "Build the company's website.",
      "Creating elegant and useful solutions to solve problems for our customers, internal teams, and partners.",
      "Always worked on the client's timezone.",
    ],
  },
  {
    role: 'Backend Developer',
    company: 'Bitly',
    companylogo: bitly,
    date: '2016/04 - 2017/08',
    desc:
      'Web Development Company',
    descBullets: [
      "Established a set of code style guidelines and best practices for the client's developers, making the codebases more readable, consistent, and maintainable.",
      "Architected a collection of middleware that dramatically improved the client's codebase, making them drier, more secure, and more efficient to develop further.",
      'Drafting detailed rerational situation for UNG',

    ],
  },
]

export const projects = [
  {
    name: "LeasingOptions",
    desc: "Stack : React, Sass, Firebase, Nest",
    link: {
      name: "https://www.leasingoptions.co.uk/",
      url: project8
    }
  },
  {
    name: "TSM",
    desc: "Stack : Next, Tailwindcss, MongoDB, Node",
    link: {
      name: "https://tsm.gg/",
      url: project16
    }
  },
  {
    name: "Festival Foods",
    desc: "Stack : Nuxt, Sass, Firebase, Nest",
    link: {
      name: "https://www.festfoods.com/",
      url: project2
    }
  },
  {
    name: "Guimy",
    desc: "Stack : Gatsby, Sass, MongoDB, Node",
    link: {
      name: "https://www.guimyapp.com/",
      url: project3
    }
  },
  {
    name: "Menubazaar | Digital Mobile Menu",
    desc: "Stack : Laravel, MongoDB, Tailwindcss",
    link: {
      name: "https://menubazaar.com/",
      url: project4
    }
  },
  {
    name: "Lunch4you",
    desc: "Stack : Laravel, Firebase, CSS3, Docker",
    link: {
      name: "https://lunch4you.de/",
      url: project5
    }
  },
  {
    name: "Wedo",
    desc: "Stack : Nuxt, Tailwindcss, PostSQL, Node",
    link: {
      name: "https://wedo.lu/",
      url: project6
    }
  },
  {
    name: "Plantoys",
    desc: "Stack : Nuxt, Tailwindcss, PostSQL, Node",
    link: {
      name: "https://usa.plantoys.com/",
      url: project7
    }
  }
]