/** Types for pageSeo.mjs, which stays plain JS so the Node SEO generator can import it too. */
import type { PageSeo } from "./seo";

export type PageSeoEntry = {
  title: string;
  description: string;
  keywords?: string[];
  /** The shell's crawlable heading; must match the heading the page renders. */
  h1?: string;
};

export declare const PAGE_SEO: Record<string, PageSeoEntry>;
export declare function pageSeo(path: string): PageSeo;
