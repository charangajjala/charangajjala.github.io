/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Charan's Portfolio",
  description:
    "A tech enthusiast driven by a passion for creating impactful, scalable solutions that blend innovation with sustainability to create positive impact in social and technical spaces.",
  og: {
    title: "Charan Gajjala Chenchu Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Charan Gajjala Chenchu",
  logo_name: "Charan Gajjala Chenchu",
  nickname: "Charan",
  subTitle:
    "A tech enthusiast driven by a passion for creating impactful, scalable solutions that blend innovation with sustainability to create positive impact in social and technical spaces.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/charangajjala",
  githubProfile: "https://github.com/charangajjala",
  reposList: "https://github.com/charangajjala?tab=repositories",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/charangajjala",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/charangajjala/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:charan.gc7@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating responsive front-end interfaces using React and efficiently managing state with React Redux.",
        "⚡ Implementing robust RESTful APIs with java and javascript for server-side business operations.",
        "⚡ Building and optimizing database solutions with both SQL and NoSQL technologies for efficient data processing.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React JS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Node JS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express Js",
          fontAwesomeClassname: "skill-icons:expressjs-light",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "devicon:spring-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "skill-icons:mongodb",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
      title: "Data Science, ML & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Solving real-world problems by designing and developing AI models for deeplearning use cases across various industries.",
        "⚡ Experience with Computer vision, NLP, and Multimodal systems, integrating LLMs with vision models to leverage both modalities.",
        "⚡ Deploying cloud-integrated machine learning solutions for scalable applications.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon:pandas-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "skill-icons:scikitlearn-light",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Open CV",
          fontAwesomeClassname: "logos:opencv",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on AWS cloud platform.",
        "⚡ Hosting and maintaining websites on virtual machine instances and serverless systems along with integration of databases.",
        "⚡ Deploying deep learning models on the cloud to optimize training pipelines and enable efficient inference on end devices.",
        "⚡ Automating CI/CD pipelines with Docker to streamline development workflows, enabling faster deployments.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "skill-icons:aws-dark",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Houston",
      subtitle: "Master of Science in Computer Science",
      logo_path: "uh_red.png",
      alt_name: "IIITDM Kurnool",
      duration: "2023 - Expected 2025",
      descriptions: [
        "⚡ I have studied courses like Cloud Computing, Visualization, Image processing and Data Mining.",
        "⚡ Apart from this, I have worked as a research assistant in the field of Machine Learning and Computer Vision.",
      ],
      website_link: "https://uh.edu",
    },
    {
      title: "Vellore Institute of Technology",
      subtitle: "Bachelor of Technology in Computer Science and Engineering",
      logo_path: "vit_logo.png",
      alt_name: "Vellore Institute of Technology",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ I have taken computer science courses, including Data Structures and Algorithms, Database Management Systems, Operating Systems, Computer Networks, and Software Engineering.",
        "⚡ Apart from this, I have studied courses like Machine Learning, Artificial Intelligence, and Image Processing as part of electives.",
      ],
      website_link: "https://vit.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Algorithmic Toolbox",
      subtitle: "",
      logo_path: "Seal_of_the_University_of_California,_San_Diego.svg.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/W5K9NDP4GQ2D",
      alt_name: "University of California, San Diego",
      color_code: "#8C151599",
    },
    {
      title: "Server-side Development with NodeJS, Express and MongoDB",
      subtitle: "",
      logo_path: "Hong_Kong_University_of_Science_and_Technology-Logo.wine.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/QTDAUKSVF8VY",
      alt_name: "Hong Kong University",
      color_code: "#00000099",
    },
    {
      title: "Front-End Web Development with React",
      subtitle: "",
      logo_path: "Hong_Kong_University_of_Science_and_Technology-Logo.wine.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/HJ289SQJK4CL",
      alt_name: "Hong Kong University",
      color_code: "#0C9D5899",
    },
    {
      title: "Python A-Z™: Python For Data Science With Real Exercises!",
      subtitle: "",
      logo_path: "62bd9f00bafda8767a088b3b.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-85a7a5ed-0e54-437a-8ca2-c69effdc9fe5/",
      alt_name: "Udemy",
      color_code: "#1F70C199",
    },
    {
      title: "Web Application Technologies and Django",
      subtitle: "",
      logo_path: "unnamed.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/3SSE9UH9R8HB",
      alt_name: "University of Michigan",
      color_code: "#D83B0199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "I have done Internship and Assistantships in Software and ML/AI domains.", // Fill Later when you build enought experience
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Developer Intern",
          company: "Interactive Network Technologies, Inc. (INT)",
          company_url: "https://www.int.com/",
          logo_path: "int_logo.jpeg",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "During my internship, I improved a documentation website by integrating Elastic Lunr JS and debouncing techniques, reducing search latency by 10%. I built a Node.js performance monitoring app with Express REST API, Puppeteer, and MongoDB, cutting redundant test runs by 90%. I also productionized the system with Docker, deployed on AWS ECS with Fargate, and automated CI/CD pipelines, reducing deployment time by 50%.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Assistantships",
      work: true,
      experiences: [
        {
          title: "Machine Learning Research Assistant",
          company: "University of Houston",
          company_url: "https://www.uh.edu/",
          logo_path: "uh_red.png",
          duration: "Jan 2024 - May 2024",
          location: "Houston, TX, USA",
          description:
            "I developed a motion intention recognition system using TensorFlow to classify temporal data into 8 activity classes, predicting construction workers' intended actions. The project achieved 95% accuracy through fine-tuning a Video Swin Transformer model and 90% accuracy using a custom 1D CNN and LSTM model for sEMG sensor data. I enhanced model generalizability and accuracy by 5% with sliding window transformations, low-pass filtering, and data augmentation techniques.",
          color: "#000000",
        },
        {
          title: "Graduate Assistant",
          company: "University of Houston",
          company_url: "https://www.uh.edu/",
          logo_path: "uh_red.png",
          duration: "Aug 2023 - Dec 2023",
          location: "Houston, TX, USA",
          description:
            "I led and coordinated a 25-member team to manage exams, providing prompt technical support for lab issues. I supervised daily testing logistics for over 500 students, facilitating effective communication with staff and students.",
          color: "#0879bf",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create ML/AI projects and deploy them to software applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  // title: "Publications",
  // description: "Some of my published Articles, Blogs and Research.",
  // avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_charan(2).png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, Full Stack Development, and Cloud",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle: "Houston, TX, USA",
    locality: "Houston",
    country: "USA",
    region: "Texas",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/AhXMSRTT1LEEUSrA7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
