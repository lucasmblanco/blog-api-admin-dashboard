'use client';
import React, { useContext } from 'react';
import { DialogContext } from '@/context/DialogContext';
import Image from 'next/image';
import newIcon from '../../../public/new-post-icon.svg';

export default function AddNewPostButton() {
  const { dispatch } = useContext(DialogContext);

  const handleClick = function () {
    dispatch({ type: 'TOGGLE_DIALOG_DEFAULT' });
  };
  return (
    <>
      <button
        className="relative hidden md:block bg-transparent/20 rounded p-2 cursor-pointer "
        onClick={handleClick}
      >
        <Image src={newIcon} alt="" width={30} />
      </button>
      <div className="md:hidden">
        <button
          onClick={handleClick}
          className="font-bold text-sm border border-black-brown px-4 py-1 mx-2 rounded-full hover:bg-light-brown active:bg-light-brown active:text-beige hover:text-beige hover:border-soft-brown transition-all"
        >
          New
        </button>
      </div>
    </>
  );
}
