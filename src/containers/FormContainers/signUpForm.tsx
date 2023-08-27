import React from 'react';
import BaseForm from '@/components/Form/BaseForm';
import TextField from '@/components/Form/TextField';
import useSignup from '@/hooks/signupHook';

export default function SingUpForm() {
  const { handleSubmit } = useSignup();
  return (
    <>
      <BaseForm onSubmit={handleSubmit} submitButtonText="Sign Up">
        <TextField inputName="Username" type="text" />
        <TextField inputName="Password" type="password" />
      </BaseForm>
    </>
  );
}
