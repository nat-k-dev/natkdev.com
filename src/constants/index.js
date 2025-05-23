import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    figma,
    docker,
    abbyy,
    neolook,
    selfStudy,
    InfoBuh,
    threejs,
  } from "../assets";
  


  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Neolook Solutions",
      icon: neolook,
      iconBg: "#fff",
      date: "October 2022 - Present",
      points: [
        "Translated UI/UX designs from Figma into responsive, cross-browser compatible web pages and components such as tables, forms, navigation, menu, buttons, cards, modals, animations using HTML, CSS and Tailwind CSS, Typescript. Implemented routing, data processing and API communication at frontend side, created API with Strapi. Developed dark/light color modes, Dutch-English translation module, email templates. Debugged and solved issues.",
        "Collaborated with backend developers and designers to deliver consistent, user-friendly experiences (sprint-based workflow, with stand-ups, sprint planning, and demonstrator meetings).",
      ],
      pointsWithSubpoints: [
        {
          mainPointText: "Developed web interfaces using Angular for the following applications:",
          subpoints: [
            "• “S2S Family” - livestream web application to allow families video access to their child staying in a neonatology department (NICU);",
            "• “S2S Professional” - livestream web application for nurses in NICU;",
            "• “Early Moves” - web application to record baby movements remotely;",
            "• Information Flyer - helping instructions for parents to start using “S2S Family” https://mmc.neolook.care."
          ]
        }
      ]
    },
    {
      title: "Frontend Skills Development",
      company_name: "Tesla",
      icon: selfStudy,
      iconBg: "#fff",
      date: "Sep 2018 - Sep 2022",
      points: [
        "Created projects using ReactJS, styled-components, Bootstrap: personal website (https://karnaryen.com/), multi-language webpage (https://pianoles.netlify.app/), and frontend for online shop (https://cacao-bu.netlify.app/);",
        "Created project using VueJS, Intersection Observer API: tech blog (https://tech-blog-vue.netlify.app/);",
        "Created project using Angular, Tailwind CSS: delivery company website (https://angular-cargo.netlify.app/);",
        "“Yandex School of Web Interfaces Development”, Frontend student (6 months): created frontend for internal web application to automatically build projects from github (git, webpack, Figma to responsive CSS/HTML, Javascript, ReactJS, testing, client-side optimization, ESLint, BEM, Typescript);",
        "Completed two online specializations in web-interfaces development (Coursera and freeCodeCamp). Learned and practiced with responsive web design, semantic and accessible HTML, CSS-animations, pure HTML5/CSS3/Javascript webpages.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "InfoAccountant",
      icon: InfoBuh,
      iconBg: "#fff",
      date: "Sep 2017 - Aug 2018",
      points: [
        "Participating in development of the new version of accounting software in C++ for Windows, improving the program interface in accordance with a new design, writing tests (gtest), code review.",
      ],
    },
    {
      title: "Software Test Engineer",
      company_name: "ABBYY",
      icon: abbyy,
      iconBg: "#fff",
      date: "Apr 2012 - Aug 2017",
      points: [
        "Testing of SDK for optical character recognition (Windows, C++).",
        "Full cycle of SDK applications release testing: test plan development and prioritization, test data and test environment preparation, tests implementation, tests results analysis and bug reporting, test automation and regression testing, report writing.",
        "Functional, exploratory and load testing; tests utilities development and support, code review.",
        "Release management, communication with developers and analysts, working in accordance with Agile Methodologies.",
      ],
    },
  ];
  
  
  export { technologies, experiences };