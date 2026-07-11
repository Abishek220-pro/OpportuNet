function EmptyState() {
  return (
    <div className="text-center py-20 border border-dashed border-line rounded-sm">
      <p className="font-display text-lg text-ink mb-1">No opportunities posted yet</p>
      <p className="font-mono text-xs text-slate uppercase tracking-wide">Check back soon, or adjust your filters</p>
    </div>
  );
}

export default EmptyState;
