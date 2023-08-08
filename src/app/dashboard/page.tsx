'use client';
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import HeaderContainer from '@/containers/HeaderContainers/HeaderContainer';
import { UserContext } from '@/context/homeContext';
import { useRouter } from 'next/navigation';
import Posts from '@/components/Posts/Posts';

export default function Dashboard() {
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
    <main>
      {loading ? (
        <div>Veryfing..........</div>
      ) : (
        <>
          <HeaderContainer />
          <Posts />
        </>
      )}
    </main>
  );
}
//
