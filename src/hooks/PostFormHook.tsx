import React, { useState } from 'react';
import { PostComponentType } from '@/types';

export default function usePostForm(state: PostComponentType) {
  const [title, setTitle] = useState(state.title || '');
  const [body, setBody] = useState(state.body || '');
  const [publish, setPublish] = useState(state.published || false);
  const [newTimestamp, setNewTimestamp] = useState(false);

  return {
    title,
    setTitle,
    body,
    setBody,
    publish,
    setPublish,
    newTimestamp,
    setNewTimestamp
  };
}
