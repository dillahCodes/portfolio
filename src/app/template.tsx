/**
 * Template re-mounts on every route change, which re-triggers
 * the CSS entry animations (expand → overflow → fade).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid animate-expand">
      <div className="animate-overflow">
        <div className="animate-fade">{children}</div>
      </div>
    </div>
  );
}
