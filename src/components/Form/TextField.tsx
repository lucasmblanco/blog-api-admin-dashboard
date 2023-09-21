/* eslint-disable react/display-name */
'use client';
import React from 'react';
import { UseFormRegister, Path } from 'react-hook-form';

interface TextFieldProps {
  type: string;
  inputName: 'username' | 'password' | 'title';
  value?: string;
  label: Path<any>;
  register: UseFormRegister<any>;
  required: boolean;
}

export const TextField = ({
  label,
  register,
  required,
  type,
  inputName,
  value
}: TextFieldProps) => (
  <div className="flex flex-col">
    <input
      type={type}
      id={inputName}
      className="block peer bg-transparent border-0 border-b-[1px] border-beige focus:outline-none focus:ring-0 py-2 px-2"
      placeholder=""
      defaultValue={value}
      {...register(label, { required })}
    />
    <label
      htmlFor={inputName}
      className="absolute py-2 px-2 opacity-50 duration-300 transform -translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {label}
    </label>
  </div>
);
