//import { PostProvider } from '@/context/PostContext';
import React, { useContext } from 'react';
import { PostContext } from '@/context/PostContext';
import parse from 'html-react-parser';

export default function Post() {
  const { state } = useContext(PostContext);

  return (
    <div className="grid p-2 gap-4 ">
      <h2 className="font-bold md:text-2xl">{state.title}</h2>
      {parse(state.body)}
    </div>
  );
}

// antes el div principal era flex flex-cols
