'use client';

import { SignOut, UserCircle } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

import { deleteCookie } from '@/app/actions';

export function Aside() {
  const { push } = useRouter();

  const handleSignOut = async () => {
    await deleteCookie('token');
    await deleteCookie('id');

    push('/sign-in');
  };

  function handleAlert() {
    alert('Aguarde novas funcionalidades em futuras versoes');
  }

  return (
    <aside className="fixed flex w-screen items-center justify-between bg-black-800 px-9 py-4 text-blue-500 lg:relative lg:w-fit lg:flex-col lg:justify-between lg:px-9 lg:py-16">
      <UserCircle onClick={handleAlert} className="h-8 w-8 cursor-pointer" />
      <SignOut onClick={handleSignOut} className="h-8 w-8 cursor-pointer" />
    </aside>
  );
}
