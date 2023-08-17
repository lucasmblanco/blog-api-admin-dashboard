import React from 'react';
//import 'tailwindcss/tailwind.css';

type textTypes = {
  inputName: string;
  type: string;
};

export default function TextField(props: textTypes) {
  return (
    <div className="flex flex-col">
      <input
        type={props.type}
        id={props.inputName}
        name={props.inputName}
        className="block peer bg-transparent border-b-[1px] border-beige focus:outline-none focus:ring-0 py-2"
        placeholder=""
      />
      <label
        htmlFor={props.inputName}
        className="py-2 absolute opacity-50 duration-300 -translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
      >
        {props.inputName}
      </label>
    </div>
  );
}
