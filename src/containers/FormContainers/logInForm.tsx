'use client';
import React from 'react';
import BaseForm from '@/components/Form/BaseForm';
import TextField from '@/components/Form/TextField';

import useLogin from '@/hooks/loginHook';

export default function LogInForm() {
  const { handleSubmit } = useLogin();
  return (
    <>
      <BaseForm onSubmit={handleSubmit} submitButtonText="Log in">
        <TextField inputName="Username" type="text" />
        <TextField inputName="Password" type="password" />
      </BaseForm>
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
