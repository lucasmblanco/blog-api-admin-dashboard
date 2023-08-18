import React from 'react';
import BaseForm from '@/components/Form/baseForm';
import TextField from '@/components/Form/textField';
import { Toaster, toast } from 'sonner';
import { FormActionType } from '@/types';
import axios, { AxiosError } from 'axios';

type Error = {
  error: string;
};

export default function SingUpForm({
  dispatch
}: {
  dispatch: React.Dispatch<FormActionType>;
}) {
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    };

    try {
      const response = await axios.post(
        'https://blog-api-ol7v.onrender.com/v1/admin/signup',
        data,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      if (response.status !== 200) {
        dispatch({ type: 'CHANGE_VIEW_FROM_SIGNUP' });
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        err.response?.data.errors.map((e: Error) => toast.error(e.error));
      }
    }
  };

  return (
    <>
      <BaseForm onSubmit={handleSubmit} submitButtonText="Sign Up">
        <TextField inputName="Username" type="text" />
        <TextField inputName="Password" type="password" />
      </BaseForm>
      <Toaster />
    </>
  );
}

/*
    const JSONdata = JSON.stringify(data);

    const endpoint = 'https://blog-api-ol7v.onrender.com/v1/admin/signup';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSONdata
    };

    const response = await fetch(endpoint, options);
    const userInformation: ApiResponse = await response.json();
    if (response.status !== 200) {
      userInformation.errors?.map(e => toast.error(e.error));
    }
    if (response.status === 201) {
      dispatch({ type: 'CHANGE_VIEW_FROM_SIGNUP' });
    }
    */
