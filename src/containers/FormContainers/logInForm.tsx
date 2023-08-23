'use client';
import React, { useContext, useEffect } from 'react';
import BaseForm from '@/components/Form/BaseForm';
import TextField from '@/components/Form/TextField';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/UserContext';
import { Toaster, toast } from 'sonner';
import axios, { AxiosError } from 'axios';
import { ApiError } from '@/types';

export default function LogInForm({
  notification
}: {
  notification: string | undefined;
}) {
  const { dispatch } = useContext(UserContext);
  const router = useRouter();

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    };

    try {
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
    } catch (err) {
      if (err instanceof AxiosError) {
        err.response?.data.errors.map((e: ApiError) => toast.error(e.error));
      }
    }
  };
  useEffect(() => {
    if (notification !== undefined) {
      toast(notification);
    }
  }, [notification]);

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
  
*/
