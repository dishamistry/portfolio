/**
 * Personal projects — source: resume "Projects"
 * (public/documents/Disha_Mistry_Resume.pdf).
 * Repository links point to the matching public repositories on github.com/dishamistry.
 *
 * `type` distinguishes project kinds on the site:
 *   - 'personal'  → completed personal project
 *   - 'learning'  → hands-on project exploring a technology I'm currently learning
 *
 * Set `featured: false` to hide a project without deleting it.
 */
export const projects = [
  {
    title: 'Telco Plans and Applications',
    description:
      'A Laravel 11 application with PHPUnit tests, built to demonstrate an AI-native workflow: Claude Code with CLAUDE.md, reusable skills and .ai/ guidelines, Laravel Boost (MCP), and human-reviewed, test-validated changes.',
    technologies: ['Laravel 11', 'PHP', 'PHPUnit', 'Claude Code', 'Laravel Boost (MCP)'],
    repoUrl: 'https://github.com/dishamistry/telco-plan-applications',
    type: 'personal',
    featured: true,
  },
  {
    title: 'Currency Converter CLI Tool',
    description: 'A core PHP command-line tool for currency conversion and profit calculation.',
    technologies: ['PHP', 'CLI'],
    repoUrl: 'https://github.com/dishamistry/currency-converter',
    type: 'personal',
    featured: true,
  },
  {
    title: 'Go Shift Scheduling gRPC API',
    description: 'A Go project exploring shift scheduling with gRPC and Protocol Buffers.',
    technologies: ['Go', 'gRPC', 'Protocol Buffers'],
    repoUrl: 'https://github.com/dishamistry/go-shift-scheduling-grpc',
    type: 'learning',
    featured: true,
  },
]

export const projectTypeLabels = {
  personal: 'Personal project',
  learning: 'Learning project',
}

export const featuredProjects = projects.filter((project) => project.featured)
