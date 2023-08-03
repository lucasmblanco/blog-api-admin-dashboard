'use client';
import { useReducer } from 'react';
import LogInForm from '@/containers/logInForm';
import SingUpForm from '@/containers/signUpForm';
import { INITIAL_FORM, reducer } from '@/reducers/homeFormReducer';
import { LOG_IN_TEXT, SIGN_UP_TEXT } from '@/constants/formView';

type CurrentViewType = {
  [key: string]: {
    node: React.ReactNode;
    text: string;
  };
};

export default function Home() {
  const [state, dispatch] = useReducer(reducer, INITIAL_FORM);

  const currentView: CurrentViewType = {
    login: {
      node: <LogInForm />,
      text: SIGN_UP_TEXT
    },
    signup: {
      node: <SingUpForm />,
      text: LOG_IN_TEXT
    }
  };

  return (
    <main>
      {currentView[state.selectedForm].node}
      <button onClick={() => dispatch({ type: 'CHANGE_VIEW' })}>
        {currentView[state.selectedForm].text}
      </button>
    </main>
  );
}

/*
<form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
*/
