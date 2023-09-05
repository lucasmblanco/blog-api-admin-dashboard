'use client';
import { useContext, useState } from 'react';
import { FormContext } from '@/context/FormContext';
import axios, { AxiosError } from 'axios';
import { ApiError } from '@/types';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

interface UserData {
  username: string;
  password: string;
}

export default function useSignup() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<UserData>();
  const [isLoading, setIsLoading] = useState(false);
  const { formDispatch } = useContext(FormContext);
  const signUpQuery = useMutation({
    mutationFn: signUpAction,
    onSuccess: () => {
      formDispatch({ type: 'CHANGE_VIEW_FROM_SIGNUP' });
      setIsLoading(false);
    }
  });

  function onSubmit(data: UserData) {
    setIsLoading(true);
    const user = {
      username: data.username,
      password: data.password
    };
    signUpQuery.mutate({ user });
  }

  return { onSubmit, isLoading, handleSubmit, register, errors };
}

async function signUpAction({ user }: { user: UserData }) {
  try {
    await axios.post(
      'https://blog-api-ol7v.onrender.com/v1/admin/signup',
      user,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (err) {
    if (err instanceof AxiosError) {
      err.response?.data.errors.map((e: ApiError) => toast.error(e.error));
    }
  }
}
