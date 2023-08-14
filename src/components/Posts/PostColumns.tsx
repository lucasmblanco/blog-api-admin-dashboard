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
  return (
    <>
      <h2>{title}</h2>
      {data.posts
        .filter((post: PostType) => post.published === published)
        .sort(
          (a: PostType, b: PostType) =>
            Number(new Date(b.timestamp)) - Number(new Date(a.timestamp))
        )
        .map((post: PostType) => (
          <PostProvider key={post._id}>
            <PostContainer postData={post} />
          </PostProvider>
        ))}
    </>
  );
}
