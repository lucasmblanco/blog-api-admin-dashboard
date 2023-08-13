import { PostProvider } from '@/context/PostContext';
import React, { useContext } from 'react';
import { PostContext } from '@/context/PostContext';

export default function Post() {
  const { state } = useContext(PostContext);
  return (
    <div>
      <h2>{state.title}</h2>
      {state.body}
    </div>
  );
}
