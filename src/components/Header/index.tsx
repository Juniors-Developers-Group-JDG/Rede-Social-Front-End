'use client';

import { usePost } from '@/hooks/usePost';

import {
  BellSimple,
  Chat,
  MagnifyingGlass,
} from '../../components/PhosphorIcons';

export function Header() {
  const { setPostQuery } = usePost();

  function handleAlert() {
    alert('Aguarde novas funcionalidades em futuras versoes');
  }

  return (
    <header className="lg:bg-black-960 fixed bottom-0 z-10 flex w-screen bg-black-800 py-4 lg:sticky lg:top-0 lg:justify-between lg:bg-black-950 lg:px-44 lg:py-2">
      <div className="hidden items-center text-blue-500 lg:flex">
        <MagnifyingGlass className="h-8 w-8" />
        <input
          type="text"
          placeholder="Pesquisar"
          className="ml-4 bg-transparent text-xl placeholder-blue-500"
          onChange={event => setPostQuery(event.target.value)}
        />
      </div>

      <div className="flex w-full items-center justify-evenly text-blue-500 lg:w-fit lg:gap-16 lg:border-x lg:border-blue-800 lg:px-10 lg:py-4">
        <BellSimple onClick={handleAlert} className="h-8 w-8 cursor-pointer" />
        <Chat
          onClick={handleAlert}
          className="icon-outlined h-8 w-8 cursor-pointer"
        />
        <MagnifyingGlass className="h-8 w-8 lg:hidden" />
      </div>
    </header>
  );
}
