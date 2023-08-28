import React from 'react';
import MobileMenu from '@/containers/MobileMenu';
import LogoutButton from '@/components/Buttons/LogoutButton';
import { Toaster } from 'sonner';

export default function DashboardPage() {
  return (
    <>
      <Toaster />
      <MobileMenu>
        <LogoutButton />
      </MobileMenu>
    </>
  );
}
