'use client'

import Link from 'next/link'
import { Minus, Plus, X } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { useCart } from '@/lib/cart-context'
import { findProduct } from '@/lib/products'

export default function CartPage() {
  const { lines, subtotal, changeQty, removeItem } = useCart()
  const shipping = lines.length === 0 ? 0 : subtotal >= 99 ? 0 : 9.99

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <div className="mx-auto max-w-3xl px-5 py-16 lg:py-20">
        <h1 className="mb-10 text-4xl font-black uppercase leading-none tracking-[-0.06em] lg:text-6xl">Your bag</h1>

        {lines.length === 0 ? (
          <div className="py-16 text-center">
            <p className="mb-8 text-sm text-muted-foreground">Your bag is empty.</p>
            <Link href="/products/rugged-phones" className="inline-flex items-center gap-3 bg-accent px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-accent-foreground">
              Shop products →
            </Link>
          </div>
        ) : (
          <>
            <div className="border-t border-border">
              {lines.map((line) => {
                const product = findProduct(line.slug)
                if (!product) return null
                return (
                  <div key={line.slug} className="flex items-center gap-5 border-b border-border py-5">
                    <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center bg-secondary">
                      {product.image ? (
                        <img src={product.image} alt={product.name} className="h-full w-full object-contain p-2" />
                      ) : (
                        <span className="px-1 text-center font-mono text-[8px] uppercase text-muted-foreground">{product.name}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-mono text-sm font-bold uppercase">{product.name}</p>
                      <p className="mt-1 font-mono text-xs text-muted-foreground">${product.price.toFixed(2)} each</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button aria-label="Decrease quantity" onClick={() => changeQty(line.slug, -1)} className="flex h-7 w-7 items-center justify-center border border-foreground"><Minus size={13} /></button>
                      <span className="w-5 text-center font-mono text-sm">{line.qty}</span>
                      <button aria-label="Increase quantity" onClick={() => changeQty(line.slug, 1)} className="flex h-7 w-7 items-center justify-center border border-foreground"><Plus size={13} /></button>
                    </div>
                    <p className="w-20 text-right font-mono text-sm font-bold">${(product.price * line.qty).toFixed(2)}</p>
                    <button aria-label={`Remove ${product.name}`} onClick={() => removeItem(line.slug)}><X size={17} /></button>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex justify-between font-mono text-sm"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between font-mono text-sm"><span>Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
              <div className="flex justify-between border-t border-foreground pt-3 font-mono text-lg font-bold"><span>Total</span><span>${(subtotal + shipping).toFixed(2)}</span></div>
            </div>

            <Link href="/checkout" className="mt-8 block bg-accent px-6 py-4 text-center font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-accent-foreground">
              Checkout →
            </Link>
          </>
        )}
      </div>

      <SiteFooter />
    </div>
  )
}
