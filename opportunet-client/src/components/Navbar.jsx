function Navbar() {
  return (
    <nav className="border-b border-line bg-paper px-6 py-5">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <h1 className="font-display text-2xl font-semibold text-ink tracking-tight">
          OpportuNet
        </h1>
        <p className="font-mono text-xs text-slate uppercase tracking-wide">
          Opportunities for every student
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
