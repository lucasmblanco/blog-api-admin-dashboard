import { useContext } from 'react';
import { FormContext } from '@/context/FormContext';
import axios, { AxiosError } from 'axios';
import { ApiError } from '@/types';
import { toast } from 'sonner';

export default function useSignup() {
  const { formDispatch } = useContext(FormContext);
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    };

    try {
      const response = await axios.post(
        'https://blog-api-ol7v.onrender.com/v1/admin/signup',
        data,
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      if (response.status !== 200) {
        formDispatch({ type: 'CHANGE_VIEW_FROM_SIGNUP' });
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        err.response?.data.errors.map((e: ApiError) => toast.error(e.error));
      }
    }
  };
  return { handleSubmit };
}
