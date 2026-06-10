export type BlogCategory =
  | "nairobi-parenting"
  | "ai-safety"
  | "cbc-education"
  | "future-skills";

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  searchQuery: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  featured?: boolean;
  heroImage?: string;
  sections: BlogSection[];
};

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  "nairobi-parenting": "Nairobi Parenting",
  "ai-safety": "AI & Child Safety",
  "cbc-education": "CBC & Schools",
  "future-skills": "Future Skills",
};
