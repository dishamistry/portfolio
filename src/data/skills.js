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
    skills: ['PHP', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'HTML5', 'CSS'],
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
    skills: ['Vue.js', 'React', 'Angular', 'jQuery', 'AJAX', 'Bootstrap', 'Tailwind CSS'],
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
      'REST API design',
      'GraphQL',
      'OpenAPI',
      'OAuth2',
      'JWT',
      'Microservices',
      'Modular & multi-tenant architecture',
      'Queues & background jobs',
      'Webhooks',
      'System integration',
      'OOP, SOLID & design patterns',
      'Third-party integrations (Stripe, Google Maps, Mailchimp, payment gateways)',
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
