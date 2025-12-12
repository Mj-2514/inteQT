// src/components/Seo.tsx
import React from "react";
import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description?: string;
  canonical?: string;
  image?: string;
  siteName?: string;
  twitterHandle?: string;
  extraJsonLd?: object | object[];
  pathname?: string;
};

export default function Seo({
  title,
  description,
  canonical,
  image,
  siteName = "inte-QT",
  twitterHandle,
  extraJsonLd,
  pathname,
}: SeoProps) {
  const siteBase = canonical ? new URL(canonical).origin : "https://inte-qt.com";
  const url = canonical ? canonical : pathname ? `${siteBase}${pathname}` : siteBase;

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:alt" content={title} />}

      {/* Twitter */}
      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* JSON-LD structured data injection */}
      {extraJsonLd &&
        (Array.isArray(extraJsonLd) ? extraJsonLd : [extraJsonLd]).map((obj, idx) => (
          <script key={idx} type="application/ld+json">
            {JSON.stringify(obj)}
          </script>
        ))}
    </Helmet>
  );
}
