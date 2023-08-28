import axios, { AxiosError } from 'axios';
import { ApiError } from '@/types';
import { toast } from 'sonner';

export async function createPost({
  title,
  body,
  published
}: {
  title: string;
  body: string;
  published: boolean;
}) {
  const data = {
    title: title,
    body: body,
    published: published
  };
  try {
    const response = await axios.post(
      'https://blog-api-ol7v.onrender.com/v1/posts/',
      data,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }
    );
    const responseData = await response.data;
    return responseData;
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response?.data.errors.length > 0) {
        err.response?.data.errors.map((e: ApiError) => toast.error(e.error));
      } else {
        toast.error(err.response?.data);
      }
    }
  }
}

export async function editPost({
  id,
  title,
  body,
  published,
  timestamp
}: {
  id: string;
  title: string;
  body: string;
  published: boolean;
  timestamp?: string;
}) {
  const data = {
    title: title,
    body: body,
    published: published,
    timestamp: timestamp
  };
  try {
    const response = await axios.put(
      `https://blog-api-ol7v.onrender.com/v1/posts/${id}`,
      data,
      {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      }
    );
    const responseData = await response.data;
    return responseData;
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.response?.data.errors.length > 0) {
        err.response?.data.errors.map((e: ApiError) => toast.error(e.error));
      } else {
        toast.error(err.response?.data);
      }
    }
  }
}
