/**
 * Structured data (JSON-LD) builders.
 *
 * Plain .mjs rather than .ts so the two things that need this schema can share
 * one copy: the React pages import it through Vite, and scripts/generate-seo.mjs
 * imports it directly in Node to stamp the same JSON into the prerendered
 * shells. Social scrapers and simpler crawlers never run our JavaScript, so the
 * shell is the only structured data they will ever see; a second hand-kept copy
 * would drift the moment anyone edited one side. Types live in schema.d.ts.
 *
 * Rule for anything added here: only describe what the pages actually say.
 * Google treats structured data that outruns the visible content as spam, and
 * for a business selling to schools and companies that is not a risk worth
 * taking for a rich result. That is why there are no prices below — the site
 * does not publish any.
 */

const SITE = "https://akilinest.co.ke";

export const ORG = {
  name: "AkiliNest",
  url: `${SITE}/`,
  logo: `${SITE}/logo.png`,
  image: `${SITE}/opengraph.jpg`,
  email: "akilinest@gmail.com",
  telephone: "+254702820845",
  description:
    "AkiliNest provides practical AI upskilling for workplace and educator teams in Kenya, and creative AI bootcamps for young people aged 8 to 17.",
  sameAs: ["https://www.linkedin.com/company/akilinest/", "https://wa.me/254702820845"],
};

/** The room the kids bootcamps and camps actually run in. */
export const VENUE_NAME = "heARTspace";
export const VENUE_STREET = "Kabarnet Road, off Ngong Road";

/** The venue's address. Only used for places we actually teach in. */
const venueAddress = () => ({
  "@type": "PostalAddress",
  streetAddress: VENUE_STREET,
  addressLocality: "Nairobi",
  addressCountry: "KE",
});

/**
 * The organisation's own address stays at city level. heARTspace is where the
 * kids camps run, not a registered business address, and claiming a street we
 * have not confirmed is exactly the kind of detail Google penalises.
 */
const orgAddress = () => ({
  "@type": "PostalAddress",
  addressLocality: "Nairobi",
  addressCountry: "KE",
});

const provider = () => ({
  "@type": "EducationalOrganization",
  name: ORG.name,
  url: ORG.url,
});

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: ORG.name,
    url: ORG.url,
    logo: ORG.logo,
    image: ORG.image,
    description: ORG.description,
    email: ORG.email,
    telephone: ORG.telephone,
    address: orgAddress(),
    areaServed: { "@type": "Country", name: "Kenya" },
    sameAs: ORG.sameAs,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: ORG.telephone,
      email: ORG.email,
      areaServed: "KE",
      availableLanguage: ["en", "sw"],
    },
  };
}

/**
 * One Course. `offers` is emitted only when a price is passed: schema.org
 * allows an Offer without one, but Google flags the omission, and inventing a
 * figure the page does not show is worse than the warning.
 */
export function courseSchema({
  name,
  description,
  path,
  courseMode = "Onsite",
  audience,
  onsite = true,
  price,
}) {
  const url = `${SITE}${path}`;
  const instance = {
    "@type": "CourseInstance",
    courseMode,
    ...(onsite
      ? {
          location: {
            "@type": "Place",
            name: VENUE_NAME,
            address: venueAddress(),
          },
        }
      : {}),
  };

  return {
    "@type": "Course",
    name,
    description,
    url,
    provider: provider(),
    inLanguage: "en",
    ...(audience ? { audience: { "@type": "Audience", audienceType: audience } } : {}),
    hasCourseInstance: instance,
    ...(price
      ? {
          offers: {
            "@type": "Offer",
            category: "Paid",
            price,
            priceCurrency: "KES",
            url,
          },
        }
      : {}),
  };
}

/**
 * The four kids stages as a Course list. One page carrying several courses is
 * an ItemList of Course in Google's model, not four loose Course blocks.
 */
export function kidsCoursesSchema(stages) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AkiliNest Kids AI Bootcamps",
    itemListElement: stages.map((stage, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: courseSchema({
        name: `AkiliNest ${stage.name} — Creative AI Bootcamp`,
        description: `${stage.about} ${stage.age}.`,
        path: "/kids-ai-bootcamps",
        audience: `Children, ${stage.age.toLowerCase()}`,
      }),
    })),
  };
}

/** A single Course wrapped so it can stand alone in a page head. */
export function standaloneCourse(args) {
  return { "@context": "https://schema.org", ...courseSchema(args) };
}

/**
 * The camp intake. Dates come from content/events.ts, which records intakes at
 * the precision they are announced — currently a month range, because session
 * times are only confirmed on registration. Month precision is valid ISO 8601
 * and honest; Google may hold back the date rich result until exact days exist.
 */
export function campEventSchema({ name, description, startDate, endDate, registrationUrl, price }) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    startDate,
    ...(endDate ? { endDate } : {}),
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    image: ORG.image,
    location: {
      "@type": "Place",
      name: VENUE_NAME,
      address: venueAddress(),
    },
    organizer: { "@type": "Organization", name: ORG.name, url: ORG.url },
    ...(registrationUrl || price
      ? {
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            ...(registrationUrl ? { url: registrationUrl } : {}),
            ...(price ? { price, priceCurrency: "KES" } : {}),
          },
        }
      : {}),
  };
}
