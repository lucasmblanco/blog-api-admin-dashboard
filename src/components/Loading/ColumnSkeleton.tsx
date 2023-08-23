import React from 'react';
import PostSkeleton from './PostSkeleton';

export default function ColumnSkeleton() {
  return (
    <section className="basis-full shrink-0 snap-center overflow-y-scroll px-4">
      <div className="flex gap-1 py-2">
        <svg viewBox="0 0 100 100" width="10" className="fill-gray-500">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <h2 className="font-bold p-2 rounded animate-pulse "></h2>
      </div>
      <div className="grid gap-4 max-h-[100vh] overflow-y-scroll">
        {[...Array(8).keys()].map(s => (
          <PostSkeleton key={Math.random()} />
        ))}
      </div>
    </section>
  );
}
