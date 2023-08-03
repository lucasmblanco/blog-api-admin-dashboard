'use client';
import React, { useContext, useEffect } from 'react';
import { UserContext } from '@/context/homeContext';

export default function Dashboard() {
  const { state } = useContext(UserContext);
  return <div>You are logged in as {state.user?.username} </div>;
}
