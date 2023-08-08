import React from 'react';

const getServerStatus = async function () {
  const res = await fetch('https://blog-api-ol7v.onrender.com/v1/');
  return res.status === 200;
};

export default async function ServerStatus() {
  const status = await getServerStatus();
  return <div>{status && 'Conectado'}</div>;
}
