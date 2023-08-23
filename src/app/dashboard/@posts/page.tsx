'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import PostColumns from '@/components/Posts/PostColumns';
import ColumnSkeleton from '@/components/Loading/ColumnSkeleton';

export default function PostPage() {
  const postQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () =>
      fetch('https://blog-api-ol7v.onrender.com/v1/posts').then(res =>
        res.json()
      )
  });

  if (postQuery.isLoading)
    return (
      <div className="flex snap-x overscroll-x-hidden">
        <ColumnSkeleton />
        <ColumnSkeleton />
      </div>

      /*
      <LoadingContainer loadingMessage="RETRIEVING POSTS">
        <LoadingPost />
      </LoadingContainer>
      */
    );

  if (postQuery.error instanceof Error)
    return 'An error has occurred: ' + postQuery.error.message;

  return (
    <div className="flex overflow-x-auto snap-x ">
      <PostColumns data={postQuery.data} title="PUBLISHED" />
      <PostColumns data={postQuery.data} title="HIDDEN" published={false} />
    </div>
  );
}
