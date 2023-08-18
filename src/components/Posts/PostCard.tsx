'use client';
import React, { useContext } from 'react';
import { PostContext } from '@/context/PostContext';
import { DialogContext } from '@/context/DialogContext';

export default function PostCard() {
  const { state } = useContext(PostContext);
  const { dispatch } = useContext(DialogContext);
  return (
    <div
      className="bg-light-brown text-light-yellow truncate py-4 px-2 rounded-xl font-bold"
      onClick={() => dispatch({ type: 'TOGGLE_DIALOG' })}
    >
      {state.title}
    </div>
  );
}
