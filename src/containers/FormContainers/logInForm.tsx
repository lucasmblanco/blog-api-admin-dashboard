'use client';
import React, { useContext, useEffect } from 'react';
import BaseForm from '@/components/Form/baseForm';
import TextField from '@/components/Form/textField';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/UserContext';
import { ApiResponse } from '@/types';
import { Toaster, toast } from 'sonner';
import axios from 'axios';

type Error = {
  error: string;
};

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

    const response = await axios.post(
      'https://blog-api-ol7v.onrender.com/v1/admin/login',
      data,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    if (response.status === 200) {
      router.push('/dashboard');
      dispatch({ type: 'SET_USER_LOG_IN', payload: response.data.user });
    }
    if (response.status !== 200) {
      response.data.errors?.map((e: Error) => toast.error(e.error));
    }
    /*
    
    

    const JSONdata = JSON.stringify(data);

    const endpoint = 'https://blog-api-ol7v.onrender.com/v1/admin/login';
    const options: RequestInit = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSONdata
    };

    const response = await fetch(endpoint, options);
    const userInformation: ApiResponse = await response.json();
    if (response.status === 200) {
      router.push('/dashboard');
      dispatch({ type: 'SET_USER_LOG_IN', payload: userInformation.user });
    }
    if (response.status !== 200) {
      userInformation.errors?.map(e => toast.error(e.error));
    }

    /*
  useEffect(() => {
    if (!notification) {
      toast(notification);
    }
  }, [notification]);
*/
  };

  return (
    <>
      <BaseForm onSubmit={handleSubmit} submitButtonText="Log in">
        <TextField inputName="Username" type="text" />
        <TextField inputName="Password" type="password" />
      </BaseForm>
      <Toaster />
    </>
  );
}
