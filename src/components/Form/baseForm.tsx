import React from 'react';
import { SubmitFunction } from '@/types';

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
        className="bg-gradient-to-bl from-beige to-tan p-2 text-black-brown font-bold rounded-full hover:opacity-90"
      >
        {props.submitButtonText}
      </button>
    </form>
  );
}
