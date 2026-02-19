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
      title: "FrontendDeveloper",
      company_name: "Neolook Solutions",
      icon: neolook,
      iconBg: "#fff",
      date: "Oct 2022 - Sep 2025",
      pointsWithSubpoints: [
        {
          text: "NEOLOOK_WORK.point_1_main",
          subpoints: [
            "NEOLOOK_WORK.point_1_sub_1",
            "NEOLOOK_WORK.point_1_sub_2",
            "NEOLOOK_WORK.point_1_sub_3",
            "NEOLOOK_WORK.point_1_sub_4"
          ]
        },
        {
          text: "NEOLOOK_WORK.point_2",
        },
        {
          text: "NEOLOOK_WORK.point_3",
        }
      ]
    },
    {
      title: "FrontendSkillsDevelopment",
      company_name: "",
      icon: selfStudy,
      iconBg: "#fff",
      date: "Sep 2018 - Sep 2022",
      pointsWithSubpoints: [
        {text: "SELF_STUDY_WORK.project_1"},
        {text: "SELF_STUDY_WORK.project_2"},
        {text: "SELF_STUDY_WORK.project_3"},
        {text: "SELF_STUDY_WORK.project_4"},
        {text: "SELF_STUDY_WORK.project_5"},
      ],
    },
    {
      title: "SoftwareDeveloper",
      company_name: "InfoAccountant",
      icon: InfoBuh,
      iconBg: "#fff",
      date: "Sep 2017 - Aug 2018",
      pointsWithSubpoints: [
        {text: "INFO_ACCOUNTANT.experience_1"},
      ],
    },
    {
      title: "SoftwareTestEngineer",
      company_name: "ABBYY",
      icon: abbyy,
      iconBg: "#fff",
      date: "Apr 2012 - Aug 2017",
      pointsWithSubpoints: [
        {text: "ABBYY_WORK.testing_1"},
        {text: "ABBYY_WORK.testing_2"},
        {text: "ABBYY_WORK.testing_3"},
        {text: "ABBYY_WORK.testing_4"},
      ],
    },
  ];
  
  
  export { technologies, experiences };