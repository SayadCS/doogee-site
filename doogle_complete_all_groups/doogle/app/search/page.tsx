'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { products } from '@/lib/products'

function SearchResults() {
  const params = useSearchParams()
  const q = (params.get('q') ?? '').trim().toLowerCase()

  const matches = q
    ? products.filter((p) => p.name.toLowerCase().includes(q) || p.type.toLowerCase().includes(q) || p.category.includes(q))
    : []

  return (
    <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-20">
      <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
        {matches.length} result{matches.length === 1 ? '' : 's'} for &ldquo;{q}&rdquo;
      </p>
      <h1 className="mb-10 text-4xl font-black uppercase leading-none tracking-[-0.06em] lg:text-6xl">Search</h1>

      {matches.length === 0 ? (
        <div className="py-10">
          <p className="mb-6 text-sm text-muted-foreground">No products matched your search.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/products/rugged-phones" className="border border-foreground px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.1em]">Rugged phones</Link>
            <Link href="/products/tablets" className="border border-foreground px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.1em]">Tablets</Link>
            <Link href="/products/accessories" className="border border-foreground px-5 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.1em]">Accessories</Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-4 lg:gap-x-5">
          {matches.map((product) => (
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
      )}
    </div>
  )
}

export default function SearchPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Suspense fallback={null}>
        <SearchResults />
      </Suspense>
      <SiteFooter />
    </div>
  )
}
