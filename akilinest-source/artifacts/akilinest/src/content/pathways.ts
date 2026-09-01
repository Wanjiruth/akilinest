/**
 * The two team pathways and the four solutions under each.
 * Copy supplied by AkiliNest; each solution carries its own call to action.
 */

export type Solution = {
  key: string;
  name: string;
  goal: string;
  whatWeDo: string;
  gets: readonly string[];
  cta: string;
};

export const corporateSolutions: readonly Solution[] = [
  {
    key: "audit",
    name: "The Operational Workflow & Readiness Audit",
    goal: "Diagnose hidden bottlenecks and surface where intelligence tools will actually move the needle.",
    whatWeDo:
      "We pull back the hood on your daily tasks, current software stack and team habits through a structured assessment. We interview key stakeholders, evaluate existing workflows, and review team capabilities across departments.",
    gets: [
      "A comprehensive audit report mapping out tool and workflow gaps.",
      "Role-by-role opportunity mapping, so you know exactly which departments stand to save the most time.",
      "A prioritised, step-by-step roadmap for adoption that your leadership team can act on immediately.",
    ],
    cta: "Book a readiness audit",
  },
  {
    key: "playbook",
    name: "The AkiliNest Custom Playbook",
    goal: "Establish a single, unified and repeatable way of working across your entire organisation.",
    whatWeDo:
      "We build your company's internal operational manual. Instead of leaving employees to guess how to prompt or structure tasks, we codify your standards into a living framework.",
    gets: [
      "Approved tool stack definitions tailored specifically to each role.",
      "Custom proprietary prompt libraries and structured content generation frameworks.",
      "Documented AI-assisted workflows built for marketing, design and product development functions.",
      "Standardised quality control checklists, review gates and internal team protocols to protect your brand identity and data security.",
    ],
    cta: "Talk to us about a playbook",
  },
  {
    key: "cohorts",
    name: "Applied Team Cohorts & Training Academies",
    goal: "Turn passive software users into confident, hands-on digital creators through real-world practice.",
    whatWeDo:
      "We run intensive, cohort-based upskilling tracks. Rather than forcing your team to sit through abstract lectures or dense slide decks, we anchor all training in practical, real-world project assignments.",
    gets: [
      "Dedicated learning tracks customised for marketing and content teams, design and brand professionals, and developer and product teams.",
      "Blended learning modules combining expert-led facilitation with self-paced, hands-on application.",
      "Real project outputs your employees can integrate into their day-to-day work immediately.",
      "Formal completion certificates and tracked performance metrics to ensure genuine skill retention.",
    ],
    cta: "Enquire about a team cohort",
  },
  {
    key: "labs",
    name: "Executive Alignment & Transformation Labs",
    goal: "Align leadership, clear change-management hurdles, and eliminate systemic barriers to adoption.",
    whatWeDo:
      "We recognise that technology rollout failures are almost always people and process problems, not tool problems. We host focused working sessions with management and department heads.",
    gets: [
      "Cross-functional alignment on company-wide AI standards and deployment goals.",
      "Clear frameworks for role definition, change management and team-wide restructuring.",
      "An executive action plan for rolling out tools across entire divisions without internal friction or resistance.",
    ],
    cta: "Arrange an executive lab",
  },
];

export const corporateWhy = [
  {
    title: "Zero theory, 100% execution",
    desc: "Everything we design is built around applied, role-specific frameworks. Your team leaves every engagement with functional assets they can use the same day.",
  },
  {
    title: "Tailored to your commercial context",
    desc: "We do not believe in one-size-fits-all templates. Every framework, playbook and cohort is calibrated to fit your specific industry realities and business goals.",
  },
  {
    title: "Scalable frameworks",
    desc: "Whether you are an agile startup or a multi-department enterprise, our solutions scale smoothly to match your organisational growth.",
  },
] as const;

export const educatorSolutions: readonly Solution[] = [
  {
    key: "audit",
    name: "The Educator AI Readiness Audit",
    goal: "Diagnose digital skill gaps and identify where educational technology can make the biggest impact on teaching and school administration.",
    whatWeDo:
      "We review your institution's current digital infrastructure, lesson-planning routines and teacher proficiency levels. We evaluate daily administrative and pedagogical workflows to see where time can be saved.",
    gets: [
      "A comprehensive readiness report highlighting current digital and AI tool gaps across departments.",
      "Role-by-role opportunity mapping for classroom teachers, department heads and administrative staff.",
      "A structured, practical roadmap for digital adoption that aligns with national teaching standards and institutional goals.",
    ],
    cta: "Book an educator readiness audit",
  },
  {
    key: "playbook",
    name: "The Educator AI Integration Playbook",
    goal: "Establish a unified, institutional standard for how teachers and staff safely use AI and digital platforms.",
    whatWeDo:
      "Moving beyond ad-hoc tool usage, we build a custom operational manual for your school or educational network. It defines safe usage policies, ethical AI guidelines and standardised lesson-planning frameworks.",
    gets: [
      "Approved educational tool stacks aligned with modern pedagogical standards, such as Microsoft Elevate frameworks.",
      "Proprietary prompt libraries and templates designed specifically for lesson planning, quiz generation and differentiated learning.",
      "Standardised workflows for grading assistance, administrative reporting and student engagement.",
      "Clear data privacy and ethical guidelines to protect student information and maintain academic integrity.",
    ],
    cta: "Talk to us about an integration playbook",
  },
  {
    key: "cohorts",
    name: "Applied Educator Cohorts & Training Academies",
    goal: "Turn teachers into confident digital creators who can seamlessly blend AI into their daily instruction.",
    whatWeDo:
      "We run intensive, cohort-based upskilling programmes tailored for educators. Rather than dense, abstract software training, our sessions focus entirely on hands-on application, helping teachers build real classroom materials they can use the next day.",
    gets: [
      "Structured learning tracks mapped to modern educator competencies, informed by frameworks like Microsoft Elevate and TSC guidelines.",
      "Blended learning paths combining expert-led workshops with self-paced practical modules.",
      "Ready-to-use digital teaching assets, automated grading routines and inclusive learning strategies built during the training.",
      "Certificates of completion and measurable skills verification for participating educators.",
    ],
    cta: "Enquire about an educator cohort",
  },
  {
    key: "labs",
    name: "Educational Leadership & Transformation Labs",
    goal: "Align school principals, administrators and board members to lead digital transformation from the top down.",
    whatWeDo:
      "Technology adoption in schools usually stalls due to change-management roadblocks rather than teacher resistance. We host strategic working sessions for institutional leaders to plan holistic rollouts.",
    gets: [
      "Cross-functional alignment on digital strategy, school-wide technology standards and curriculum integration.",
      "Practical change-management frameworks to guide faculty through digital transitions smoothly.",
      "A clear executive action plan for rolling out tools across classrooms without administrative friction.",
    ],
    cta: "Arrange a leadership lab",
  },
];

