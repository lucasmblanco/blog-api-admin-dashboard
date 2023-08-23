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
      <button
        onClick={handleClick}
        className="font-bold text-sm border border-black-brown px-4 py-1 mx-2 rounded-full hover:bg-light-brown active:bg-light-brown active:text-beige hover:text-beige hover:border-soft-brown transition-all"
      >
        New
      </button>
    </div>
  );
}
