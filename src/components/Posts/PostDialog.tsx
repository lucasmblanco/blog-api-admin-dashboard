import React, { useContext, useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';
import { PostContext } from '@/context/PostContext';
import { PostComponentType } from '@/types';

type CurrentViewType = {
  [key: string]: React.ReactNode;
};

const viewController = (
  state: PostComponentType,
  currentView: string
): string => {
  return state.currentView ? state.currentView : currentView;
};

export default function PostDialog({
  view = 'form',
  hideFormButton,
  dialogStatus,
  dialogControl
}: {
  view?: string;
  hideFormButton?: boolean;
  dialogStatus?: boolean;
  dialogControl?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { state, dispatch } = useContext(PostContext);
  const [currentView, setCurrentView] = useState(state.currentView || view);

  const views: CurrentViewType = {
    post: <Post />,
    form: <PostForm />
  };

  return (
    <dialog open={state.isDialogOpen || dialogStatus}>
      <button
        onClick={() =>
          dialogControl?.(false) || dispatch({ type: 'TOGGLE_DIALOG' })
        }
      >
        CLOSE
      </button>
      {!hideFormButton && (
        <button
          onClick={() =>
            dispatch
              ? dispatch({ type: 'CHANGE_VIEW' })
              : setCurrentView(prev => (prev === 'post' ? 'form' : 'post'))
          }
        >
          Form
        </button>
      )}
      {views[viewController(state, currentView)]}
    </dialog>
  );
}
