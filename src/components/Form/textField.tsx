import React from 'react';

type textTypes = {
  inputName: string;
  type: string;
};

export default function TextField(props: textTypes) {
  return (
    <div>
      <label htmlFor={props.inputName}>{props.inputName}</label>
      <input type={props.type} id={props.inputName} name={props.inputName} />
    </div>
  );
}
