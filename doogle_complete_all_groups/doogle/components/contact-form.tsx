'use client'

import { useState } from 'react'

export function ContactForm() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <div className="border border-accent bg-secondary p-8 font-mono text-sm font-bold uppercase">
        Thanks — your message is on its way. We&apos;ll reply within 1-2 business days.
      </div>
    )
  }

  return (
    <form onSubmit={(event) => { event.preventDefault(); setSent(true) }} className="grid gap-6">
      <label className="grid gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em]">
        Name
        <input required className="border-b border-foreground bg-transparent px-0 py-3 text-sm outline-none" />
      </label>
      <label className="grid gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em]">
        Email
        <input required type="email" className="border-b border-foreground bg-transparent px-0 py-3 text-sm outline-none" />
      </label>
      <label className="grid gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em]">
        Topic
        <select className="border-b border-foreground bg-transparent py-3 text-sm outline-none">
          <option>Product question</option>
          <option>Order support</option>
          <option>Warranty</option>
          <option>Partnership</option>
        </select>
      </label>
      <label className="grid gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em]">
        Message
        <textarea required rows={5} className="resize-y border-b border-foreground bg-transparent py-3 text-sm outline-none" />
      </label>
      <button className="w-fit bg-accent px-7 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-accent-foreground">Send message</button>
    </form>
  )
}
