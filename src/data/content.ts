/**
 * Single source of truth for all site copy.
 *
 * Update text, links, dates, and lists here — every section reads from this file.
 * Keep the shape stable; if you add a new field, also add it to the matching type.
 */

// ─── Types ──────────────────────────────────────────────────────────────────
export type NavItem = { label: string; href: string };

export type ScorecardStat = {
  hole: string; // e.g. "01"
  label: string; // e.g. "Years at LinkedIn"
  value: string; // e.g. "10+"
  par: string; // e.g. "Tenure"
};

export type TrophyWin = {
  marker: string; // small label like "WIN 01"
  title: string;
  body: string;
};

export type ExperienceRole = {
  side: 'front-nine' | 'back-nine';
  company: string;
  title: string;
  period: string;
  location?: string;
  focus: string[];
};

export type Tool = {
  name: string;
  category: 'Cloud & Identity' | 'Automation' | 'Endpoints' | 'Operations';
};

export type ContactLink = {
  label: string;
  href: string;
  display: string;
};

export type Credential = {
  label: string;
  detail: string;
  meta?: string;
};

// ─── Site metadata ──────────────────────────────────────────────────────────
export const site = {
  name: 'Demetrius Tipton',
  pronouns: 'He/Him',
  title: 'Sr. Executive Support Engineer',
  domain: 'demetrius.tip10.tech',
  description:
    'Senior Executive Support Engineer specializing in white-glove technical support for senior leaders, Office of the CEO escalations, and high-visibility business moments where the technology simply has to work.',
  // OG image path (drop a 1200x630 image into /public and reference it here).
  ogImage: '/og-image.jpg',
  // Resume PDF — replace /public/resume.pdf with your real file.
  resumePdf: '/resume.pdf',
};

// ─── Navigation ─────────────────────────────────────────────────────────────
export const nav: NavItem[] = [
  { label: 'Scorecard', href: '#scorecard' },
  { label: 'Trophy Case', href: '#trophy-case' },
  { label: 'Experience', href: '#experience' },
  { label: 'Toolbag', href: '#toolbag' },
  { label: 'Clubhouse', href: '#clubhouse' },
  { label: 'Contact', href: '#contact' },
];

// ─── Hero ───────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: 'Tipton · Executive IT',
  name: 'Demetrius Tipton',
  title: 'Sr. Executive Support Engineer · LinkedIn',
  tagline: 'Trusted Technical Partner.',
  headline: 'Executive IT Support, Played with Precision.',
  intro:
    'I specialize in white-glove technical support for senior leaders, Office of the CEO escalations, and high-visibility business moments where the technology simply has to work.',
  supportingLine:
    'White-glove technical support for high-stakes executive environments, powered by calm troubleshooting, automation, and thoughtful process design.',
  course: 'The Tipton Course · Est. 2015',
};

// ─── Scorecard ──────────────────────────────────────────────────────────────
export const scorecard = {
  title: 'Career Scorecard',
  caption:
    'Nine holes through a decade of executive support — the through-lines that show up in every round.',
  stats: [
    { hole: '01', label: 'Tenure at LinkedIn', value: '10+ Yrs', par: 'Long Game' },
    { hole: '02', label: 'Office of the CEO', value: 'Escalation Point', par: 'Audience' },
    { hole: '03', label: 'Microsoft 365 · Azure', value: 'Cloud Operations', par: 'Cloud' },
    { hole: '04', label: 'Identity & Access', value: 'Entra · Okta · AD', par: 'Trust' },
    { hole: '05', label: 'PowerShell Automation', value: 'Workflow Reduction', par: 'Tooling' },
    { hole: '06', label: 'Executive AV / Events', value: 'Worldwide', par: 'Production' },
    { hole: '07', label: 'macOS · Windows · iOS', value: 'Full Stack', par: 'Endpoints' },
    { hole: '08', label: 'Azure Administrator', value: 'Microsoft Certified', par: 'Credentials' },
    { hole: '09', label: 'Tip10 Technologies', value: 'Founder · Side Round', par: 'Discipline' },
  ] as ScorecardStat[],
};

