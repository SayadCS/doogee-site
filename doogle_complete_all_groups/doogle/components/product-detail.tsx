'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { products, reviews, type Product } from '@/lib/products'

export function ProductDetail({ product }: { product: Product }) {
  const [color, setColor] = useState(product.colors[0])
  const { addItem } = useCart()

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3)

  return (
    <>
      <div className="mx-auto max-w-[1440px] px-5 py-4 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground lg:px-10">
        <Link href="/">Home</Link> / <Link href={`/${product.category}`}>{product.type}</Link> / <span className="text-foreground">{product.name}</span>
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 pb-20 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="flex aspect-square items-center justify-center bg-secondary">
          {product.image ? (
            <img src={product.image} alt={product.name} className="h-full w-full object-contain p-12" />
          ) : (
            <p className="font-mono text-xs uppercase text-muted-foreground">{product.name} — photo coming soon</p>
          )}
        </div>

        <div>
          <h1 className="text-4xl font-black uppercase leading-none tracking-[-0.04em] lg:text-5xl">{product.name}</h1>
          <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">{product.type}</p>
          <p className="mt-6 font-mono text-2xl font-bold">${product.price.toFixed(2)}</p>
          <p className="mt-6 text-sm leading-7 text-foreground/80">{product.description}</p>

          <p className="mt-8 mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Color</p>
          <div className="mb-8 flex flex-wrap gap-2">
            {product.colors.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`border px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.06em] ${c === color ? 'border-foreground bg-foreground text-background' : 'border-border'}`}
              >
                {c}
              </button>
            ))}
          </div>

          <button onClick={() => addItem(product.slug)} className="block w-full bg-accent px-6 py-4 text-center font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-accent-foreground">
            Add to bag →
          </button>
          <Link href="/checkout" className="mt-3 block w-full border border-foreground px-6 py-4 text-center font-mono text-[11px] font-bold uppercase tracking-[0.16em]">
            Buy now
          </Link>

          <div className="mt-10 border-t border-border pt-8">
            <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Full specifications</p>
            <table className="w-full text-sm">
              <tbody>
                {product.specs.map((spec) => (
                  <tr key={spec.label} className="border-b border-border">
                    <td className="w-32 py-3 font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground">{spec.label}</td>
                    <td className="py-3">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-[1440px] px-5 pb-20 lg:px-10">
        <p className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Customer reviews</p>
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
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 pb-24 lg:px-10">
        <p className="mb-6 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">You may also like</p>
        <div className="grid grid-cols-2 gap-x-3 gap-y-10 lg:grid-cols-3 lg:gap-x-5">
          {related.map((p) => (
            <article key={p.slug}>
              <Link href={`/product/${p.slug}`}>
                <div className="relative aspect-[0.83] overflow-hidden bg-secondary">
                  <img src={p.image ?? ''} alt={p.name} className="h-full w-full object-contain p-8" />
                </div>
              </Link>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <Link href={`/product/${p.slug}`}><h3 className="font-sans text-base font-bold uppercase tracking-[-0.02em]">{p.name}</h3></Link>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">{p.type}</p>
                </div>
                <p className="font-mono text-xs font-bold">${p.price.toFixed(2)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
