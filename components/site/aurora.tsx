/**
 * Soft aurora / gradient-mesh backdrop. Pure CSS (transform-only animation),
 * so it costs nothing on the main thread.
 */
export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div
        className="animate-aurora absolute -left-[15%] -top-[25%] h-[70vmax] w-[70vmax] rounded-full blur-3xl will-change-transform"
        style={{ background: "radial-gradient(circle, var(--aurora-1), transparent 62%)" }}
      />
      <div
        className="animate-aurora absolute -right-[20%] top-[5%] h-[60vmax] w-[60vmax] rounded-full blur-3xl will-change-transform [animation-delay:-8s]"
        style={{ background: "radial-gradient(circle, var(--aurora-2), transparent 62%)" }}
      />
      <div
        className="animate-aurora absolute bottom-[-30%] left-[25%] h-[50vmax] w-[50vmax] rounded-full blur-3xl will-change-transform [animation-delay:-14s]"
        style={{ background: "radial-gradient(circle, var(--aurora-3), transparent 62%)" }}
      />
      <div className="dot-grid mask-fade-b absolute inset-0 opacity-40" />
    </div>
  );
}
