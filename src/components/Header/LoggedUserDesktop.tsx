'use client';
import React, { useState, useContext } from 'react';
import { UserContext } from '@/context/UserContext';
import Image from 'next/image';
import userIcon from '../../../public/user-icon.svg';
import { motion as m, AnimatePresence } from 'framer-motion';

export default function LoggedUserDesktop() {
  const { state } = useContext(UserContext);
  const [displayInfo, setDisplayInfo] = useState(false);
  function handleOver(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    setDisplayInfo(prev => !prev);
  }
  return (
    <div className="hidden md:flex items-center ">
      <div
        className="relative hidden md:block bg-transparent/20 rounded p-3 hover:bg-transparent/40"
        onMouseOver={handleOver}
      >
        <Image src={userIcon} alt="" width={20} />
      </div>
      <AnimatePresence>
        {displayInfo && (
          <m.div
            className="fixed flex flex-col text-center p-2 rounded left-20 text-beige backdrop-blur-md shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="text-xs">You are logged in as </span>
            <span className="text-2xl font-bold">{state.user?.username}</span>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
