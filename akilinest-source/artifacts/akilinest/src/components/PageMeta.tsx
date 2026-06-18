import { Helmet } from "react-helmet-async";
import { canonicalUrl, DEFAULT_OG_IMAGE, fullTitle, SITE_NAME, type PageSeo } from "@/lib/seo";

type PageMetaProps = PageSeo & {
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export default function PageMeta({
  title,
  description,
  path,
  keywords,
  type = "website",
  image = DEFAULT_OG_IMAGE,
  jsonLd,
}: PageMetaProps) {
  const pageTitle = fullTitle(title);
  const url = canonicalUrl(path);
  const imageUrl = image.startsWith("http") ? image : canonicalUrl(image);

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords?.length ? <meta name="keywords" content={keywords.join(", ")} /> : null}
      <link rel="canonical" href={url} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}
