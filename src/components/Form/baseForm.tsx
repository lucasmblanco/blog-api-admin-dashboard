import React from 'react';
import { SubmitFunction } from '@/types';

type FormProps = {
  onSubmit: SubmitFunction;
  submitButtonText: string;
  children?: React.ReactNode; // 👈️ added type for children
};

export default function BaseForm(props: FormProps) {
  return (
    <form onSubmit={props.onSubmit}>
      {props.children}
      <button type="submit">{props.submitButtonText}</button>
    </form>
  );
}
