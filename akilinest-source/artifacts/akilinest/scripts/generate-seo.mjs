/**
 * Post-build SEO generator: creates per-route HTML shells with crawlable
 * meta tags and visible text content for search engines and social scrapers.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Same source the pages render from, so the schema cannot drift from the copy. */
const faqs = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../src/content/faqs.json"), "utf8"),
);

/**
 * Insight articles are parsed straight out of insights.ts at build time, so
 * there is no second copy of the metadata to fall out of step with the pages.
 */
function readInsights() {
  const src = fs.readFileSync(path.resolve(__dirname, "../src/content/insights.ts"), "utf8");
  const unescape = (v) => v.replace(/\\"/g, '"').replace(/\\n/g, "\n");
  const out = [];
  const re =
    /slug:\s*"([^"]+)",\s*\n\s*title:\s*"((?:[^"\\]|\\.)*)",\s*\n\s*description:\s*\n?\s*"((?:[^"\\]|\\.)*)",\s*\n\s*audience:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(src))) {
    const rest = src.slice(m.index + m[0].length);
    const first = /paragraphs:\s*\[\s*\n\s*"((?:[^"\\]|\\.)*)"/.exec(rest);
    out.push({
      slug: m[1],
      title: unescape(m[2]),
      description: unescape(m[3]),
      audience: m[4],
      body: first ? unescape(first[1]) : unescape(m[3]),
    });
  }
  return out;
}

const insightPosts = readInsights();

const faqPage = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});
const DIST = path.resolve(__dirname, "../dist/public");
const SITE = "https://akilinest.co.ke";

