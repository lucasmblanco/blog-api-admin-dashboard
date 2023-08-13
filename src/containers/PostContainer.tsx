'use client';
import React, { useContext, useEffect } from 'react';

import PostCard from '@/components/Posts/PostCard';
import { PostContext } from '@/context/PostContext';
import PostDialog from '@/components/Posts/PostDialog';

type PostType = {
  _id: string;
  author: string;
  title: string;
  body: string;
  published: boolean;
  timestamp: string;
  __v: number;
};

export default function PostContainer({ postData }: any) {
  const { state, dispatch } = useContext(PostContext);
  useEffect(() => {
    dispatch({
      type: 'ADD_DATA',
      payload: {
        title: postData.title,
        body: postData.body
      }
    });
  }, []);
  return (
    <>
      <PostCard />
      <PostDialog />
    </>
  );
}
