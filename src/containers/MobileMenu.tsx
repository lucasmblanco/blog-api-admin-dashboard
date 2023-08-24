'use client';
import React, { useState, useRef } from 'react';
import { motion as m, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import moreOptions from '../../public/more-vertical.svg';

export default function MobileMenu({
  children
}: {
  children: React.ReactNode;
}) {
  const [navStatus, setNavStatus] = useState(false);
  const container = useRef<HTMLDivElement>(null);

  function handleButton() {
    setNavStatus(prev => !prev);
  }

  return (
    <AnimatePresence>
      <div
        className="flex flex-col-reverse fixed bottom-0 right-0 items-center md:hidden"
        ref={container}
      >
        <m.button
          onClick={handleButton}
          className="bg-gradient-to-bl from-beige to-tan p-2 m-2 rounded"
          whileTap={{
            scale: 0.8
          }}
        >
          <Image src={moreOptions} alt="Waving hand emoji" />
        </m.button>
        {navStatus && (
          <m.nav
            className="px-1 py-2 w-min bg-gradient-to-bl from-beige to-tan rounded"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.25 }}
          >
            {children}
          </m.nav>
        )}
      </div>
    </AnimatePresence>
  );
}
