'use client';
import React, { useContext, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
//import { ApiResponse } from '@/types';
import { PostContext } from '@/context/PostContext';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

type FormProps = {
  title?: string;
  body?: string;
};

async function createPost({ title, body }: { title: string; body: string }) {
  return axios
    .post('https://blog-api-ol7v.onrender.com/v1/posts/', {
      title,
      body
    })
    .then(res => res.data);
}

export default function PostForm() {
  const { state, dispatch } = useContext(PostContext);
  const [title, setTitle] = useState(state.title || '');
  const [body, setBody] = useState(state.body || '');
  const createPostMutation = useMutation({
    mutationFn: createPost
  });

  const handleSubmit = async function () {
    createPostMutation.mutate({
      title: title,
      body: body
    });
    /*
    e.preventDefault();
    const post = {
      // title: newTitle,
      //body: newBody
    };
    const JSONdata = JSON.stringify(post);

    const endpoint = 'https://blog-api-ol7v.onrender.com/v1/posts/';
    const options: RequestInit = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSONdata
    };
    const response = await fetch(endpoint, options);
    //const userInformation: ApiResponse = await response.json();
    if (response.status === 201) {
      console.log('funcionaaaaaaaa');
    }
    if (response.status !== 201) {
      //userInformation.errors?.map(e => toast.error(e.error));

      console.log('no funciona');
    }
    */
  };

  // const [newBodyValue, setNewBodyValue] = useState(body);
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
            apiKey="bplbmwbo815j4k30nz2swp2hkiv7zn54adf1u0zl3xadjs7j"
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
        <button type="submit">Save Post</button>
      </form>
    </>
  );
}
