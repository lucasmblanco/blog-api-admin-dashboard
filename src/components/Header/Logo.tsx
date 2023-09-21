import React from 'react';
import Image from 'next/image';
import dashboardLogo from '../../../public/dashboard-logo.png';

export default function Logo() {
  return (
    <div className="hidden md:block p-2 w-16">
      <Image src={dashboardLogo} alt="page logo" width={50} />
    </div>
  );
}
