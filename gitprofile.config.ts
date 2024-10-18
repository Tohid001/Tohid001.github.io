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
          projects: [
            'Tohid001/Tohid001.github.io',
            'Tohid001/SOLVED-JS-PROBLEMS',
            'Tohid001/json-server-vercel',
            'Tohid001/icons',
            'Tohid001/Tohid001',
            'Tohid001/trial',
            'Tohid001/BFS-Projects',
            'Tohid001/curriculum',
            'Tohid001/warp-plus',
            'Tohid001/had-a-little-bit-of-fun-with-git',
            'Tohid001/JS-BASICS',
            'Tohid001/ES6',
            'Tohid001/A-simple-react-project',
            'Tohid001/React-practice-2',
            'Tohid001/BUILDING-REST-API',
            'Tohid001/1st-experimental-chat-application',
            'Tohid001/Mozaic-UI',
            'Tohid001/portfolio',
            'Tohid001/rtk-counter',
            'Tohid001/json-server-vercel',
            'Tohid001/usehooks-ts',
          ],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Ek Takar Khobor',
          description:
            "Transformed the legacy frontend UI, under the Ant Design system and utilizing ShadCN for faster development, improved consistency across the application, and ensured adherence to modern design principles to create a more maintainable and scalable interface. Set up and configured a scalable and maintainable Next.js project with Typescript and the necessary configurations. Implemented interactive reel feature and video stream player similar to YouTube, where I integrated a time-segmented video API with Tanstack React Query, enabling smooth video transitions and efficient handling of video streams. Utilized Chart.js for creating data visualizations and interactive charts for the admin dashboard. I focused on pixel-perfect implementation from Figma designs, ensuring the UI was responsive and compatible across various browsers and devices. Employed advanced optimization techniques, such as code splitting, lazy loading, and efficient asset management, which resulted in faster load times and improved user experience. Overall, this project improved the user interface and contributed significantly to the platform's functionality and performance.",
          imageUrl: 'https://www.ektakarkhobor.com/assets/images/logo.png',
          link: 'https://www.ektakarkhobor.com/',
        },
        {
          title: 'Link Sharing App',
          description:
            'A full-stack link sharing app for developers. Built with Next.js, Ant design, React DND, Tanstack React Query , NextAuth.js, MongoDb and many more.',
          imageUrl:
            'https://res.cloudinary.com/dnmpqcssy/image/upload/v1729254270/Screenshot_2024-10-18_at_6.24.16_PM_ymhypw.png',
          link: 'https://link-sharing-app-f8dz.vercel.app',
        },
        {
          title: 'Interactive Quiz Creation Platform',
          description: `A web app inspired by Google Forms for creating and managing custom quizzes. Features include- Quiz customization with multimedia answers, editable content, drag-and-drop question sorting, flexible answer configuration, supporting single or multiple answer types with point assignments, and the option to retake quizzes multiple times, complex state management across nested components, with a bottom-to-top approach to maintain local storage synchronization.`,
          imageUrl:
            'https://res.cloudinary.com/dnmpqcssy/image/upload/v1729254926/Screenshot_2024-10-18_at_6.35.08_PM_qhqejk.png',
          link: 'https://cute-lily-530e5a.netlify.app/',
        },
        {
          title: 'Simple Command-line (CLI) Task Management System',
          description:
            'This simple command-line (CLI) task management system is implemented in Python. Utilized OOP design principles: Command pattern for modular, extendable commands, Single Responsibility Principle for separation of concerns. Conducted partial integration testing for core functionalities.',
          imageUrl: '',
          link: 'https://github.com/Tohid001/task_manager_cli',
        },
        {
          title: 'RESTful E-commerce Backend Development',
          description:
            'An e-commerce RESTful backend using Node.js and express.js with essential tools for security and validation, utilizing Bcrypt  & JSON Web Token for secure authentication and Mongoose for MongoDB interactions. Nodemailer is used for email notifications.',
          imageUrl: '',
          link: 'https://github.com/Tohid001/Sita-ecom/tree/master/backend',
        },
        {
          title: 'Employee Task Management (under development)',
          description:
            'Helps task creation with estimated time and priority, actual time tracking for task stages, and task assignment functionality. Used Next.js, TypeScript, JSON Server (Deployed on Heroku), Formik(for complex form validation)',
          imageUrl: '',
          link: 'https://github.com/Tohid001/Task-management-nextjs',
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
      'https://res.cloudinary.com/dnmpqcssy/image/upload/v1729264522/my_resume_today_1_1_xlg8be.pdf',
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
      degree:
        'Bachelor of Science (B.Sc.), Industrial & Production Engineering',
      from: '2018',
      to: '2024',
    },
    {
      institution: 'Govt. City College, Chittagong',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2014',
      to: '2016',
    },
    {
      institution: 'Govt. Muslim High School, Chittagong',
      degree: 'Secondary Certificate (HSC)',
      from: '2012',
      to: '2014',
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
    displayAvatarRing: true,
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
