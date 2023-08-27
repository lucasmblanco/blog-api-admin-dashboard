import React, { useContext } from 'react';
import Image from 'next/image';
import { motion as m } from 'framer-motion';
import { FormContext } from '@/context/FormContext';
import { currentView } from '@/constants/FormOptions';

export default function HomeTitle() {
  const { formState } = useContext(FormContext);
  return (
    <>
      <m.h1
        key={formState.selectedForm}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        className="text-center font-newsreader w-full font-bold text-3xl"
      >
        {currentView[formState.selectedForm].title}
      </m.h1>
      <figure className="flex justify-center">
        <Image
          src={currentView[formState.selectedForm].emoji}
          alt=""
          className="animate-wiggle-more animate-infinite bg-beige p-1 border rounded-full "
        />
      </figure>
    </>
  );
}
