import React from 'react';

export default function LoadingContainer({
  children,
  loadingMessage
}: {
  children: React.ReactNode;
  loadingMessage: string;
}) {
  return (
    <div className="grid place-content-center items-center h-[100dvh] w-[100dvw]">
      {children}
      <p className="text-2xl font-bold font-newsreader">{loadingMessage}</p>
    </div>
  );
}
