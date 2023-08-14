'use client';
import { createContext, useReducer } from 'react';
import { DialogComponentType } from '@/types';

type ActionPostComponentType = {
  type: string;
  payload?: any;
};

const INITIAL_STATE: DialogComponentType = {
  isDialogOpen: false,
  currentView: 'post'
};

export const DialogContext = createContext<{
  state: DialogComponentType;
  dispatch: React.Dispatch<ActionPostComponentType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {}
});

const reducer = (
  state: DialogComponentType,
  action: ActionPostComponentType
) => {
  switch (action.type) {
    case 'TOGGLE_DIALOG_DEFAULT':
      return {
        ...state,
        isDialogOpen: !state.isDialogOpen
      };
    case 'TOGGLE_DIALOG':
      return {
        isDialogOpen: !state.isDialogOpen,
        currentView: 'post'
      };
    case 'CHANGE_VIEW':
      return {
        ...state,
        currentView: state.currentView !== 'post' ? 'post' : 'form'
      };
    case 'SELECT_FORM_VIEW':
      return {
        ...state,
        currentView: 'form'
      };
    default:
      return state;
  }
};

export const DialogProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer<
    React.Reducer<DialogComponentType, ActionPostComponentType>
  >(reducer, INITIAL_STATE);
  return (
    <DialogContext.Provider value={{ state, dispatch }}>
      {children}
    </DialogContext.Provider>
  );
};
