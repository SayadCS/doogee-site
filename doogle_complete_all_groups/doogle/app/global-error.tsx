'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-background px-5 text-center text-foreground">
        <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-accent">Something broke</p>
        <h1 className="mb-6 text-4xl font-black uppercase leading-none tracking-[-0.05em]">This page hit a snag.</h1>
        <p className="mb-10 max-w-sm text-sm text-muted-foreground">An unexpected error occurred. Try again, or head back to the homepage.</p>
        <div className="flex gap-3">
          <button onClick={reset} className="bg-accent px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-accent-foreground">Try again</button>
          <Link href="/" className="border border-foreground px-6 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em]">Back to home</Link>
        </div>
      </body>
    </html>
  )
}
