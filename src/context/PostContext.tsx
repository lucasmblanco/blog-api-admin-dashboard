'use client';
import { createContext, useReducer } from 'react';
import { PostComponentType } from '@/types';

type ActionPostComponentType = {
  type: string;
  payload?: any;
};

const INITIAL_STATE: PostComponentType = {
  id: '',
  title: '',
  body: '',
  timestamp: '',
  published: false
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
        body: action.payload.body,
        id: action.payload._id,
        published: action.payload.published,
        timestamp: action.payload.timestamp
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

