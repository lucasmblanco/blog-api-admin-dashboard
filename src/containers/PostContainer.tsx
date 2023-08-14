'use client';
import React, { useContext, useEffect } from 'react';
import PostCard from '@/components/Posts/PostCard';
import { PostContext } from '@/context/PostContext';
import PostDialog from '@/components/Posts/PostDialog';
import { DialogProvider } from '@/context/DialogContext';

export default function PostContainer({ postData }: any) {
  const { state, dispatch } = useContext(PostContext);
  useEffect(() => {
   // console.log(postData)
    dispatch({
      type: 'ADD_DATA',
      payload: postData
    });
  }, [postData]);
  return (
    <>
      <DialogProvider>
        <PostCard />
        <PostDialog />
      </DialogProvider>
    </>
  );
}
