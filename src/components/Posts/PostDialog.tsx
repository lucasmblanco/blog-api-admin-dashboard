import React, { useContext, useEffect, useRef } from 'react';
import PostForm from './PostForm';
import Post from './Post';
import { DialogContext } from '@/context/DialogContext';
import Image from 'next/image';
import closeCircle from '../../../public/close-circle.svg';
import editIcon from '../../../public/edit-icon.svg';

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
  const modalRef = useRef<HTMLDialogElement>(null);

  function handleButton() {
    dispatch({ type: 'TOGGLE_DIALOG_DEFAULT' });
  }

  useEffect(() => {
    if (hideFormButton) dispatch({ type: 'SELECT_FORM_VIEW' });
  }, []);

  useEffect(() => {
    if (modalRef.current)
      state.isDialogOpen
        ? modalRef.current.showModal()
        : modalRef.current.close();
  }, [state.isDialogOpen]);

  return (
    <dialog
      className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] z-[1055] bg-light-brown text-light-yellow backdrop:backdrop-blur
      rounded-xl border-[1px] border-soft-brown min-h-[90vh] min-w-[90vw]"
      ref={modalRef}
    >
      <div className="flex flex-col w-full min-h-[90vh]">
        <div className="flex justify-end p-2 gap-2">
          {!hideFormButton && (
            <button onClick={() => dispatch({ type: 'CHANGE_VIEW' })}>
              <Image
                src={editIcon}
                alt="edit icon"
                width={20}
                className="hover:bg-soft-brown rounded-full transition-all p-1"
              />
            </button>
          )}
          <button onClick={handleButton}>
            <Image
              src={closeCircle}
              alt="close circle icon"
              width={20}
              className="hover:bg-soft-brown rounded-full transition-all"
            />
          </button>
        </div>
        {views[state.currentView]}
      </div>
    </dialog>
  );
}
