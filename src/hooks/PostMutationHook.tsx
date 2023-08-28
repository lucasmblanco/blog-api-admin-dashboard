import React, { useContext } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost, editPost } from '../services/postServices';
import { DialogContext } from '@/context/DialogContext';
import usePostForm from './PostFormHook';
import { PostComponentType } from '@/types';

export default function usePostMutation(state: PostComponentType) {
  const {
    title,
    setTitle,
    body,
    setBody,
    publish,
    setPublish,
    newTimestamp,
    setNewTimestamp
  } = usePostForm(state);
  const { dispatch } = useContext(DialogContext);
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
  return {
    title,
    setTitle,
    body,
    setBody,
    publish,
    setPublish,
    newTimestamp,
    setNewTimestamp,
    handleSubmit
  };
}
