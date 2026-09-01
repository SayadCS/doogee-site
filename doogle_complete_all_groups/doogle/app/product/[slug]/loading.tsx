export default function ProductLoading() {
  return (
    <div className="min-h-screen animate-pulse bg-background">
      <div className="h-[104px] border-b border-border bg-secondary/40" />
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-10 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="aspect-square bg-secondary" />
        <div className="space-y-4">
          <div className="h-10 w-2/3 bg-secondary" />
          <div className="h-4 w-1/3 bg-secondary" />
          <div className="h-6 w-24 bg-secondary" />
          <div className="h-16 w-full bg-secondary" />
          <div className="h-12 w-full bg-secondary" />
          <div className="h-12 w-full bg-secondary" />
        </div>
      </div>
    </div>
  )
}
