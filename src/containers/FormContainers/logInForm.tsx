'use client';
import React from 'react';
import BaseForm from '@/components/Form/BaseForm';
import TextField from '@/components/Form/TextField';
import { motion as m } from 'framer-motion';

import useLogin from '@/hooks/loginHook';

export default function LogInForm() {
  const { handleSubmit } = useLogin();
  return (
    <m.div
      key={Math.random().toString()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <BaseForm onSubmit={handleSubmit} submitButtonText="Log in">
        <TextField inputName="Username" type="text" />
        <TextField inputName="Password" type="password" />
      </BaseForm>
    </m.div>
  );
}
