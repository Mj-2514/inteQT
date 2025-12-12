import { Helmet } from "react-helmet-async";

const GlobalSEO = () => {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.inte-qt.com/#organization",
    name: "inte-QT",
    url: "https://www.inte-qt.com",
    logo: "https://www.inte-qt.com/logo.png",
    sameAs: [
      "https://www.linkedin.com/company/inte-qt",
      "https://twitter.com/inteqt"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "sales@inte-qt.com",
      availableLanguage: ["English"]
    }
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.inte-qt.com/#website",
    url: "https://www.inte-qt.com",
    name: "inte-QT Global Internet Services",
    publisher: {
      "@id": "https://www.inte-qt.com/#organization"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.inte-qt.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      {/* =========================
          GLOBAL META
      ========================== */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* =========================
          ROBOTS
      ========================== */}
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="googlebot" content="index, follow, max-image-preview:large" />

      {/* =========================
          DEFAULT SOCIAL META
          (Page-level Helmet will override)
      ========================== */}
      <meta property="og:site_name" content="inte-QT" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.inte-qt.com/og/default.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@inteqt" />

      {/* =========================
          BRAND + WEBSITE SCHEMA
      ========================== */}
      <script type="application/ld+json">
        {JSON.stringify(organizationJsonLd)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(websiteJsonLd)}
      </script>
    </Helmet>
  );
};

export default GlobalSEO;
