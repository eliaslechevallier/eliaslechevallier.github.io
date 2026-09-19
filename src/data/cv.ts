export const profile =
  "I am a Mathematics and Computer Science undergraduate at McGill University specializing in quantitative financial modeling, stochastic processes, and data science. With experience spanning probability research, actuarial modeling, and wealth management, I am currently seeking a 6-month quantitative finance or structuring internship starting in January 2027.";

export type EducationEntry = {
  title: string;
  place: string;
  period: string;
};

export const education: EducationEntry[] = [
  {
    title: 'Bachelor Mathematics and Computer Science (CGPA: 3.7/4.0)',
    place: 'McGill University, Montreal, Canada',
    period: '2023 – 2027',
  },
  {
    title: 'French Baccalaureate (Highest Honours: 18/20 – Mathematics and Economics)',
    place: 'Colombes, France',
    period: 'Completed 2023',
  },
];

export type ExperienceEntry = {
  title: string;
  place: string;
  period: string;
  description: string;
};

export const experience: ExperienceEntry[] = [
  {
    title: 'Research Assistant -- Probability & Random Trees',
    place: 'McGill University, Montreal, QC',
    period: 'Winter 2026',
    description:
      'Investigated the height of uniformly random rooted trees under Prof. Masoud Asgharian, applying bijective combinatorics and proving distributional convergence to a Rayleigh random variable.',
  },
  {
    title: 'Actuarial Intern — Health & Pension Plans',
    place: 'April GROUP, Lyon, France',
    period: 'May 2025 – July 2025',
    description:
      'Designed a simulation tool for French health reforms, built a GLM reserving model (Gamma-log) for incremental claims, and developed automated reporting dashboards using Bokeh.',
  },
  {
    title: 'Wealth Manager',
    place: 'BNP Paribas, Lyon, France',
    period: 'July 2024 – August 2024',
    description:
      'Optimized high-net-worth portfolios across multi-asset financial products and prepared detailed performance attribution reports translating complex risk metrics into actionable client insights.',
  },
];