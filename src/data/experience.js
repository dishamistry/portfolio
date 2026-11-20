/**
 * Employment history — source: resume "Professional Experience"
 * (public/documents/Disha_Mistry_Resume.pdf).
 *
 * Fields used for dates and totals (see src/utils/experience.js):
 *   - startDate / endDate: "YYYY-MM" (as on the resume) or "YYYY-MM-DD".
 *     Both months are counted, e.g. "2018-12" → "2019-05" is 6 months.
 *   - isCurrent: true for an ongoing role; its endDate must be null.
 *   - countsTowardExperience: set to false to leave a role out of the total.
 *
 * `location` and `employmentType` are optional; leave them '' if the resume
 * does not state them. `techStack` mirrors each role's "Technologies" line.
 *
 * Entries are sorted newest-first by `sortedExperience`, so the order below does not matter.
 */
import { getExperienceTotals, parseMonthIndex } from '@/utils/experience'

export const experience = [
  {
    company: 'Aussie Broadband',
    role: 'Software Engineer Level 3',
    location: 'Melbourne, Victoria',
    employmentType: '12-month contract, full time',
    startDate: '2026-01',
    endDate: null,
    isCurrent: true,
    countsTowardExperience: true,
    techStack: {
      Technologies: [
        'PHP 8.5',
        'Laravel 13',
        'Octane',
        'Horizon',
        'PostgreSQL',
        'Redis (Valkey)',
        'Elasticsearch',
        'Vue.js',
        'PHPUnit',
        'Docker',
        'Kubernetes (Rancher)',
        'GitLab CI/CD',
        'Grafana',
        'OpenTelemetry',
        'Sentry',
        'OpenAPI (Laravel Scramble)',
        'Claude Code',
        'Laravel Boost (MCP)',
      ],
    },
    highlights: [
      'Develop Connect, a multi-tenant sales API for white-label partners, within a modular Laravel application of eight self-contained modules (Accounts, Orders, Products, Services, Discounts, Partners, Location, Service Qualification); each tenant has an isolated database and is identified by subdomain.',
      'Work with two-way sync to the internal customer management system: queued jobs push changes out and HMAC-signed webhooks bring updates in, using a Manager/Driver pattern.',
      'Modernised legacy code by migrating selected modules to Laravel, improving maintainability and alignment with the modern architecture.',
      'Created Grafana dashboards with structured logs; use Rancher (Kubernetes) to access pods, troubleshoot issues, port-forward database connections and support UAT deployments.',
      'Work to strict engineering standards: PHPStan/Larastan with custom architecture rules, Rector, Pint, strict types, parallel PHPUnit tests with coverage, and GitLab CI security scanning; merges deploy to UAT and tagged releases to production.',
      'Use Claude Code as a developer-directed coding agent in everyday Laravel development (investigation, implementation, debugging, refactoring), guided by project instructions, the Laravel Boost MCP server, custom agent skills and a shared team rulebook so output follows the modular architecture.',
      'Review and validate all AI-generated code before accepting it, backed by PHPUnit tests, static analysis and code review.',
    ],
  },
  {
    company: 'Sequoia Financial Group (DocsCentre)',
    role: 'Software Engineer Level 2',
    location: 'Melbourne, Victoria',
    employmentType: '',
    startDate: '2022-12',
    endDate: '2026-01',
    isCurrent: false,
    countsTowardExperience: true,
    techStack: {
      Technologies: [
        'PHP',
        'Symfony (3.4 to 5.4)',
        'Slim',
        'TypeScript',
        'Redis',
        'Vue.js',
        'SleekDB',
        'MySQL',
        'Docker',
        'PHPUnit',
        'Selenium',
        'OAuth2',
      ],
    },
    highlights: [
      'Built and maintained software for legal documents, corporate structures and practice management, keeping it compliant with requirements of the ATO, ASIC, ABR and Xero.',
      'Developed RESTful APIs in a microservices architecture with OAuth2, enabling secure and scalable inter-service communication.',
      'Upgraded Symfony from v3.4 to v5.4.',
      'Integrated the MYOB API into DocsCentre, enabling two-way synchronisation of client and contact information between MYOB and DocsCentre. This allowed customers to retrieve existing client records from MYOB and push updates back, reducing manual data entry and maintaining consistent client information across both platforms.',
      'Integrated FuseSign’s e-signature API into DocsCentre: customers connect their FuseSign account through OAuth 2.0, send documents for electronic signing without leaving DocsCentre, and receive signed copies back automatically.',
      'Integrated third-party payment gateways; wrote unit and feature tests with PHPUnit and Selenium, integrated APIs on the Vue.js frontend; worked in Dockerised environments on WSL2.',
      'Began using AI coding assistants for everyday development tasks.',
    ],
  },
  {
    company: 'Gateway Group of Companies (AutoDAP)',
    role: 'Software Engineer',
    location: 'Ahmedabad, Gujarat, India',
    employmentType: '',
    startDate: '2021-04',
    endDate: '2022-06',
    isCurrent: false,
    countsTowardExperience: true,
    techStack: {
      Technologies: [
        'Node.js',
        'Express.js',
        'TypeScript',
        'Python',
        'PHP',
        'Laravel',
        'MySQL',
        'React.js',
        'Azure Functions',
        'Azure IoT',
        'Docker',
        'AWS EC2',
        'Jenkins',
        'NLP',
      ],
    },
    highlights: [
      'Developed and optimised Data-as-a-Service (DaaS) APIs for automotive parts and VIN-precise vehicle data serving the European independent automotive aftermarket.',
      'Built scalable REST backend services with Node.js, Express.js and TypeScript, backed by MySQL, and wrote Python scripts for data processing and enrichment.',
      'Improved MySQL database performance (query tuning and schema design) for faster and more accurate vehicle part retrieval.',
      'Developed custom data filtration APIs in PHP/Laravel for client-specific reporting and analytics; maintained and enhanced the client’s web application for the automobile industry.',
      'Applied NLP techniques to match and normalise free-text vehicle part descriptions against catalogue data.',
      'Built serverless data-processing jobs with Azure Functions and ingested device and vehicle data through Azure IoT.',
      'Containerised services with Docker and deployed them to AWS EC2, with automated build and release pipelines in Jenkins.',
      'Developed React.js interface components for the client’s web application.',
      'Worked directly with clients to gather requirements and provide technical support; took part in Agile sprint planning and estimation.',
    ],
  },
  {
    company: 'Agile Infoways Pvt. Ltd.',
    role: 'Web Developer',
    location: 'Ahmedabad, Gujarat, India',
    employmentType: '',
    startDate: '2019-06',
    endDate: '2021-03',
    isCurrent: false,
    countsTowardExperience: true,
    techStack: {
      Technologies: [
        'Node.js',
        'Socket.IO',
        'Express.js',
        'PHP',
        'Laravel',
        'CodeIgniter',
        'Lumen',
        'MySQL',
        'Angular',
        'JavaScript',
        'jQuery',
        'FCM',
        'APNs',
        'Stripe',
        'Google Maps',
        'Mailchimp',
      ],
    },
    highlights: [
      'Built a real-time auction and bidding server (Glide Golf) in Node.js and Socket.IO, letting mobile users bid live with updates broadcast instantly to everyone in an auction.',
      'Implemented automatic proxy bidding: the server raises a user’s bid up to their maximum and handles tie bids and other edge cases.',
      'Used Socket.IO rooms (one per auction, one per user) so bid updates, outbid and winning alerts reach only the right users.',
      'Integrated push notifications via Firebase Cloud Messaging (Android) and APNs (iOS), plus a REST endpoint the Laravel backend uses to send live in-app notifications.',
      'Secured socket traffic with AES-encrypted messages, JWT authentication and middleware policies; documented the APIs with Swagger; modelled auctions, bids and notifications in MySQL with the Waterline ORM.',
      'Created RESTful APIs for mobile applications and integrated Google Maps, Stripe and Mailchimp; designed database schemas and optimised SQL queries; built notifications, SMS, email, deep links and payment gateway features.',
    ],
  },
  {
    company: 'ArsenalTech Pvt. Ltd.',
    role: 'Intern',
    location: 'Ahmedabad, Gujarat, India',
    employmentType: '',
    startDate: '2018-12',
    endDate: '2019-05',
    isCurrent: false,
    countsTowardExperience: true,
    techStack: {
      Technologies: ['PHP', 'Laravel', 'WordPress', 'jQuery', 'JavaScript', 'AJAX', 'SQL'],
    },
    highlights: [
      'Supported backend development with Laravel and core PHP, and frontend tasks with jQuery and AJAX.',
      'Learned to customise WordPress and manage databases.',
    ],
  },
]

/** Experience sorted newest-first (current roles always on top). */
export const sortedExperience = [...experience].sort((a, b) => {
  const endA = a.isCurrent ? Infinity : (parseMonthIndex(a.endDate) ?? -Infinity)
  const endB = b.isCurrent ? Infinity : (parseMonthIndex(b.endDate) ?? -Infinity)
  if (endA !== endB) return endB - endA
  return (parseMonthIndex(b.startDate) ?? 0) - (parseMonthIndex(a.startDate) ?? 0)
})

/**
 * Total experience with overlapping months merged. Calculated once when the
 * page loads, so it moves on automatically each month without code changes.
 */
export const experienceTotals = getExperienceTotals(experience)

if (import.meta.env.DEV && !experienceTotals.isComplete) {
  console.warn('Experience total hidden — check the dates for:', experienceTotals.invalidRoles)
}
