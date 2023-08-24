'use client';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import HeaderContainer from '@/containers/HeaderContainer';
import { UserContext } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import VerifyContainer from '@/containers/LoadingContainer';
import CheckingAccess from '@/components/Loading/CheckingAccess';

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
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {loading ? (
        <VerifyContainer loadingMessage="VERIFYING ACCESS">
          <CheckingAccess />
        </VerifyContainer>
      ) : (
        <div className="max-h-[100dvh] md:flex md:max-h-[100vh]">
          <HeaderContainer />
          <main className="min-h-[inherit] flex-grow flex  snap-x md:grid md:grid-cols-2 md:grow-1flex overflow-x-auto md:grow-1 md:p-10">
            {props.posts}
          </main>
         {props.children}
        </div>
      )}
    </QueryClientProvider>
  );
}
/*

*/
