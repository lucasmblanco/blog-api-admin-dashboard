import React, { useContext, useEffect } from 'react';
import PostForm from './PostForm';
import Post from './Post';
import { DialogContext } from '@/context/DialogContext';

const views: CurrentViewType = {
  post: <Post />,
  form: <PostForm />
};

type CurrentViewType = {
  [key: string]: React.ReactNode;
};

export default function PostDialog({
  hideFormButton
}: {
  hideFormButton?: boolean;
}) {
  const { state, dispatch } = useContext(DialogContext);

  function handleButton() {
    dispatch({ type: 'TOGGLE_DIALOG_DEFAULT' });
  }

  useEffect(() => {
    if (hideFormButton) dispatch({ type: 'SELECT_FORM_VIEW' });
  }, []);

  return (
    <dialog open={state.isDialogOpen}>
      <button onClick={handleButton}>CLOSE</button>
      {!hideFormButton && (
        <button onClick={() => dispatch({ type: 'CHANGE_VIEW' })}>Form</button>
      )}
      {views[state.currentView]}
    </dialog>
  );
}
