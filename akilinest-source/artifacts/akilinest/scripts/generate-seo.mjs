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

/**
 * The same builders the React pages use, so the shell a scraper reads and the
 * head a browser renders cannot disagree. Course and Event data is regex-read
 * from the content modules for the same reason the insights are above: one copy.
 */
const { PAGE_SEO } = await import("../src/lib/pageSeo.mjs");

/**
 * Title, description and h1 come from the shared module; `body` stays here
 * because it is shell-only prose that the app never renders.
 */
function seo(path) {
  const entry = PAGE_SEO[path];
  if (!entry) throw new Error(`No PAGE_SEO entry for "${path}"`);
  const { keywords, ...rest } = entry;
  return { path, ...rest };
}

const {
  organizationSchema,
  kidsCoursesSchema,
  standaloneCourse,
  campEventSchema,
} = await import("../src/lib/schema.mjs");

function readKidsStages() {
  const src = fs.readFileSync(path.resolve(__dirname, "../src/content/kids.ts"), "utf8");
  const re = /name:\s*"([^"]+)",\s*\n\s*age:\s*"([^"]+)",[\s\S]*?about:\s*\n?\s*"((?:[^"\\]|\\.)*)"/g;
  const out = [];
  let m;
  while ((m = re.exec(src))) out.push({ name: m[1], age: m[2], about: m[3].replace(/\\"/g, '"') });
  return out;
}

function readProgramme(constName) {
  const src = fs.readFileSync(path.resolve(__dirname, "../src/content/pathways.ts"), "utf8");
  const block = new RegExp(
    `export const ${constName} = \\{\\s*\\n\\s*name:\\s*"([^"]+)",\\s*\\n\\s*format:\\s*\\n?\\s*"((?:[^"\\\\]|\\\\.)*)"`,
  ).exec(src);
  if (!block) throw new Error(`Could not read ${constName} out of pathways.ts`);
  return { name: block[1], format: block[2].replace(/\\"/g, '"') };
}

function readFeaturedCamp() {
  const src = fs.readFileSync(path.resolve(__dirname, "../src/content/events.ts"), "utf8");
  const reg = /EVENT_REGISTRATION_URL\s*=\s*"([^"]+)"/.exec(src);
  const title = /title:\s*"([^"]+)",\s*\n\s*dates:/.exec(src);
  const start = /startDate:\s*"([^"]+)"/.exec(src);
  const end = /endDate:\s*"([^"]+)"/.exec(src);
  const desc = /description:\s*\n?\s*"((?:[^"\\]|\\.)*)"/.exec(src);
  if (!title || !start) return null;
  return {
    name: title[1],
    description: desc ? desc[1].replace(/\\"/g, '"') : title[1],
    startDate: start[1],
    endDate: end ? end[1] : undefined,
    registrationUrl: reg ? reg[1] : undefined,
  };
}

