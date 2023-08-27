import React, { useContext } from 'react';
import { currentView } from '@/constants/FormOptions';
import { FormContext } from '@/context/FormContext';

export default function Form() {
  const { formState } = useContext(FormContext);
  return <>{currentView[formState.selectedForm].form}</>;
}
