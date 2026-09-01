import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const sampleOrders = [
  { id: 'DG-20481', date: 'Aug 14, 2026', status: 'Delivered', total: '$399.99', items: 'Blade GT Ultra' },
  { id: 'DG-20355', date: 'Jul 2, 2026', status: 'Shipped', total: '$329.99', items: 'S110 Pro Max' },
  { id: 'DG-20102', date: 'Jun 18, 2026', status: 'Processing', total: '$499.99', items: 'V Max Pro Duo' },
]

const statusColor: Record<string, string> = {
  Delivered: 'bg-secondary text-foreground',
  Shipped: 'bg-accent text-accent-foreground',
  Processing: 'border border-foreground',
}

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-3xl px-5 py-16 lg:py-20">
        <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
          <Link href="/account">My account</Link> / Orders
        </p>
        <h1 className="mb-10 text-4xl font-black uppercase leading-none tracking-[-0.06em] lg:text-5xl">Order history</h1>

        <p className="mb-6 font-mono text-[10px] text-muted-foreground">Sample orders shown below — real order data will populate here once checkout is connected to a backend.</p>

        <div className="border-t border-border">
          {sampleOrders.map((order) => (
            <div key={order.id} className="flex flex-wrap items-center justify-between gap-3 border-b border-border py-5">
              <div>
                <p className="font-mono text-sm font-bold">{order.id}</p>
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">{order.date} · {order.items}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className={`px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.08em] ${statusColor[order.status]}`}>{order.status}</span>
                <span className="font-mono text-sm font-bold">{order.total}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SiteFooter />
    </div>
  )
}
