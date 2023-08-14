'use client';
import React, { useContext } from 'react';
import { PostContext } from '@/context/PostContext';
import { DialogContext } from '@/context/DialogContext';

export default function PostCard() {
  const { state } = useContext(PostContext);
  const { dispatch } = useContext(DialogContext);
  return (
    <>
      <div
        className="bg-black text-white"
        onClick={() => dispatch({ type: 'TOGGLE_DIALOG' })}
      >
        {state.title}
      </div>
    </>
  );
}
