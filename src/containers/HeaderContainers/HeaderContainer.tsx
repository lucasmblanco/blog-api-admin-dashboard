import React, { useState } from 'react';
import Logo from '@/components/Header/Logo';
import LoggedUser from '@/components/Header/LoggedUser';
import AddNewPostButton from '@/components/Header/AddNewPostButton';
import PostDialog from '@/components/Posts/PostDialog';
import { PostProvider } from '@/context/PostContext';

export default function HeaderContainer() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <header>
      <Logo />
      <LoggedUser />
      <AddNewPostButton onClick={() => setOpenDialog(true)} />
      <PostDialog
        view="form"
        hideFormButton={true}
        dialogStatus={openDialog}
        dialogControl={setOpenDialog}
      />
    </header>
  );
}
