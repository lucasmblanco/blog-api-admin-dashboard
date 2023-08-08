import React, { useContext } from 'react';
import BaseForm from '@/components/Form/baseForm';
import TextField from '@/components/Form/textField';
import { Toaster, toast } from 'sonner';
import { ApiResponse, FormActionType } from '@/types';

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
  };

  return (
    <>
      <BaseForm onSubmit={handleSubmit} submitButtonText="Sign Up">
        <TextField inputName="username" type="text" />
        <TextField inputName="password" type="password" />
      </BaseForm>
      <Toaster />
    </>
  );
}
