import { FormContext } from '@/context/FormContext';
import React, { useContext } from 'react';
import { motion as m } from 'framer-motion';
import { currentView } from '@/constants/FormOptions';

export default function ChangeFormComponent() {
  const { formState, formDispatch } = useContext(FormContext);
  return (
    <m.div
      key={formState.selectedForm}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="flex justify-center text-xs py-4"
    >
      <span className="p-1">{currentView[formState.selectedForm].phrase}</span>
      <button
        onClick={() => {
          formDispatch({ type: 'CHANGE_VIEW' });
        }}
        className="font-newsreader font-bold text-center px-1 hover:text-black-brown hover:bg-beige hover:rounded-full active:text-black-brown active:bg-beige active:rounded-full"
      >
        {currentView[formState.selectedForm].textButton}
      </button>
    </m.div>
  );
}