import React, { useContext } from 'react';
import { UserContext } from '@/context/UserContext';
import LogoutIcon from '../../../public/log-out.svg';
import Image from 'next/image';
import axios, { AxiosError } from 'axios';
import { toast } from 'sonner';

export default function LogoutDesktop() {
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
        if (window && window.location) window.location.reload();
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
      className="relative hidden md:block bg-red-800 rounded p-3 cursor-pointer border-red-600 hover:bg-red-600 active:bg-red-600"
    >
      <Image src={LogoutIcon} alt="" width={20} />
    </button>
  );
}
