import React from 'react';
import BaseForm from '@/components/Form/BaseForm';
import { TextField } from '@/components/Form/TextField';
import useSignup from '@/hooks/signupHook';
import { AnimatePresence, motion as m } from 'framer-motion';

export default function SingUpForm() {
  const { onSubmit, handleSubmit, isLoading, register, errors } = useSignup();
  return (
    <AnimatePresence mode="wait">
      <m.div
        key={Math.random().toString()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        <BaseForm
          onSubmit={handleSubmit(onSubmit)}
          submitButtonText="Sign Up"
          isLoading={isLoading}
        >
          <TextField
            {...register('username', { required: true })}
            label="username"
            inputName="username"
            type="text"
          />
          {errors.username && <p>This field is required</p>}
          <TextField
            {...register('password', { required: true })}
            label="password"
            inputName="password"
            type="password"
          />
          {errors.password && <p>This field is required</p>}
        </BaseForm>
      </m.div>
    </AnimatePresence>
  );
}
