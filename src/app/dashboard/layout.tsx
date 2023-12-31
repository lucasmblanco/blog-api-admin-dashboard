'use client';
import React, { useContext, useEffect, useState } from 'react';
import HeaderContainer from '@/containers/HeaderContainer';
import { UserContext } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DeleteProvider } from '@/context/DeleteContext';
import VerifyContainer from '@/containers/LoadingContainer';
import CheckingAccess from '@/components/Loading/CheckingAccess';
import AditionalContainer from '@/containers/AditionalContainer';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

export default function DashboardLayout(props: {
  posts: React.ReactNode;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!state.user) {
      if (!user) {
        router.push('/');
      } else {
        setLoading(false);
        dispatch({ type: 'SET_USER_LOCAL', payload: JSON.parse(user) });
      }
    } else {
      setLoading(false);
    }
  }, [dispatch, router, state]);

  return (
    <QueryClientProvider client={queryClient}>
      {loading ? (
        <VerifyContainer loadingMessage="Authentication Check">
          <CheckingAccess />
        </VerifyContainer>
      ) : (
        <>
          <HeaderContainer />
          <DeleteProvider>
            <div className="flex flex-col w-full grow max-h-[90%] md:max-h-none">
              <AditionalContainer />
              <main className=" flex flex-grow snap-x md:grid md:grid-cols-2 md:grow overflow-x-auto ">
                {props.posts}
              </main>
            </div>
            {props.children}
          </DeleteProvider>
          <Toaster richColors theme="dark" />
        </>
      )}
    </QueryClientProvider>
  );
}