const staticPages = [
  {
    path: "/",
    h1: "Practical AI training in Kenya, for teams and for kids.",
    title: "AI Training in Kenya for Teams & Kids | AkiliNest",
    description:
      "Practical AI training in Kenya for workplace teams, educator teams and young people. AkiliNest helps people build useful AI skills and workflows for real work and learning.",
    body: "AkiliNest closes the gap on both sides: practical AI upskilling for workplace and educator teams in Kenya, and creative AI bootcamps for young people aged 8 to 17.",
  },
  {
    path: "/ai-training-kenya",
    h1: "AI training in Kenya.",
    title: "AI Training in Kenya | Corporate, Teacher & Kids AI Training | AkiliNest",
    description:
      "AI training in Kenya from AkiliNest. Corporate AI training for workplace teams, AI training for teachers, and creative AI bootcamps for kids in Nairobi.",
    body: "AkiliNest is an AI training company based in Nairobi, Kenya. We run practical AI training for workplace teams, AI training for teachers and school leadership, and creative AI bootcamps for young people aged 8 to 17. Kenya has the highest rate of ChatGPT use of any country in the world, at 42.1% of internet users aged 16 and over in the past month, according to the DataReportal and Meltwater Global Digital Report 2025. AI use is running ahead of formal AI training. Team sessions run on site at your offices in Nairobi or at our space, and we work with organisations across Kenya.",
  },
  {
    path: "/teams",
    h1: "AI training and upskilling for teams in Kenya.",
    title: "Corporate AI Training in Kenya | AI Upskilling for Teams | AkiliNest",
    description:
      "Practical corporate AI training in Kenya for workplace and educator teams. Readiness audits, custom playbooks, applied cohorts and leadership labs with AkiliNest.",
    body: "Technology moves fast, but the human capability to use it effectively is often left behind. AkiliNest builds practical operating systems and hands-on training tracks for two environments: corporate teams and educator teams. AI use is running ahead of formal AI training. AkiliNest for Teams: AI Opportunity Session, AI Workflow Bootcamp, Team AI Playbook and AI Adoption Support for workplace and educator teams in Kenya.",
  },
  {
    path: "/teams/corporate",
    jsonLd: () => faqPage(faqs.teamFaqs),
    h1: "Corporate AI training in Kenya.",
    title: "Corporate AI Training in Kenya | Enterprise Solutions | AkiliNest",
    description:
      "Corporate AI training in Kenya for enterprise teams. Workflow readiness audits, custom AI playbooks, applied team cohorts and executive transformation labs from AkiliNest.",
    body: "AkiliNest delivers practical, hands-on corporate AI training for teams across Kenya and East Africa. The AkiliNest 6-Session Corporate AI Program runs as six live sessions plus asynchronous support between them: Session 1 Foundations, Policy and Baseline; Session 2 Prompt Engineering and Core Workflows; Session 3 Department-Specific Use-Case Labs; Session 4 Tools, Integration and Safe Usage; Session 5 Reinforcement and Problem-Solving Clinic; Session 6 Metrics, Governance and Scale Plan, closing with a 90-day scale roadmap. We also offer the Operational Workflow and Readiness Audit, the AkiliNest Custom Playbook, Applied Team Cohorts and Training Academies, and Executive Alignment and Transformation Labs, for organisations in Nairobi and across Kenya.",
  },
  {
    path: "/teams/educators",
    jsonLd: () => faqPage(faqs.educatorFaqs),
    h1: "AI training for teachers in Kenya.",
    title: "AI Training for Teachers in Kenya | Educator Solutions | AkiliNest",
    description:
      "Practical AI training for teachers and schools in Kenya. Educator readiness audits, integration playbooks, hands-on teacher cohorts and leadership labs from AkiliNest.",
    body: "AkiliNest delivers practical AI training for teachers and schools in Kenya. The AkiliNest 6-Session Educator AI Program runs for a whole teaching team, often across staff development days: Session 1 Foundations, Learner Data and Baseline; Session 2 Prompting on Real Teaching Work; Session 3 Department Use-Case Labs; Session 4 Tools, Classroom Practice and Safe Usage; Session 5 Reinforcement and Problem-Solving Clinic; Session 6 Standards, Governance and Rollout, closing with a 90-day rollout plan. We also offer the Educator AI Readiness Audit, the Educator AI Integration Playbook, Applied Educator Cohorts and Training Academies, and Educational Leadership and Transformation Labs, building on frameworks like the TSC AI Educator Pathways powered by Microsoft Elevate.",
  },
  {
    path: "/kids-ai-bootcamps",
    jsonLd: () => ({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "AkiliNest",
      url: `${SITE}/kids-ai-bootcamps`,
      description:
        "Creative AI bootcamps for children aged 8 to 17 in Nairobi and across Kenya.",
      address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
      telephone: "+254702820845",
      email: "akilinest@gmail.com",
    }),
    h1: "The best AI training for kids in Kenya.",
    title: "The Best AI Training for Kids in Kenya | AI Bootcamps Nairobi | AkiliNest",
    description:
      "AkiliNest is Kenya's leading AI training company for kids. Creative AI bootcamps for children aged 8-17 in Nairobi, across four age stages, during the school holidays.",
    body: "Creative AI bootcamps for children aged 8 to 17 in Nairobi and across Kenya. Four programme stages: Sprouts, Explorers, Builders and Innovators.",
  },
  {
    path: "/hero-2026",
    h1: "AkiliNest selected for H.E.R.O. 2026.",
    title: "AkiliNest Selected for H.E.R.O. 2026 | Harmonic Innovation Group",
    description:
      "AkiliNest was selected for H.E.R.O. 2026, the Harmonic Euro-African Ramp-up Orbit acceleration and internationalisation programme. One of 20 startups selected from 324 applications across 23 countries.",
    body: "AkiliNest was selected for H.E.R.O., the Harmonic Euro-African Ramp-up Orbit, supported by Harmonic Innovation Group, BeEntrepreneurs and Startup Africa Roadtrip. One of 20 startups selected from 324 applications across 23 countries.",
  },
  {
    path: "/insights",
    h1: "Practical notes on using AI well.",
    title: "Insights on Practical AI for Kenyan Teams | AkiliNest",
    description:
      "Founder-led articles on using AI well at work and in the classroom: safe everyday use, practical workflows, and responsible AI habits for Kenyan teams.",
    body: "Practical notes on using AI well at work and in the classroom, written from real workshops with Kenyan teams.",
  },
  {
    path: "/programme",
    title: "Sprouts to Innovators | Age-Based Creative Programmes | AkiliNest",
    description:
      "Four age-appropriate programmes for children 8–17 across Kenya: Sprouts, Explorers, Builders, and Innovators. Creative intelligence training for the AI era.",
    body: "Four stages of creative intelligence: Sprouts ages 8-10, Explorers 11-12, Builders 13-14, Innovators 15-17.",
  },
  {
    path: "/events",
    title: "Kids AI Bootcamps & Holiday Camps in Nairobi | AkiliNest",
    description:
      "AkiliNest creative AI bootcamps and holiday camps for children aged 8-17 at heARTspace, Nairobi. Join the waiting list to hear when the next intake opens.",
    body: "AkiliNest creative AI bootcamps and holiday camps for children aged 8 to 17 at heARTspace, Kabarnet Road, Nairobi. Next intake dates announced soon.",
  },
  {
    path: "/faq",
    title: "FAQ | AkiliNest Creative Studio Kenya",
    description:
      "Frequently asked questions about AkiliNest programmes, AI safety, thinking-first learning, and enrolment for children aged 8–17 across Kenya.",
    body: "FAQ: Will AI make my child lazy? How is AkiliNest different from school? What age ranges do you accept?",
  },
  {
    path: "/blog",
    title: "Parent Guides & Insights for Raising Kids in the AI Era | AkiliNest",
    description:
      "Research-backed guides for Kenyan parents: AI safety, CBC gaps, extracurriculars, future skills, and creative programmes.",
    body: "Parent guides covering ChatGPT safety, AI cheating, CBC gaps, extracurricular activities Nairobi, future skills 2030.",
  },
  {
    path: "/parents-guide",
    title: "The Nairobi Parent's Guide to Raising Thinkers in the AI Era | AkiliNest",
    description:
      "Is AkiliNest right for your family? Complete guide for Kenyan parents: who it's for, what children learn, how to start.",
    body: "Nairobi parent guide: who AkiliNest is perfect for, five steps to enrol, requirements to get started.",
  },
  {
    path: "/future-skills-report",
    title: "The Future Skills Report 2026: What Kenyan Kids Need | AkiliNest",
    description:
      "Research-backed report: six skills children need before 2030, parent data on AI concerns, and what schools are missing.",
    body: "Future Skills Report 2026: independent reasoning, creative articulation, AI literacy, digital safety, problem framing, ethical technology.",
  },
  {
    path: "/about",
    h1: "We help people in Kenya work and learn well with AI.",
    title: "About AkiliNest | Practical AI Upskilling in Kenya",
    description: "AkiliNest helps workplace and educator teams in Kenya use AI well, and runs creative AI bootcamps for young people aged 8 to 17.",
    body: "AkiliNest is a Nairobi-based company providing practical AI upskilling for teams and creative AI bootcamps for young people.",
  },
  {
    path: "/contact",
    h1: "Tell us what you are trying to do.",
    title: "Contact AkiliNest | Book a Team Discovery Call",
    description: "Book a team discovery call or ask about kids bootcamps. Email akilinest@gmail.com or WhatsApp 0702 820 845.",
    body: "Contact AkiliNest Nairobi. Book a team discovery call, or join the kids bootcamp waiting list. WhatsApp 0702820845. Email akilinest@gmail.com.",
  },
  {
    path: "/pis",
    title: "Parent Intelligence Series | AkiliNest Nairobi",
    description: "Five parent sessions on raising children in the AI era: screens, safety, creation, and future skills.",
    body: "Parent Intelligence Series for Kenyan families. Five thoughtful sessions on technology and parenting.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy | AkiliNest",
    description: "How AkiliNest collects, uses, and protects your personal information.",
    body: "AkiliNest privacy policy: your data rights and how we protect your information.",
  },
  {
    path: "/terms",
    title: "Terms of Service | AkiliNest",
    description: "Terms and conditions for AkiliNest programmes, enrolment, and website use.",
    body: "AkiliNest terms of service: enrolment terms, cancellation policy, and website use.",
  },
];

