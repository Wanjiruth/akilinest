/** Types for schema.mjs, which stays plain JS so Node's SEO generator can import it too. */
type Json = Record<string, unknown>;

export declare const ORG: {
  name: string;
  url: string;
  logo: string;
  image: string;
  email: string;
  telephone: string;
  description: string;
  sameAs: string[];
};
export declare const VENUE_NAME: string;
export declare const VENUE_STREET: string;

export declare function organizationSchema(): Json;

export declare function courseSchema(args: {
  name: string;
  description: string;
  path: string;
  courseMode?: "Onsite" | "Online" | "Blended";
  audience?: string;
  onsite?: boolean;
  price?: string;
}): Json;

export declare function standaloneCourse(args: Parameters<typeof courseSchema>[0]): Json;

export declare function kidsCoursesSchema(
  stages: readonly { name: string; age: string; about: string }[],
): Json;

export declare function campEventSchema(args: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  registrationUrl?: string;
  price?: string;
}): Json;
