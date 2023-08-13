'use client';
import { createContext, useReducer } from 'react';
import { UserType, ActionType } from '@/types';

type StateType = {
  user: UserType | undefined;
};

const INITIAL_STATE: StateType = {
  user: undefined
};

export const UserContext = createContext<{
  state: StateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {}
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer<React.Reducer<StateType, ActionType>>(
    reducer,
    INITIAL_STATE
  );
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'SET_USER_LOG_IN':
      const user = {
        username: action.payload.username
      };
      localStorage.setItem('user', JSON.stringify(user));
      return {
        user: {
          username: action.payload.username
        }
      };
    case 'SET_USER_LOCAL':
      return {
        user: {
          username: action.payload.username
        }
      };
    case 'LOG_OUT_USER':
      return {
        user: undefined
      };
    default:
      return state;
  }
};
