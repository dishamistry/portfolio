/**
 * Technical skills — source: resume "Technical Skills"
 * (public/documents/Disha_Mistry_Resume.pdf). Categories follow the resume.
 *
 * `context` tells visitors where a skill was used:
 *   - 'professional' → used in employment (see experience.js)
 *   - 'learning'     → currently developing through personal projects (shown as "In progress")
 */
export const skillGroups = [
  {
    category: 'Languages',
    context: 'professional',
    skills: ['PHP', 'TypeScript', 'JavaScript', 'SQL'],
  },
  {
    category: 'Backend',
    context: 'professional',
    skills: [
      'Laravel',
      'Symfony',
      'Node.js (Express.js)',
      'Eloquent',
      'Doctrine',
      'Prisma',
      'Slim',
      'Lumen',
      'CodeIgniter',
    ],
  },
  {
    category: 'Frontend',
    context: 'professional',
    skills: ['Vue.js', 'Angular', 'jQuery', 'AJAX', 'Bootstrap', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    category: 'Databases & caching',
    context: 'professional',
    skills: ['MySQL', 'PostgreSQL', 'Redis (Valkey)', 'Elasticsearch', 'Database design', 'SQL query optimisation'],
  },
  {
    category: 'APIs & architecture',
    context: 'professional',
    skills: [
      'REST APIs',
      'OpenAPI/Swagger',
      'OAuth2',
      'JWT',
      'Microservices architecture',
      'Modular & multi-tenant architecture',
      'Queues & background jobs',
      'Webhooks',
      'OOP, SOLID & Design Patterns',
      'Third-party API integrations',
    ],
  },
  {
    category: 'Cloud, DevOps & tooling',
    context: 'professional',
    skills: [
      'Docker',
      'Kubernetes (Rancher)',
      'AWS (EC2)',
      'GitLab CI/CD',
      'Jenkins',
      'Grafana',
      'Sentry',
      'OpenTelemetry',
      'Laravel Octane',
      'Laravel Horizon',
      'Git',
      'Bitbucket',
      'Linux',
      'WSL2',
    ],
  },
  {
    category: 'Testing & quality',
    context: 'professional',
    skills: ['PHPUnit', 'TDD', 'Selenium WebDriver', 'PHPStan/Larastan', 'Rector', 'Pint', 'Code review', 'Agile (Scrum)'],
  },
  {
    category: 'AI-assisted development',
    context: 'professional',
    skills: [
      'Claude Code',
      'Cursor',
      'Laravel Boost',
      'MCP (Model Context Protocol)',
      'CLAUDE.md & agent skills',
      'Context engineering',
      'AI-assisted code review & test generation',
    ],
  },
]
