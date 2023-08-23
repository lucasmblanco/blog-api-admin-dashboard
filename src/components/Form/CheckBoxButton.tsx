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
    <div className="flex gap-2 p-2 items-center">
      <input
        type="checkbox"
        name={
          complexName
            ? name.split(' ').join('').slice(0, -1).toLowerCase()
            : name.toLowerCase()
        }
        id={
          complexName
            ? name.split(' ').join('').slice(0, -1).toLowerCase()
            : name.toLowerCase()
        }
        checked={initialState}
        onChange={e => setFunction(e.target.checked)}
        className="text-tan bg-black-brown border-light-brown rounded focus:ring-0 dark:ring-offset-black-brown  dark:bg-black-brown dark:border-black-brown"
      />
      <label
        htmlFor={
          complexName
            ? name.split(' ').join('').slice(0, -1).toLowerCase()
            : name.toLowerCase()
        }
        className="font-bold"
      >
        {name}
      </label>
    </div>
  );
}

//"appareance-none bg-black-brown focus:outline-none accent-pink-500 focus:ring-tan checked:bg-tan hover:bg-tan active:bg-tan checked:ring-0 checked:outline-none rounded"
