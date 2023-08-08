'use client';
import React from 'react';

export default function AddNewPostButton() {
  const handleClick = function () {
    console.log('ADD POST');
  };
  return (
    <div>
      <button onClick={handleClick}>+</button>
    </div>
  );
}
