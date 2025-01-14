// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'hayatharoon', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        // projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Afterwork',
          description: `Currently working on Afterwork, Afterwork is the fastest and most efficient platform on Earth. With cutting-edge AI technology, Afterwork revolutionizes the process, allowing users to swiftly send inquiries, obtain quotes, and negotiate with venues in minutes. As a Leading Full Stack Engineer, I've been instrumental in crafting Afterwork's user experience, from designing pixel-perfect UIs to integrating the application with robust backend architecture and databases.`,
          imageUrl: './public/afterwork.png',
          link: 'https://d3kisp2qyxdrcr.cloudfront.net/',
        },
        {
          title: 'Mereos',
          description: `Mereos marks a pivotal shift in corporate recruitment, simplifying the process while offering unparalleled flexibility and security. With the ability to schedule up to 20,000 simultaneously monitored sessions, Mereos redefines candidate experiences. As a Frontend React Developer, I've played a crucial role in the development of Mereos, focusing on application integration and the creation of the Mereos Chrome Extension.`,
          imageUrl:
            'https://d2lxkizvrhu4im.cloudfront.net/images/home_banner_illus.svg',
          link: 'https://mereos.eu/',
        },
        {
          title: 'ALSN',
          description: `ASLN drives digital transformation with certified document translation services. In an interconnected world where seamless communication is imperative, they are strategically positioned to cater to the needs of businesses, individuals, and organizations.`,
          imageUrl: 'https://osamajavaid.vercel.app/projects/alsn.png',
          link: '',
        },
        {
          title: 'Firm Sanad',
          description: `Invest in Saudi Arabia, Streamline Your Business Setup Process in Saudi Arabia with FirmSanad Simplify the process of obtaining licenses and starting a business in Saudi Arabia with our streamlined platform.`,
          imageUrl: 'https://osamajavaid.vercel.app/projects/firmsanad.png',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Haroon Hayat',
    description: 'Haroon Hayat, Hayat Haroon',
    imageURL: '',
  },
  social: {
    linkedin: 'hayatharoon',
    twitter: 'haron_hayat',
    stackoverflow: '18397681/haroon-hayat', // example: '1/jeff-atwood'
    website: 'https://hayatharoon.github.io/',
    email: 'hayat_haroon@yahoo.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'React.js',
    'Next.js',
    'Gatsby.js',
    'Redux',
    'Node.js',
    'Typescript',
    'Antd design',
    'AWS Cognito',
    'Firebase',
    'Git',
    'HTML',
    'CSS',
    'SCSS',
    'Tailwind',
    'Github',
    'Jira',
    'Figma',
  ],
  experiences: [
    {
      company: 'Productbox',
      position: 'Full Stack Engineer',
      from: '1 Jan 2024',
      to: 'Present',
      companyLink: 'https://www.linkedin.com/company/productbox/mycompany/',
    },
    {
      company: 'JMM Technologies',
      position: 'Frontend ReactJS Developer',
      from: 'May 2023',
      to: 'Jan 2024',
      companyLink: 'https://www.linkedin.com/company/jmmtechnologies/',
    },
    {
      company: 'Gitlogix',
      position: 'Frontend ReactJS Developer',
      from: 'Jan 2023',
      to: 'May 2023',
      companyLink: 'https://www.linkedin.com/company/gitlogix/',
    },
    {
      company: 'Atrialogics',
      position: 'Frontend ReactJS Developer',
      from: 'Sep 2022',
      to: 'Jan 2023',
      companyLink: 'https://www.linkedin.com/company/atrialogics/',
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
      institution: 'University of Malakand',
      degree: 'Bachelor of Computer Science',
      from: '2017',
      to: '2021',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
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

    // Custom theme, applied to `procyon` theme
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

  // Optional Footer. Supports plain text or HTML.
  footer: `<a 
      class="text-primary" href="https://github.com/hayatharoon"
      target="_blank"
      rel="noreferrer"
    >Haroon Hayat</a>`,

  enablePWA: true,
};

export default CONFIG;
