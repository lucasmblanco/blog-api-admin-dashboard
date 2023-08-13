'use client';
import React from 'react';

export default function AddNewPostButton({
  onClick
}: {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClick = function () {
    onClick(true);
  };
  return (
    <div>
      <button onClick={handleClick}>+</button>
    </div>
  );
}
