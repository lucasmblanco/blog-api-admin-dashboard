import React, { useState } from 'react';
import Logo from '@/components/Header/Logo';
import LoggedUser from '@/components/Header/LoggedUser';
import AddNewPostButton from '@/components/Header/AddNewPostButton';
import PostForm from '@/components/Posts/PostForm';

export default function HeaderContainer() {
  const [openForm, setOpenForm] = useState(false);
  return (
    <header>
      <Logo />
      <LoggedUser />
      <AddNewPostButton onClick={setOpenForm} />
      {openForm && <PostForm />}
    </header>
  );
}
