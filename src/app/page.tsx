'use client';
import React, { useContext, useEffect } from 'react';
import { Toaster } from 'sonner';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/UserContext';
import DesktopBanner from '@/components/Home/DesktopBanner';
import HomeTitle from '@/components/Home/HomeTitle';
import ChangeFormComponent from '@/components/Home/ChangeFormComponent';
import Form from '@/components/Home/Form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

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
    }
  }, [router, state, dispatch]);

  return (
    <QueryClientProvider client={client}>
      <main className="grid grid-cols-[3fr_1fr] min-h-[100dvh] grow">
        <DesktopBanner />
        <section className="grid auto-cols-[0.75fr] place-content-center px-12 min-w-[100vw] md:min-w-[auto]">
          <div className="grid w-full gap-8">
            <HomeTitle />
            <Form />
          </div>
          <ChangeFormComponent />
        </section>
      </main>
      <Toaster richColors theme="dark" />
    </QueryClientProvider>
  );
}
