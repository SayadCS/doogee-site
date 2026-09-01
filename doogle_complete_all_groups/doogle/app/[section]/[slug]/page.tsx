import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Check } from 'lucide-react'
import { pageContent } from '@/lib/site-content'
import { productsForRoute } from '@/lib/products'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { ContactForm } from '@/components/contact-form'
import { SITE_URL, SITE_NAME } from '@/lib/site-config'

export function generateStaticParams() {
  return Object.keys(pageContent).map((key) => {
    const [section, slug] = key.split('/')
    return { section, slug }
  })
}

export async function generateMetadata({ params }: { params: Promise<{ section: string; slug: string }> }): Promise<Metadata> {
  const { section, slug } = await params
  const content = pageContent[`${section}/${slug}`]
  if (!content) return {}
  const url = `${SITE_URL}/${section}/${slug}`
  const title = `${content.title} — ${SITE_NAME}`
  return {
    title,
    description: content.intro,
    alternates: { canonical: url },
    openGraph: { title, description: content.intro, url, siteName: SITE_NAME, type: 'website' },
    twitter: { card: 'summary', title, description: content.intro },
  }
}

export default async function SectionPage({ params }: { params: Promise<{ section: string; slug: string }> }) {
  const { section, slug } = await params
  const route = `${section}/${slug}`
  const content = pageContent[route]
  if (!content) notFound()

  const matchingProducts = productsForRoute(route)
  const isContactPage = route === 'contact-us/contact-us'

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="bg-primary px-5 py-20 text-primary-foreground lg:px-10 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-accent">{content.eyebrow}</p>
          <h1 className="max-w-4xl text-6xl font-black uppercase leading-[0.9] tracking-[-0.07em] lg:text-9xl">{content.title}</h1>
          <p className="mt-8 max-w-2xl text-base leading-7 text-primary-foreground/70 lg:text-lg">{content.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 lg:px-10 lg:py-24">
        <div className={`grid gap-8 ${isContactPage ? '' : 'lg:grid-cols-2'}`}>
          {content.sections.map((item) => (
            <article key={item.heading} className="border border-border bg-secondary p-7 lg:p-10">
              <h2 className="text-3xl font-black uppercase tracking-[-0.05em]">{item.heading}</h2>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">{item.body}</p>
              {item.bullets && (
                <ul className="mt-7 flex flex-col gap-3">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.08em]">
                      <Check size={16} className="text-accent" />{bullet}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        {isContactPage ? (
          <div className="mt-10 max-w-xl border border-border p-7 lg:p-10">
            <ContactForm />
          </div>
        ) : (
          <Link href="/contact-us/contact-us" className="mt-10 inline-flex items-center gap-3 bg-accent px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-accent-foreground">
            Talk to DOOGEE <ArrowRight size={15} />
          </Link>
        )}
      </section>

      {matchingProducts.length > 0 && (
        <section className="mx-auto max-w-[1440px] px-5 pb-20 lg:px-10 lg:pb-28">
          <p className="mb-8 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Shop this category</p>
          <div className="grid grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-4 lg:gap-x-5">
            {matchingProducts.map((product) => (
              <article key={product.slug}>
                <Link href={`/product/${product.slug}`}>
                  <div className="relative aspect-[0.83] overflow-hidden bg-secondary">
                    <img src={product.image ?? ''} alt={product.name} className="h-full w-full object-contain p-8" />
                    {product.tag && <span className="absolute left-3 top-3 bg-background px-2 py-1 font-mono text-[9px] font-bold tracking-[0.12em]">{product.tag}</span>}
                  </div>
                </Link>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <Link href={`/product/${product.slug}`}><h3 className="font-sans text-base font-bold uppercase tracking-[-0.02em]">{product.name}</h3></Link>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">{product.type}</p>
                  </div>
                  <p className="font-mono text-xs font-bold">${product.price.toFixed(2)}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  )
}
