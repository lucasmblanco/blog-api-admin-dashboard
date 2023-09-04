import React from 'react';
import { SubmitFunction } from '@/types';
import loadingIcon from '../../../public/loading-spinner.svg';
import Image from 'next/image';
import { AnimatePresence, motion as m } from 'framer-motion';

type FormProps = {
  onSubmit: SubmitFunction;
  submitButtonText: string;
  children?: React.ReactNode;
  isLoading: boolean;
};

export default function BaseForm(props: FormProps) {
  return (
    <form onSubmit={props.onSubmit} className="flex flex-col gap-8">
      {props.children}
      <button
        type="submit"
        className="flex justify-center text-center bg-gradient-to-bl from-beige to-tan p-2 text-black-brown font-bold rounded-full hover:opacity-90 "
      >
        {props.isLoading ? (
          <m.div
            animate={{
              rotate: 360
            }}
            transition={{
              repeat: Infinity,
              duration: '2',
              ease: 'linear',
              delay: 0
            }}
          >
            <Image src={loadingIcon} alt="" width={20} />
          </m.div>
        ) : (
          props.submitButtonText
        )}
      </button>
    </form>
  );
}