export const educatorWhy = [
  {
    title: "Pedagogy-first approach",
    desc: "We do not just teach software. We focus on how technology enhances teaching outcomes, student engagement and educator wellbeing.",
  },
  {
    title: "Aligned with modern standards",
    desc: "Our curriculum integrates best practices from leading educational frameworks, so your teachers stay ahead of evolving digital requirements.",
  },
  {
    title: "Tailored for local institutions",
    desc: "Every playbook, audit and academy is contextualised for the realities of schools and educational providers in our region.",
  },
] as const;

export const teamPathways = [
  {
    key: "corporate",
    number: "1",
    name: "Corporate Teams",
    focus: "Operational efficiency, brand consistency and revenue acceleration.",
    who: "Businesses, startups and enterprises looking to eliminate siloed AI usage, fix workflow bottlenecks, and build a unified way of working across marketing, design and development.",
    offer: "Readiness audits, custom AI skills playbooks, applied team cohorts, and executive transformation labs.",
    cta: "Explore Corporate Solutions",
    href: "/teams/corporate",
  },
  {
    key: "educators",
    number: "2",
    name: "Educator & Institutional Teams",
    focus: "Pedagogical excellence, safe digital integration and institutional capacity building.",
    who: "Schools, learning networks and educators seeking to adopt modern teaching tools aligned with standards like the TSC AI Educator Pathways, powered by Microsoft Elevate.",
    offer: "Educator readiness audits, institutional integration playbooks, hands-on teacher training cohorts, and leadership labs.",
    cta: "Explore Educator Solutions",
    href: "/teams/educators",
  },
] as const;

/**
 * The core corporate programme. Six live sessions with asynchronous support
 * between them; every session ends in something the team keeps.
 */
export const CORPORATE_PROGRAMME = {
  name: "The AkiliNest 6-Session Corporate AI Program",
  format: "6 live sessions, plus dedicated asynchronous support between sessions.",
  sessions: [
    {
      n: "Session 1",
      title: "Foundations, Policy & Baseline",
      points: [
        "Define exactly what AI can and cannot do in your business, including limits and risks.",
        "Establish company policy, data classification, and strict “do not do this” scenarios.",
        "Pick 1–2 baseline tasks per department to measure for time, volume, and quality.",
      ],
    },
    {
      n: "Session 2",
      title: "Prompt Engineering & Core Workflows",
      points: [
        "Learn structured prompting: setting the objective, context, constraints, examples, and output format.",
        "Participants bring real work — emails, reports, briefs — and build 2 documented AI workflows.",
        "Create simple, standardised quality checklists for each workflow.",
      ],
    },
    {
      n: "Session 3",
      title: "Department-Specific Use-Case Labs",
      points: [
        "Deep dives by department: HR, finance, sales, operations and others.",
        "Convert 3–5 real, time-consuming tasks into AI-assisted workflows: summaries, drafts, analysis, follow-ups.",
        "Identify internal AI Champions in each team to lead peer support and drive long-term adoption.",
      ],
    },
    {
      n: "Session 4",
      title: "Tools, Integration & Safe Usage",
      points: [
        "Go beyond ChatGPT: hands-on with Claude, Copilot, Gemini and domain-specific tools relevant to your stack.",
        "Configure team sandboxes, access rules, and basic integrations with Slack, Teams, CRM and Workspace.",
        "Establish strict human-in-the-loop checkpoints and escalation rules.",
      ],
    },
    {
      n: "Session 5",
      title: "Reinforcement & Problem-Solving Clinic",
      points: [
        "Small-group sessions focused on what worked, what failed, and where people got stuck.",
        "Fix broken prompts, refine workflows, and share wins across departments.",
        "Re-measure baseline tasks and capture your first hours-saved metrics.",
      ],
    },
    {
      n: "Session 6",
      title: "Metrics, Governance & Scale Plan",
      points: [
        "Review programme results: time saved, quality changes, and adoption rates.",
        "Decide as a leadership team what to standardise, what to automate next, and what to stop doing.",
        "Deliver a 90-day scale roadmap complete with owners, budgets, and governance guardrails.",
      ],
    },
  ],
} as const;
