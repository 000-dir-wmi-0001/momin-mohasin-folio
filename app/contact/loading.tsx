export default function Loading() {
  return (
    <section className="w-full font-mono">
      <div className="mx-auto max-w-3xl px-4 md:px-6 py-8 md:py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-48 mx-auto mb-4"></div>
          <div className="h-4 bg-muted rounded w-64 mx-auto mb-8"></div>
          <div className="rounded-xl border shadow-sm p-5 md:p-6 bg-white/60 dark:bg-zinc-900/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="h-10 bg-muted rounded"></div>
              <div className="h-10 bg-muted rounded"></div>
            </div>
            <div className="h-10 bg-muted rounded mb-4"></div>
            <div className="h-32 bg-muted rounded mb-6"></div>
            <div className="h-10 bg-muted rounded w-32"></div>
          </div>
        </div>
      </div>
    </section>
  );
}