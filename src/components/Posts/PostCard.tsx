'use client';
import React, { useContext } from 'react';
import { PostContext } from '@/context/PostContext';

export default function PostCard() {
  const { state, dispatch } = useContext(PostContext);
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
