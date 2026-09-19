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
    title: 'Personal Projects',
    projects: [
      {
        title: 'The Influence of Analyst Sentiment on the VIX Index',
        meta: 'Personal project',
        description:
          'Investigated how the sentiment of financial analysts relates to movements in the VIX volatility index.',
        href: '/VIX Project.pdf',
        featured: true,
      },
      {
        title:
          'Predicting the Virtual Spread: Algorithmic Arbitrage between Day-Ahead and Intraday Power Markets',
        meta: 'Personal project',
        description:
          'Designed an algorithmic strategy to arbitrage the price spread between day-ahead and intraday electricity markets.',
        href: '/intraday_ahead_report.pdf',
        featured: true,
      },
    ],
  },
  {
    title: 'Research Projects',
    projects: [
      {
        title: 'Height of Random Binary Trees',
        meta: 'Supervised by Masoud Ashagharian',
        description:
          'Studied the expected height of random binary trees under different random construction models.',
        href: '/The_height_of_random_binary_trees.pdf',
        featured: true,
      },
    ],
  },
  {
    title: 'Academic Coursework',
    projects: [
      {
        title:
          'The Coverage of Gavin Newsom in Recent Media: A Study of Tone and Topic',
        meta: 'COMP370 — Introduction to Data Science, final project',
        description:
          'Analyzed tone and topic trends across recent media coverage of Gavin Newsom using data science and NLP techniques.',
        href: '/COMP370 - Final Project v2.pdf',
      },
      {
        title:
          'Introduction to (Seasonal) Autoregressive Integrated Moving Average Models: Implementation in R',
        meta: 'MATH324 — Statistics project',
        description:
          'Implemented and evaluated (S)ARIMA models in R to forecast seasonal time series data.',
        href: '/ARIMA-SARIMA-paper.pdf',
      },
    ],
  },
];

// Flat list of every project — used by the Home page to pick out featured ones.
export const allProjects: Project[] = projectGroups.flatMap((g) => g.projects);