const kidsStages = readKidsStages();
const featuredCamp = readFeaturedCamp();

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
    ...seo("/"),
    jsonLd: () => organizationSchema(),
    body: "AkiliNest closes the gap on both sides: practical AI upskilling for workplace and educator teams in Kenya, and creative AI bootcamps for young people aged 8 to 17.",
  },
  {
    ...seo("/ai-training-kenya"),
    body: "AkiliNest is an AI training company based in Nairobi, Kenya. We run practical AI training for workplace teams, AI training for teachers and school leadership, and creative AI bootcamps for young people aged 8 to 17. Kenya has the highest rate of ChatGPT use of any country in the world, at 42.1% of internet users aged 16 and over in the past month, according to the DataReportal and Meltwater Global Digital Report 2025. AI use is running ahead of formal AI training. Team sessions run on site at your offices in Nairobi or at our space, and we work with organisations across Kenya.",
  },
  {
    ...seo("/teams"),
    body: "Technology moves fast, but the human capability to use it effectively is often left behind. AkiliNest builds practical operating systems and hands-on training tracks for two environments: corporate teams and educator teams. AI use is running ahead of formal AI training. AkiliNest for Teams: AI Opportunity Session, AI Workflow Bootcamp, Team AI Playbook and AI Adoption Support for workplace and educator teams in Kenya.",
  },
  {
    ...seo("/teams/corporate"),
    jsonLd: () => [
      faqPage(faqs.teamFaqs),
      standaloneCourse({
        ...readProgramme("CORPORATE_PROGRAMME"),
        description: readProgramme("CORPORATE_PROGRAMME").format,
        path: "/teams/corporate",
        courseMode: "Blended",
        audience: "Workplace and leadership teams",
        onsite: false,
      }),
    ],
    body: "AkiliNest delivers practical, hands-on corporate AI training for teams across Kenya and East Africa. The AkiliNest 6-Session Corporate AI Program runs as six live sessions plus asynchronous support between them: Session 1 Foundations, Policy and Baseline; Session 2 Prompt Engineering and Core Workflows; Session 3 Department-Specific Use-Case Labs; Session 4 Tools, Integration and Safe Usage; Session 5 Reinforcement and Problem-Solving Clinic; Session 6 Metrics, Governance and Scale Plan, closing with a 90-day scale roadmap. We also offer the Operational Workflow and Readiness Audit, the AkiliNest Custom Playbook, Applied Team Cohorts and Training Academies, and Executive Alignment and Transformation Labs, for organisations in Nairobi and across Kenya.",
  },
  {
    ...seo("/teams/educators"),
    jsonLd: () => [
      faqPage(faqs.educatorFaqs),
      standaloneCourse({
        ...readProgramme("EDUCATOR_PROGRAMME"),
        description: readProgramme("EDUCATOR_PROGRAMME").format,
        path: "/teams/educators",
        courseMode: "Blended",
        audience: "Teachers, school leaders and education teams",
        onsite: false,
      }),
    ],
    body: "AkiliNest delivers practical AI training for teachers and schools in Kenya. The AkiliNest 6-Session Educator AI Program runs for a whole teaching team, often across staff development days: Session 1 Foundations, Learner Data and Baseline; Session 2 Prompting on Real Teaching Work; Session 3 Department Use-Case Labs; Session 4 Tools, Classroom Practice and Safe Usage; Session 5 Reinforcement and Problem-Solving Clinic; Session 6 Standards, Governance and Rollout, closing with a 90-day rollout plan. We also offer the Educator AI Readiness Audit, the Educator AI Integration Playbook, Applied Educator Cohorts and Training Academies, and Educational Leadership and Transformation Labs, building on frameworks like the TSC AI Educator Pathways powered by Microsoft Elevate.",
  },
  {
    ...seo("/kids-ai-bootcamps"),
    jsonLd: () => kidsCoursesSchema(kidsStages),
    body: "Creative AI bootcamps for children aged 8 to 17 in Nairobi and across Kenya. Four programme stages: Sprouts, Explorers, Builders and Innovators.",
  },
  {
    ...seo("/hero-2026"),
    body: "AkiliNest was selected for H.E.R.O., the Harmonic Euro-African Ramp-up Orbit, supported by Harmonic Innovation Group, BeEntrepreneurs and Startup Africa Roadtrip. One of 20 startups selected from 324 applications across 23 countries.",
  },
  {
    ...seo("/insights"),
    body: "Practical notes on using AI well at work and in the classroom, written from real workshops with Kenyan teams.",
  },
  {
    ...seo("/programme"),
    body: "Four stages of creative intelligence: Sprouts ages 8-10, Explorers 11-12, Builders 13-14, Innovators 15-17.",
  },
  {
    ...seo("/events"),
    jsonLd: () => (featuredCamp ? campEventSchema(featuredCamp) : undefined),
    body: "AkiliNest creative AI bootcamps and holiday camps for children aged 8 to 17 at heARTspace, Kabarnet Road, off Ngong Road, Nairobi. The next intake runs November to December 2026, across all four programme stages, with session times confirmed on registration.",
  },
  {
    ...seo("/faq"),
    body: "FAQ: Will AI make my child lazy? How is AkiliNest different from school? What age ranges do you accept?",
  },
  {
    ...seo("/blog"),
    body: "Parent guides covering ChatGPT safety, AI cheating, CBC gaps, extracurricular activities Nairobi, future skills 2030.",
  },
  {
    ...seo("/parents-guide"),
    body: "Nairobi parent guide: who AkiliNest is perfect for, five steps to enrol, requirements to get started.",
  },
  {
    ...seo("/future-skills-report"),
    body: "Future Skills Report 2026: independent reasoning, creative articulation, AI literacy, digital safety, problem framing, ethical technology.",
  },
  {
    ...seo("/about"),
    body: "AkiliNest is a Nairobi-based company providing practical AI upskilling for teams and creative AI bootcamps for young people.",
  },
  {
    ...seo("/contact"),
    body: "Contact AkiliNest Nairobi. Book a team discovery call, or join the kids bootcamp waiting list. WhatsApp 0702820845. Email akilinest@gmail.com.",
  },
  {
    ...seo("/pis"),
    body: "Parent Intelligence Series for Kenyan families. Five thoughtful sessions on technology and parenting.",
  },
  {
    ...seo("/privacy"),
    body: "AkiliNest privacy policy: your data rights and how we protect your information.",
  },
  {
    ...seo("/terms"),
    body: "AkiliNest terms of service: enrolment terms, cancellation policy, and website use.",
  },
];

