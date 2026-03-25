import { useEffect } from "react";

type Props = {
  title: string;
  description: string;
  keywords?: string[];
  url?: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  siteName?: string;
  canonical?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  twitterSite?: string;
  locale?: string;
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
};

function setTag(nameOrProp: { name?: string; property?: string; rel?: string }, content: string) {
  const selector = nameOrProp.name
    ? `meta[name="${nameOrProp.name}"]`
    : nameOrProp.property
    ? `meta[property="${nameOrProp.property}"]`
    : nameOrProp.rel
    ? `link[rel="${nameOrProp.rel}"]`
    : "";
  let el = selector ? document.head.querySelector(selector) : null;
  if (!el) {
    if (nameOrProp.rel) {
      el = document.createElement("link");
      (el as HTMLLinkElement).rel = nameOrProp.rel!;
      document.head.appendChild(el);
    } else {
      el = document.createElement("meta");
      if (nameOrProp.name) (el as HTMLMetaElement).name = nameOrProp.name!;
      if (nameOrProp.property) (el as HTMLMetaElement).setAttribute("property", nameOrProp.property!);
      document.head.appendChild(el);
    }
  }
  if (nameOrProp.rel) {
    (el as HTMLLinkElement).href = content;
  } else {
    (el as HTMLMetaElement).setAttribute("content", content);
  }
}

function setJsonLd(data?: Record<string, unknown>) {
  const selector = 'script[type="application/ld+json"][data-seo="jsonld"]';
  let el = document.head.querySelector(selector) as HTMLScriptElement | null;
  if (!data) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.setAttribute("data-seo", "jsonld");
    document.head.appendChild(el);
  }
  el.text = JSON.stringify(data);
}

function ensureAbsoluteUrl(value: string, baseUrl: string) {
  if (!value) return value;
  if (/^https?:\/\//i.test(value)) return value;
  const trimmedBase = baseUrl.replace(/\/+$/, "");
  if (!trimmedBase) return value;
  if (value.startsWith("/")) return `${trimmedBase}${value}`;
  return `${trimmedBase}/${value}`;
}

function stripSchemaContext(schema: Record<string, unknown>) {
  const { ["@context"]: _context, ...rest } = schema as Record<string, unknown> & { ["@context"]?: unknown };
  return rest;
}

export default function SEO({
  title,
  description,
  keywords,
  url,
  image,
  imageAlt,
  type = "website",
  siteName = "Clipot",
  canonical,
  noIndex = false,
  noFollow = false,
  twitterSite = "@clipot",
  locale = "es_MX",
  schema,
}: Props) {
  useEffect(() => {
    document.title = title;
    setTag({ name: "description" }, description);
    if (keywords?.length) setTag({ name: "keywords" }, keywords.join(", "));

    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const siteUrlEnv = import.meta.env["VITE_SITE_URL"];
    const baseUrl = (typeof siteUrlEnv === "string" && siteUrlEnv.trim()) ? siteUrlEnv.trim() : origin;
    const pathname = typeof window !== "undefined" ? window.location.pathname : "";
    const href = typeof window !== "undefined" ? window.location.href : "";

    const fullUrl = url ? ensureAbsoluteUrl(url, baseUrl) : href || ensureAbsoluteUrl(pathname, baseUrl);
    const canonicalHref = canonical
      ? ensureAbsoluteUrl(canonical, baseUrl)
      : ensureAbsoluteUrl(pathname, baseUrl) || (fullUrl ? fullUrl.split(/[?#]/)[0] : "");

    if (canonicalHref) setTag({ rel: "canonical" }, canonicalHref);

    const robotsValue = `${noIndex ? "noindex" : "index"},${noFollow ? "nofollow" : "follow"}`;
    setTag({ name: "robots" }, robotsValue);
    setTag({ name: "googlebot" }, robotsValue);

    setTag({ property: "og:title" }, title);
    setTag({ property: "og:description" }, description);
    setTag({ property: "og:type" }, type);
    setTag({ property: "og:site_name" }, siteName);
    if (fullUrl) setTag({ property: "og:url" }, fullUrl);
    setTag({ property: "og:locale" }, locale);

    const resolvedImage = ensureAbsoluteUrl(image || "/placeholder.svg", baseUrl);
    if (resolvedImage) setTag({ property: "og:image" }, resolvedImage);
    setTag({ property: "og:image:alt" }, imageAlt || title);

    setTag({ name: "twitter:card" }, resolvedImage ? "summary_large_image" : "summary");
    if (twitterSite) setTag({ name: "twitter:site" }, twitterSite);
    setTag({ name: "twitter:title" }, title);
    setTag({ name: "twitter:description" }, description);
    if (resolvedImage) setTag({ name: "twitter:image" }, resolvedImage);

    const orgOrLocalSchema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: siteName,
      url: baseUrl || canonicalHref || fullUrl,
      image: resolvedImage,
      logo: ensureAbsoluteUrl("/favicon.ico", baseUrl),
      telephone: "+52 55 1234 5678",
      email: "hola@clipot.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ciudad de México",
        addressRegion: "CDMX",
        addressCountry: "MX",
      },
      areaServed: [
        { "@type": "AdministrativeArea", name: "Ciudad de México" },
        { "@type": "Country", name: "México" },
      ],
    };

    const websiteSchema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteName,
      url: baseUrl || canonicalHref || fullUrl,
    };

    const extraSchemas = (Array.isArray(schema) ? schema : schema ? [schema] : [])
      .filter(Boolean)
      .map((s) => (typeof s === "object" ? (s as Record<string, unknown>) : {}))
      .filter((s) => Object.keys(s).length > 0);

    const graph = [orgOrLocalSchema, websiteSchema, ...extraSchemas].map(stripSchemaContext);
    setJsonLd(graph.length ? { "@context": "https://schema.org", "@graph": graph } : undefined);
  }, [
    title,
    description,
    keywords?.join("|"),
    url,
    image,
    imageAlt,
    type,
    siteName,
    canonical,
    noIndex,
    noFollow,
    twitterSite,
    locale,
    JSON.stringify(schema || null),
  ]);
  return null;
}
