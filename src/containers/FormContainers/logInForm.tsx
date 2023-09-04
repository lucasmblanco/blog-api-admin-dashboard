import React from 'react';
import BaseForm from '@/components/Form/BaseForm';
import { TextField } from '@/components/Form/TextField';
import { AnimatePresence, motion as m } from 'framer-motion';

import useLogin from '@/hooks/loginHook';

export default function LogInForm() {
  const { onSubmit, handleSubmit, isLoading, register, errors } = useLogin();
  return (
    <AnimatePresence mode="wait">
      <m.div
        key={Math.random().toString()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <BaseForm
          onSubmit={handleSubmit(onSubmit)}
          submitButtonText="Log in"
          isLoading={isLoading}
        >
          <TextField
            label="username"
            inputName="username"
            type="text"
            {...register('username', { required: true })}
          />
          {errors.username && <p>This field is required</p>}
          <TextField
            label="password"
            inputName="password"
            type="password"
            {...register('password', { required: true })}
          />
          {errors.password && <p>This field is required</p>}
        </BaseForm>
      </m.div>
    </AnimatePresence>
  );
}

/*

          />*/
