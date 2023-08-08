'use client';
import React, { useContext, useEffect } from 'react';
import BaseForm from '@/components/Form/baseForm';
import TextField from '@/components/Form/textField';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/homeContext';
import { ApiResponse } from '@/types';
import { Toaster, toast } from 'sonner';

export default function LogInForm({
  notification
}: {
  notification: string | undefined;
}) {
  const { dispatch } = useContext(UserContext);
  const router = useRouter();
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    };

    const JSONdata = JSON.stringify(data);

    const endpoint = 'https://blog-api-ol7v.onrender.com/v1/admin/login';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSONdata
    };

    const response = await fetch(endpoint, options);
    const userInformation: ApiResponse = await response.json();
    if (response.status === 200) {
      dispatch({ type: 'SET_USER_LOG_IN', payload: userInformation.user });
      router.push('/dashboard');
    }
    if (response.status !== 200) {
      userInformation.errors?.map(e => toast.error(e.error));
    }
  };

  useEffect(() => {
    if (!notification) {
      toast(notification);
    }
  }, [notification]);

  return (
    <>
      <BaseForm onSubmit={handleSubmit} submitButtonText="Log in">
        <TextField inputName="username" type="text" />
        <TextField inputName="password" type="password" />
      </BaseForm>
      <Toaster />
    </>
  );
}
