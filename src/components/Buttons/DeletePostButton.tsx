import React, { useContext, useEffect } from 'react';
import { PostContext } from '@/context/PostContext';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DeleteContext } from '@/context/DeleteContext';
import Image from 'next/image';
import deleteIcon from '../../../public/delete-icon.svg';
import { motion as m, AnimatePresence } from 'framer-motion';
import { deletePost } from '@/services/postServices';
import { toast } from 'sonner';

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
};

export default function DeletePostButton() {
  const { state } = useContext(PostContext);
  const { deleteState } = useContext(DeleteContext);
  const queryClient = useQueryClient();
  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    }
  });

  function handleButton(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    deletePostMutation.mutate({ id: state.id });
  }

  useEffect(() => {
    if (deletePostMutation.isLoading) {
      toast('Deleting post....');
    }
    if (deletePostMutation.isSuccess && deletePostMutation.data) {
      toast.dismiss();
      toast.success(deletePostMutation.data.message);
    }
  }, [deletePostMutation]);

  return (
    <div className="grid place-content-center">
      <AnimatePresence>
        {deleteState.displayButton && (
          <m.button
            key={state.id}
            className="rounded-full border border-crimson p-1 bg-crimson/20 cursor-pointer hover:opacity-80"
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.25 }}
            variants={variants}
            onClick={handleButton}
          >
            <Image src={deleteIcon} alt="" width={20} />
          </m.button>
        )}
      </AnimatePresence>
    </div>
  );
}
