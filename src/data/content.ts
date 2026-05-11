/**
 * Single source of truth for all site copy.
 *
 * Update text, links, dates, and lists here — every section reads from this file.
 * Keep the shape stable; if you add a new field, also add it to the matching type.
 */

// ─── Types ──────────────────────────────────────────────────────────────────
export type NavItem = { label: string; href: string };

export type ScorecardStat = {
  company: string; // short company tag, e.g. "LinkedIn", "Microsoft", "Tip10"
  label: string; // Discipline column — e.g. "Tenure"
  detail: string; // Detail column — e.g. "11+ Yrs"
  category: string; // Category column — e.g. "Long Game"
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
  category: 'Cloud & Identity' | 'Automation' | 'Endpoints' | 'Operations' | 'AI';
};

export type ContactLink = {
  label: string;
  href: string;
  display: string;
};

export type Recommendation = {
  initials: string; // small eyebrow tag, e.g. "TS"
  name: string;
  role: string; // recommender's title / company line
  relationship: string; // how they know me
  quote: string; // verbatim excerpt
  linkedinUrl?: string; // optional override; falls back to LinkedIn search URL
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
    'Senior Executive Support Engineer specializing in white-glove technical support for senior leaders, workflow automations that quietly reduce friction, and high-visibility moments where the technology simply has to work.',
  // OG image path (drop a 1200x630 image into /public and reference it here).
  ogImage: '/og-image.jpg',
  // Resume PDF — replace /public/resume.pdf with your real file.
  resumePdf: '/resume.pdf',
};

// ─── Navigation ─────────────────────────────────────────────────────────────
export const nav: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Highlights', href: '#scorecard' },
  { label: 'The Bag', href: '#toolbag' },
  { label: 'Experience', href: '#experience' },
  { label: 'Accolades', href: '#trophy-case' },
  { label: 'Members', href: '#recommendations' },
  { label: 'Contact', href: '#contact' },
];

// ─── Hero ───────────────────────────────────────────────────────────────────
export const hero = {
  eyebrow: 'Demetrius Tipton',
  name: 'Demetrius Tipton',
  titles: [
    'LinkedIn · Sr. Executive Support Engineer',
    'Tip10 Technologies · Founder',
  ],
  tagline: 'Trusted Technical Partner',
  headline: ['Executive IT Support.', 'Played with Precision.'],
  intro:
    'I specialize in white-glove technical support for senior leaders, workflow automations, and high-visibility moments where the technology simply has to work.',
  supportingLine:
    'White-glove technical support for high-stakes executive environments, powered by calm troubleshooting, automation, and thoughtful process design.',
  course: 'Tip10 CC · Est. 2011',
};

// ─── About (LinkedIn-style intro) ──────────────────────────────────────────
export const about = {
  eyebrow: 'Demetrius Tipton · About',
  title: 'On the Practice Tee.',
  body: [
    "I’m an Executive Support Engineer at LinkedIn, where I support senior leadership and the teams around them in high-trust environments.",
    "Over the last 14 years, I’ve provided IT support to members at all levels of medium and large corporations, most recently specializing in supporting senior executives. I’ve worked across Microsoft 365, identity systems, and collaboration platforms through both day-to-day operations and high-pressure incidents. I’ve built automation to ease the resolution of recurring issues, leveraged interpersonal skills to articulate technical issues to non-technical customers, and operated in environments where precision and discretion are expected.",
    "I built Tip10 Technologies for founders, principals, and small teams. A boutique practice that meets clients where they are and ensures technology removes friction instead of creating it.",
  ],
  // Portrait — Option B (portrait crop, rounded square, gold hairline).
  // The image asset itself lives at `src/assets/portrait.jpg` and is imported directly
  // in About.astro so Astro can optimize it (AVIF + WebP + JPG, responsive widths).
  // To swap photos: replace the file at src/assets/portrait.jpg.
  portrait: {
    alt: 'Demetrius Tipton',
    caption: 'Demetrius Tipton · Tip10 CC',
  },
};

