import { DialogContext } from '@/context/DialogContext';
import React, { useContext } from 'react';
import Image from 'next/image';
import closeCircle from '../../../public/close-circle.svg';
import editIcon from '../../../public/edit-icon.svg';

export default function NavigatioBar({
  hideFormButton,
  handleButton
}: {
  hideFormButton: boolean;
  handleButton: () => void;
}) {
  const { dispatch } = useContext(DialogContext);
  return (
    <div className="flex justify-end p-2 gap-2">
      {!hideFormButton && (
        <button onClick={() => dispatch({ type: 'CHANGE_VIEW' })}>
          <Image
            src={editIcon}
            alt=""
            width={30}
            className="hover:bg-soft-brown rounded-full transition-all p-1 w-5 md:w-8"
          />
        </button>
      )}
      <button onClick={handleButton}>
        <Image
          src={closeCircle}
          alt=""
          width={30}
          className="hover:bg-soft-brown rounded-full transition-all w-5 md:w-8"
        />
      </button>
    </div>
  );
}
