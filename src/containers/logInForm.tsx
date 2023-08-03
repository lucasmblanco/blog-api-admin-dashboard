'use client';
import React, { useContext } from 'react';
import BaseForm from '@/components/Form/baseForm';
import TextField from '@/components/Form/textField';
import { useRouter } from 'next/navigation';
import { UserContext } from '@/context/homeContext';
import { UserType } from '@/context/homeContext';

type ApiResponse = {
  code?: number;
  message?: string;
  user: UserType;
};

export default function LogInForm() {
  const { state, dispatch } = useContext(UserContext);
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
      dispatch({ type: 'SET_USER', payload: userInformation.user });
      router.push('/dashboard');
    } else {
      router.refresh();
    }
  };
  return (
    <BaseForm onSubmit={handleSubmit} submitButtonText="Log in">
      <TextField inputName="username" type="text" />
      <TextField inputName="password" type="password" />
    </BaseForm>
  );
}
