import React from 'react';
import PostContainer from '@/containers/PostContainer';
import { PostProvider } from '@/context/PostContext';
import { AnimatePresence } from 'framer-motion';

type PostType = {
  _id: string;
  author: {
    username: string;
  };
  title: string;
  body: string;
  published: boolean;
  timestamp: string;
};

export default function PostColumns({
  data,
  title,
  published = true,
  color
}: {
  data: any;
  title: string;
  published?: boolean;
  color: string;
}) {
  const filteredData = data.posts
    .filter((post: PostType) => post.published === published)
    .sort(
      (a: PostType, b: PostType) =>
        Number(new Date(b.timestamp)) - Number(new Date(a.timestamp))
    );
  return (
    <section className="flex flex-col basis-full shrink-0 snap-center overflow-y-hidden px-4 items-stretch my-4 rounded-lg border border-light-brown">
      <div className="flex gap-1 py-2 self-start">
        <svg viewBox="0 0 100 100" width="10" className={`${color}`}>
          <circle cx="50" cy="50" r="40" />
        </svg>
        <h2 className="font-bold ">{`${title} (${filteredData.length})`} </h2>
      </div>
      <div className="grid gap-4 overflow-y-auto auto-rows-min max-h-[77dvh] md:max-h-none">
        {filteredData.map((post: PostType) => (
          <PostProvider key={post._id}>
            <PostContainer postData={post} />
          </PostProvider>
        ))}
      </div>
    </section>
  );
}

// overflow: scroll;

//FLEX + FLEX COLUMNS EN SECTION
