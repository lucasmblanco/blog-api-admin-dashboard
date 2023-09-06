/* eslint-disable react/display-name */
import React from 'react';
import { UseFormRegister, Path } from 'react-hook-form';

interface CheckButtonProps {
  initialState: string | boolean;
  label: Path<any>;
  register: UseFormRegister<any>;
}

const splitCamelCaseAndCapitalize = (camel: string) => {
  const camelCase = camel.replace(/([a-z])([A-Z])/g, '$1 $2');
  const capitalized = camelCase.replace(
    camelCase[0],
    camelCase[0].toUpperCase()
  );
  return capitalized;
};

export const CheckBoxButton = ({
  label,
  register,
  initialState
}: CheckButtonProps) => (
  <div className="flex  p-4 rounded-lg bg-black-brown gap-3 justify-center ">
    <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
      {splitCamelCaseAndCapitalize(label)}
    </span>
    <label className="relative inline-flex items-center mr-5 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        id={label}
        defaultChecked={initialState ? true : false}
        {...register(label)}
      />
      <div className="w-6 h-3 bg-gray-200 rounded-full peer dark:bg-black-brown peer-focus:ring-1 peer-focus:ring-none dark:peer-focus:ring-soft-brown peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.8 after:left-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-tan"></div>
    </label>
  </div>
);
