'use client';
import React, { useContext, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/UserContext';
import DesktopBanner from '@/components/Home/DesktopBanner';
import HomeTitle from '@/components/Home/HomeTitle';
import ChangeFormComponent from '@/components/Home/ChangeFormComponent';
import Form from '@/components/Home/Form';

export default function Home() {
  const { state, dispatch } = useContext(UserContext);
  const router = useRouter();

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
    <main className="grid grid-cols-[3fr_1fr] min-h-[100dvh] grow">
      <DesktopBanner />

      <section className="grid auto-cols-[0.75fr] place-content-center px-12 min-w-[100vw] md:min-w-[auto]">
        <div className="grid w-full gap-8">
          <HomeTitle />
          <AnimatePresence mode="wait" initial={false}>
            <Form />
          </AnimatePresence>
        </div>
        <ChangeFormComponent />
      </section>
    </main>
  );
}
