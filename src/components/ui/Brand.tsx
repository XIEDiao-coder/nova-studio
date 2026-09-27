export default function Brand() {
  return (
    <span className="brand">
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="m6 25 7-18h5l8 18h-6l-5-12-4 12H6Z" fill="currentColor" />
        <path d="m19 6 7 9" stroke="currentColor" strokeWidth="3" />
      </svg>
      <span>
        nova<span className="brand-light">studio</span>
        <span className="brand-dot">®</span>
      </span>
    </span>
  );
}
