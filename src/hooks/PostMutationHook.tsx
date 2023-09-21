import { useContext, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost, editPost } from '../services/postServices';
import { DialogContext } from '@/context/DialogContext';
import { PostComponentType } from '@/types';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';

interface PostData {
  title: string;
  body: string;
  publish: boolean;
  updateTimestamp: boolean;
}

export default function usePostMutation(state: PostComponentType) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    control
  } = useForm<PostData>();
  const { dispatch } = useContext(DialogContext);
  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
      reset({ title: '', body: '', publish: false, updateTimestamp: false });
    }
  });
  const editPostMutation = useMutation({
    mutationFn: editPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    }
  });
  const onSubmit = (data: PostData) => {
    if (state.id === '') {
      createPostMutation.mutate({
        title: data.title,
        body: data.body,
        published: data.publish
      });
    } else {
      editPostMutation.mutate({
        id: state.id,
        title: data.title,
        body: data.body,
        published: data.publish,
        timestamp: !data.updateTimestamp ? state.timestamp : undefined
      });
    }
    dispatch({ type: 'TOGGLE_DIALOG_DEFAULT' });
  };

  useEffect(() => {
    if (createPostMutation.isLoading) {
      toast('Saving post...');
    }
    if (createPostMutation.isSuccess && createPostMutation.data) {
      toast.dismiss();
      toast.success(createPostMutation.data.message);
    }
  }, [
    createPostMutation.isLoading,
    createPostMutation.data,
    createPostMutation.isSuccess
  ]);

  useEffect(() => {
    if (editPostMutation.isLoading) {
      toast('Saving post....');
    }
    if (editPostMutation.isSuccess && editPostMutation.data) {
      toast.dismiss();
      toast.success(editPostMutation.data.message);
    }
  }, [
    editPostMutation.isLoading,
    editPostMutation.data,
    editPostMutation.isSuccess
  ]);

  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
    control
  };
}
