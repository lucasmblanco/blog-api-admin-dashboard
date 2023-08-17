'use client';
import React, { useContext, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { PostContext } from '@/context/PostContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { DialogContext } from '@/context/DialogContext';

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
  const [published, setPublished] = useState(state.published || false);
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
        published: published
      });
    } else {
      editPostMutation.mutate({
        id: state.id,
        title: title,
        body: body,
        published: published,
        timestamp: !newTimestamp ? state.timestamp : undefined
      });
    }
    dispatch({ type: 'TOGGLE_DIALOG_DEFAULT' });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
            onEditorChange={newValue => {
              setBody(newValue);
            }}
            init={{
              id: 'body',
              textareaName: 'body'
              //entity_encoding: 'raw'
            }}
            value={body}
          />
        </div>
        <label htmlFor="published">Published</label>
        <input
          type="checkbox"
          name="published"
          id="published"
          checked={published}
          onChange={e => setPublished(e.target.checked)}
        />
        <label htmlFor="newTimestamp">Update timestamp?</label>
        <input
          type="checkbox"
          name="newTimestamp"
          id="newTimestamp"
          checked={newTimestamp}
          onChange={e => setNewTimestamp(e.target.checked)}
        />
        <button type="submit">Save Post</button>
      </form>
    </>
  );
}
