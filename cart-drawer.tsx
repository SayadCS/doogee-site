'use client'

import Link from 'next/link'
import { X, Minus, Plus } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { findProduct } from '@/lib/products'

export function CartDrawer() {
  const { lines, subtotal, isDrawerOpen, closeDrawer, changeQty } = useCart()

  return (
    <>
      <div
        className={`fixed inset-0 z-[90] bg-black/40 transition-opacity ${isDrawerOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={closeDrawer}
      />
      <div
        className={`fixed right-0 top-0 z-[91] flex h-full w-full max-w-sm flex-col bg-background transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.14em]">Your bag</p>
          <button aria-label="Close cart" onClick={closeDrawer}><X size={18} /></button>
        </div>

        <div className="flex-1 overflow-y-auto px-5">
          {lines.length === 0 ? (
            <p className="py-10 text-sm text-muted-foreground">Your bag is empty.</p>
          ) : (
            lines.map((line) => {
              const product = findProduct(line.slug)
              if (!product) return null
              return (
                <div key={line.slug} className="flex items-center gap-3 border-b border-border py-4">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center bg-secondary">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="h-full w-full object-contain p-2" />
                    ) : (
                      <span className="px-1 text-center font-mono text-[8px] uppercase text-muted-foreground">{product.name}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-xs font-bold uppercase">{product.name}</p>
                    <p className="mt-1 font-mono text-[11px] text-muted-foreground">${product.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button aria-label="Decrease quantity" onClick={() => changeQty(line.slug, -1)} className="flex h-6 w-6 items-center justify-center border border-foreground"><Minus size={12} /></button>
                    <span className="w-4 text-center font-mono text-xs">{line.qty}</span>
                    <button aria-label="Increase quantity" onClick={() => changeQty(line.slug, 1)} className="flex h-6 w-6 items-center justify-center border border-foreground"><Plus size={12} /></button>
                  </div>
                </div>
              )
            })
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-border px-5 py-4">
            <div className="mb-4 flex items-center justify-between font-mono text-sm font-bold">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <Link href="/cart" onClick={closeDrawer} className="mb-2 block border border-foreground px-4 py-3 text-center font-mono text-[11px] font-bold uppercase tracking-[0.12em]">View bag</Link>
            <Link href="/checkout" onClick={closeDrawer} className="block bg-accent px-4 py-3 text-center font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-accent-foreground">Checkout →</Link>
          </div>
        )}
      </div>
    </>
  )
}
