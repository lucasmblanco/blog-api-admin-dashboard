'use client';
import React, { useReducer, useContext, useState, useEffect } from 'react';
import LogInForm from '@/containers/FormContainers/logInForm';
import SingUpForm from '@/containers/FormContainers/signUpForm';
import { INITIAL_FORM, reducer } from '@/reducers/AuthenticationReducer.js';
import { LOG_IN_TEXT, SIGN_UP_TEXT } from '@/constants/FormOptions';
import Image from 'next/image';
import wavingHandEmoji from '../../public/waving_hand.svg';
import pointingDownEmoji from '../../public/pointing-down-emoji.svg';
import { motion as m } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/UserContext';
import orangeBg from '../../public/orange-bg.jpg';

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
  const [formState, formDispatch] = useReducer(reducer, INITIAL_FORM);
  const { state, dispatch } = useContext(UserContext);
  const router = useRouter();

  const currentView: CurrentViewType = {
    login: {
      node: <LogInForm notification={formState.notification} />,
      text: SIGN_UP_TEXT,
      mainText: 'Welcome back!',
      linkMessage: "Don't have an account yet?",
      emoji: wavingHandEmoji
    },
    signup: {
      node: <SingUpForm dispatch={formDispatch} />,
      text: LOG_IN_TEXT,
      mainText: 'Create your account here!',
      linkMessage: 'Already have an account?',
      emoji: pointingDownEmoji
    }
  };

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!state.user) {
      if (user) {
        dispatch({ type: 'SET_USER_LOCAL', payload: JSON.parse(user) });
        router.push('/dashboard');
      }
    } else {
    }
  }, []);

  return (
    <main className="grid grid-cols-[2fr_1fr] overflow-y-hidden min-h-[100dvh]">
      <div className="hidden md:block relative">
        <Image
          src={orangeBg}
          alt=""
          fill={true}
          objectFit="cover"
          className=" h-full"
          placeholder="blur"
        />
      </div>
      <section className="grid place-content-center px-12 min-w-[100vw] md:min-w-[auto]">
        <div className="grid w-full gap-8">
          <AnimatePresence key={formState.selectedForm}>
            <m.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75 }}
              className="text-center font-newsreader w-full font-bold text-3xl"
            >
              {currentView[formState.selectedForm].mainText}
            </m.h1>
          </AnimatePresence>
          <figure className="flex justify-center">
            <Image
              src={currentView[formState.selectedForm].emoji}
              alt="Waving hand emoji"
              className="animate-wiggle-more animate-infinite bg-beige p-1 border rounded-full "
            />
          </figure>
          {currentView[formState.selectedForm].node}
        </div>
        <AnimatePresence key={formState.selectedForm}>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
            className="flex justify-center text-xs py-4"
          >
            <span className="p-1">
              {currentView[formState.selectedForm].linkMessage}
            </span>
            <button
              onClick={() => {
                formDispatch({ type: 'CHANGE_VIEW' });
              }}
              className="font-newsreader font-bold text-center px-1 hover:text-black-brown hover:bg-beige hover:rounded-full active:text-black-brown active:bg-beige active:rounded-full"
            >
              {currentView[formState.selectedForm].text}
            </button>
          </m.div>
        </AnimatePresence>
      </section>
    </main>
  );
}
