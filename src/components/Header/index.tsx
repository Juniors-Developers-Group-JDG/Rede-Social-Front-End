import Image from 'next/image';

import bellIcon from '../../assets/bell.svg';
import chatIcon from '../../assets/chat.svg';
import searchIcon from '../../assets/search.svg';

function Header() {
  return (
    <header className="fixed bottom-0 flex h-[50px] w-screen bg-black-900 lg:top-0 lg:h-16 lg:flex-row lg:justify-between">
      <div className="hidden pl-44 lg:flex">
        <Image src={searchIcon} alt="icone de lupa" />
        <input
          type="text"
          placeholder="Pesquisar"
          className="ml-3 mt-[21px] h-5 bg-transparent text-blue-500 placeholder-blue-500"
        />
      </div>
      <div className="flex w-full flex-row justify-evenly lg:mr-[89px] lg:w-auto lg:gap-16 lg:border-l lg:border-r lg:border-blue-800 lg:pl-11 lg:pr-11">
        <Image src={bellIcon} alt="icone de sino" />
        <Image src={chatIcon} alt="icone de caixa de chat" />
        <Image className="lg:hidden" src={searchIcon} alt="icone de lupa" />
      </div>
    </header>
  );
}

export default Header;
