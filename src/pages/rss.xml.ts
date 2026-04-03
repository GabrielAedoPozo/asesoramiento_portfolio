import type { APIRoute } from 'astro';

// RSS Feed para Astro
export const prerender = true;

type RssItem = {
  title: string;
  pubDate: Date;
  description: string;
  link: string;
  categories: string[];
};

const items: RssItem[] = [
  {
    title: 'Optimización de Procesos Industriales',
    pubDate: new Date('2025-02-01'),
    description: 'Descubre cómo transformar tus procesos industriales en sistemas eficientes y escalables',
    link: '/',
    categories: ['Consultoría', 'Optimización', 'Procesos'],
  },
  {
    title: 'Estrategia Empresarial Multisectorial',
    pubDate: new Date('2025-01-15'),
    description: 'Expertise en diversos sectores: industrial, comercial, servicios y emprendimientos',
    link: '/',
    categories: ['Estrategia', 'Empresas', 'Transformación'],
  },
  {
    title: 'Experiencia en Dirección Comercial y Operativa',
    pubDate: new Date('2025-01-01'),
    description: 'Más de 35 años liderando operaciones complejas y crecimiento empresarial sostenible',
    link: '/',
    categories: ['Experiencia', 'Liderazgo', 'Operaciones'],
  },
];

const escapeXml = (value: string): string =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export const GET: APIRoute = async (context) => {
  const site = context.site ?? new URL('https://aedoconsulting.com');
  const channelTitle = 'Roald Aedo - Consultor Estratégico';
  const channelDescription =
    'Consultor multisectorial especializado en optimización de procesos y estrategia empresarial';

  const rssItems = items
    .map((item) => {
      const categories = item.categories
        .map((category) => `      <category>${escapeXml(category)}</category>`)
        .join('\n');
      const itemUrl = new URL(item.link, site).toString();

      return `    <item>
      <title>${escapeXml(item.title)}</title>
      <description>${escapeXml(item.description)}</description>
      <link>${itemUrl}</link>
      <guid>${itemUrl}</guid>
      <pubDate>${item.pubDate.toUTCString()}</pubDate>
${categories}
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(channelTitle)}</title>
    <description>${escapeXml(channelDescription)}</description>
    <link>${site.toString()}</link>
    <language>es</language>
${rssItems}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'max-age=3600',
    },
  });
};
