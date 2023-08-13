'use client';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import HeaderContainer from '@/containers/HeaderContainers/HeaderContainer';
import { UserContext } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
      <main>
        {loading ? (
          <div>Veryfing..........</div>
        ) : (
          <>
            <HeaderContainer />
            {props.posts}
            {props.children}
          </>
        )}
      </main>
    </QueryClientProvider>
  );
}
//
