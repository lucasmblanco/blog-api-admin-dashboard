'use client';
import React, { useContext } from 'react';
import { PostContext } from '@/context/PostContext';
import { DialogContext } from '@/context/DialogContext';
import DeletePostButton from '../Buttons/DeletePostButton';

type author = {
  username: string;
};

export default function PostCard({ author }: { author: author }) {
  const { state } = useContext(PostContext);
  const { dispatch } = useContext(DialogContext);
  return (
    <div
      className="flex justify-between bg-light-brown text-light-yellow truncate py-4 px-2 rounded-xl font-bold hover:brightness-150 transition-all"
      onClick={() => dispatch({ type: 'TOGGLE_DIALOG' })}
    >
      <div className="grid truncate w-full">
        <p className="brightness-75 truncate text-lg"> {state.title}</p>
        <p className="hidden md:block text-xs brightness-50">
          {author.username}
        </p>
        <p className="hidden md:block text-xs brightness-50">
          {new Date(state.timestamp).toLocaleDateString()}
        </p>
      </div>
      <DeletePostButton />
    </div>
  );
}
