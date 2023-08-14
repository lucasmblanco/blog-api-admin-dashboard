'use client';
import React, { useContext } from 'react';
import { DialogContext } from '@/context/DialogContext';

export default function AddNewPostButton() {
  const { dispatch } = useContext(DialogContext);

  const handleClick = function () {
    dispatch({ type: 'TOGGLE_DIALOG_DEFAULT' });
  };
  return (
    <div>
      <button onClick={handleClick}>+</button>
    </div>
  );
}
