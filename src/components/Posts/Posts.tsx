import React from 'react';

import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query';

type PostType = {
  _id: string;
  author: string;
  title: string;
  published: boolean;
  timestamp: string;
  __v: number;
};

const queryClient = new QueryClient();

function PostsQuery() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['postsData'],
    queryFn: () =>
      fetch('https://blog-api-ol7v.onrender.com/v1/posts').then(res =>
        res.json()
      )
  });

  if (isLoading) return 'Loading...';

  if (error instanceof Error) return 'An error has occurred: ' + error.message;

  return (
    <section>
      {' '}
      {data.posts.map((p: PostType) => (
        <li key={p._id}>{p.title}</li>
      ))}
    </section>
  );
}

export default function Post() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsQuery />
    </QueryClientProvider>
  );
}

/*
export default async function Posts() {
  const endpoint = 'https://blog-api-ol7v.onrender.com/v1/posts';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const response: Response = await fetch(endpoint, options);

  const dataJSON: ApiResponsePosts = await response.json();
  return (
    <>
      {dataJSON.posts.map(p => (
        <li key={p._id}>{p.title}</li>
      ))}
    </>
  );
}
*/
