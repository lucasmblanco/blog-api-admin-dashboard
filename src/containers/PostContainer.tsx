'use client';
import React, { useContext, useEffect } from 'react';
import PostCard from '@/components/Posts/PostCard';
import { PostContext } from '@/context/PostContext';
import PostDialog from '@/components/Posts/PostDialog';
import { DialogProvider } from '@/context/DialogContext';

export default function PostContainer({ postData }: any) {
  const { state, dispatch } = useContext(PostContext);
  useEffect(() => {
    dispatch({
      type: 'ADD_DATA',
      payload: postData
    });
  }, [dispatch, postData]);
  return (
    <>
      <DialogProvider>
        <PostCard />
        <PostDialog />
      </DialogProvider>
    </>
  );
}
