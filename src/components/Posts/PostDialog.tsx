import React, { useContext, useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';
import { PostContext } from '@/context/PostContext';

type CurrentViewType = {
  [key: string]: React.ReactNode;
};

export default function PostDialog() {
  const { state } = useContext(PostContext);
  const [currentView, setCurrentView] = useState('post');

  const views: CurrentViewType = {
    post: <Post />,
    form: <PostForm />
  };

  return (
    <dialog open={state.isDialogOpen}>
      <button
        onClick={() =>
          setCurrentView(prev => (prev === 'post' ? 'form' : 'post'))
        }
      >
        Form
      </button>
      {views[currentView]}
    </dialog>
  );
}
/*
 {bodyContent.map((part, index) => (
        <p key={index}>{part}</p>
      ))}
*/
