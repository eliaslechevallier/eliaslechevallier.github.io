// ---------------------------------------------------------------------------
// Edit this file to personalize the whole site — the pages and components
// all pull their content from here, so you rarely need to touch them.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Paul Quidu',
  role: 'Software Engineer',
  greeting: 'Hey there 👋',
  tagline: "I'm Paul Quidu",
  intro:
    "Welcome to my personal site. I write about the things I build, " +
    "share my projects, and I'm always happy to connect — take a look " +
    "around and feel free to reach out.",
  email: 'paul.quidu@mail.mcgill.ca',
  avatar: '/profile_picture.jpg', // replace with /avatar.jpg once you add your own photo
  resumeUrl: '/Paul_QuiduResume.pdf', // add a cv.pdf into /public if you want a download button
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'CV', href: '/cv' },
  { label: 'Contact', href: '/contact' },
];

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/paul-quidu-a33816253/', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:paulquidu@hotmail.com', icon: 'mail' },
];
