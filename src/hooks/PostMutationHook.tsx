import { useContext, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost, editPost } from '../services/postServices';
import { DialogContext } from '@/context/DialogContext';
import { PostComponentType } from '@/types';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';

type PostData = {
  title: string;
  body: string;
  publish: boolean;
  newTimestamp: boolean;
};

export default function usePostMutation(state: PostComponentType) {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control
  } = useForm<PostData>();
  const { dispatch } = useContext(DialogContext);
  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
      /*
      setTitle('');
      setBody('');
      setPublish(false);
      setNewTimestamp(false);
      */
    },
    onError: (error: any) => console.log(error)
  });
  const editPostMutation = useMutation({
    mutationFn: editPost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    }
  });
  const onSubmit = (data: PostData) => {
    //e.preventDefault();
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
        timestamp: !data.newTimestamp ? state.timestamp : undefined
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
  }, [createPostMutation]);

  useEffect(() => {
    if (editPostMutation.isLoading) {
      toast('Saving post....');
    }
    if (editPostMutation.isSuccess && editPostMutation.data) {
      toast.dismiss();
      toast.success(editPostMutation.data.message);
    }
  }, [editPostMutation]);

  return {
    //title,
    //setTitle,
    //body,
    //setBody,
    //publish,
    // setPublish,
    //newTimestamp,
    // setNewTimestamp,
    onSubmit,
    //createPostMutation,
    //editPostMutation,
    handleSubmit,
    register,
    errors,
    control
  };
}
