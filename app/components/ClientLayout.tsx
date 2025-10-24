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
    </>
  );
}