// Blog slugs: keep in sync with src/content/blog/posts.ts
const blogSlugs = [
  { slug: "is-ai-safe-for-my-child-nairobi", title: "Is AI Safe for My Child? A Parent's Guide to AI Education in Nairobi", description: "Is AI safe for kids in Nairobi? A parent's guide to AI education, safety rules, and how AkiliNest teaches children to think first before using AI." },
  { slug: "top-5-holiday-camps-nairobi-2026-future-skills", title: "Top 5 Holiday Camps in Nairobi 2026 for Future Skills", description: "Looking for holiday camps in Nairobi 2026? Here are 5 camp types that build future skills, plus why AkiliNest adds thinking-first AI education." },
  { slug: "what-age-should-kids-start-learning-ai-akilnest", title: "What Age Should Kids Start Learning AI? Expert Advice from AkiliNest", description: "What age should kids start learning AI in Nairobi? AkiliNest expert advice on developmental stages and the thinking-first rules that keep AI safe." },
  { slug: "a-day-at-akilnest-what-children-learn", title: "A Day at AkiliNest: What Children Actually Learn in Our Workshops", description: "What happens in an AkiliNest workshop day? A Nairobi walkthrough of the thinking-first cycle: think, use AI wisely, and present confidently." },
  { slug: "how-to-help-child-think-creatively-with-ai", title: "How to Help Your Child Think Creatively with AI Without Letting AI Do the Thinking", description: "Three practical tips for Nairobi parents: think first, create boldly, use AI wisely. Plus what AkiliNest does differently." },
  { slug: "is-chatgpt-safe-for-my-child", title: "Is ChatGPT Safe for Your Child? What Nairobi Parents Need to Know", description: "60% of parents worry about inappropriate AI content. Research-backed guide for Nairobi families." },
  { slug: "is-my-kid-cheating-with-ai", title: "Is My Kid Cheating with AI? A Nairobi Parent's Guide", description: "How to tell cheating from learning when your child uses AI for homework." },
  { slug: "what-is-my-child-doing-on-ai", title: "What Is Your Child Actually Doing on AI? The 37% Awareness Gap", description: "Only 37% of parents knew their teen used AI. How to find out and start the conversation." },
  { slug: "ai-chatbots-inappropriate-kids", title: "Can AI Chatbots Be Inappropriate with Kids?", description: "What parents need to know about companion chatbots and child safety." },
  { slug: "will-ai-harm-critical-thinking", title: "Will AI Make My Child Lose Critical Thinking Skills?", description: "What 56% of parents fear and what actually protects young minds." },
  { slug: "best-ai-tools-kids-learning", title: "Best AI Tools for My Child's Learning: A Parent's Shortlist", description: "77% of parents want AI education tools. Age-appropriate list for Nairobi families." },
  { slug: "extracurriculars-nairobi-confidence", title: "Nairobi Parent's Guide to Extracurriculars That Build Confidence", description: "How to choose extracurricular activities for kids in Nairobi." },
  { slug: "after-school-nairobi-child-mind", title: "After School in Nairobi: What Develops Your Child's Mind", description: "After school activities for kids in Kenya beyond homework and screens." },
  { slug: "creative-classes-nairobi-think", title: "Where Nairobi Kids Learn to Think, Not Just Click", description: "Creative classes for children in Nairobi that prioritise original thinking." },
  { slug: "weekend-activities-nairobi-smarter", title: "Weekend Activities in Nairobi That Make Kids Smarter", description: "Things to do with kids in Nairobi this weekend." },
  { slug: "raise-confident-kids-kenya", title: "The Confidence Gap: Raising Bold Kids in Kenya", description: "How to raise confident kids in Kenya." },
  { slug: "shy-child-find-voice-nairobi", title: "From Quiet to Confident: Helping Shy Kids Find Their Voice", description: "My child is shy what to do, Nairobi creative studio approach." },
  { slug: "kids-not-interested-school-nairobi", title: "When School Feels Boring: Reigniting Curiosity in Nairobi", description: "Kids not interested in school, how to reconnect curious children." },
  { slug: "parenting-digital-age-africa", title: "Raising Thinkers in the AI Era: A Nairobi Parent's Playbook", description: "Parenting in the digital age Africa, practical playbook." },
  { slug: "cbc-promises-vs-reality", title: "What CBC Promises vs. What Your Child Actually Needs", description: "CBC curriculum gaps in Kenya." },
  { slug: "cbc-digital-literacy-question-algorithm", title: "CBC Added Digital Literacy. Who Teaches Kids to Question the Algorithm?", description: "Critical AI literacy missing from most Kenyan classrooms." },
  { slug: "school-principals-ai-question", title: "10 Nairobi School Principals Couldn't Answer This AI Question", description: "83% of parents say schools have not communicated AI policy." },
  { slug: "future-skills-2030-one-skill", title: "The One Skill Your Child Needs Before 2030", description: "Future skills for children 2030, independent reasoning beats coding certificates." },
  { slug: "coding-certificate-wont-matter-2030", title: "Why Your Child's Coding Certificate Won't Matter in 2030", description: "Creative intelligence and reasoning matter more than certificates." },
  { slug: "african-stack-for-kids", title: "The African Stack for Kids: M-Pesa, Climate, Community", description: "African context for children's technology education in Nairobi." },
  { slug: "50-nairobi-parents-ai-era", title: "What I Learned From 50 Nairobi Parents About Raising Kids in the AI Era", description: "Five shared fears and three surprising hopes." },
  { slug: "mom-google-says-to-mom-i-disagree", title: "From Mom Google Says to Mom I Disagree", description: "How children move from accepting AI answers to independent positions." },
  { slug: "kes-investment-future-proof-mind", title: "What Should a Holiday Programme in Nairobi Actually Give Your Child?", description: "How to judge whether a Nairobi holiday programme is worth paying for: what to look for, what to avoid, and the questions to ask before you book." },
];

