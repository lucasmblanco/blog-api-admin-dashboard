'use client';
import { createContext, useReducer } from 'react';

type PostComponentType = {
  title: string | undefined;
  body: string | undefined;
  isDialogOpen?: boolean;
};

type ActionPostComponentType = {
  type: string;
  payload?: any;
};

const INITIAL_STATE: PostComponentType = {
  title: undefined,
  body: undefined,
  isDialogOpen: false
};

export const PostContext = createContext<{
  state: PostComponentType;
  dispatch: React.Dispatch<ActionPostComponentType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {}
});

const reducer = (state: PostComponentType, action: ActionPostComponentType) => {
  switch (action.type) {
    case 'ADD_DATA':
      return {
        title: action.payload.title,
        body: action.payload.body
      };
    case 'TOGGLE_DIALOG':
      return {
        ...state,
        isDialogOpen: !state.isDialogOpen
      };
    default:
      return state;
  }
};

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer<
    React.Reducer<PostComponentType, ActionPostComponentType>
  >(reducer, INITIAL_STATE);
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
