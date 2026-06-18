export const SITE_URL = "https://akilinest.co.ke";
export const SITE_NAME = "AkiliNest";
export const DEFAULT_OG_IMAGE = "/opengraph.jpg";

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
  image?: string;
};

export function fullTitle(title: string): string {
  if (title.includes("AkiliNest")) return title;
  return `${title} | AkiliNest`;
}

export function canonicalUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}
