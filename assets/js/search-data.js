// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in reversed chronological order. You can also check my Google Scholar profile.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "An overview of selected research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-supervision",
          title: "supervision",
          description: "Supervised PhD and MSc Students.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/supervision/";
          },
        },{id: "news-i-was-appointed-expert-research-scientist-edf-lab",
          title: 'I was appointed Expert Research Scientist @ EDF Lab',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-the-ecml-2025-aaltd-workshop-oral-presentation",
          title: 'Paper accepted at the ECML 2025 AALTD Workshop (Oral presentation)',
          description: "",
          section: "News",},{id: "news-paper-accepted-at-the-neurips-2025-bert2s-workshop-2nd-cfp",
          title: 'Paper accepted at the NeurIPS 2025 BERT2S Workshop (2nd CFP)',
          description: "",
          section: "News",},{id: "projects-synthetic-data",
          title: 'synthetic data',
          description: "high-resolution electricity consumption in open data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-tsfms",
          title: 'TSFMs',
          description: "time-indexed foundation models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%61%68%61%72.%6E%61%62%69%6C@%65%64%66.%66%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/TaharNbl", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tahar-nabil", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=95KPGacAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
