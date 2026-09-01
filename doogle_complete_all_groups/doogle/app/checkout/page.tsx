'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { useCart } from '@/lib/cart-context'
import { findProduct } from '@/lib/products'

export default function CheckoutPage() {
  const { lines, subtotal, clear } = useCart()
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)
  const shipping = subtotal >= 99 ? 0 : 9.99

  function placeOrder(event: React.FormEvent) {
    event.preventDefault()
    setSubmitting(true)
    // No real payment processor is wired up — this is a placeholder submit.
    setTimeout(() => {
      clear()
      router.push('/checkout/confirmation')
    }, 400)
  }

  if (lines.length === 0) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <div className="mx-auto max-w-xl px-5 py-24 text-center">
          <h1 className="mb-4 text-3xl font-black uppercase tracking-[-0.04em]">Your bag is empty</h1>
          <p className="mb-8 text-sm text-muted-foreground">Add something to your bag before checking out.</p>
          <Link href="/products/rugged-phones" className="inline-flex items-center gap-3 bg-accent px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-accent-foreground">
            Shop products →
          </Link>
        </div>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <div className="mx-auto grid max-w-[1100px] gap-12 px-5 py-16 lg:grid-cols-[1.3fr_1fr] lg:py-20">
        <form onSubmit={placeOrder}>
          <h1 className="mb-8 text-3xl font-black uppercase tracking-[-0.04em] lg:text-4xl">Checkout</h1>

          <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Contact</p>
          <input required type="email" placeholder="Email address" className="mb-6 w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-foreground" />

          <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Shipping address</p>
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <input required placeholder="First name" className="border-b border-border bg-transparent py-3 text-sm outline-none focus:border-foreground" />
            <input required placeholder="Last name" className="border-b border-border bg-transparent py-3 text-sm outline-none focus:border-foreground" />
          </div>
          <input required placeholder="Address" className="mb-4 w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-foreground" />
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <input required placeholder="City" className="border-b border-border bg-transparent py-3 text-sm outline-none focus:border-foreground" />
            <input required placeholder="State" className="border-b border-border bg-transparent py-3 text-sm outline-none focus:border-foreground" />
            <input required placeholder="ZIP code" className="border-b border-border bg-transparent py-3 text-sm outline-none focus:border-foreground" />
          </div>

          <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Shipping method</p>
          <div className="mb-8 space-y-2">
            <label className="flex items-center justify-between border border-border px-4 py-3 text-sm">
              <span className="flex items-center gap-3"><input type="radio" name="shipping" defaultChecked /> Standard (5–7 business days)</span>
              <span className="font-mono">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
            </label>
            <label className="flex items-center justify-between border border-border px-4 py-3 text-sm">
              <span className="flex items-center gap-3"><input type="radio" name="shipping" /> Express (2–3 business days)</span>
              <span className="font-mono">$19.99</span>
            </label>
          </div>

          <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Payment</p>
          <div className="mb-8 space-y-4 border border-border p-4">
            <input required placeholder="Card number" className="w-full border-b border-border bg-transparent py-2 text-sm outline-none focus:border-foreground" />
            <div className="grid grid-cols-2 gap-4">
              <input required placeholder="MM / YY" className="border-b border-border bg-transparent py-2 text-sm outline-none focus:border-foreground" />
              <input required placeholder="CVC" className="border-b border-border bg-transparent py-2 text-sm outline-none focus:border-foreground" />
            </div>
            <p className="font-mono text-[10px] text-muted-foreground">This is a prototype — no real payment is processed.</p>
          </div>

          <button type="submit" disabled={submitting} className="block w-full bg-accent px-6 py-4 text-center font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-accent-foreground disabled:opacity-60">
            {submitting ? 'Placing order…' : 'Place order →'}
          </button>
        </form>

        <div className="h-fit border border-border p-6 lg:sticky lg:top-24">
          <p className="mb-5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Order summary</p>
          <div className="space-y-4">
            {lines.map((line) => {
              const product = findProduct(line.slug)
              if (!product) return null
              return (
                <div key={line.slug} className="flex items-center gap-3">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center bg-secondary">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="h-full w-full object-contain p-1.5" />
                    ) : (
                      <span className="px-1 text-center font-mono text-[7px] uppercase text-muted-foreground">{product.name}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-xs font-bold uppercase">{product.name}</p>
                    <p className="font-mono text-[11px] text-muted-foreground">Qty {line.qty}</p>
                  </div>
                  <p className="font-mono text-xs font-bold">${(product.price * line.qty).toFixed(2)}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-6 space-y-2 border-t border-border pt-4 font-mono text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
            <div className="flex justify-between border-t border-foreground pt-2 text-base font-bold"><span>Total</span><span>${(subtotal + shipping).toFixed(2)}</span></div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
