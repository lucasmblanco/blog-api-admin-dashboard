'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import PostColumns from '@/components/Posts/PostColumns';

export default function PostPage() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      fetch('https://blog-api-ol7v.onrender.com/v1/posts').then(res =>
        res.json()
      )
  });

  if (isLoading) return 'Loading...';

  if (error instanceof Error) return 'An error has occurred: ' + error.message;

  return (
    <>
      <PostColumns data={data} title="PUBLISHED" />
      <PostColumns data={data} title="HIDDEN" published={false} />
    </>
  );
}
