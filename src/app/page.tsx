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
    <>
      <main className="flex flex-col items-center">
        <div className="flex flex-col items-center p-5 gap-8">
          <h1 className="max-w-[16rem] min-h-[5rem] text-center font-bold tracking-wider text-3xl animate-fade animate-duration-[1000ms] animate-ease-linear ">
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
      </main>
      <div className="flex mt-auto justify-center">
        <span className="p-1">
          {currentView[state.selectedForm].linkMessage}
        </span>
        <button
          onClick={() => {
            dispatch({ type: 'CHANGE_VIEW' });
          }}
          className="font-bold text-center px-1 hover:text-black-brown hover:bg-beige hover:rounded-full active:text-black-brown active:bg-beige active:rounded-full"
        >
          {currentView[state.selectedForm].text}
        </button>
      </div>
    </>
  );
}
