import PostForm from '@/components/Posts/PostForm';
import Post from '@/components/Posts/Post';

type CurrentViewType = {
  [key: string]: React.ReactNode;
};

export const DialogComponents: CurrentViewType = {
  post: <Post />,
  form: <PostForm />
};
