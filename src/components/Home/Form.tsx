import React, { useContext } from 'react';
import { currentView } from '@/constants/FormOptions';
import { FormContext } from '@/context/FormContext';

export default function Form() {
  const { selectedFormState } = useContext(FormContext);
  return <>{currentView[selectedFormState.selectedForm].form}</>;
}
