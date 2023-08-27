import React from 'react';
import Image from 'next/image';
import orangeBg from '../../../public/orange-bg.jpg';

export default function DesktopBanner() {
  return (
    <div className="hidden md:block relative">
      <Image
        src={orangeBg}
        alt=""
        fill={true}
        objectFit="cover"
        className=" h-full"
        placeholder="blur"
      />
    </div>
  );
}
