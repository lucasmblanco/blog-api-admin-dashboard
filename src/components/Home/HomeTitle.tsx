import React, { useContext } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion as m } from 'framer-motion';
import { FormContext } from '@/context/FormContext';
import { currentView } from '@/constants/FormOptions';

export default function HomeTitle() {
  const { formState } = useContext(FormContext);
  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <m.h1
          key={Math.random().toString()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center font-newsreader w-full font-bold text-3xl"
        >
          {currentView[formState.selectedForm].title}
        </m.h1>
      </AnimatePresence>
      <figure className="grid place-content-center">
        <Image
          src={currentView[formState.selectedForm].emoji}
          alt=""
          className="animate-wiggle-more animate-infinite bg-beige p-1 border rounded-full "
        />
      </figure>
    </>
  );
}
