import Logo from '@/components/Header/Logo';
import LoggedUser from '@/components/Header/LoggedUser';
import AddNewPostButton from '@/components/Header/AddNewPostButton';
import PostDialog from '@/components/Posts/PostDialog';
import { DialogProvider } from '@/context/DialogContext';
import LoggedUserDesktop from '@/components/Header/LoggedUserDesktop';
import LogoutDesktop from '@/components/Header/LogoutDesktop';

export default function HeaderContainer() {
  return (
    <header className="flex justify-center md:min-h-[100dvh] md:grow-0 ">
      <nav className="flex justify-between grow first:items-center text-black-brown bg-gradient-to-bl from-beige to-tan m-4 rounded-xl md:flex-col md:justify-start md:items-center md:gap-3 md:p-2">
        <Logo />
        <LoggedUser />
        <DialogProvider>
          <AddNewPostButton />
          <PostDialog hideFormButton={true} />
        </DialogProvider>
        <LoggedUserDesktop />
        <LogoutDesktop />
      </nav>
    </header>
  );
}

//flex justify-between items-center text-black-brown bg-gradient-to-bl from-beige to-tan m-4 rounded-xl