// ─── Scorecard ──────────────────────────────────────────────────────────────
export const scorecard = {
  title: 'Career Highlights',
  caption:
    'Through-lines from 14 years of IT support — the highlights that show up in every round.',
  stats: [
    { company: 'Multi', label: 'IT Support · Career', detail: '14 Years', category: 'Long Game' },
    { company: 'LinkedIn', label: 'Tenure', detail: '11+ Yrs', category: 'Long Game' },
    { company: 'LinkedIn', label: 'Senior Leadership', detail: 'Escalation Point', category: 'Audience' },
    { company: 'LinkedIn', label: 'Mailbox Management App', detail: 'PowerShell · Internal Tool', category: 'Tooling' },
    { company: 'Microsoft', label: 'Azure Administrator', detail: 'Microsoft Certified', category: 'Credentials' },
    { company: 'Tip10', label: 'Tip10 Technologies', detail: 'Founder', category: 'Discipline' },
    { company: 'Tip10', label: 'Mailbox Admin Teams Bot', detail: 'Exchange Online · Conversational', category: 'Automation' },
  ] as ScorecardStat[],
};

// ─── Trophy case / featured wins ────────────────────────────────────────────
export const trophyCase = {
  title: 'Accolades',
  subtitle: 'Featured Wins',
  caption: 'A short list of the work I am proud of — the kind that earns trust quietly.',
  wins: [
    {
      marker: 'WIN 01',
      title: 'Senior Executive Support',
      body:
        "Trusted go-to for LinkedIn's senior executives when something has to work — the kind of role earned by staying calm in the moments that matter most, not announced in a job description.",
    },
    {
      marker: 'WIN 02',
      title: 'Automation that Reduces Friction',
      body:
        'Built and deployed a PowerShell-based Mailbox Management App for our team — replacing the manual back-and-forth that used to surround mailbox provisioning, distribution-list edits, and shared-mailbox tweaks. Hours of repetitive work compressed into a single, quiet command.',
    },
    {
      marker: 'WIN 03',
      title: 'Mentor & Trainer',
      body:
        'Trained and guided newer Executive Support Engineers in the craft of white-glove support — codifying the calm, the cadence, and the discretion that the role requires.',
    },
    {
      marker: 'WIN 04',
      title: 'Tip10 Technologies, LLC',
      body:
        'Founded a boutique IT consulting firm specializing in Microsoft 365 administration, workflow automation, and SMB tech strategy — including a managed M365 tenant for a small non-profit.',
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
      period: 'Sep 2024 — Present',
      location: 'San Francisco Bay Area',
      focus: [
        'Tier 1 & 2 IT support for LinkedIn’s Senior Leadership team',
        'Trusted escalation point for senior leadership',
        'Solve unique business cases surfaced by the executive team',
        'Cross-functional partner during executive technology rollouts — minimize impact on executive audiences',
        'Deliver Audio/Visual support for onsite and offsite events involving C-Level executives',
        'Manage users, groups, and mailboxes via Active Directory, Entra ID, Okta, Imanami GroupID, and Microsoft Exchange',
        'Leverage PowerShell to automate administrative tasks and improve operational efficiency',
        'Train and guide newer Executive Support Engineers',
      ],
    },
    {
      side: 'back-nine',
      company: 'Tip10 Technologies, LLC',
      title: 'Founder & Chief Technologist',
      period: 'Feb 2023 — Present',
      location: 'Oakland, CA · Hybrid',
      focus: [
        'Boutique IT consulting — Microsoft 365 administration, workflow automation, SMB tech strategy',
        'Complete website builds — design, hosting setup, and CMS training for client self-sufficiency',
        'Managed Microsoft 365 tenant for a small non-profit',
        'Featured project: Reclaimed Colors — built a website showcasing local artists’ work and provided 1:1 CMS training for client self-sufficiency',
      ],
    },
    {
      side: 'front-nine',
      company: 'LinkedIn',
      title: 'Enterprise Technical Systems Engineer · Executive Support',
      period: 'Aug 2019 — Sep 2024',
      location: 'San Francisco Bay Area',
      focus: [
        'A/V and on-site / off-site technical support for high-profile executive meetings worldwide',
        'Trained and mentored team members in best practices for white-glove support',
        'Office Co-Lead, Black Inclusion Group (BIG) — DEI initiatives and networking',
        'Office Co-Lead, Black Inclusion Group (BIG) · Jul 2022 – Jul 2023 · Mountain View, CA',
        'Rock Your Profile Event Ambassador · Nov 2019 – Aug 2022 · Sunnyvale, CA',
      ],
    },
    {
      side: 'front-nine',
      company: 'Earlier Rounds',
      title: 'LinkedIn (HCL America · ComputerCare) · Red Bull · Customer Support',
      period: 'Jan 2015 — Mar 2019',
      focus: [
        'Executive Support and System Support Analyst contracts at LinkedIn (Sunnyvale, Carpinteria)',
        'User Support Analyst at Red Bull (Santa Monica)',
        'Tier-1 customer support for Lynda.com & LinkedIn Learning — ~55 cases/day, 4.3 CSAT',
        'New hire orientation, hardware provisioning, JAMF Casper imaging, ServiceNow & JIRA ticketing',
        'Bluejeans A/V support, Cisco IP phone configuration, Confluence knowledge base',
        'IMAC Technician via Milestone Technologies @ Kaiser Permanente · Jan – Apr 2015 · SF Bay Area',
        'Help Desk Technician, Office of Information Technology · Menlo College · Fall 2013 – Fall 2014',
      ],
    },
  ] as ExperienceRole[],
};