/**
 * Blog posts are read straight out of posts.ts, the same way insights are.
 * There used to be a hand-maintained copy of every slug, title and description
 * down here under a "keep in sync" comment, which is a promise no one keeps.
 */
function readBlogPosts() {
  const src = fs.readFileSync(path.resolve(__dirname, "../src/content/blog/posts.ts"), "utf8");
  const unescape = (v) => v.replace(/\\"/g, '"').replace(/\\n/g, "\n");
  const out = [];
  for (const chunk of src.split(/\n  \{\n    slug: "/).slice(1)) {
    const slug = chunk.slice(0, chunk.indexOf('"'));
    const title = /title:\s*\n?\s*"((?:[^"\\]|\\.)*)"/.exec(chunk);
    const description = /description:\s*\n?\s*"((?:[^"\\]|\\.)*)"/.exec(chunk);
    // Every paragraph, so the shell carries the article rather than a repeat
    // of its own meta description.
    const paragraphs = [];
    for (const block of chunk.match(/paragraphs:\s*\[([\s\S]*?)\n\s*\],/g) || []) {
      for (const m of block.matchAll(/"((?:[^"\\]|\\.)*)"/g)) paragraphs.push(unescape(m[1]));
    }
    if (title && description) {
      out.push({ slug, title: unescape(title[1]), description: unescape(description[1]), paragraphs });
    }
  }
  return out;
}

const blogSlugs = readBlogPosts();

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

/**
 * Page copy is written as plain prose, so an "&" in a title reaches the HTML
 * bare. Browsers forgive it, but it is invalid in an attribute and there is no
 * reason to hand a social scraper something it has to guess at.
 */
function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Escapes prose, then turns the markdown-style links the articles are written
 * with into real anchors, so the crawlable shell carries the same internal
 * links a reader clicks.
 */
function richTextToHtml(text) {
  return esc(text).replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    (_, label, href) => `<a href="${href.startsWith("/") ? SITE + href : href}">${label}</a>`,
  );
}

function buildHtml({ title, description, path: pagePath, body, bodyHtml, h1, jsonLd }) {
  const url = `${SITE}${pagePath === "/" ? "" : pagePath}`;
  const fullTitle = title.includes("AkiliNest") ? title : `${title} | AkiliNest`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(fullTitle)}</title>
  <meta name="description" content="${esc(description)}" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="${url}" />
  <meta property="og:site_name" content="AkiliNest" />
  <meta property="og:title" content="${esc(fullTitle)}" />
  <meta property="og:description" content="${esc(description)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${SITE}/opengraph.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(fullTitle)}" />
  <meta name="twitter:description" content="${esc(description)}" />
  <meta name="twitter:image" content="${SITE}/opengraph.jpg" />
  <link rel="icon" type="image/png" href="/logo.png" />
${(() => { const d = jsonLd?.(); return d ? `  <script type="application/ld+json" data-prerender-ld>${JSON.stringify(d)}</script>\n` : ""; })()}  ${FONT_HEAD}
  ${PRERENDER_HEAD}
</head>
<body>
  <div id="root">
    <main data-prerender>
      <h1>${esc(h1 ?? title.split(" | ")[0])}</h1>
      <p>${esc(description)}</p>
      <p>${bodyHtml ?? esc(body)}</p>
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
    root = root.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`); // already escaped by buildHtml
    const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
    if (desc) {
      root = root.replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${desc}"`);
    }
    // Social scrapers never run our JavaScript, so whatever sits in index.html
    // is the card WhatsApp and LinkedIn show forever. Syncing it from the same
    // title and description as the rest of the shell stops the two drifting,
    // which is how the homepage came to advertise only the kids programmes.
    root = root
      .replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${title}"`)
      .replace(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${title}"`);
    if (desc) {
      root = root
        .replace(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${desc}"`)
        .replace(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${desc}"`);
    }
    // The homepage otherwise ships an empty #root, so crawlers that do not run
    // JavaScript (OAI-SearchBot among them) see no copy at all on the one page
    // that matters most. React replaces this markup on hydration.
    // Organization data is emitted by react-helmet at runtime, so it never
    // reaches crawlers that do not execute JavaScript. Emit it statically too,
    // from the same builder the page uses rather than a second copy that drifts.
    const orgLd = organizationSchema();
    root = root.replace(
      "</head>",
      `  <script type="application/ld+json" data-prerender-ld>${JSON.stringify(orgLd)}</script>\n  ${PRERENDER_HEAD}\n</head>`,
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
      bodyHtml: post.paragraphs.length
        ? post.paragraphs.map(richTextToHtml).join("</p>\n      <p>")
        : esc(post.description),
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
