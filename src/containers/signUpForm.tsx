import React from 'react';
import BaseForm from '@/components/Form/baseForm';
import TextField from '@/components/Form/textField';
import { useRouter } from 'next/navigation';

export default function SingUpForm() {
  const router = useRouter();
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

    if (response.status === 200) {
      router.refresh();
    }
  };

  return (
    <BaseForm onSubmit={handleSubmit} submitButtonText="Sign Up">
      <TextField inputName="username" type="text" />
      <TextField inputName="password" type="password" />
    </BaseForm>
  );
}
