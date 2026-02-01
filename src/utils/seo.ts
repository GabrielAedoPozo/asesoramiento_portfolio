// SEO utilities for Astro
export interface SEOMetaTags {
  title: string;
  description: string;
  image?: string;
  url?: string;
  author?: string;
  robots?: string;
  keywords?: string[];
}

export const DEFAULT_SEO: SEOMetaTags = {
  title: "Roald Aedo | Consultor Estratégico Senior - Optimización Industrial",
  description: "Consultor multisectorial especializado en optimización de procesos y visión de mercado global. Transformando la complejidad industrial en eficiencia operativa.",
  image: "/og-image.jpg",
  url: "https://aedoconsulting.com",
  author: "Roald Aedo",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  keywords: [
    "consultor empresarial",
    "asesor estratégico",
    "optimización de procesos",
    "consultor Perú",
    "asesoría empresarial",
    "eficiencia operativa",
    "estrategia industrial",
    "transformación empresarial",
    "mejora continua",
    "gestión operacional"
  ]
};

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

/**
 * Generate FAQ structured data
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generate Person schema
 */
export function generatePersonSchema(data: {
  name: string;
  jobTitle: string;
  description: string;
  image: string;
  url: string;
  email?: string;
  phone?: string;
  sameAs: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": data.name,
    "jobTitle": data.jobTitle,
    "description": data.description,
    "image": data.image,
    "url": data.url,
    ...(data.email && { "email": data.email }),
    ...(data.phone && { "telephone": data.phone }),
    "sameAs": data.sameAs
  };
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(data: {
  name: string;
  url: string;
  logo: string;
  description: string;
  email?: string;
  phone?: string;
  sameAs: string[];
  areaServed: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": data.name,
    "url": data.url,
    "logo": data.logo,
    "description": data.description,
    ...(data.email && { "email": data.email }),
    ...(data.phone && { "telephone": data.phone }),
    "sameAs": data.sameAs,
    "areaServed": data.areaServed
  };
}
