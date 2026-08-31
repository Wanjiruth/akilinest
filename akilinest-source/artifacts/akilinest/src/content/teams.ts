import faqs from "./faqs.json";

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

/**
 * FAQ copy lives in faqs.json so the visible questions and the FAQPage
 * structured data emitted at build time can never drift apart.
 */
export const teamFaqs = faqs.teamFaqs;
export const educatorFaqs = faqs.educatorFaqs;
