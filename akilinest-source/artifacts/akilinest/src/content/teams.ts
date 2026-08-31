/**
 * Copy and constants for the AkiliNest for Teams side of the site.
 * Visible copy says "upskilling"; "AI training" is reserved for SEO titles
 * and meta descriptions, where it matches what buyers actually search for.
 */

export const TEAM_CTA_LABEL = "Book a team discovery call";
export const TEAM_CTA_LABEL_SHORT = "Book a call";
export const TEAM_WHATSAPP_URL =
  "https://wa.me/254702820845?text=Hi%2C%20I%27d%20like%20to%20talk%20about%20AI%20upskilling%20for%20my%20team";

/** The four steps shown on the homepage and repeated on /teams. */
export const teamSteps = [
  {
    n: "01",
    title: "Find the opportunity",
    desc: "We identify repetitive work, team bottlenecks, AI risks and useful opportunities.",
  },
  {
    n: "02",
    title: "Build practical skills",
    desc: "Your team learns through realistic tasks, not generic tool demonstrations.",
  },
  {
    n: "03",
    title: "Create team workflows",
    desc: "We help teams build prompts, templates, routines and review standards they can reuse.",
  },
  {
    n: "04",
    title: "Embed adoption",
    desc: "Follow-up support helps the team apply AI after the workshop.",
  },
] as const;

/** The two audiences, used on the homepage and on /teams. */
export const teamAudiences = [
  {
    key: "workplace",
    name: "Workplace Teams",
    who: "For HR, operations, sales, customer-service and professional-services teams.",
    what: "Use AI to improve research, reports, documentation, client communication, planning and everyday workflows.",
    short:
      "Practical AI upskilling for HR, operations, sales, customer-service and professional-services teams.",
    cta: "Explore team upskilling",
    href: "/teams",
  },
  {
    key: "educators",
    name: "Educator Teams",
    who: "For teachers, trainers, learning teams and education organisations.",
    what: "Use AI to support lesson planning, learning resources, feedback, administration and responsible classroom practice.",
    short:
      "Practical AI upskilling for teachers, trainers, learning teams and education organisations.",
    cta: "Explore educator teams",
    href: "/teams/educators",
  },
] as const;

/** Options in the team enquiry form. */
export const teamEnquiryInterests = [
  "AI Opportunity Session",
  "AI Workflow Bootcamp",
  "Team AI Playbook",
  "AI Adoption Support",
  "Not sure yet",
] as const;

export const teamSizeOptions = [
  "Under 10 people",
  "10 to 25 people",
  "26 to 50 people",
  "More than 50 people",
] as const;

/** Questions teams actually ask. Every answer must stay true as written. */
export const teamFaqs = [
  {
    q: "How long does the AI Workflow Bootcamp take?",
    a: "It depends on the size of your team and how much work you want to cover, so we scope it on the discovery call. Every engagement includes live sessions plus a 30-day implementation clinic afterwards, because the month after the workshop is where adoption is usually won or lost.",
  },
  {
    q: "How many people should take part?",
    a: "It works best with one team or department at a time rather than a whole organisation at once, because the sessions are built around the specific work that group does each week.",
  },
  {
    q: "Do you come to us?",
    a: "Yes. We run sessions on site at your offices in Nairobi and work with teams across Kenya, or you can come to our space. Educator teams often use a staff development day.",
  },
  {
    q: "Does the team need to have chosen AI tools already?",
    a: "No. Part of the work is deciding which tools are worth using for which tasks, and which work should not go near AI at all.",
  },
  {
    q: "What about our confidential information?",
    a: "We agree up front what may be used in sessions and what must not. A standing part of the programme is helping your team set its own rules for what never goes into a public AI tool.",
  },
  {
    q: "What does it cost?",
    a: "We scope and price each engagement on the discovery call, based on team size and what you want to improve. There is no rate card yet.",
  },
] as const;

export const educatorFaqs = [
  {
    q: "Is this training for teachers, or for learners?",
    a: "For the adults. This programme is for teachers, trainers and learning teams. We run separate creative AI bootcamps for young people aged 8 to 17.",
  },
  {
    q: "Will this replace teachers' professional judgement?",
    a: "No, and the sessions are built to protect it. Teachers decide what is accurate, appropriate and worth using; AI drafts and suggests.",
  },
  {
    q: "Can it run during a staff development day?",
    a: "Yes. We shape the sessions around the school or training calendar and can run them on site.",
  },
  {
    q: "How does this compare with the free TSC AI pathways?",
    a: "TSC and Microsoft Elevate offer free, self-paced AI pathways for TSC-employed teachers, aligned to TPD and KePTS. They are worth doing and we will say so. We work differently: live sessions with a whole department at once, built on your own schemes of work and the tools your school actually uses, ending in shared standards rather than individual certificates. We also work with private and international schools, whose staff sit outside the TSC scheme.",
  },
  {
    q: "Do you only teach Microsoft tools?",
    a: "No. We work with whatever your school already runs, whether that is Google Workspace, Microsoft 365 or a mix, and we are honest about which tasks are worth using AI for at all.",
  },
  {
    q: "How do you handle learner privacy?",
    a: "It is part of the programme. Teams work through what learner information must never be entered into a public AI tool, and set clear expectations for classroom AI use.",
  },
] as const;

