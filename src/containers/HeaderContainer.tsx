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
      <nav className="flex justify-between grow first:items-center text-black-brown bg-gradient-to-bl from-beige to-tan m-4 rounded-xl md:flex-col md:justify-between md:items-center md:gap-3 md:p-1">
        <div className="flex w-full justify-between items-center md:flex-col md:items-center">
          <Logo />
          <LoggedUser />
          <DialogProvider>
            <AddNewPostButton />
            <PostDialog hideFormButton={true} />
          </DialogProvider>
        </div>
        <div className="hidden md:grid md:gap-3 md:py-2 md:border-t border-black-brown w-full place-content-center">
          <LoggedUserDesktop />
          <LogoutDesktop />
        </div>
      </nav>
    </header>
  );
}

//flex justify-between items-center text-black-brown bg-gradient-to-bl from-beige to-tan m-4 rounded-xl