/**
 * The prerendered copy exists for crawlers that do not run JavaScript. In a real
 * browser it would flash unstyled for a moment before React replaces #root, so
 * this hides it the instant scripting is available. The class lands on <html>
 * before the body paints, so nothing is ever shown and then taken away.
 * Crawlers without JS never get the class and read the markup normally.
 */
const PRERENDER_HEAD = `<style>html.js [data-prerender]{display:none}</style>
  <script>document.documentElement.className+=" js"</script>`;

/**
 * Fonts are linked rather than @imported from the CSS, so every prerendered
 * route needs the same links the Vite shell has, or it renders in a fallback
 * face until the user navigates.
 */
const FONT_HEAD = `<link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap" />`;

function buildHtml({ title, description, path: pagePath, body, h1, jsonLd }) {
  const url = `${SITE}${pagePath === "/" ? "" : pagePath}`;
  const fullTitle = title.includes("AkiliNest") ? title : `${title} | AkiliNest`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${fullTitle}</title>
  <meta name="description" content="${description}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${url}" />
  <meta property="og:site_name" content="AkiliNest" />
  <meta property="og:title" content="${fullTitle}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${SITE}/opengraph.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${fullTitle}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${SITE}/opengraph.jpg" />
  <link rel="icon" type="image/png" href="/logo.png" />
${jsonLd ? `  <script type="application/ld+json">${JSON.stringify(jsonLd())}</script>\n` : ""}  ${FONT_HEAD}
  ${PRERENDER_HEAD}
</head>
<body>
  <div id="root">
    <main data-prerender>
      <h1>${h1 ?? title.split(" | ")[0]}</h1>
      <p>${description}</p>
      <p>${body}</p>
      <nav>
        <a href="${SITE}/">Home</a> |
        <a href="${SITE}/ai-training-kenya">AI Training Kenya</a> |
        <a href="${SITE}/teams">For Teams</a> |
        <a href="${SITE}/teams/corporate">Corporate Teams</a> |
        <a href="${SITE}/teams/educators">Educator Teams</a> |
        <a href="${SITE}/kids-ai-bootcamps">Kids Bootcamps</a> |
        <a href="${SITE}/insights">Insights</a> |
        <a href="${SITE}/hero-2026">H.E.R.O. 2026</a> |
        <a href="${SITE}/blog">Parent Guides</a> |
        <a href="${SITE}/about">About</a> |
        <a href="${SITE}/contact">Contact</a>
      </nav>
    </main>
  </div>
  <script type="module" crossorigin src="/assets/index.js"></script>
</body>
</html>`;
}

function assetPrefix(pagePath) {
  const depth = pagePath === "/" ? 0 : pagePath.split("/").filter(Boolean).length;
  return depth === 0 ? "" : "../".repeat(depth);
}

function writeRoute(pagePath, html, indexHtml) {
  const dir = pagePath === "/" ? DIST : path.join(DIST, pagePath.slice(1));
  if (pagePath !== "/") fs.mkdirSync(dir, { recursive: true });

  // Match the built bundle specifically. A bare /<script[^>]+src=/ also matches
  // the Google Analytics tag that sits first in index.html, which produced a
  // malformed src and stopped the app hydrating on every prerendered route.
  const scriptMatch = indexHtml.match(/<script[^>]+src="(\/assets\/[^"]+\.js)"[^>]*><\/script>/);
  const cssMatch = indexHtml.match(/<link[^>]+href="(\/assets\/[^"]+\.css)"[^>]*>/);
  const prefix = assetPrefix(pagePath);

  let patched = html;
  if (scriptMatch) {
    const assetPath = scriptMatch[1].replace(/^\//, "");
    patched = patched.replace("/assets/index.js", `${prefix}${assetPath}`);
  }
  if (cssMatch) {
    const cssPath = cssMatch[1].replace(/^\//, "");
    patched = patched.replace(
      "</head>",
      `  <link rel="stylesheet" crossorigin href="${prefix}${cssPath}">\n</head>`,
    );
  }
  patched = patched.replace('href="/logo.png"', `href="${prefix}logo.png"`);

  const outFile = pagePath === "/" ? path.join(DIST, "index.html") : path.join(dir, "index.html");

  if (pagePath === "/") {
    let root = indexHtml;
    const title = html.match(/<title>([^<]*)<\/title>/)?.[1] || "AkiliNest";
    root = root.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);
    const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
    if (desc) {
      root = root.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${desc}"`);
    }
    // The homepage otherwise ships an empty #root, so crawlers that do not run
    // JavaScript (OAI-SearchBot among them) see no copy at all on the one page
    // that matters most. React replaces this markup on hydration.
    // Organization data is emitted by react-helmet at runtime, so it never
    // reaches crawlers that do not execute JavaScript. Emit it statically too.
    const orgLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "AkiliNest",
      url: `${SITE}/`,
      logo: `${SITE}/logo.png`,
      sameAs: ["https://www.linkedin.com/company/akilinest/"],
      description:
        "AkiliNest provides practical AI upskilling for workplace and educator teams in Kenya, and creative AI bootcamps for young people aged 8 to 17.",
      address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+254702820845",
        email: "akilinest@gmail.com",
        areaServed: "KE",
        availableLanguage: "English",
      },
    };
    root = root.replace(
      "</head>",
      `  <script type="application/ld+json">${JSON.stringify(orgLd)}</script>\n  ${PRERENDER_HEAD}\n</head>`,
    );

    const fallback = html.match(/<main data-prerender>[\s\S]*?<\/main>/)?.[0];
    if (fallback) {
      // Match the container whether or not a previous run already filled it,
      // so re-running without a fresh vite build still refreshes the copy.
      // The injected markup contains no nested divs, so the lazy match ends on
      // the container's own closing tag whether or not it is already filled.
      root = root.replace(
        /<div id="root">[\s\S]*?<\/div>/,
        `<div id="root">${fallback}</div>`,
      );
    }
    fs.writeFileSync(outFile, root);
  } else {
    fs.writeFileSync(outFile, patched);
  }
}

