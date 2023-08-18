import React, { useState } from 'react';
import Logo from '@/components/Header/Logo';
import LoggedUser from '@/components/Header/LoggedUser';
import AddNewPostButton from '@/components/Header/AddNewPostButton';
import PostDialog from '@/components/Posts/PostDialog';
import { DialogProvider } from '@/context/DialogContext';

export default function HeaderContainer() {
  return (
    <header className=" flex justify-center self-start">
      <nav className="flex justify-between grow first:items-center text-black-brown bg-gradient-to-bl from-beige to-tan m-4 rounded-xl">
        <Logo />
        <LoggedUser />
        <DialogProvider>
          <AddNewPostButton />
          <PostDialog hideFormButton={true} />
        </DialogProvider>
      </nav>
    </header>
  );
}

//flex justify-between items-center text-black-brown bg-gradient-to-bl from-beige to-tan m-4 rounded-xl
