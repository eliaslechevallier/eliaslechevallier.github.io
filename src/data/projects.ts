export type Project = {
  title: string;
  description: string;
  href: string;
  // Small label shown under the title — course code, supervisor, project type, etc.
  meta?: string;
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
    title: 'Best Projects',
    projects: [
      {
        title: 'Philo Project',
        meta: 'Personal project',
        description:
          'Investigated how the sentiment of financial analysts relates to movements in the VIX volatility index.',
        href: '/Final_Essay_PHIL1034.pdf',
        featured: true,
      },
      {
        title:
          'UChicago Econometrics Game: Qualifying Paper',
        meta: 'Personal project',
        description:
          'Designed an algorithmic strategy to arbitrage the price spread between day-ahead and intraday electricity markets.',
        href: '/Econometrics_Games_Preliminary_final.pdf',
        featured: true,
      },

      {
        title:
          '(Team Project) McGill International Portfolio Challenge Case Competition: A biodiversity Sovereign Wealth Fund in Finland',
        meta: 'Personal project',
        description:
          'ADD DESCRIPTION',
        href: 'EK Square Capital copy.pdf',
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
      },

      {
        title:
          '(Team Project) McGill Investment Club: March 2025 Stock Pitch Competition',
        meta: 'Personal project',
        description:
          'ADD DESCRIPTION',
        href: 'Stock Pitch competition 2025 copy.pdf',
        featured: true,
      },

    ],
  },
  {
    title: 'Research Projects',
    projects: [
      {
        title: 'Disconnection Between CAC 40 Firms and the French Economy?',
        meta: 'Supervised by Masoud Ashagharian',
        description:
          'Studied the expected height of random binary trees under different random construction models.',
        href: '/Elias Lechevallier FINE 547 Research Paper  (5).pdf',
        featured: true,
      },
    ],
  },
  {
    title: 'Academic Coursework',
    projects: [
      {
        title:
          'First Econometrics Team Project: The Effects of Foreign Aid on Gender Equality',
        meta: 'ECON 468 — Introduction to Econometrics Honours, final project',
        description:
          'Analyzed tone and topic trends across recent media coverage of Gavin Newsom using data science and NLP techniques.',
        href: '/THE EFFECT OF FOREIGN AID ON GENDER EQUALITY IN DEVELOPING NATIONS.pdf',
      },
      
      
      {
        title:
          'Outlook for the six biggest Asian Economies amid the 2026 Energy Crisis',
        meta: 'COMP 2501 at the University of Hong Kong — Introduction to Data Science',
        description:
          'ADD DESCRIPTION + THE VIDEO',
        href: 'HKU_DataScience/3036675954_Elias Lechevallier_3_Asian Economies Outlook_20 copy.pdf',
      },
    ],
  },
];

// Flat list of every project — used by the Home page to pick out featured ones.
export const allProjects: Project[] = projectGroups.flatMap((g) => g.projects);
