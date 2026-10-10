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
        title: 'FINE 547 (Advanced Finance Seminar) McGill Research Paper: Is There a Disconnection Between CAC 40 Firms and the French Economy? A Geographical Analysis',
        meta: 'Supervised by Prof. Daniel Andrei',
        description:
          'In 2025 the S&P 500 kept hitting all-time highs, driven by the AI boom, while the labor market was worryingly soft, raising questions about  a disconnection that may exist between the largest companies and the rest of the economy. This analysis thus sought to examine the question through the lenses of France, whose Index is not driven by AI companies, but rather by companies that generate 80% of their revenues aborad, raising another type of question to which the paper sought to respond by examinign the relationship between firms operating in different regions of the world and to what extent they related to French indicators, using quantitative tools accounting for the globalaized framework.',
        href: '/Elias Lechevallier FINE 547 Research Paper  (5).pdf',
        featured: true,
        image: '/images/fine_547.png',
      },

      {
        title:
          'UChicago Econometrics Game: Qualifying Paper',
        meta: 'Personal project',
        description:
          'Designed an algorithmic strategy to arbitrage the price spread between day-ahead and intraday electricity markets.',
        href: '/Econometrics_Games_Preliminary_final.pdf',
        featured: true,
        image: '/images/econometrics_games.png',
      },

      {
        title:
          'First Econometrics Team Project: The Effects of Foreign Aid on Gender Equality',
        meta: 'ECON 468 — Introduction to Econometrics Honours, final project',
        description:
          'INPUT DESCRIPTION',
        href: '/THE EFFECT OF FOREIGN AID ON GENDER EQUALITY IN DEVELOPING NATIONS.pdf',
        image: '/images/econ468.png',
      },
    
      {
        title:
          'Outlook for the six biggest Asian Economies amid the 2026 Energy Crisis',
        meta: 'COMP 2501 at the University of Hong Kong — Introduction to Data Science',
        description:
          'ADD DESCRIPTION + THE VIDEO',
        href: 'HKU_DataScience/3036675954_Elias Lechevallier_3_Asian Economies Outlook_20 copy.pdf',
        image: '/images/data_science.png',
        featured: true,
      },

      {
        title:
          '(Team Project) RedPoint Capital Finance Club: Investment Pitch on an Australian Dollar/USD Appreciation',
        meta: 'Personal project',
        description:
          'ADD DESCRIPTION: was in charge of the valuation and the regression analysis',
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
          '(Team Project) McGill International Portfolio Challenge Case Competition: A biodiversity Sovereign Wealth Fund in Finland',
        meta: 'Personal project',
        description:
          'ADD DESCRIPTION',
        href: 'EK Square Capital copy.pdf',
        featured: true,
        image: '/images/mipc.png',
      },

      {
        title:
          '(Team Project) McGill Investment Club: March 2025 Stock Pitch Competition',
        meta: 'Personal project',
        description:
          'ADD DESCRIPTION',
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
        title: 'Philo Project',
        meta: 'Personal project',
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
