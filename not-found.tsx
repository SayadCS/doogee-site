'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function NotFound() {
  const [query, setQuery] = useState('')
  const router = useRouter()

  function submitSearch(event: React.FormEvent) {
    event.preventDefault()
    if (query.trim()) router.push(`/search?q=${encodeURIComponent(query.trim())}`)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <div className="mx-auto max-w-xl px-5 py-24 text-center lg:py-32">
        <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-accent">404</p>
        <h1 className="mb-6 text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] lg:text-7xl">Page not found.</h1>
        <p className="mb-10 text-sm leading-6 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Try searching for what you need, or jump back to shopping.
        </p>

        <form onSubmit={submitSearch} className="mx-auto mb-10 flex max-w-sm items-center gap-3 border-b border-foreground pb-3">
          <Search size={17} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products"
            aria-label="Search products"
            className="w-full bg-transparent font-mono text-sm outline-none"
          />
        </form>

        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="bg-accent px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-accent-foreground">Back to home</Link>
          <Link href="/products/rugged-phones" className="border border-foreground px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em]">Shop products</Link>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
