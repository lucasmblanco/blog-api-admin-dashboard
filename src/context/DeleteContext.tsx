'use client';
import { createContext, useReducer } from 'react';

type ActionDeleteType = {
  type: string;
  payload?: any;
};

type DeleteState = {
  displayButton: boolean;
};

const INITIAL_STATE: DeleteState = {
  displayButton: false
};

export const DeleteContext = createContext<{
  deleteState: DeleteState;
  dispatch: React.Dispatch<ActionDeleteType>;
}>({
  deleteState: INITIAL_STATE,
  dispatch: () => {}
});

const reducer = (state: DeleteState, action: ActionDeleteType) => {
  switch (action.type) {
    case 'DISPLAY_ACTION':
      return {
        displayButton: !state.displayButton
      };
    default:
      return state;
  }
};

export const DeleteProvider = ({ children }: { children: React.ReactNode }) => {
  const [deleteState, dispatch] = useReducer<
    React.Reducer<DeleteState, ActionDeleteType>
  >(reducer, INITIAL_STATE);
  return (
    <DeleteContext.Provider value={{ deleteState, dispatch }}>
      {children}
    </DeleteContext.Provider>
  );
};
