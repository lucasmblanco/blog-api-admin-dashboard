import React from 'react';
import documentsIcon from '../../../public/documents.svg';
import Image from 'next/image';

export default function LoadingPost() {
  return (
    <div className="grid place-content-center items-center justify-center gap-5">
      <div className="grid place-content-center w-full ">
        <Image
          src={documentsIcon}
          alt=""
          width={50}
          className=" py-4 rounded animate-pulse animate-infinite animate-duration-1000 animate-ease-linear animate-normal animate-fill-forwards"
        />
      </div>
    </div>
  );
}
