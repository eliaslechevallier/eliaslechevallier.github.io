export type Project = {
  title: string;
  description: string;
  href: string;
  // Small label shown under the title — course code, supervisor, project type, etc.
  meta?: string;
  image?: string;
  // Optional pastel pill, e.g. "NEW" or "FOSS".
  tag?: { label: string };
  // Shown in the "My last projects" preview on the Home page.
  featured?: boolean;
};

export type ProjectGroup = {
  title: string;
  projects: Project[];
};


export const projectGroups: ProjectGroup[] = [
  {
    title: 'Economics, Econometrics, and Finance Research Projects',
    projects: [

      {
        title: "Bank of Canada's Monetary Policy Governor Challenge",
        meta: 'Supervised by Professor Santiago Camara',
        description:
          "We developed a policy recommendation for the Bank of Canada's December 2026 rate decision by examining the Global and Domestic Economic Overviews, before building a forecasting model using Bayesian VARs.",
        href: '/Governor_Challenge.pdf',
        featured: true,
        image: '/images/Governor_Challenge.png',
      },

      {
        title: 'FINE 547 (Advanced Finance Seminar) McGill Research Paper: Is There a Disconnection Between CAC 40 Firms and the French Economy? A Geographical Analysis',
        meta: 'Supervised by Professor Daniel Andrei, Grade: A',
        description:
          "Firms in the CAC 40, France's largest Stock Index, generate more than 80% of their revenue aborad. This paper thus questionned the relationship betwene national french indicators and the performance of the Index and its firms, raising the possibilities of a potential disconnection.",
        href: '/Elias Lechevallier FINE 547 Research Paper  (5).pdf',
        featured: true,
        image: '/images/fine_547.png',
      },

      {
        title:
          'UChicago Econometrics Game 2026: Qualifying Round Paper',
        meta: 'Supervised by Professor Saraswata Chaudhuri',
        description:
          'Selected to represent McGill at the Econometrics Game, our team had 48 hours to produce a paper on the theme of Education. We studied how the share of STEM students in US colleges may impact future income.',
        href: '/Econometrics_Games_Preliminary_final.pdf',
        featured: true,
        image: '/images/econometrics_games.png',
      },

      {
        title:
          'ECON 468 (Honours Econometrics 1) McGill Final Team Project: The Effects of Foreign Aid on Gender Equality',
        meta: 'Professor Saraswata Chaudhuri, Grade: A',
        description:
          'Using panel data from the World Bank on Foreign Aid and Gender Equality Indices, we constructed an index of gender equality using PCA to rank countries and researched whether foreign aid had a positive effect.',
        href: '/THE EFFECT OF FOREIGN AID ON GENDER EQUALITY IN DEVELOPING NATIONS.pdf',
        image: '/images/econ468.png',
      },
    
      {
        title:
          'COMP 2501 (Introduction to Data Science) at HKU: What is the outlook for the six biggest Asian Economies amid the 2026 Energy Crisis',
        meta: ' Professor Ruibang Luo',
        description:
          'Engaged in descriptive analysis of the six biggest Asian economies - including their trends and drivers - and studied their exposure to commodities in the context of the 2026 energy crisis.',
        href: 'HKU_DataScience/3036675954_Elias Lechevallier_3_Asian Economies Outlook_20 copy.pdf',
        image: '/images/data_science.png',
        featured: true,
      },

      {
        title:
          'RedPoint Capital Finance Club: Team Investment Pitch on an Australian Dollar/USD Appreciation',
        meta: 'Economics and Finance',
        description:
          'Developed an ARIMAX time series model to value the AUD/USD exchange rate, using a broad range of macroeconomic and finacial indicators, and produced forecasts',
        href: 'RPC GM Team 2 (1).pdf',
        featured: true,
        image: '/images/rpc.png',
      }, 

    ],
  },

  {
    title: 'Other Case Competitions',
    projects: [
      {
        title:
          'McGill International Portfolio Challenge Case Competition: A biodiversity Sovereign Wealth Fund in Finland',
        meta: 'Economics and Finance',
        description:
          'Following an analysis of the Finnish economy and the biodervsity investment landscape, we developed a strategy for Finland to create a fund conciling growth and biodiversity protection. ',
        href: 'EK Square Capital copy.pdf',
        featured: true,
        image: '/images/mipc.png',
      },

      {
        title:
          'McGill Investment Club: March 2025 Stock Pitch Competition',
        meta: 'Economics and Finance',
        description:
          'We proposed an investment in a Swiss Aerospace company based on macroeconomic factors of higher tensions driving investments in the defense sector, and following a strategy of vertical integration within the company.',
        href: 'Stock Pitch competition 2025 copy.pdf',
        featured: true,
        image: '/images/mic.png',
      },
    ],
  },
  

  {
    title: 'Philosophy',
    projects: [
      {
        title: 'Introduction to Philosophy: Ethics and Politics (PHIL1034) at HKU Final Paper',
        meta: 'Philosophy',
        description:
          'Suppose one day, a group of aliens, more intelligent and just as sentient and emotionally rich as us, arrives on planet Earth. Do we possess moral obligations to treat them as equals? What does your answer imply for socioeconomic arrangements on Earth?',
        href: '/Final_Essay_PHIL1034.pdf',
        image: '/images/philo.png',
        featured: true,
      },
      
    ],
  },


];

// Flat list of every project — used by the Home page to pick out featured ones.
export const allProjects: Project[] = projectGroups.flatMap((g) => g.projects);