// ─── Toolbag (skills grid) ──────────────────────────────────────────────────
export const toolbag = {
  title: 'What’s in the Bag',
  caption: 'The clubs I reach for — chosen for the shot, not for show.',
  tools: [
    { name: 'Microsoft 365', category: 'Cloud & Identity' },
    { name: 'Microsoft Azure', category: 'Cloud & Identity' },
    { name: 'Exchange Online', category: 'Cloud & Identity' },
    { name: 'Microsoft Entra ID', category: 'Cloud & Identity' },
    { name: 'Okta', category: 'Cloud & Identity' },
    { name: 'Active Directory', category: 'Cloud & Identity' },
    { name: 'Imanami GroupID', category: 'Cloud & Identity' },
    { name: 'PowerShell', category: 'Automation' },
    { name: 'BASH', category: 'Automation' },
    { name: 'Microsoft Graph', category: 'Automation' },
    { name: 'ServiceNow', category: 'Operations' },
    { name: 'JIRA', category: 'Operations' },
    { name: 'JAMF / Endpoint Mgmt', category: 'Endpoints' },
    { name: 'macOS', category: 'Endpoints' },
    { name: 'Windows', category: 'Endpoints' },
    { name: 'iOS', category: 'Endpoints' },
    { name: 'AV / Conference Room Tech', category: 'Operations' },
    { name: 'Claude Code', category: 'AI' },
    { name: 'OpenAI Codex', category: 'AI' },
    { name: 'Agentic Development', category: 'AI' },
  ] as Tool[],
};

// ─── Credentials (education + certifications) ─────────────────────────────
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

// ─── Recommendations (verbatim excerpts, with the recommender's permission) ─
export const recommendations = {
  eyebrow: "The Members' Lounge · On the Record",
  title: 'What the Members Say.',
  caption:
    "Verbatim excerpts from people I’ve had the privilege to work with.",
  items: [
    {
      initials: 'TS',
      name: 'Tanya Staples',
      role: 'Travel Leader · Product Leader · Coach · Advisor · Board Member',
      relationship: 'LinkedIn — former colleague, Lynda + LinkedIn',
      quote:
        "He has an incredible ability to balance being calm, but moving with urgency under pressure. He's able to convey technical information in a way that just makes sense. If I were hiring for my own company, I'd hire him in a heartbeat.",
    },
    {
      initials: 'VB',
      name: 'Valerie Berry',
      role: 'Sr. Manager, Employee Experience & LIL Instructor',
      relationship: 'LinkedIn',
      quote:
        'His expertise and skill-set combined with great people skills make him an exceptional Exec Support Engineer and partner. He brings a calm to the storm with his creative problem solving skills and can-do attitude.',
    },
    {
      initials: 'CC',
      name: 'Christina Chu',
      role: 'Co-Founder',
      relationship: 'SOLARPUNKS · Energy Club · Black Magic Factory',
      quote:
        "He is a natural problem solver and doesn't stop until he figures out a solution. Always willing to go above and beyond when fixing our many issues.",
    },
    {
      initials: 'MS',
      name: 'Mukund Saroj',
      role: 'Functional Architect',
      relationship: 'ITSM / ITOM',
      quote:
        'Proactive, result-oriented, responsible and technically a sound employee — always ready to put all his energy and time to get the job done.',
    },
  ] as Recommendation[],
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
