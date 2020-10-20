/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Akshay Iyyadurai Balasundaram",
  title: "Hello, I'm Akshay",
  subTitle: emoji(
    "A tennis player turned software developer 🚀 who is on a journey to help the world run better and in improving people's lives.. ",
  ),
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/ibakshay",
  linkedin: "https://www.linkedin.com/in/ibakshay/",
  gmail: "ibakshay96@gmail.com",
  medium: "https://medium.com/@saadpasta",
  instagram: "https://www.instagram.com/ibakshay/",
  twitter: "https://twitter.com/ib_akshay",
};

// Your Skills Section

const skillsSection = {
  title: "Skills",
  subTitle:
    "Full Stack Developer who is hands-on with these technologies and always wants to learn and explore other tech stacks",
  skills: [
    emoji(
      "⚡ designed and developed a open-source bot using GitHub Action platform to automate the contributor's signature process (CLA)",
    ),
    emoji(
      "⚡ working on a project to fully automate the CI/CD pipeline creation",
    ),
    emoji(
      "⚡ expert knowledge in git/GitHub",
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular",
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "SRH Hochschule University",
      logo: require("./assets/images/SRH_logo.png"),
      subHeader: "Master of Engineering in Information Technology",
      duration: "September 2018 - April 2020",
      desc: "",
      descBullets: [
        'Attained the highest grade 1.0 in my Master Thesis and in the subject “Real-Time Programming"',
      ],
    },
    {
      schoolName: "SSN College of Engineering",
      logo: require("./assets/images/ssn_logo2.png"),
      subHeader: "Bachelor of Engineering in Mechanical",
      duration: "September 2013 - April 2017",
      // desc: "",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      // ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "SAP",
      companylogo: require("./assets/images/SAP-logo-square.png"),
      date: "June 2020 – Present",
      desc:
        "working on a project to automate all the CI/CD pipeline creation and also a project maintainer for the open-source project CLA Assistant",
      // descBullets: [
      //   "I developed a new light weight OS bot solution for automating the Contributor License Agreement (CLA) process using GitHub Action - https://github.com/cla-assistant/github-action",
      // ],
    },
    {
      role: "Software Developer",
      company: "Cognizant",
      companylogo: require("./assets/images/CognizantLogo400.jpg"),
      date: "Dec 2017 – Sep 2018",
      desc:
        "Part of an off-shore Development centre of J.B Hunt Transport Services Inc., USA for their Operation and Execution(OPEX) project which is part of JB Hunt 360° ",
    },
    {
      role: "Software Developer",
      company: "Fieldproxy",
      companylogo: require("./assets/images/fieldproxy.png"),
      date: "May 2017 – Dec 2017",
      desc:
        "Worked on developing a product (Fieldproxy) to manage the customer's field team's operations",
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "ibakshay", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Blogs Section

const blogSection = {
  title: "Blogs",

  blogs: [
    {
      url:
        "https://medium.com/@ibakshay96/getting-started-with-github-actions-for-ci-cd-pipeline-a513121abc68",
      title: "Getting Started with GitHub Actions for CI/CD Pipeline",
      description:
        "Do you want to get some insights on GitHub Actions CI/CD ?, Then simply checkout this article :)..",
    },
    {
      url:
        "https://medium.com/@ibakshay96/migrating-to-google-cloud-run-serverless-container-platform-e0e80d48d1ad",
      title: "Migrating to Google Cloud Run Serverless Container Platform",
      description:
        "In this article, I will share our journey of how we containerized and migrated our existing web application to Google Cloud Run which is a serverless platform for managing stateless containers. ",
    },
  ],
};

const contactInfo = {
  title: emoji("Contact ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName: "ib_akshay", //Replace "twitter" with your twitter username without @
};

export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  blogSection,
  contactInfo,
  twitterDetails,
};
