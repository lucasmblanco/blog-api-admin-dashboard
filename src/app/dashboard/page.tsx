'use client';
import React, { useEffect } from 'react';
import MobileMenu from '@/containers/MobileMenu';
import LogoutButton from '@/components/Buttons/LogoutButton';

export default function DashboardPage() {
  return (
    <>
      <MobileMenu>
        <LogoutButton />
      </MobileMenu>
    </>
  );
}
