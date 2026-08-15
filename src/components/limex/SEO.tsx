import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  /** Marken-Suffix „| Codebricks" anhängen (Standard: true) */
  brand?: boolean;
  noindex?: boolean;
}

const SEO = ({ title, description, path, brand = true, noindex = false }: SEOProps) => {
  const canonical = path ?? (typeof window !== "undefined" ? window.location.pathname : "/");
  const fullTitle = brand ? `${title} | Codebricks` : title;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default SEO;