// ─── Trophy case / featured wins ────────────────────────────────────────────
export const trophyCase = {
  title: 'Trophy Case',
  subtitle: 'Featured Wins',
  caption: 'A short list of the work I am proud of — the kind that earns trust quietly.',
  wins: [
    {
      marker: 'WIN 01',
      title: 'Office of the CEO Escalation Point',
      body:
        'Specific escalation point for the Office of the CEO at LinkedIn — the kind of trust that is earned, not requested, and only granted to engineers who stay calm when the room is.',
    },
    {
      marker: 'WIN 02',
      title: 'Executive AV, Worldwide',
      body:
        'Delivered onsite and offsite A/V and technical support for high-profile executive meetings and events around the world — the same standard whether the audience is three people or three thousand.',
    },
    {
      marker: 'WIN 03',
      title: 'Automation that Reduces Friction',
      body:
        'Built and deployed PowerShell-based applications and automations that reduce tech friction on executives and across the IT org — turning hours of repetitive work into a single, quiet command.',
    },
    {
      marker: 'WIN 04',
      title: 'Mentor & Trainer',
      body:
        'Trained and guided newer Executive Support Engineers in the craft of white-glove support — codifying the calm, the cadence, and the discretion that the role requires.',
    },
    {
      marker: 'WIN 05',
      title: 'Tip10 Technologies, LLC',
      body:
        'Founded a boutique IT consulting firm specializing in Microsoft 365 administration, workflow automation, and SMB tech strategy — including a managed M365 tenant for a small non-profit.',
    },
    {
      marker: 'WIN 06',
      title: 'Black Inclusion Group · Office Co-Lead',
      body:
        'Office Co-Lead for LinkedIn’s Black Inclusion Group (BIG), facilitating DEI initiatives, mentorship, and networking — leadership that shows up beyond the ticket queue.',
    },
  ] as TrophyWin[],
};

// ─── Experience timeline (Front Nine / Back Nine) ──────────────────────────
// "Back Nine" represents the present round (current concurrent roles).
// "Front Nine" represents earlier rounds.
export const experience = {
  title: 'The Round So Far',
  caption: 'Front Nine to Back Nine — earlier rounds shape the way the current one is played.',
  roles: [
    {
      side: 'back-nine',
      company: 'LinkedIn',
      title: 'Sr. Enterprise Technical Systems Engineer · Executive Support',
      period: '2024 — Present',
      location: 'San Francisco Bay Area',
      focus: [
        'Tier 1 & 2 IT support for LinkedIn’s Senior Leadership team',
        'Specific escalation point for the Office of the CEO',
        'Cross-functional partner during executive technology rollouts',
        'Solve unique business cases — balancing urgency with long-term scalability',
        'Train and guide newer Executive Support Engineers',
        'Develop and deploy applications and automations that reduce tech friction',
      ],
    },
    {
      side: 'back-nine',
      company: 'Tip10 Technologies, LLC',
      title: 'Founder & Chief Technologist',
      period: '2023 — Present',
      location: 'Boutique · Remote',
      focus: [
        'Boutique IT consulting — Microsoft 365 administration, workflow automation, SMB tech strategy',
        'Complete website builds — design, hosting setup, and CMS training for client self-sufficiency',
        'Managed Microsoft 365 tenant for a small non-profit',
      ],
    },
    {
      side: 'front-nine',
      company: 'LinkedIn',
      title: 'Enterprise Technical Systems Engineer · Executive Support',
      period: '2019 — 2024',
      location: 'San Francisco Bay Area',
      focus: [
        'A/V and on-site / off-site technical support for high-profile executive meetings worldwide',
        'Trained and mentored team members in best practices for white-glove support',
        'Office Co-Lead, Black Inclusion Group (BIG) — DEI initiatives and networking',
      ],
    },
    {
      side: 'front-nine',
      company: 'Earlier Rounds',
      title: 'LinkedIn (HCL America · ComputerCare) · Red Bull · Customer Support',
      period: '2015 — 2019',
      focus: [
        'Executive Support and System Support Analyst contracts at LinkedIn (Sunnyvale, Carpinteria)',
        'User Support Analyst at Red Bull (Santa Monica)',
        'Tier-1 customer support for Lynda.com & LinkedIn Learning — ~55 cases/day, 4.3 CSAT',
        'New hire orientation, hardware provisioning, JAMF Casper imaging, ServiceNow & JIRA ticketing',
        'Bluejeans A/V support, Cisco IP phone configuration, Confluence knowledge base',
      ],
    },
  ] as ExperienceRole[],
};

