import React from 'react';

export default function LoadingContainer({
  children,
  loadingMessage
}: {
  children: React.ReactNode;
  loadingMessage: string;
}) {
  return (
    <div className="grid place-content-center items-center">
      {children}
      <p className="text-2xl font-bold">{loadingMessage}</p>
    </div>
  );
}
