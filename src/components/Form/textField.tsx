/* eslint-disable react/display-name */
'use client';
import React, { forwardRef } from 'react';
import { UseFormRegister, Path } from 'react-hook-form';

interface UserData {
  username: string;
  password: string;
}

/*
export default function TextField(props: textTypes) {
  console.log(props.watch('username'));
  return (
    <div className="flex flex-col">
      <input
        {...(props.register(props.inputName), { required: true })}
        type={props.type}
        id={props.inputName}
        onChange={e => props.setFunction?.(e.target.value)}
        className={`block peer bg-transparent border-0 border-b-[1px] border-beige focus:outline-none focus:ring-0 py-2 px-2`}
        placeholder=""
        value={props.value}
      />
      <label
        htmlFor={props.inputName}
        className="absolute py-2 px-2 opacity-50 duration-300 transform -translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 -z-10 origin-[0] peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {props.inputName}
      </label>
    </div>
  );
}
*/
interface TextFieldProps {
  type: string;
  inputName: 'username' | 'password' | 'title';
  //setFunction?: (e: string) => void;
  value?: string;
  label: Path<any>;
  register: UseFormRegister<any>;
  required: boolean;
}

interface PostData {
  title: string;
  body: string;
  publish: boolean;
  newTimestamp: boolean;
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
