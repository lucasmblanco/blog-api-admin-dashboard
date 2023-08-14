import React, { useState } from 'react';
import Logo from '@/components/Header/Logo';
import LoggedUser from '@/components/Header/LoggedUser';
import AddNewPostButton from '@/components/Header/AddNewPostButton';
import PostDialog from '@/components/Posts/PostDialog';
import { DialogProvider } from '@/context/DialogContext';

export default function HeaderContainer() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <header>
      <Logo />
      <LoggedUser />
      <DialogProvider>
        <AddNewPostButton />
        <PostDialog hideFormButton={true} />
      </DialogProvider>
    </header>
  );
}
