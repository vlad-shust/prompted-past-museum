export function Plaque({ line, title }: { line: string; title: string }) {
  return (
    <span className="plaque">
      <span className="plaque-line">{line}</span>
      <span className="plaque-title">{title}</span>
    </span>
  );
}
