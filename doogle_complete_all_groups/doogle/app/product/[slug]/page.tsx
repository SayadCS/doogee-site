import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { products, findProduct } from '@/lib/products'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ProductDetail } from '@/components/product-detail'
import { SITE_URL, SITE_NAME } from '@/lib/site-config'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = findProduct(slug)
  if (!product) return {}
  const url = `${SITE_URL}/product/${product.slug}`
  const images = product.image ? [{ url: product.image.startsWith('http') ? product.image : `${SITE_URL}${product.image}` }] : undefined
  return {
    title: `${product.name} — ${SITE_NAME}`,
    description: product.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${product.name} — ${SITE_NAME}`,
      description: product.description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} — ${SITE_NAME}`,
      description: product.description,
      images,
    },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = findProduct(slug)
  if (!product) notFound()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <ProductDetail product={product} />
      <SiteFooter />
    </div>
  )
}
