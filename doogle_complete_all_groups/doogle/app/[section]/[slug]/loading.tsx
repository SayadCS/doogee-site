export default function SectionLoading() {
  return (
    <div className="min-h-screen animate-pulse bg-background">
      <div className="h-[104px] border-b border-border bg-secondary/40" />
      <div className="bg-primary px-5 py-20 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-5xl space-y-4">
          <div className="h-3 w-24 bg-primary-foreground/20" />
          <div className="h-16 w-2/3 bg-primary-foreground/20" />
          <div className="h-4 w-1/2 bg-primary-foreground/20" />
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 px-5 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
        <div className="h-56 bg-secondary" />
        <div className="h-56 bg-secondary" />
      </div>
    </div>
  )
}
