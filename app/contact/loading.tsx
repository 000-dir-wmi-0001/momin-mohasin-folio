export default function Loading() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-2xl px-4 md:px-6 py-14 md:py-20">
        <div className="animate-pulse">
          <div className="h-8 bg-muted/60 rounded-lg w-48 mx-auto mb-4"></div>
          <div className="h-4 bg-muted/60 rounded-lg w-64 mx-auto mb-8"></div>
          <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div className="h-10 bg-muted/60 rounded-lg"></div>
              <div className="h-10 bg-muted/60 rounded-lg"></div>
            </div>
            <div className="h-10 bg-muted/60 rounded-lg mb-5"></div>
            <div className="h-32 bg-muted/60 rounded-lg mb-6"></div>
            <div className="h-10 bg-muted/60 rounded-lg w-32"></div>
          </div>
        </div>
      </div>
    </section>
  );
}