'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ShieldCheck, Truck, RotateCcw, Headphones, Check, ShoppingBag, Star, Camera } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { useCart } from '@/lib/cart-context'
import { products, reviews } from '@/lib/products'

const BRAND_NAME = 'DOOGEE'

const categoryTiles = [
  { label: 'Rugged phones', href: '/products/rugged-phones' },
  { label: 'Tablets', href: '/products/tablets' },
  { label: 'Smartwatches', href: '/products/smartwatches' },
  { label: 'Accessories', href: '/products/accessories' },
]

const certifications = ['IP68', 'IP69K', 'MIL-STD-810H', 'CE']

export function DoogeeHomepage() {
  const { addItem } = useCart()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function subscribe(event: React.FormEvent) {
    event.preventDefault()
    if (email.trim()) setSubscribed(true)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main id="top">
        <section className="relative min-h-[600px] overflow-hidden bg-[#232323] text-primary-foreground lg:min-h-[720px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(224,104,20,0.45),transparent_34%),linear-gradient(115deg,#111111,#3b251c_58%,#151515)]" />
          <div className="phone-drift absolute bottom-[-4%] right-[7%] h-[88%] w-[58%]">
            <img src="/images/doogee-user-phones.png" alt="Two DOOGEE rugged smartphones" className="h-full w-full object-contain mix-blend-multiply" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/50 to-transparent" />
          <div className="relative mx-auto flex min-h-[600px] max-w-[1440px] items-end px-5 pb-14 lg:min-h-[720px] lg:px-10 lg:pb-24">
            <div className="max-w-2xl">
              <p className="mb-5 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-accent">The new standard of rugged</p>
              <h1 className="max-w-xl text-balance font-sans text-6xl font-black uppercase leading-[0.88] tracking-[-0.07em] sm:text-8xl lg:text-[110px]">Fearless by design.</h1>
              <p className="mt-7 max-w-md text-pretty text-sm leading-6 text-primary-foreground/75 lg:text-base">Uncompromising power, built to go further. Meet the next generation of {BRAND_NAME} rugged technology.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#featured" className="inline-flex items-center gap-3 bg-accent px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-accent-foreground transition-transform hover:-translate-y-1">Shop the collection <ArrowRight size={15} /></a>
                <Link href="/explore/our-story" className="inline-flex items-center gap-3 border border-primary-foreground/50 px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-foreground">Discover {BRAND_NAME}</Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-7 right-8 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60 lg:block">Scroll to explore ↓</div>
        </section>

        <section className="border-b border-border bg-accent px-5 py-4 lg:px-10">
          <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em]">{BRAND_NAME} X — made for more</p>
            <a href="#featured" className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.15em]">Explore now <ArrowRight size={14} /></a>
          </div>
        </section>

        {/* Category tiles */}
        <section className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10">
          <p className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Shop by category</p>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
            {categoryTiles.map((tile) => (
              <Link key={tile.label} href={tile.href} className="group relative flex aspect-square items-end bg-secondary p-5 transition-colors hover:bg-accent">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.06em]">{tile.label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section id="featured" className="mx-auto max-w-[1440px] px-5 py-8 lg:px-10 lg:py-12">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Engineered for extremes</p>
              <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.06em] lg:text-6xl">Featured gear</h2>
            </div>
            <Link href="/products/rugged-phones" className="hidden items-center gap-2 border-b border-foreground pb-1 font-mono text-[10px] font-bold uppercase tracking-[0.16em] sm:flex">View all <ArrowRight size={14} /></Link>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-4 lg:gap-x-5">
            {products.map((product) => (
              <article key={product.slug} className="group relative">
                <Link href={`/product/${product.slug}`}>
                  <div className="relative aspect-[0.83] overflow-hidden bg-secondary">
                    <img src={product.image ?? ''} alt={product.name} className="h-full w-full object-contain p-8 transition duration-500 group-hover:scale-105" />
                    {product.tag && <span className="absolute left-3 top-3 bg-background px-2 py-1 font-mono text-[9px] font-bold tracking-[0.12em]">{product.tag}</span>}
                  </div>
                </Link>
                <button aria-label={`Add ${product.name} to cart`} onClick={() => addItem(product.slug)} className="absolute right-3 top-[calc(83%-2.5rem)] flex h-10 w-10 items-center justify-center bg-accent opacity-0 transition group-hover:opacity-100">
                  <ShoppingBag size={16} />
                </button>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <Link href={`/product/${product.slug}`}><h3 className="font-sans text-base font-bold uppercase tracking-[-0.02em] lg:text-lg">{product.name}</h3></Link>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">{product.type}</p>
                  </div>
                  <p className="font-mono text-xs font-bold">${product.price.toFixed(2)}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="story" className="grid bg-primary text-primary-foreground lg:grid-cols-2">
          <div className="flex min-h-[480px] flex-col justify-between p-7 lg:min-h-[650px] lg:p-14">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-accent">01 / Built different</p>
            <div>
              <h2 className="max-w-lg text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] lg:text-7xl">Ready for whatever is next.</h2>
              <p className="mt-6 max-w-md text-sm leading-6 text-primary-foreground/65">From dust and rain to drops and deep dives, every {BRAND_NAME} device is tested beyond the ordinary so you can stay connected beyond the expected.</p>
              <Link href="/explore/technology" className="mt-8 inline-flex items-center gap-3 border-b border-primary-foreground/60 pb-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em]">Our technology <ArrowRight size={14} /></Link>
            </div>
          </div>
          <div className="min-h-[400px] bg-[#343434]">
            <img src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=90" alt="Mountain landscape representing outdoor durability" className="h-full w-full object-cover opacity-80" />
          </div>
        </section>

        <section className="border-b border-border bg-background px-5 py-10 lg:px-10">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <p className="w-full text-center font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground sm:w-auto sm:text-left">Independently rated for</p>
            {certifications.map((cert) => (
              <span key={cert} className="border border-foreground px-4 py-2 font-mono text-xs font-bold tracking-[0.06em]">{cert}</span>
            ))}
          </div>
        </section>

        <section className="border-b border-border bg-secondary">
          <div className="mx-auto grid max-w-[1440px] divide-y divide-border px-5 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:px-10">
            {[[ShieldCheck, 'Built tough', 'IP68 & IP69K protection'], [Truck, 'Free shipping', 'On orders over $99'], [RotateCcw, '30-day returns', 'Shop with confidence'], [Headphones, 'Here to help', 'Expert support, always']].map(([Icon, title, copy]) => (
              // @ts-expect-error icon component
              <div key={title as string} className="flex items-center gap-4 px-0 py-6 sm:px-6 lg:py-8"><Icon size={23} strokeWidth={1.5} /><div><p className="font-mono text-[10px] font-bold uppercase tracking-[0.14em]">{title as string}</p><p className="mt-1 text-xs text-muted-foreground">{copy as string}</p></div></div>
            ))}
          </div>
        </section>

        {/* Reviews strip */}
        <section className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
          <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">What people are saying</p>
          <h2 className="mb-10 text-4xl font-black uppercase leading-none tracking-[-0.06em] lg:text-6xl">4.7 average rating</h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.name} className="border border-border p-6">
                <div className="mb-3 flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill={i < review.rating ? 'currentColor' : 'none'} strokeWidth={1.5} />
                  ))}
                </div>
                <p className="text-sm leading-6 text-foreground/80">&ldquo;{review.quote}&rdquo;</p>
                <p className="mt-4 font-mono text-[11px] font-bold uppercase tracking-[0.08em]">{review.name}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground">{review.location} · {review.product}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison teaser */}
        <section className="mx-auto max-w-[1440px] px-5 pb-20 lg:px-10 lg:pb-28">
          <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Can&apos;t decide?</p>
          <h2 className="mb-10 text-4xl font-black uppercase leading-none tracking-[-0.06em] lg:text-6xl">Compare top models</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border-b border-border py-3 text-left" />
                  {products.slice(0, 3).map((p) => (
                    <th key={p.slug} className="border-b border-border py-3 text-left font-mono text-[10px] font-bold uppercase tracking-[0.08em]">{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Price', ...products.slice(0, 3).map((p) => `$${p.price.toFixed(2)}`)],
                  ['Display', ...products.slice(0, 3).map((p) => p.specs[0].value)],
                  ['Battery', ...products.slice(0, 3).map((p) => p.specs[2].value)],
                  ['Protection', ...products.slice(0, 3).map((p) => p.specs[4].value)],
                ].map((row) => (
                  <tr key={row[0]}>
                    <td className="border-b border-border py-3 pr-4 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-muted-foreground">{row[0]}</td>
                    {row.slice(1).map((cell, i) => <td key={i} className="border-b border-border py-3 pr-6 text-xs">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* UGC / social grid */}
        <section className="mx-auto max-w-[1440px] px-5 pb-20 lg:px-10 lg:pb-28">
          <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Join the community</p>
          <h2 className="mb-10 text-4xl font-black uppercase leading-none tracking-[-0.06em] lg:text-6xl">Tag us @doogee</h2>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`flex aspect-square flex-col items-center justify-center gap-2 ${i % 3 === 0 ? 'bg-primary text-primary-foreground' : i % 3 === 1 ? 'bg-accent text-accent-foreground' : 'bg-secondary text-muted-foreground'}`}
              >
                <Camera size={20} strokeWidth={1.5} />
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.1em]">@doogee</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Stay in the loop</p>
              <h2 className="max-w-xl text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] lg:text-7xl">Good things are coming.</h2>
              <p className="mt-6 max-w-md text-sm leading-6 text-muted-foreground">Get first access to product drops, field notes, and offers made for the road ahead.</p>
            </div>
            <div>
              {subscribed ? (
                <div className="flex items-center gap-3 border-b border-foreground pb-4 font-mono text-sm font-bold uppercase"><Check size={18} className="text-accent" /> You&apos;re on the list.</div>
              ) : (
                <form onSubmit={subscribe} className="flex border-b border-foreground pb-3">
                  <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required placeholder="Your email address" aria-label="Your email address" className="w-full bg-transparent font-mono text-sm outline-none placeholder:text-muted-foreground" />
                  <button type="submit" aria-label="Subscribe" className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em]">Subscribe <ArrowRight size={15} /></button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
