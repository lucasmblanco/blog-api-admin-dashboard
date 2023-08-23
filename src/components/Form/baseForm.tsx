import React from 'react';
import { SubmitFunction } from '@/types';
import { motion as m, AnimatePresence } from 'framer-motion';

type FormProps = {
  onSubmit: SubmitFunction;
  submitButtonText: string;
  children?: React.ReactNode; // 👈️ added type for children
};

export default function BaseForm(props: FormProps) {
  return (
    <AnimatePresence>
      <m.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
        onSubmit={props.onSubmit}
        className="flex flex-col gap-8"
      >
        {props.children}
        <button
          type="submit"
          className="bg-gradient-to-bl from-beige to-tan p-2 text-black-brown font-bold rounded-full hover:opacity-90"
        >
          {props.submitButtonText}
        </button>
      </m.form>
    </AnimatePresence>
  );
}
