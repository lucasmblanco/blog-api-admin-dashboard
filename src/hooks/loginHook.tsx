'use client';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FormContext } from '@/context/FormContext';
import { UserContext } from '@/context/UserContext';
import axios, { AxiosError } from 'axios';
import { ApiError } from '@/types';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { useForm, SubmitHandler } from 'react-hook-form';

type UserData = {
  username: string;
  password: string;
};

export default function useLogin() {
  // PONER UN PROP LOADING EN FORMSTATE, LUEGO ESO PICKEA EN EL FORM PARA SABER SI ESTA CARGANDO O NO;
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<UserData>();
  const [isLoading, setIsLoading] = useState(false);
  const { selectedFormState } = useContext(FormContext);
  const { dispatch } = useContext(UserContext);
  const router = useRouter();
  const userMutation = useMutation({
    mutationFn: logInAction,
    onSuccess: data => {
      router.push('/dashboard');
      dispatch({ type: 'SET_USER_LOG_IN', payload: data.user });
      setIsLoading(false);
    }
  });

  const onSubmit = async (data: UserData) => {
    // e.preventDefault();
    setIsLoading(true);
    const user = {
      username: data.username,
      password: data.password
    };

    userMutation.mutate({ user });
  };

  useEffect(() => {
    if (selectedFormState.notification !== undefined) {
      toast(selectedFormState.notification);
    }
  }, [selectedFormState.notification]);
  return { onSubmit, handleSubmit, isLoading, register, errors };
}

async function logInAction({ user }: { user: UserData }) {
  try {
    const response = await axios.post(
      'https://blog-api-ol7v.onrender.com/v1/admin/login',
      user,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    const responseData = response.data;
    return responseData;
  } catch (err) {
    if (err instanceof AxiosError) {
      err.response?.data.errors.map((e: ApiError) => toast.error(e.error));
    }
  }
}
