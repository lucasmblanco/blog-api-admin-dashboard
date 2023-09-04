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

//EMPTY FIELD CHEQUEAR SI ES FALSO PARA PONER UN SPAN REQUERIENDO LO QUE PIDE O TOAST

export const FormContext = createContext<{
  selectedFormState: FormType;
  formDispatch: React.Dispatch<FormActionType>;
}>({
  selectedFormState: INITIAL_FORM,
  formDispatch: () => {}
});
export const reducer = (
  state: FormType = INITIAL_FORM,
  action: FormActionType
): FormType => {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return {
        ...state,
        selectedForm: state.selectedForm == 'login' ? 'signup' : 'login'
      };
    case 'CHANGE_VIEW_FROM_SIGNUP':
      return {
        ...state,
        selectedForm: 'login',
        notification: 'Proceed with the log in.'
      };

    default:
      return state;
  }
};

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedFormState, formDispatch] = useReducer<
    React.Reducer<FormType, FormActionType>
  >(reducer, INITIAL_FORM);
  return (
    <FormContext.Provider value={{ selectedFormState, formDispatch }}>
      {children}
    </FormContext.Provider>
  );
};
