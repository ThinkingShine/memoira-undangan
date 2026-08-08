export function OrnamentDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-8 ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-[#b08d57]" />
      <svg width="40" height="40" viewBox="0 0 40 40" className="text-[#b08d57]">
        <g fill="none" stroke="currentColor" strokeWidth="0.8">
          <path d="M20 4 L24 16 L36 20 L24 24 L20 36 L16 24 L4 20 L16 16 Z" />
          <circle cx="20" cy="20" r="3" />
          <circle cx="20" cy="20" r="6" opacity="0.4" />
        </g>
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-[#b08d57]" />
    </div>
  );
}

export function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" stroke="currentColor" strokeWidth="0.6">
      <path d="M0 40 Q20 40 20 20 Q20 0 40 0" />
      <path d="M0 50 Q30 50 30 20 Q30 -10 50 0" opacity="0.5" />
      <circle cx="20" cy="20" r="2" fill="currentColor" />
      <path d="M10 30 L15 25 M25 15 L30 10" />
    </svg>
  );
}
