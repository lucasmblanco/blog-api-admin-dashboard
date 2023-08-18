'use client';
import React, { useContext, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { PostContext } from '@/context/PostContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { DialogContext } from '@/context/DialogContext';
import TextField from '../Form/textField';
import CheckBoxButton from '../Form/CheckBoxButton';

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
  return axios
    .post('https://blog-api-ol7v.onrender.com/v1/posts/', data, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
    .then(res => res.data);
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
  return axios
    .put(`https://blog-api-ol7v.onrender.com/v1/posts/${id}`, data, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
    .then(res => res.data);
}

export default function PostForm() {
  const { state } = useContext(PostContext);
  const { dispatch } = useContext(DialogContext);
  const [title, setTitle] = useState(state.title || '');
  const [body, setBody] = useState(state.body || '');
  const [publish, SetPublish] = useState(state.published || false);
  const [newTimestamp, setNewTimestamp] = useState(false);
  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
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
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-2 gap-4 grow justify-around"
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
            textareaName: 'body'
          }}
          value={body}
        />
      </div>
      <div className="flex flex-col grow justify-center">
        <CheckBoxButton
          name="Publish?"
          initialState={publish}
          setFunction={SetPublish}
          complexName={true}
        />
        <CheckBoxButton
          name="Update timestamp?"
          initialState={newTimestamp}
          setFunction={setNewTimestamp}
          complexName={true}
        />
      </div>
      <div className="flex justify-center p-2">
        <button
          type="submit"
          className="font-bold text-sm text-beige border border-beige px-4 py-1 mx-2 rounded-full hover:bg-beige hover:text-black-brown hover:border-light-beige"
        >
          Save
        </button>
      </div>
    </form>
  );
}

/*
 <div>
        <label htmlFor="title" className="font-bold">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="focus:outline-none focus:ring-0 border-0 border-b-[1px] border-beige w-full bg-black-brown"
        />
      </div>

 <div>
          <label htmlFor="published">Published</label>
          <input
            type="checkbox"
            name="published"
            id="published"
            checked={published}
            onChange={e => setPublished(e.target.checked)}
            className="appareance-none bg-black-brown focus:outline-none focus:ring-tan focus:bg-tan checked:ring-0 checked:outline-none rounded"
          />
        </div>
        <div>
          <label htmlFor="newTimestamp">Update timestamp?</label>
          <input
            type="checkbox"
            name="newTimestamp"
            id="newTimestamp"
            checked={newTimestamp}
            onChange={e => setNewTimestamp(e.target.checked)}
          />
        </div>

      */
