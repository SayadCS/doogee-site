import type { MetadataRoute } from 'next'
import { pageContent } from '@/lib/site-content'
import { products } from '@/lib/products'
import { SITE_URL } from '@/lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/cart', '/search'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }))

  const contentRoutes = Object.keys(pageContent).map((route) => ({
    url: `${SITE_URL}/${route}`,
    lastModified: new Date(),
  }))

  const productRoutes = products.map((p) => ({
    url: `${SITE_URL}/product/${p.slug}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...contentRoutes, ...productRoutes]
}