// ─── Toolbag (skills grid) ──────────────────────────────────────────────────
export const toolbag = {
  title: 'The Toolbag',
  caption: 'The clubs I reach for — chosen for the shot, not for show.',
  tools: [
    { name: 'Microsoft 365', category: 'Cloud & Identity' },
    { name: 'Microsoft Azure', category: 'Cloud & Identity' },
    { name: 'Exchange Online', category: 'Cloud & Identity' },
    { name: 'Microsoft Entra ID', category: 'Cloud & Identity' },
    { name: 'Okta', category: 'Cloud & Identity' },
    { name: 'Active Directory', category: 'Cloud & Identity' },
    { name: 'PowerShell', category: 'Automation' },
    { name: 'Microsoft Graph', category: 'Automation' },
    { name: 'ServiceNow', category: 'Operations' },
    { name: 'JIRA', category: 'Operations' },
    { name: 'JAMF / Endpoint Mgmt', category: 'Endpoints' },
    { name: 'macOS', category: 'Endpoints' },
    { name: 'Windows', category: 'Endpoints' },
    { name: 'iOS', category: 'Endpoints' },
    { name: 'AV / Conference Room Tech', category: 'Operations' },
  ] as Tool[],
};

// ─── Clubhouse Notes (leadership style) ────────────────────────────────────
export const clubhouse = {
  title: 'Clubhouse Notes',
  subtitle: 'Leadership Style',
  body:
    'Calm under pressure and trusted by executives — I am at my best when the stakes are high, the audience is senior, and the expectation is invisible excellence. My approach is calm, precise, and service-minded: solve the issue, reduce the friction, and improve the process so the same problem does not keep coming back.',
  pillars: [
    { label: 'Calm', body: 'Steady under pressure when the room is watching.' },
    { label: 'Precise', body: 'Right answer, right context, right timing.' },
    { label: 'Service-Minded', body: 'Concierge defaults — assume good intent, lead with help.' },
  ],
};

// ─── Member's Credentials (education + certifications) ─────────────────────
// Surfaced as a small rail at the bottom of the Experience section.
export const credentials: { education: Credential; certifications: Credential[] } = {
  education: {
    label: 'Education',
    detail: 'Menlo College',
    meta: 'B.S. · Management Information Systems',
  },
  certifications: [
    {
      label: 'Certified',
      detail: 'Microsoft Azure Administrator Associate',
      meta: 'Issued 2023',
    },
    {
      label: 'Licensed',
      detail: 'FAA Part 107 Drone Pilot',
      meta: 'Issued 2024',
    },
  ],
};

// ─── Contact ────────────────────────────────────────────────────────────────
export const contact = {
  title: 'Let’s Start the Next Round',
  caption:
    'Available for senior executive support roles, IT concierge engagements, and conversations with leaders who care about how the technology shows up.',
  cta: 'Book a Conversation',
  links: [
    {
      label: 'Email',
      href: 'mailto:interviews@tip10.tech',
      display: 'interviews@tip10.tech',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tip10',
      display: 'linkedin.com/in/tip10',
    },
    {
      label: 'Resume',
      href: '/resume.pdf',
      display: 'Download (PDF)',
    },
  ] as ContactLink[],
};
