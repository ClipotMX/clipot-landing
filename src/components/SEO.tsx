import { useEffect } from "react";

type Props = {
  title: string;
  description: string;
  keywords?: string[];
  url?: string;
  image?: string;
  type?: "website" | "article";
  siteName?: string;
  canonical?: string;
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

export default function SEO({
  title,
  description,
  keywords,
  url,
  image,
  type = "website",
  siteName = "Clipot",
  canonical,
}: Props) {
  useEffect(() => {
    document.title = title;
    setTag({ name: "description" }, description);
    if (keywords?.length) setTag({ name: "keywords" }, keywords.join(", "));
    const origin = typeof window !== "undefined" ? window.location.origin : "";
    const fullUrl = url || (typeof window !== "undefined" ? window.location.href : "");
    const canonicalHref = canonical || fullUrl;
    setTag({ rel: "canonical" }, canonicalHref);
    setTag({ property: "og:title" }, title);
    setTag({ property: "og:description" }, description);
    setTag({ property: "og:type" }, type);
    setTag({ property: "og:site_name" }, siteName);
    setTag({ property: "og:url" }, fullUrl);
    if (image) setTag({ property: "og:image" }, image);
    setTag({ name: "twitter:card" }, image ? "summary_large_image" : "summary");
    setTag({ name: "twitter:title" }, title);
    setTag({ name: "twitter:description" }, description);
    if (image) setTag({ name: "twitter:image" }, image);
  }, [title, description, keywords?.join("|"), url, image, type, siteName, canonical]);
  return null;
}