function generateSitemap() {
  const urls = [
    ...staticPages.map((p) => p.path),
    ...insightPosts.map((p) => `/insights/${p.slug}`),
    ...blogSlugs.map((b) => `/blog/${b.slug}`),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${SITE}${u === "/" ? "" : u}</loc>
    <changefreq>${u.startsWith("/blog") ? "weekly" : "monthly"}</changefreq>
    <priority>${u === "/" ? "1.0" : u === "/blog" ? "0.9" : "0.8"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  fs.writeFileSync(path.join(DIST, "sitemap.xml"), xml);
  console.log(`Generated sitemap.xml with ${urls.length} URLs`);
}

function main() {
  if (!fs.existsSync(DIST)) {
    console.error("Dist folder not found. Run vite build first.");
    process.exit(1);
  }

  const indexHtml = fs.readFileSync(path.join(DIST, "index.html"), "utf8");

  for (const page of staticPages) {
    const html = buildHtml(page);
    writeRoute(page.path, html, indexHtml);
    console.log(`SEO page: ${page.path}`);
  }

  for (const post of insightPosts) {
    const html = buildHtml({
      path: `/insights/${post.slug}`,
      title: `${post.title} | AkiliNest`,
      h1: post.title,
      description: post.description,
      body: post.body,
      jsonLd: () => ({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.description,
        author: { "@type": "Organization", name: "AkiliNest" },
        publisher: {
          "@type": "Organization",
          name: "AkiliNest",
          logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
        },
        mainEntityOfPage: `${SITE}/insights/${post.slug}`,
      }),
    });
    writeRoute(`/insights/${post.slug}`, html, indexHtml);
    console.log(`SEO insight: /insights/${post.slug}`);
  }

  for (const post of blogSlugs) {
    const html = buildHtml({
      path: `/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      body: post.description,
    });
    writeRoute(`/blog/${post.slug}`, html, indexHtml);
    console.log(`SEO blog: /blog/${post.slug}`);
  }

  // robots.txt
  const robots = `User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;
  fs.writeFileSync(path.join(DIST, "robots.txt"), robots);

  // llms.txt: a short, curated summary for AI assistants. Generated here so it
  // is regenerated with every build and cannot drift from the real routes.
  const llms = `# AkiliNest

> Practical AI upskilling for workplace and educator teams in Kenya, and creative AI bootcamps for young people aged 8 to 17. Based in Nairobi.

AkiliNest runs two programmes. For organisations, we help workplace and educator teams turn AI into practical workflows, better output and responsible everyday use, through the AI Workflow Bootcamp and related engagements. For families, we run creative AI bootcamps where children aged 8 to 17 build original projects with AI and digital tools across four stages: Sprouts (8-10), Explorers (11-12), Builders (13-14) and Innovators (15-17).

AI use is running ahead of formal AI training. AkiliNest exists to close that gap on both sides.

AkiliNest was selected for H.E.R.O. 2026, the Harmonic Euro-African Ramp-up Orbit, one of 20 startups selected from 324 applications across 23 countries.

## For Teams
- AI training in Kenya: ${SITE}/ai-training-kenya
- AI upskilling for teams: ${SITE}/teams
- Corporate and enterprise solutions: ${SITE}/teams/corporate
- AI training for educator teams and teachers: ${SITE}/teams/educators
- Book a team discovery call: ${SITE}/contact

## For Families
- Creative AI bootcamps for kids aged 8-17: ${SITE}/kids-ai-bootcamps
- Programme stages: ${SITE}/programme
- Camps and events: ${SITE}/events
- Parent Intelligence Series: ${SITE}/pis
- Parents' guide: ${SITE}/parents-guide

## Company
- About AkiliNest: ${SITE}/about
- Insights for teams: ${SITE}/insights
- H.E.R.O. 2026 selection: ${SITE}/hero-2026
- Parent guides and articles: ${SITE}/blog
- FAQ: ${SITE}/faq
- Contact: ${SITE}/contact

## Contact
- Email: akilinest@gmail.com
- WhatsApp: +254 702 820 845
- Location: Nairobi, Kenya
- Kids bootcamp venue: heARTspace, Kabarnet Road, off Ngong Road, Nairobi
`;
  fs.writeFileSync(path.join(DIST, "llms.txt"), llms);
  console.log("Generated llms.txt");

  generateSitemap();
  console.log("SEO generation complete.");
}

main();
