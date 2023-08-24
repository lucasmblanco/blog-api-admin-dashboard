'use client';
import React, { useState, useContext } from 'react';
import { UserContext } from '@/context/UserContext';
import Image from 'next/image';
import userIcon from '../../../public/user-icon.svg';

export default function LoggedUserDesktop() {
  const { state } = useContext(UserContext);
  const [displayInfo, setDisplayInfo] = useState(false);
  return (
    <div className="hidden md:flex items-center ">
      <div
        className="relative hidden md:block bg-transparent/20 rounded p-2 cursor-pointer"
        onMouseOverCapture={() => setDisplayInfo(prev => !prev)}
      >
        <Image src={userIcon} alt="" width={30} />
      </div>
      {displayInfo && (
        <div className="fixed flex flex-col text-center p-2 rounded left-20 text-beige backdrop-blur-md ">
          <span className="text-xs">You are logged in as </span>
          <span className="text-2xl font-bold">{state.user?.username}</span>
        </div>
      )}
    </div>
  );
}
