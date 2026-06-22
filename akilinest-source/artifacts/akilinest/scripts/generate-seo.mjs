/**
 * Post-build SEO generator: creates per-route HTML shells with crawlable
 * meta tags and visible text content for search engines and social scrapers.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, "../dist/public");
const SITE = "https://akilinest.co.ke";

const staticPages = [
  {
    path: "/",
    title: "AkiliNest | Creative AI Programmes for Children 6–17 in Nairobi",
    description:
      "AkiliNest trains children aged 6 to 17 in Nairobi to think first, create boldly, and use AI wisely. Weekend sessions, holiday camps at heARTspace.",
    body: "AkiliNest is a thinking-first creative studio in Nairobi for children aged 6 to 17.",
  },
  {
    path: "/programme",
    title: "Sprouts to Innovators | Age-Based Creative Programmes | AkiliNest",
    description:
      "Four age-appropriate programmes for children 6–17 in Nairobi: Sprouts, Explorers, Builders, and Innovators. Creative intelligence training for the AI era.",
    body: "Four stages of creative intelligence: Sprouts ages 6-8, Explorers 9-11, Builders 12-14, Innovators 15-17.",
  },
  {
    path: "/events",
    title: "Holiday Camps July–August 2026 | AkiliNest",
    description:
      "Register for AkiliNest holiday camps in Nairobi. July and August 2026 intakes at heARTspace. Ages 6-17, 10 days each, 2 hours daily. Limited spots.",
    body: "Holiday camps July 6-19, 20-31 and August 3-16, 17-28 2026 at heARTspace Kabarnet Road Nairobi.",
  },
  {
    path: "/faq",
    title: "FAQ | AkiliNest Creative Studio Nairobi",
    description:
      "Frequently asked questions about AkiliNest programmes, AI safety, thinking-first learning, and enrolment for children aged 6–17 in Nairobi.",
    body: "FAQ: Will AI make my child lazy? How is AkiliNest different from school? What age ranges do you accept?",
  },
  {
    path: "/blog",
    title: "Parent Guides & Insights for Raising Kids in the AI Era | AkiliNest",
    description:
      "Research-backed guides for Nairobi parents — AI safety, CBC gaps, extracurriculars, future skills, and creative programmes.",
    body: "Parent guides covering ChatGPT safety, AI cheating, CBC gaps, extracurricular activities Nairobi, future skills 2030.",
  },
  {
    path: "/parents-guide",
    title: "The Nairobi Parent's Guide to Raising Thinkers in the AI Era | AkiliNest",
    description:
      "Is AkiliNest right for your family? Complete guide for Nairobi parents — who it's for, what children learn, how to start.",
    body: "Nairobi parent guide: who AkiliNest is perfect for, five steps to enrol, requirements to get started.",
  },
  {
    path: "/future-skills-report",
    title: "The Future Skills Report 2026: What Nairobi Kids Need | AkiliNest",
    description:
      "Research-backed report — six skills children need before 2030, parent data on AI concerns, and what schools are missing.",
    body: "Future Skills Report 2026: independent reasoning, creative articulation, AI literacy, digital safety, problem framing, ethical technology.",
  },
  {
    path: "/about",
    title: "About AkiliNest | Thinking-First Creative Studio Nairobi",
    description: "Our philosophy: protect thinking, then use AI. Cognitive resilience training for children in the AI era.",
    body: "AkiliNest philosophy: AI should stretch thinking not replace it. Based in Nairobi Kenya.",
  },
  {
    path: "/contact",
    title: "Contact AkiliNest | Register Your Child Nairobi",
    description: "Contact AkiliNest to register your child. Email akilinest@gmail.com or WhatsApp 0702 820 845.",
    body: "Contact AkiliNest Nairobi. WhatsApp 0702820845. Email akilinest@gmail.com.",
  },
  {
    path: "/pis",
    title: "Parent Intelligence Series | AkiliNest Nairobi",
    description: "Five parent sessions on raising children in the AI era — screens, safety, creation, and future skills.",
    body: "Parent Intelligence Series for Nairobi families. Five thoughtful sessions on technology and parenting.",
  },
  {
    path: "/privacy",
    title: "Privacy Policy | AkiliNest",
    description: "How AkiliNest collects, uses, and protects your personal information.",
    body: "AkiliNest privacy policy — your data rights and how we protect your information.",
  },
  {
    path: "/terms",
    title: "Terms of Service | AkiliNest",
    description: "Terms and conditions for AkiliNest programmes, enrolment, and website use.",
    body: "AkiliNest terms of service — enrolment terms, cancellation policy, and website use.",
  },
];

// Blog slugs — keep in sync with src/content/blog/posts.ts
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
  { slug: "best-ai-tools-kids-learning", title: "Best AI Tools for My Child's Learning — A Parent's Shortlist", description: "77% of parents want AI education tools. Age-appropriate list for Nairobi families." },
  { slug: "extracurriculars-nairobi-confidence", title: "Nairobi Parent's Guide to Extracurriculars That Build Confidence", description: "How to choose extracurricular activities for kids in Nairobi." },
  { slug: "after-school-nairobi-child-mind", title: "After School in Nairobi: What Develops Your Child's Mind", description: "After school activities for kids in Kenya beyond homework and screens." },
  { slug: "creative-classes-nairobi-think", title: "Where Nairobi Kids Learn to Think — Not Just Click", description: "Creative classes for children in Nairobi that prioritise original thinking." },
  { slug: "weekend-activities-nairobi-smarter", title: "Weekend Activities in Nairobi That Make Kids Smarter", description: "Things to do with kids in Nairobi this weekend." },
  { slug: "raise-confident-kids-kenya", title: "The Confidence Gap: Raising Bold Kids in Kenya", description: "How to raise confident kids in Kenya." },
  { slug: "shy-child-find-voice-nairobi", title: "From Quiet to Confident: Helping Shy Kids Find Their Voice", description: "My child is shy what to do — Nairobi creative studio approach." },
  { slug: "kids-not-interested-school-nairobi", title: "When School Feels Boring: Reigniting Curiosity in Nairobi", description: "Kids not interested in school — how to reconnect curious children." },
  { slug: "parenting-digital-age-africa", title: "Raising Thinkers in the AI Era: A Nairobi Parent's Playbook", description: "Parenting in the digital age Africa — practical playbook." },
  { slug: "cbc-promises-vs-reality", title: "What CBC Promises vs. What Your Child Actually Needs", description: "CBC curriculum gaps in Kenya." },
  { slug: "cbc-digital-literacy-question-algorithm", title: "CBC Added Digital Literacy. Who Teaches Kids to Question the Algorithm?", description: "Critical AI literacy missing from most Kenyan classrooms." },
  { slug: "school-principals-ai-question", title: "10 Nairobi School Principals Couldn't Answer This AI Question", description: "83% of parents say schools have not communicated AI policy." },
  { slug: "future-skills-2030-one-skill", title: "The One Skill Your Child Needs Before 2030", description: "Future skills for children 2030 — independent reasoning beats coding certificates." },
  { slug: "coding-certificate-wont-matter-2030", title: "Why Your Child's Coding Certificate Won't Matter in 2030", description: "Creative intelligence and reasoning matter more than certificates." },
  { slug: "african-stack-for-kids", title: "The African Stack for Kids: M-Pesa, Climate, Community", description: "African context for children's technology education in Nairobi." },
  { slug: "50-nairobi-parents-ai-era", title: "What I Learned From 50 Nairobi Parents About Raising Kids in the AI Era", description: "Five shared fears and three surprising hopes." },
  { slug: "mom-google-says-to-mom-i-disagree", title: "From Mom Google Says to Mom I Disagree", description: "How children move from accepting AI answers to independent positions." },
  { slug: "kes-investment-future-proof-mind", title: "The KSh 12000 Holiday Camp That Future-Proofs Your Child's Mind", description: "Affordable creative classes for kids in Nairobi." },
];

function buildHtml({ title, description, path: pagePath, body }) {
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
</head>
<body>
  <div id="root">
    <main>
      <h1>${title.split(" | ")[0]}</h1>
      <p>${description}</p>
      <p>${body}</p>
      <nav>
        <a href="${SITE}/">Home</a> |
        <a href="${SITE}/programme">Programmes</a> |
        <a href="${SITE}/events">Events</a> |
        <a href="${SITE}/blog">Parent Guides</a> |
        <a href="${SITE}/faq">FAQ</a> |
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

  const scriptMatch = indexHtml.match(/<script[^>]+src="([^"]+)"[^>]*><\/script>/);
  const cssMatch = indexHtml.match(/<link[^>]+href="([^"]+\.css)"[^>]*>/);
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
    fs.writeFileSync(outFile, root);
  } else {
    fs.writeFileSync(outFile, patched);
  }
}

function generateSitemap() {
  const urls = [
    ...staticPages.map((p) => p.path),
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

Sitemap: ${SITE}/sitemap.xml
`;
  fs.writeFileSync(path.join(DIST, "robots.txt"), robots);

  generateSitemap();
  console.log("SEO generation complete.");
}

main();
