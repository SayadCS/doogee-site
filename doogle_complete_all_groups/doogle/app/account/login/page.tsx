'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const router = useRouter()

  function submit(event: React.FormEvent) {
    event.preventDefault()
    // No real auth backend is wired up yet — this is UI scaffolding.
    router.push('/account')
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-sm px-5 py-20">
        <div className="mb-8 flex gap-6 border-b border-border">
          <button onClick={() => setMode('login')} className={`pb-3 font-mono text-[11px] font-bold uppercase tracking-[0.1em] ${mode === 'login' ? 'border-b-2 border-foreground' : 'text-muted-foreground'}`}>Log in</button>
          <button onClick={() => setMode('register')} className={`pb-3 font-mono text-[11px] font-bold uppercase tracking-[0.1em] ${mode === 'register' ? 'border-b-2 border-foreground' : 'text-muted-foreground'}`}>Register</button>
        </div>

        <form onSubmit={submit} className="space-y-5">
          {mode === 'register' && (
            <input required placeholder="Full name" className="w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-foreground" />
          )}
          <input required type="email" placeholder="Email address" className="w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-foreground" />
          <input required type="password" placeholder="Password" className="w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-foreground" />
          <button type="submit" className="block w-full bg-accent px-6 py-4 text-center font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-accent-foreground">
            {mode === 'login' ? 'Log in →' : 'Create account →'}
          </button>
        </form>
        <p className="mt-6 font-mono text-[10px] text-muted-foreground">Note: no real authentication is wired up yet — this is UI scaffolding for a future auth provider (NextAuth, Clerk, Supabase, etc.).</p>
      </div>
      <SiteFooter />
    </div>
  )
}
