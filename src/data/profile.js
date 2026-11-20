/**
 * Personal profile — name, headline, summary and contact links.
 *
 * Source: resume header and "Professional Summary"
 * (public/documents/Disha_Mistry_Resume.pdf). Empty strings mean "not provided";
 * any component that uses them hides the related element automatically.
 */
export const profile = {
  name: 'Disha Mistry',
  headline: 'Software Engineer',
  tagline: 'Backend and full-stack web applications with PHP (Laravel, Symfony), TypeScript/Node.js and SQL',
  location: 'Melbourne, Victoria, Australia',

  // Short introduction used in the hero section.
  intro:
    'I’m a software engineer with {experienceYears} of experience building backend and full-stack web applications. I design RESTful APIs, microservices and modular architectures, build third-party and webhook integrations, and modernise legacy systems.',

  // Longer professional summary used in the About section (one string per paragraph).
  summary: [
    'I’m a software engineer with {experienceYears} of experience building backend and full-stack web applications, primarily in PHP (Laravel, Symfony) and TypeScript/Node.js (Express) with SQL databases.',
    'I’m experienced in designing RESTful APIs, microservices and modular architectures, third-party and webhook integrations, and modernising legacy systems, supported by automated testing (PHPUnit), static analysis and Docker-based development.',
    'I’m currently a Software Engineer Level 3 at Aussie Broadband, working on a modular, multi-tenant Laravel sales API with Elasticsearch, Redis/Valkey and Kubernetes-hosted environments.',
    'I use Claude Code day to day as a developer-directed coding agent, and I review, test and take responsibility for everything it generates. I’m comfortable working in Agile teams and code reviews.',
  ],

  // Core focus areas shown as short highlights in the About section.
  focusAreas: [
    'RESTful APIs & microservices',
    'Modular & multi-tenant architecture',
    'Third-party & webhook integrations',
    'Legacy system modernisation',
    'Automated testing & static analysis',
    'AI-assisted development with careful review',
  ],

  // Profile photo shown in the hero. `src` is relative to the /public folder.
  // Set `src: ''` to hide the photo.
  photo: {
    src: 'images/profile.jpg',
    alt: 'Portrait of Disha Mistry',
  },

  // Used by the hero "Contact me" button and the Contact section.
  // Set to '' to hide every email link on the site.
  email: 'mistrydisha1301@gmail.com',
  resumeUrl: 'documents/Disha_Mistry_Resume.pdf',
  resumeFileName: 'Disha-Mistry-Resume.pdf', // name used for the downloaded file

  links: [
    {
      label: 'GitHub',
      icon: 'github',
      url: 'https://github.com/dishamistry',
      display: 'github.com/dishamistry',
    },
    {
      label: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/disha-mistry-423aaa157/',
      display: 'linkedin.com/in/disha-mistry-423aaa157',
    },
  ],

  repositoriesUrl: 'https://github.com/dishamistry?tab=repositories',
}
