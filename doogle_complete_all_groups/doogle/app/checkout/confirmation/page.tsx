import Link from 'next/link'
import { Check } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function ConfirmationPage() {
  const orderNumber = `DG-${Math.floor(20000 + Math.random() * 9999)}`

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-xl px-5 py-24 text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-accent">
          <Check size={26} className="text-accent-foreground" />
        </div>
        <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Order confirmed</p>
        <h1 className="mb-6 text-4xl font-black uppercase leading-none tracking-[-0.05em] lg:text-5xl">Thanks for your order.</h1>
        <p className="mb-2 text-sm text-muted-foreground">Order #{orderNumber}</p>
        <p className="mb-10 text-sm leading-6 text-muted-foreground">A confirmation has been sent to your email. Estimated delivery in 5–7 business days.</p>
        <Link href="/" className="inline-flex items-center gap-3 bg-accent px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-accent-foreground">
          Back to home →
        </Link>
      </div>
      <SiteFooter />
    </div>
  )
}
