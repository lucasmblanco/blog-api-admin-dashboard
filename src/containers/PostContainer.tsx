'use client';
import React, { useContext, useEffect } from 'react';
import PostCard from '@/components/Posts/PostCard';
import { PostContext } from '@/context/PostContext';
import PostDialog from '@/components/Posts/PostDialog';
import { DialogProvider } from '@/context/DialogContext';
import { PostComponentType } from '@/types';
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

export default function PostContainer({ postData }: { postData: PostType }) {
  const { dispatch } = useContext(PostContext);
  useEffect(() => {
    dispatch({
      type: 'ADD_DATA',
      payload: postData
    });
  }, [dispatch, postData]);

  return (
    <>
      <DialogProvider>
        <PostCard author={postData.author} />
        <PostDialog />
      </DialogProvider>
    </>
  );
}
