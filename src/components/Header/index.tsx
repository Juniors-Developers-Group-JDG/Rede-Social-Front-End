import Image from 'next/image';

import bellIcon from '../../assets/bell.svg';
import chatIcon from '../../assets/chat.svg';
import searchIcon from '../../assets/search.svg';

function Header() {
  return (
    <header className="fixed bottom-0 flex w-screen bg-black-800 py-4 lg:sticky lg:top-0 lg:justify-between lg:bg-black-950 lg:px-44 lg:py-2">
      <div className="hidden items-center lg:flex">
        <Image
          src={searchIcon}
          alt="icone de lupa"
          className="h-5 w-5"
          width={20}
          height={20}
        />
        <input
          type="text"
          placeholder="Pesquisar"
          className="ml-3 bg-transparent text-blue-500 placeholder-blue-500"
        />
      </div>

      <div className="flex w-full items-center justify-evenly lg:w-fit lg:gap-16 lg:border-x lg:border-blue-800 lg:px-10 lg:py-4">
        <Image
          src={bellIcon}
          alt="icone de sino"
          className="h-5 w-5"
          width={20}
          height={20}
        />
        <Image
          src={chatIcon}
          alt="icone de caixa de chat"
          className="h-5 w-5"
          width={20}
          height={20}
        />
        <Image
          src={searchIcon}
          alt="icone de lupa"
          className="h-5 w-5 lg:hidden"
          width={20}
          height={20}
        />
      </div>
    </header>
  );
}

export default Header;
