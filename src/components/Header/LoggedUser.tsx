import { UserContext } from '@/context/UserContext';
import React, { useContext, useReducer } from 'react';

export default function LoggedUser() {
  const { state } = useContext(UserContext);
  return (
    <section>
      <span>You are logged in as </span>
      <span>{state.user?.username}</span>
    </section>
  );
}
