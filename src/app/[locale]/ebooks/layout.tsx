export default function EbooksLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Suppress parent Header/Footer via CSS — 
          Next.js nested layouts cannot remove parent elements,
          so we hide them and reset the body background. */}
      <style>{`
        header, footer { display: none !important; }
        body { background: #0a0f0d !important; }
      `}</style>
      {children}
    </>
  );
}
