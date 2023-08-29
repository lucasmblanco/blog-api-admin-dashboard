'use client';
import React, { useContext } from 'react';
import axios, { AxiosError } from 'axios';
import { UserContext } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import LogoutIcon from '../../../public/log-out.svg';
import Image from 'next/image';
import { toast } from 'sonner';

export default function LogoutButton() {
  const router = useRouter();
  const { dispatch } = useContext(UserContext);
  async function handleLogout() {
    try {
      const response = await axios.post(
        'https://blog-api-ol7v.onrender.com/v1/admin/logout',
        null,
        {
          withCredentials: true
        }
      );
      if (response.status === 200) {
        dispatch({ type: 'LOG_OUT_USER' });
        router.push('/');
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        toast.error(err.response?.data);
      }
    }
  }

  return (
    <button
      onClick={handleLogout}
      className=" bg-red-800 p-1 rounded w-6 border border-red-600 hover:bg-red-600 active:bg-red-600"
    >
      <Image src={LogoutIcon} alt="sadsad" />
    </button>
  );
}
