'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { findProduct } from '@/lib/products'

type CartLine = { slug: string; qty: number }

type CartContextValue = {
  lines: CartLine[]
  count: number
  subtotal: number
  addItem: (slug: string, qty?: number) => void
  removeItem: (slug: string) => void
  changeQty: (slug: string, delta: number) => void
  clear: () => void
  isDrawerOpen: boolean
  openDrawer: () => void
  closeDrawer: () => void
}

const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_KEY = 'doogee-cart'

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) setLines(JSON.parse(raw))
    } catch {
      // ignore malformed storage
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
  }, [lines, hydrated])

  function addItem(slug: string, qty = 1) {
    setLines((prev) => {
      const existing = prev.find((l) => l.slug === slug)
      if (existing) return prev.map((l) => (l.slug === slug ? { ...l, qty: l.qty + qty } : l))
      return [...prev, { slug, qty }]
    })
    setDrawerOpen(true)
  }

  function removeItem(slug: string) {
    setLines((prev) => prev.filter((l) => l.slug !== slug))
  }

  function changeQty(slug: string, delta: number) {
    setLines((prev) =>
      prev
        .map((l) => (l.slug === slug ? { ...l, qty: l.qty + delta } : l))
        .filter((l) => l.qty > 0),
    )
  }

  function clear() {
    setLines([])
  }

  const count = lines.reduce((sum, l) => sum + l.qty, 0)
  const subtotal = lines.reduce((sum, l) => {
    const product = findProduct(l.slug)
    return sum + (product ? product.price * l.qty : 0)
  }, 0)

  return (
    <CartContext.Provider
      value={{
        lines,
        count,
        subtotal,
        addItem,
        removeItem,
        changeQty,
        clear,
        isDrawerOpen,
        openDrawer: () => setDrawerOpen(true),
        closeDrawer: () => setDrawerOpen(false),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
