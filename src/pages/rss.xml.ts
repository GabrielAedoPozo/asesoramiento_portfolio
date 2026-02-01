---
// RSS Feed para Astro
import rss from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Roald Aedo - Consultor Estratégico',
    description: 'Consultor multisectorial especializado en optimización de procesos y estrategia empresarial',
    site: context.site,
    items: [
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
    ],
    customData: `<language>es</language>`,
  });
}
