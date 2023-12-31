import { UserContext } from '@/context/UserContext';
import React, { useContext, useState } from 'react';

export default function LoggedUser() {
  const { state } = useContext(UserContext);

  return (
    <>
      <div className="flex flex-col text-center p-2 md:hidden ">
        <span className="text-xs">You are logged in as </span>
        <span className="text-2xl font-bold">{state.user?.username}</span>
      </div>
    </>
  );
}
