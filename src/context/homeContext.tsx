'use client';
import { createContext, useReducer } from 'react';
import { UserType, ActionType } from '@/types';
/*
export type UserType = {
  username: string;
};
*/

type StateType = {
  user: UserType | null;
};

/*
type ActionType = {
  type: 'SET_USER' | 'LOG_OUT_USER';
  payload: UserType;
};
*/

const INITIAL_STATE: StateType = {
  user: null
};

export const UserContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {}
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        user: {
          username: action.payload.username
        }
      };
    case 'LOG_OUT_USER':
      return {
        user: null
      };
    default:
      return state;
  }
};
