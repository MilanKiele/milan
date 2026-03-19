export function BracketBox({
  children,
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-zinc-400 pointer-events-none transition-colors duration-300" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-zinc-400 pointer-events-none transition-colors duration-300" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-zinc-400 pointer-events-none transition-colors duration-300" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-zinc-400 pointer-events-none transition-colors duration-300" />
      {children}
    </div>
  );
}
