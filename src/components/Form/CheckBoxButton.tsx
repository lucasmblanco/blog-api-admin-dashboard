import React from 'react';

export default function CheckBoxButton({
  name,
  initialState,
  setFunction,
  complexName = false
}: {
  name: string;
  initialState: boolean;
  setFunction: (value: boolean) => void;
  complexName?: boolean;
}) {
  return (
    <label className="relative inline-flex items-center mr-5 cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        name={transformValue(name, complexName)}
        id={transformValue(name, complexName)}
        checked={initialState}
        onChange={e => setFunction(e.target.checked)}
      />
      <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {name}
      </span>
    </label>
  );
}

function transformValue(value: string, complex: boolean) {
  return complex
    ? value.split(' ').join('').slice(0, -1).toLowerCase()
    : value.toLowerCase();
}

//"appareance-none bg-black-brown focus:outline-none accent-pink-500 focus:ring-tan checked:bg-tan hover:bg-tan active:bg-tan checked:ring-0 checked:outline-none rounded"
/*
return (
  <div className="flex gap-2 p-2 items-center">
    <input
      type="checkbox"
      name={transformValue(name, complexName)}
      id={transformValue(name, complexName)}
      checked={initialState}
      onChange={e => setFunction(e.target.checked)}
      className="text-tan bg-black-brown border-light-brown rounded focus:ring-0 dark:ring-offset-black-brown  dark:bg-black-brown dark:border-black-brown"
    />
    <label htmlFor={transformValue(name, complexName)} className="font-bold">
      {name}
    </label>
  </div>
);
*/