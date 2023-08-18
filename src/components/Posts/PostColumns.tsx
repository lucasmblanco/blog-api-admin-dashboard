import React from 'react';
import PostContainer from '@/containers/PostContainer';
import { PostProvider } from '@/context/PostContext';

type PostType = {
  _id: string;
  author: string;
  title: string;
  body: string;
  published: boolean;
  timestamp: string;
};

export default function PostColumns({
  data,
  title,
  published = true
}: {
  data: any;
  title: string;
  published?: boolean;
}) {
  const filteredData = data.posts
    .filter((post: PostType) => post.published === published)
    .sort(
      (a: PostType, b: PostType) =>
        Number(new Date(b.timestamp)) - Number(new Date(a.timestamp))
    );
  return (
    <section className="basis-full shrink-0 snap-center overflow-y-scroll px-4">
      <div className="flex gap-1 py-2">
        <svg viewBox="0 0 100 100" width="10" className="fill-green-500">
          <circle cx="50" cy="50" r="40" />
        </svg>
        <h2 className="font-bold">{`${title} (${filteredData.length})`} </h2>
      </div>
      <div className="grid gap-4">
        {filteredData.map((post: PostType) => (
          <PostProvider key={post._id}>
            <PostContainer postData={post} />
          </PostProvider>
        ))}
      </div>
    </section>
  );
}
