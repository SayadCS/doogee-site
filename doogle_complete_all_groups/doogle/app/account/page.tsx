import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-5 py-16 lg:py-20">
        <h1 className="mb-2 text-4xl font-black uppercase leading-none tracking-[-0.06em] lg:text-5xl">My account</h1>
        <p className="mb-10 text-sm text-muted-foreground">Not signed in yet — <Link href="/account/login" className="underline">log in</Link> to see your saved details.</p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="border border-border p-6">
            <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Profile</p>
            <p className="text-sm text-muted-foreground">Name, email, and password settings will appear here once you&apos;re signed in.</p>
          </div>
          <div className="border border-border p-6">
            <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Saved addresses</p>
            <p className="text-sm text-muted-foreground">No saved addresses yet. They&apos;ll show up here after your first order.</p>
          </div>
          <div className="border border-border p-6">
            <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Payment methods</p>
            <p className="text-sm text-muted-foreground">No saved payment methods. Added at checkout for faster future orders.</p>
          </div>
          <Link href="/account/orders" className="flex flex-col justify-between border border-border p-6 transition-colors hover:bg-secondary">
            <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Order history</p>
            <p className="text-sm">View past orders →</p>
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}
