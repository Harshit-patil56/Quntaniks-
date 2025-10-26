'use client';

import Loading from './Loading';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Loading />
      {children}
      
      {/* Fixed bottom blur gradient */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-8 pointer-events-none z-50"
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.02), transparent)',
          backdropFilter: 'blur(3px)',
          WebkitBackdropFilter: 'blur(3px)',
        }}
      />
    </>
  );
}
