'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function CheckoutError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-md px-5 py-24 text-center">
        <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Checkout error</p>
        <h1 className="mb-6 text-3xl font-black uppercase leading-none tracking-[-0.04em]">We couldn&apos;t process that.</h1>
        <p className="mb-10 text-sm text-muted-foreground">Your bag is safe — nothing was charged. Try placing the order again.</p>
        <div className="flex flex-wrap justify-center gap-3">
          <button onClick={reset} className="bg-accent px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-accent-foreground">Try again</button>
          <Link href="/cart" className="border border-foreground px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em]">Back to bag</Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}
