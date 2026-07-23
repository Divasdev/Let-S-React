export function UnlockIntelligenceCTA() {
  return (
    <section className="px-6 py-20 w-full bg-white border-t border-outline-variant/20">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        
        <h2 className="text-2xl md:text-3xl font-bold text-charcoal tracking-tight">
          Unlock Exclusive Aviation Intelligence
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="px-6 py-3 rounded-[var(--radius-pill)] bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors shadow-md">
            Start Exploring
          </button>
          
          <button className="px-6 py-3 rounded-[var(--radius-pill)] bg-white border border-outline-variant/60 text-primary text-sm font-semibold hover:bg-surface-container transition-colors shadow-sm">
            Compare Airports
          </button>
        </div>

      </div>
    </section>
  );
}
