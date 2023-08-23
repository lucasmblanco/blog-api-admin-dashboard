import React from 'react';
import Image from 'next/image';
import lensIcon from '../../../public/lens.svg';

export default function CheckingAccess() {
  return (
    <div className="grid place-content-center items-center justify-center gap-5">
      <div className="grid place-content-center w-full ">
        <Image
          src={lensIcon}
          alt=""
          width={50}
          className=" py-4 rounded animate-shake animate-infinite animate-duration-1000 animate-ease-linear animate-normal animate-fill-forwards"
        />
      </div>
    </div>
  );
}
