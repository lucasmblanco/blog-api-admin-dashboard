import React, { useContext } from 'react';
import { DeleteContext } from '@/context/DeleteContext';
import deleteIcon from '../../../public/delete-icon.svg';
import Image from 'next/image';

export default function DisplayDeleteAction() {
  const { dispatch } = useContext(DeleteContext);
  return (
    <button
      onClick={() => dispatch({ type: 'DISPLAY_ACTION' })}
      className="rounded-full border border-crimson p-1"
    >
      <Image src={deleteIcon} alt="" width={20} />
    </button>
  );
}
