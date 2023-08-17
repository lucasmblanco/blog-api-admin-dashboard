'use client';
import React, { useReducer, useState, useEffect } from 'react';
import LogInForm from '@/containers/FormContainers/logInForm';
import SingUpForm from '@/containers/FormContainers/signUpForm';
import { INITIAL_FORM, reducer } from '@/reducers/AuthenticationReducer.js';
import { LOG_IN_TEXT, SIGN_UP_TEXT } from '@/constants/FormOptions';
import Image from 'next/image';
import wavingHandEmoji from '../../public/waving_hand.svg';
import pointingDownEmoji from '../../public/pointing-down-emoji.svg';

type CurrentViewType = {
  [key: string]: {
    node: React.ReactNode;
    text: string;
    mainText: string;
    linkMessage: string;
    emoji: any;
  };
};

export default function Home() {
  const [state, dispatch] = useReducer(reducer, INITIAL_FORM);

  const currentView: CurrentViewType = {
    login: {
      node: <LogInForm notification={state.notification} />,
      text: SIGN_UP_TEXT,
      mainText: 'Welcome back!',
      linkMessage: "Don't have an account yet?",
      emoji: wavingHandEmoji
    },
    signup: {
      node: <SingUpForm dispatch={dispatch} />,
      text: LOG_IN_TEXT,
      mainText: 'Create your account here!',
      linkMessage: 'Already have an account?',
      emoji: pointingDownEmoji
    }
  };

  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col items-center p-5">
        <h1 className="font-extrabold tracking-wider text-2xl animate-once animate-duration-[1000ms] animate-ease-linear whitespace-pre-wrap">
          {currentView[state.selectedForm].mainText}
        </h1>
        <figure>
          <Image
            src={currentView[state.selectedForm].emoji}
            alt="Waving hand emoji"
            className="animate-wiggle-more animate-infinite bg-beige p-1 border rounded-full"
          />
        </figure>
        {currentView[state.selectedForm].node}
      </div>
      <div className="flex gap-1">
        <span>{currentView[state.selectedForm].linkMessage}</span>
        <button
          onClick={() => {
            dispatch({ type: 'CHANGE_VIEW' });
          }}
          className="font-bold text-center"
        >
          {currentView[state.selectedForm].text}
        </button>
      </div>
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
