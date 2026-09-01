/**
 * One title, description, keyword set and H1 per route.
 *
 * These used to be written twice: once in each page's <PageMeta>, and again in
 * scripts/generate-seo.mjs for the prerendered shell. Nothing kept the copies
 * honest, so they drifted. The homepage advertised only the kids programmes on
 * every shared link for months; /faq and /pis served a different <title>
 * depending on whether the crawler ran JavaScript; and /events invited people
 * to a waiting list in one copy while the other announced the intake as open.
 *
 * Plain .mjs, like schema.mjs, because both consumers have to read it: Vite for
 * the app, and Node for the generator. Types are in pageSeo.d.ts.
 *
 * `h1` is the shell's crawlable heading and must match what the page component
 * actually renders. `keywords` is only read by the app; Google ignores the tag,
 * so the shell does not bother emitting it.
 */
export const PAGE_SEO = {
  "/": {
    title: "AI Training in Kenya for Teams & Kids | AkiliNest",
    description:
      "Practical AI training in Kenya for workplace teams, educator teams and young people. AkiliNest helps people build useful AI skills and workflows for real work and learning.",
    keywords: ["AI training Kenya", "AI upskilling Kenya", "AI training Nairobi", "AI bootcamp Kenya"],
    h1: "Practical AI training in Kenya, for teams and for kids.",
  },
  "/about": {
    title: "About AkiliNest | Practical AI Upskilling in Kenya",
    description:
      "AkiliNest helps workplace and educator teams in Kenya use AI well, and runs creative AI bootcamps for young people aged 8 to 17. Based in Nairobi.",
    keywords: ["AkiliNest", "AI upskilling Kenya", "AI training Kenya", "about AkiliNest"],
    h1: "We help people in Kenya work and learn well with AI.",
  },
  "/ai-training-kenya": {
    title: "AI Training in Kenya | Corporate, Teacher & Kids | AkiliNest",
    description:
      "AI training in Kenya from AkiliNest. Corporate AI training for workplace teams, AI training for teachers, and creative AI bootcamps for kids in Nairobi.",
    keywords: [
      "AI training Kenya",
      "AI training Nairobi",
      "corporate AI training Kenya",
      "AI training for teachers Kenya",
      "AI bootcamp Kenya",
    ],
    h1: "AI training in Kenya.",
  },
  "/blog": {
    title: "Parent Guides & Insights for Raising Kids in the AI Era | AkiliNest",
    description:
      "Research-backed guides for Kenyan parents: AI safety, CBC gaps, extracurriculars, future skills, and creative programmes for children aged 8-17.",
    keywords: [
      "parenting AI era Nairobi",
      "extracurricular activities kids Nairobi",
      "creative classes children Kenya",
      "CBC curriculum gaps",
      "ChatGPT safe for kids",
    ],
  },
  "/contact": {
    title: "Contact AkiliNest | Book a Team Discovery Call",
    description:
      "Book a team discovery call or ask about kids bootcamps. Email akilinest@gmail.com or WhatsApp 0702 820 845.",
    keywords: ["contact AkiliNest", "AI training Kenya", "AI bootcamp Nairobi"],
    h1: "Tell us what you are trying to do.",
  },
  "/events": {
    title: "Holiday AI Camps for Kids in Nairobi 2026 | AkiliNest",
    description:
      "AkiliNest creative AI bootcamps and holiday camps for children aged 8-17 at heARTspace, Nairobi. The November to December 2026 intake is open for registration.",
    keywords: [
      "holiday camps kids Nairobi",
      "creative classes children Nairobi",
      "AkiliNest events",
      "after school activities Kenya",
    ],
    h1: "Holiday AI camps for kids in Nairobi.",
  },
  "/faq": {
    title: "AI Training FAQ for Parents & Teams in Kenya | AkiliNest",
    description:
      "Answers to what Kenyan parents actually ask: Is AI safe? Will my child stop thinking? How is AkiliNest different from school? Ages 8 to 17.",
    keywords: [
      "AkiliNest FAQ",
      "AI safe for kids",
      "creative programmes Nairobi",
      "children AI education Kenya",
    ],
    h1: "AI training questions parents actually ask.",
  },
  "/future-skills-report": {
    title: "The Future Skills Report 2026: What Kenyan Kids Need | AkiliNest",
    description:
      "Research-backed report for Kenyan parents: the six skills children need before 2030, what schools are missing, and what the data says about AI and young minds.",
    keywords: [
      "future skills children 2030",
      "Nairobi kids skills AI era",
      "critical thinking children Kenya",
      "AI education report parents",
    ],
  },
  "/hero-2026": {
    title: "AkiliNest Selected for H.E.R.O. 2026 | Harmonic Innovation Group",
    description:
      "AkiliNest was selected for H.E.R.O. 2026, the Harmonic Euro-African Ramp-up Orbit acceleration and internationalisation programme. One of 20 startups selected from 324 applications across 23 countries.",
    keywords: ["H.E.R.O. 2026", "Harmonic Euro-African Ramp-up Orbit", "AkiliNest"],
    h1: "AkiliNest selected for H.E.R.O. 2026.",
  },
  "/insights": {
    title: "Insights on Practical AI for Kenyan Teams | AkiliNest",
    description:
      "Founder-led articles on using AI well at work and in the classroom: safe everyday use, practical workflows, and responsible AI habits for Kenyan teams.",
    keywords: ["AI upskilling Kenya", "AI training Kenya", "responsible AI use Kenya"],
    h1: "Practical notes on using AI well.",
  },
  "/kids-ai-bootcamps": {
    title: "The Best AI Training for Kids in Kenya | AI Bootcamps Nairobi | AkiliNest",
    description:
      "AkiliNest is Kenya's leading AI training company for kids. Creative AI bootcamps for children aged 8-17 in Nairobi, across four age stages, during the school holidays.",
    keywords: [
      "AI bootcamp for kids Nairobi",
      "AI bootcamp Kenya",
      "creative classes children Nairobi",
    ],
    h1: "The best AI training for kids in Kenya.",
  },
  "/parents-guide": {
    title: "The Nairobi Parent's Guide to Raising Thinkers in the AI Era | AkiliNest",
    description:
      "Is AkiliNest right for your family? A complete guide for Kenyan parents: who it's for, what to expect, how to start, and what children actually learn.",
    keywords: [
      "Nairobi parent guide AI children",
      "creative programmes kids Nairobi",
      "extracurricular activities Nairobi",
      "raising kids AI era Kenya",
    ],
  },
  "/pis": {
    title: "AI Workshops for Parents in Nairobi | AkiliNest",
    description:
      "Five thoughtful parent sessions for Kenyan families: AI safety, screens, creation, digital identity, and future skills. Not fear-based.",
    keywords: ["parenting AI era Nairobi", "parent workshops Kenya", "raising kids technology Africa"],
    h1: "AI workshops for parents in Nairobi.",
  },
  "/privacy": {
    title: "Privacy Policy | AkiliNest",
    description:
      "How AkiliNest collects, uses, and protects your personal information.",
  },
  "/programme": {
    title: "Kids AI Programme Stages, Ages 8 to 17 | AkiliNest",
    description:
      "Four age-appropriate programmes for children 8–17 across Kenya: Sprouts, Explorers, Builders, and Innovators. Thinking-first creative intelligence.",
    keywords: [
      "creative programmes Nairobi",
      "children AI education Kenya",
      "extracurricular activities Nairobi",
      "Sprouts Explorers Builders Innovators",
    ],
    h1: "Kids AI programme stages, ages 8 to 17.",
  },
  "/teams": {
    title: "AI Training for Teams in Kenya | Corporate & Educator | AkiliNest",
    description:
      "AI training for teams in Kenya, for two audiences: workplace teams and educator teams. Compare the corporate and educator programmes, readiness audits and applied cohorts.",
    keywords: [
      "corporate AI training Kenya",
      "AI training for teams Kenya",
      "AI upskilling Kenya",
      "AI workshop Nairobi",
    ],
    h1: "AI training and upskilling for teams in Kenya.",
  },
  "/teams/corporate": {
    title: "Corporate AI Training in Kenya | Enterprise Solutions | AkiliNest",
    description:
      "Corporate AI training in Kenya for enterprise teams. Workflow readiness audits, custom AI playbooks, applied team cohorts and executive transformation labs from AkiliNest.",
    keywords: [
      "corporate AI training Kenya",
      "AI upskilling Kenya",
      "AI training for teams Kenya",
      "AI workshop Nairobi",
    ],
    h1: "Corporate AI training in Kenya.",
  },
  "/teams/educators": {
    title: "AI Training for Teachers in Kenya | Educator Solutions | AkiliNest",
    description:
      "Practical AI training for teachers and schools in Kenya. Educator readiness audits, integration playbooks, hands-on teacher cohorts and leadership labs from AkiliNest.",
    keywords: [
      "AI training for teachers Kenya",
      "AI upskilling Kenya",
      "AI workshop Nairobi",
      "AI training Kenya",
    ],
    h1: "AI training for teachers in Kenya.",
  },
  "/terms": {
    title: "Terms of Service | AkiliNest",
    description:
      "Terms and conditions for AkiliNest programmes, enrolment, and website use.",
  },
};

/**
 * Props for <PageMeta>. Throws rather than silently rendering an untitled page:
 * a typo'd route is a bug worth failing the build over, not a blank <title>.
 */
export function pageSeo(path) {
  const entry = PAGE_SEO[path];
  if (!entry) throw new Error(`No PAGE_SEO entry for "${path}"`);
  const { h1, ...meta } = entry;
  return { ...meta, path };
}
