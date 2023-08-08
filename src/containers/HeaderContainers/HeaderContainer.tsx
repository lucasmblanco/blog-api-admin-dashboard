import React from 'react';
import Logo from '@/components/Header/Logo';
import LoggedUser from '@/components/Header/LoggedUser';
import AddNewPostButton from '@/components/Header/AddNewPostButton';

export default function HeaderContainer() {
  return (
    <header>
      <Logo />
      <LoggedUser />
      <AddNewPostButton />
    </header>
  );
}
