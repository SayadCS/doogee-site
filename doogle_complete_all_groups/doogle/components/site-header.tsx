'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search, UserRound, ShoppingBag, ChevronDown } from 'lucide-react'
import { navItems, routeFor } from '@/lib/site-content'
import { useCart } from '@/lib/cart-context'

const BRAND_NAME = 'DOOGEE'

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const router = useRouter()
  const { count, openDrawer } = useCart()

  function submitSearch(event: React.FormEvent) {
    event.preventDefault()
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
      setSearchOpen(false)
    }
  }

  return (
    <>
      <div className="bg-primary px-4 py-2 text-center font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground">
        Free shipping on orders over $99 <span className="mx-2 text-accent">•</span> Built for the wild
      </div>

      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 lg:h-20 lg:px-10">
          <Link href="/" className="font-mono text-2xl font-black tracking-[-0.12em] lg:text-3xl">
            {BRAND_NAME}<span className="text-accent">.</span>
          </Link>

          <nav className="hidden items-center gap-3 md:flex lg:gap-5 xl:gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="group relative py-5">
                <Link href={routeFor(item.label, item.options[0])} className="flex items-center gap-1 whitespace-nowrap font-mono text-[10px] font-bold uppercase tracking-[0.1em] transition-colors hover:text-accent">
                  {item.label}<ChevronDown size={12} />
                </Link>
                <div className="pointer-events-none invisible absolute left-1/2 top-full w-52 -translate-x-1/2 translate-y-2 border border-border bg-background p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.options.map((option) => (
                    <Link key={option} href={routeFor(item.label, option)} className="block px-3 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.08em] transition-colors hover:bg-accent hover:text-accent-foreground">
                      {option}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <span className="hidden font-mono text-[10px] font-bold tracking-[0.08em] text-muted-foreground sm:block">USD</span>
            <button aria-label="Search" onClick={() => setSearchOpen((v) => !v)}><Search size={19} strokeWidth={1.7} /></button>
            <Link href="/account" aria-label="Account" className="hidden sm:block"><UserRound size={19} strokeWidth={1.7} /></Link>
            <button aria-label="Shopping bag" className="relative" onClick={openDrawer}>
              <ShoppingBag size={19} strokeWidth={1.7} />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent font-mono text-[9px] font-bold text-accent-foreground">
                  {count}
                </span>
              )}
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-border px-5 py-4 lg:px-10">
            <form onSubmit={submitSearch} className="mx-auto flex max-w-2xl items-center gap-3 border-b border-foreground pb-2">
              <Search size={17} />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent font-mono text-sm outline-none"
                placeholder="Search products"
                aria-label="Search products"
              />
            </form>
          </div>
        )}
      </header>
    </>
  )
}
