// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "List of publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-awards",
          title: "Awards",
          description: "Selected Awards and Honors",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "nav-service",
          title: "Service",
          description: "Academic and Social Service",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "nav-group",
          title: "Group",
          description: "Group Members and Collaborators",
          section: "Navigation",
          handler: () => {
            window.location.href = "/group/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "Invited Talks and Presentations",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-my-research-amp-reflections-2025-aligning-ai-with-human-values",
        
          title: 'My Research &amp; Reflections (2025)-Aligning AI with Human Values <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A reflection and summary of my research in 2025",
        section: "Posts",
        handler: () => {
          
            window.open("https://momentous-mouth-fd9.notion.site/My-Research-Reflections-2025-Aligning-AI-with-Human-Values-2da9761ca07f803fa923def6c7a5cc20", "_blank");
          
        },
      },{id: "post-beyond-labels-my-ten-year-journey-in-diversity-and-inclusion-work",
        
          title: 'Beyond Labels-My Ten-Year Journey in Diversity and Inclusion Work <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A reflection on my ten-year journey and personal thoughts and experience on advancing DEI at the university and at Microsoft.",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.notion.so/Beyond-Labels-My-Ten-Year-Journey-in-Diversity-and-Inclusion-Work-2bf9761ca07f801abc85dce2bbfe4710", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-valuelex-paper-received-the-best-paper-award-international-conference-on-social-computing",
          title: 'Our ValueLex paper received the best paper award International Conference on Social Computing!...',
          description: "",
          section: "News",},{id: "news-our-adaem-paper-was-selected-as-an-oral-paper-at-iclr-2026",
          title: 'Our AdAEM paper was selected as an oral paper at ICLR 2026! 👏🏻...',
          description: "",
          section: "News",},{id: "projects-value-compass",
          title: 'Value Compass',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%69%61%6F%79%75%61%6E%79%69@%6D%69%63%72%6F%73%6F%66%74.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=BdpXcLgAAAAJ&hl", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/xiaoyuan-yi-471212a5", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/mtmoonyi", "_blank");
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
