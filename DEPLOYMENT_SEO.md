# 🚀 INSTRUCCIONES DE DEPLOYMENT CON SEO

## Pre-Deployment Checklist

### 1. **Validación Local**
```bash
# Build del proyecto
npm run build
# o
pnpm build

# Preview del build
npm run preview
# o
pnpm preview
```

### 2. **Validar SEO localmente**
- [ ] Abrir en navegador: `http://localhost:3000`
- [ ] Abrir DevTools (F12)
- [ ] Verificar meta tags en Network tab
- [ ] Hacer Lighthouse audit
- [ ] Verificar Core Web Vitals

---

## Deploy a Producción

### Opción 1: **Netlify** (Recomendado)
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

**Configuración automática:**
- HTTPS automático ✓
- Compresión automática ✓
- Redirecciones 301 ✓
- Headers configurados ✓

### Opción 2: **Vercel**
```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Opción 3: **Servidor Propio (Apache)**
```bash
# 1. Compilar
npm run build

# 2. Subir contenido de 'dist' al servidor
# SCP o FTP: /var/www/html/ o similar

# 3. Verificar .htaccess está en place
# Debe estar en la raíz public (dist)

# 4. Habilitar mod_rewrite en Apache
sudo a2enmod rewrite
sudo systemctl restart apache2
```

### Opción 4: **Servidor Propio (IIS)**
```bash
# 1. Compilar
npm run build

# 2. Copiar contenido dist a: C:\inetpub\wwwroot\

# 3. Verificar web.config está presente

# 4. Configurar IIS URL Rewrite module
# En IIS Manager: Add Rule > Import web.config
```

---

## Post-Deployment SEO

### Paso 1: **Google Search Console**
1. Ir a https://search.google.com/search-console
2. Agregar propiedad: `https://aedoconsulting.com`
3. Verificar dominio (HTML tag o DNS)
4. Ir a "Sitemaps"
5. Agregar sitemap: `https://aedoconsulting.com/sitemap.xml`
6. Solicitar indexación de página principal

### Paso 2: **Bing Webmaster Tools**
1. Ir a https://www.bing.com/webmasters
2. Agregar dominio
3. Agregar sitemap
4. Submit URLs

### Paso 3: **Google Business Profile**
1. Ir a https://www.google.com/business
2. Crear perfil de negocio
3. Verificar ubicación
4. Agregar información completa
5. Agregar fotos y descripción

### Paso 4: **Google Analytics 4**
```bash
# Instalar adaptador para Astro
npm install @astrojs/google-analytics

# O agregar script manualmente en Layout.astro
```

### Paso 5: **Verificar Indexación**
Buscar en Google:
```
site:aedoconsulting.com
```

Debe mostrar la página principal indexada.

### Paso 6: **Validar URLs Clave**
En Google Search Console:
- [ ] https://aedoconsulting.com/ ✓
- [ ] https://aedoconsulting.com/sitemap.xml ✓
- [ ] https://aedoconsulting.com/robots.txt ✓
- [ ] https://aedoconsulting.com/rss.xml ✓

---

## Monitoreo Continuo

### Diario
```
- Revisar Search Console: Errores de rastreo
- Verificar tráfico en Analytics
- Monitorear Rankings principales
```

### Semanal
```
- Analizar tráfico orgánico
- Revisar queries de búsqueda
- Verificar Core Web Vitals
- Hacer Lighthouse audit
```

### Mensual
```
- Generar reporte de SEO
- Análisis de keywords ranking
- Revisar backlinks
- Optimizar contenido bajo rendimiento
- Actualizar sitemap si hay cambios
```

---

## Troubleshooting

### Problema: Sitemap no se encuentra
```
✓ Verificar archivo existe en /public/
✓ Verificar permisos (755)
✓ Verificar URL: https://aedoconsulting.com/sitemap.xml
✓ Forzar reindexación en GSC
```

### Problema: robots.txt no se encuentra
```
✓ Verificar en /public/robots.txt
✓ Acceder a: https://aedoconsulting.com/robots.txt
✓ Verificar sintaxis: https://www.robotstxt.org/
```

### Problema: Meta tags no aparecen
```
✓ Abrir DevTools > Elements
✓ Buscar en <head>
✓ Verificar Layout.astro tiene los tags
✓ Limpiar cache: Ctrl+Shift+Del
```

### Problema: Mobile Friendly Errors
```
✓ Probar en: https://search.google.com/test/mobile-friendly
✓ Verificar viewport meta tag
✓ Revisar CSS media queries
✓ Probar en DevTools device emulation
```

---

## Performance Checklist

### Antes de publicar
- [ ] Build sin errores: `npm run build`
- [ ] Lighthouse score > 90
- [ ] PageSpeed Insights: Green metrics
- [ ] Mobile Friendly Test: Pass
- [ ] Schema Validation: Pass
- [ ] Broken links: 0
- [ ] 404 errors: Manejados
- [ ] SSL certificate: Válido

### Performance Goals
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.8s

---

## SEO Maintenance Tasks

### Cada semana
- [ ] Revisar Search Console errors
- [ ] Actualizar sitemap si hay cambios
- [ ] Verificar uptime sitio

### Cada mes
- [ ] Crear nuevo contenido (blog posts)
- [ ] Revisar keywords ranking
- [ ] Analizar competitors
- [ ] Link building outreach
- [ ] Fix broken links

### Cada trimestre
- [ ] SEO Audit completo
- [ ] Revisar estructura web
- [ ] Optimizar pages bajo rendimiento
- [ ] Update meta descriptions
- [ ] Revisar Mobile UX

### Anualmente
- [ ] Full SEO Rehaul
- [ ] Actualizar all structured data
- [ ] Revisar security headers
- [ ] Core Web Vitals optimization
- [ ] Competitive analysis

---

## URLs Importantes (Post-Deploy)

### Para Monitoreo
```
Google Search Console:
https://search.google.com/search-console/about

Analytics:
https://analytics.google.com/

PageSpeed:
https://pagespeed.web.dev/

Manual Testing:
https://aedoconsulting.com/seo-audit.html
```

### Robots y Sitemaps
```
Robots: https://aedoconsulting.com/robots.txt
Sitemap: https://aedoconsulting.com/sitemap.xml
RSS: https://aedoconsulting.com/rss.xml
Config: https://aedoconsulting.com/seo-config.json
```

---

## Notas Importantes

1. **HTTPS es obligatorio** - Google no indexa HTTP
2. **Canonical URL** - Evita contenido duplicado
3. **Sitemap dinámico** - Se actualiza automáticamente
4. **Robots.txt** - Optimizado para Google y Bing
5. **Performance** - Crítico para ranking
6. **Mobile** - Indexación mobile-first
7. **Security** - Headers de seguridad implementados

---

**Última actualización:** 2025-02-01  
**Versión:** Deployment v1.0  
**Status:** ✅ Listo para producción
