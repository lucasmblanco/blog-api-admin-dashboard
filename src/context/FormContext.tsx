'use client';
import { createContext, useReducer } from 'react';
import { FormActionType } from '@/types';

export type FormType = {
  selectedForm: 'login' | 'signup';
  notification?: string;
};

export const INITIAL_FORM: FormType = {
  selectedForm: 'login'
};

export const FormContext = createContext<{
  formState: FormType;
  formDispatch: React.Dispatch<FormActionType>;
}>({
  formState: INITIAL_FORM,
  formDispatch: () => {}
});

export const reducer = (
  state: FormType = INITIAL_FORM,
  action: FormActionType
): FormType => {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return {
        selectedForm: state.selectedForm == 'login' ? 'signup' : 'login'
      };
    case 'CHANGE_VIEW_FROM_SIGNUP':
      return {
        selectedForm: 'login',
        notification: 'Proceed with the log in.'
      };
    default:
      return state;
  }
};

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [formState, formDispatch] = useReducer<
    React.Reducer<FormType, FormActionType>
  >(reducer, INITIAL_FORM);
  return (
    <FormContext.Provider value={{ formState, formDispatch }}>
      {children}
    </FormContext.Provider>
  );
};
