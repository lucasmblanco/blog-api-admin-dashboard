import { FormContext } from '@/context/FormContext';
import React, { useContext } from 'react';
import { AnimatePresence, motion as m } from 'framer-motion';
import { currentView } from '@/constants/FormOptions';

export default function ChangeFormComponent() {
  const { selectedFormState, formDispatch } = useContext(FormContext);
  return (
    <AnimatePresence mode="wait">
      <m.div
        key={Math.random().toString()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex justify-center text-xs py-4"
      >
        <span className="p-1">
          {currentView[selectedFormState.selectedForm].phrase}
        </span>
        <button
          onClick={() => {
            formDispatch({ type: 'CHANGE_VIEW' });
          }}
          className="font-newsreader font-bold text-center px-1 hover:text-black-brown hover:bg-beige hover:rounded-full active:text-black-brown active:bg-beige active:rounded-full"
        >
          {currentView[selectedFormState.selectedForm].textButton}
        </button>
      </m.div>
    </AnimatePresence>
  );
}
