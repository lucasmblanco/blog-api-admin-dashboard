import React, { useContext, useRef, useEffect } from 'react';
import { DialogContext } from '@/context/DialogContext';

export default function useDialog(hideFormButton: boolean) {
  const { state, dispatch } = useContext(DialogContext);
  const modalRef = useRef<HTMLDialogElement>(null);

  function handleButton() {
    dispatch({ type: 'TOGGLE_DIALOG_DEFAULT' });
  }

  useEffect(() => {
    if (hideFormButton) dispatch({ type: 'SELECT_FORM_VIEW' });
  }, [dispatch, hideFormButton]);

  useEffect(() => {
    if (modalRef.current)
      state.isDialogOpen
        ? modalRef.current.showModal()
        : modalRef.current.close();
  }, [state.isDialogOpen]);

  return { handleButton, state, modalRef };
}
