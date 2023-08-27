import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FormContext } from '@/context/FormContext';
import { UserContext } from '@/context/UserContext';
import axios, { AxiosError } from 'axios';
import { ApiError } from '@/types';
import { toast } from 'sonner';

export default function useLogin() {
  const { formState } = useContext(FormContext);
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
    if (formState.notification !== undefined) {
      toast(formState.notification);
    }
  }, [formState.notification]);
  return { handleSubmit };
}
