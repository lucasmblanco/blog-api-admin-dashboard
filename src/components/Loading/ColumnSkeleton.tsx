import React from 'react';
import PostSkeleton from './PostSkeleton';

export default function ColumnSkeleton() {
  return (
    <section className="flex flex-col min-h-[100vh] basis-full shrink-0 snap-center  px-4 items-stretch  my-4 rounded border border-light-brown overflow-y-hidden">
      <div className="flex gap-1 py-4 self-start">
        <svg viewBox="0 0 100 100" width="10" className="fill-gray-500">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <h2 className="font-bold p-2 rounded animate-pulse "></h2>
      </div>
      <div className="grid gap-4 overflow-y-auto auto-rows-min max-h-[77dvh] md:max-h-none">
        {[...Array(4).keys()].map(s => (
          <PostSkeleton key={Math.random()} />
        ))}
      </div>
    </section>
  );
}
