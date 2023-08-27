'use client';
import React, { useContext, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { PostContext } from '@/context/PostContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { DialogContext } from '@/context/DialogContext';
import TextField from '../Form/TextField';
import CheckBoxButton from '../Form/CheckBoxButton';
import { toast } from 'sonner';
import { ApiError } from '@/types';

async function createPost({
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

async function editPost({
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

export default function PostForm() {
  const { state } = useContext(PostContext);
  const { dispatch } = useContext(DialogContext);
  const [title, setTitle] = useState(state.title || '');
  const [body, setBody] = useState(state.body || '');
  const [publish, setPublish] = useState(state.published || false);
  const [newTimestamp, setNewTimestamp] = useState(false);
  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
      setTitle('');
      setBody('');
      setPublish(false);
      setNewTimestamp(false);
    }
  });
  const editPostMutation = useMutation({
    mutationFn: editPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    }
  });
  const handleSubmit = async function (e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state.id === '') {
      createPostMutation.mutate({
        title: title,
        body: body,
        published: publish
      });
    } else {
      editPostMutation.mutate({
        id: state.id,
        title: title,
        body: body,
        published: publish,
        timestamp: !newTimestamp ? state.timestamp : undefined
      });
    }
    dispatch({ type: 'TOGGLE_DIALOG_DEFAULT' });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col p-2 gap-4 grow justify-around "
      >
        <TextField
          inputName="Title"
          type="text"
          setFunction={setTitle}
          value={title}
        />
        <div className="flex flex-col gap-2">
          <label htmlFor="body" className="opacity-50 px-2">
            Body
          </label>
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
            onEditorChange={newValue => {
              setBody(newValue);
            }}
            init={{
              id: 'body',
              textareaName: 'body',
              height: 500,
            }}
            value={body}
          />
        </div>
        <div className="flex flex-col gap-1 grow justify-center">
          <CheckBoxButton
            name="PUBLISH"
            initialState={publish}
            setFunction={setPublish}
            complexName={true}
          />
          {state.timestamp && (
            <CheckBoxButton
              name="UPDATE TIMESTAMP"
              initialState={newTimestamp}
              setFunction={setNewTimestamp}
              complexName={true}
            />
          )}
        </div>
        <div className="flex justify-center p-2">
          <button
            type="submit"
            className="font-bold text-sm text-beige border border-beige px-4 py-1 mx-2 rounded-full hover:bg-beige hover:text-black-brown hover:border-light-beige transition-all"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
