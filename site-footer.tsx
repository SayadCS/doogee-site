import Link from 'next/link'

const BRAND_NAME = 'DOOGEE'

export function SiteFooter() {
  return (
    <footer className="bg-primary px-5 py-12 text-primary-foreground lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-10 border-b border-primary-foreground/20 pb-12 lg:flex-row">
          <div>
            <Link href="/" className="font-mono text-3xl font-black tracking-[-0.12em]">
              {BRAND_NAME}<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6 text-primary-foreground/55">
              Technology without limits. Gear for people who refuse to stay inside the lines.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 sm:grid-cols-3">
            <div>
              <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-accent">Shop</p>
              <div className="flex flex-col gap-3 text-xs text-primary-foreground/65">
                <Link href="/products/rugged-phones">Rugged phones</Link>
                <Link href="/products/tablets">Tablets</Link>
                <Link href="/products/accessories">Accessories</Link>
              </div>
            </div>
            <div>
              <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-accent">Support</p>
              <div className="flex flex-col gap-3 text-xs text-primary-foreground/65">
                <Link href="/contact-us/contact-us">Contact us</Link>
                <Link href="/legal/shipping-returns">Shipping</Link>
                <Link href="/contact-us/warranty">Warranty</Link>
              </div>
            </div>
            <div>
              <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-accent">Legal</p>
              <div className="flex flex-col gap-3 text-xs text-primary-foreground/65">
                <Link href="/legal/privacy-policy">Privacy policy</Link>
                <Link href="/legal/terms-of-service">Terms of service</Link>
                <Link href="/legal/cookie-policy">Cookie policy</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-6 font-mono text-[9px] uppercase tracking-[0.16em] text-primary-foreground/40 sm:flex-row">
          <span>© 2026 {BRAND_NAME}. All rights reserved.</span>
          <span>Made for the untamed.</span>
        </div>
      </div>
    </footer>
  )
}
