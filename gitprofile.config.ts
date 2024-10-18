const CONFIG = {
  github: {
    username: 'Tohid001', // Your GitHub org/user name. (This is the only required config)
  },
  base: '/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated',
        limit: 8,
        exclude: {
          forks: false,
          projects: ['Tohid001/SOLVED-JS-PROBLEMS','Tohid001/json-server-vercel','Tohid001/icons','Tohid001/Tohid001','Tohid001/trial','Tohid001/BFS-Projects','Tohid001/curriculum','Tohid001/warp-plus','Tohid001/had-a-little-bit-of-fun-with-git','Tohid001/JS-BASICS','Tohid001/ES6','Tohid001/A-simple-react-project','Tohid001/React-practice-2','Tohid001/BUILDING-REST-API','Tohid001/1st-experimental-chat-application','Tohid001/Mozaic-UI','Tohid001/portfolio','Tohid001/rtk-counter','Tohid001/json-server-vercel','Tohid001/usehooks-ts',],
        },
      },
      manual: {
        projects: ['arifszn/gitprofile', 'arifszn/pandora'],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Mohammad Tohidul Islam',
    description: '',
    imageURL:
      'https://res.cloudinary.com/dnmpqcssy/image/upload/v1729211272/rsz_0000_n6m70o.jpg',
  },
  social: {
    linkedin: 'mohammad-tohidul-islam-4b824b1aa',
    github: 'Tohid001',
    medium: 'mohammadtohidulislam',
    phone: '+8801852523079',
    email: 'me.tohid.001@gmail.com',
  },
  resume: {
    fileUrl:
      'https://res.cloudinary.com/dnmpqcssy/image/upload/v1729211402/Mohammad-Tohidul-Islam-FlowCV-Resume-20241014_1_yg8apc.pdf',
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'Python',
    'C',
    'HTML',
    'CSS',
    'SCSS',
    'Tailwind CSS',
    'React',
    'Next.js',
    'PWA',
    'SPA',
    'React Router',
    'styled-components',
    'Ant Design',
    'ShadCN',
    'Framer Motion',
    'Chart.js',
    'Redux',
    'React Redux',
    'Redux Toolkit',
    'TanStack React Query',
    'RTK Query',
    'Node.js',
    'Express.js',
    'MongoDB',
    'REST API',
    'GraphQL',
    'Firebase',
    'Babel',
    'Webpack',
    'Vite',
    'Gulp',
    'Git',
    'Docker',
    'Postman',
    'Sentry',
    'Jest',
    'Vitest',
    'React Testing Library',
    'Mock Service Worker (MSW)',
  ],
  experiences: [
    {
      company: 'Dorik AI',
      position: 'Software Engineer (Full-time)',
      from: 'October 2022',
      to: 'Present',
      companyLink: 'https://dorik.com/',
    },
    {
      company: 'Agency Handy',
      position: 'Software QA & UX Consustant (Part-time)',
      from: 'February 2024',
      to: 'May 2024',
      companyLink: 'https://www.agencyhandy.com/',
    },
    {
      company: 'Ek Takar Khobor',
      position: 'Lead Frontend Developer (Part-time)',
      from: 'February 2024',
      to: 'May 2024',
      companyLink: 'https://www.ektakarkhobor.com/',
    },
  ],
  // certifications: [
  //   {
  //     name: 'Lorem ipsum',
  //     body: 'Lorem ipsum dolor sit amet',
  //     year: 'March 2022',
  //     link: 'https://example.com',
  //   },
  // ],
  educations: [
    {
      institution: 'Shahjalal University of Science and Technology, Sylhet',
      degree: 'Bachelor of Science (B.Sc.), Industrial & Production Engineering',
      from: '2018',
      to: '2024',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    // },
  ],
  blog: {
    source: 'medium',
    username: 'mohammadtohidulislam',
    limit: 10,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'emerald',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: false,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  footer: `Made with <a 
      class="text-primary" href="https://github.com/Tohid001/Tohid001.github.io"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
  // enablePWA: true,
};

export default CONFIG;