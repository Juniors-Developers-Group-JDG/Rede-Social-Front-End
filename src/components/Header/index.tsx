import Image from 'next/image';

import bellIcon from '../../assets/bell.svg';
import chatIcon from '../../assets/chat.svg';
import searchIcon from '../../assets/search.svg';

export function Header() {
  return (
    <header className="lg:bg-black-960 fixed bottom-0 z-10 flex w-screen bg-black-800 py-4 lg:sticky lg:top-0 lg:justify-between lg:bg-black-950 lg:px-44 lg:py-2">
      <div className="hidden items-center lg:flex">
        <Image
          src={searchIcon}
          alt="icone de lupa"
          className="h-6 w-6"
          width={24}
          height={24}
        />
        <input
          type="text"
          placeholder="Pesquisar"
          className="ml-4 bg-transparent text-xl text-blue-500 placeholder-blue-500"
        />
      </div>

      <div className="flex w-full items-center justify-evenly lg:w-fit lg:gap-16 lg:border-x lg:border-blue-800 lg:px-10 lg:py-4">
        <Image
          src={bellIcon}
          alt="icone de sino"
          className="h-6 w-6"
          width={24}
          height={24}
        />
        <Image
          src={chatIcon}
          alt="icone de caixa de chat"
          className="h-6 w-6"
          width={24}
          height={24}
        />
        <Image
          src={searchIcon}
          alt="icone de lupa"
          className="h-6 w-6 lg:hidden"
          width={24}
          height={24}
        />
      </div>
    </header>
  );
}
