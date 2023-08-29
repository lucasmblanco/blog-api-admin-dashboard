import React from 'react';
import BaseForm from '@/components/Form/BaseForm';
import TextField from '@/components/Form/TextField';
import useSignup from '@/hooks/signupHook';
import { AnimatePresence, motion as m } from 'framer-motion';

export default function SingUpForm() {
  const { handleSubmit } = useSignup();
  return (
    <AnimatePresence mode="wait">
      <m.div
        key={Math.random().toString()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <BaseForm onSubmit={handleSubmit} submitButtonText="Sign Up">
          <TextField inputName="Username" type="text" />
          <TextField inputName="Password" type="password" />
        </BaseForm>
      </m.div>
    </AnimatePresence>
  );
}
