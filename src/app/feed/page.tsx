import Image from 'next/image';

import bellIcon from '../../assets/bell.svg';
import chatIcon from '../../assets/chat.svg';
import doorIcon from '../../assets/door.svg';
import personIcon from '../../assets/personIcon.svg';
import searchIcon from '../../assets/search.svg';

const Feed = () => {
  return (
    <div>
      <header className="flex h-16 w-full flex-row justify-between overflow-x-hidden bg-black-black1">
        <div className="ml-44 flex">
          <Image src={searchIcon} alt="icone de lupa" />
          <input
            type="text"
            placeholder="Pesquisar"
            className="ml-3 mt-[21px] h-5 bg-transparent text-blue-blue2 placeholder-blue-blue2"
          />
        </div>
        <div className="mr-[89px] flex gap-16 border-l border-r border-blue-blue1 pl-11 pr-11">
          <Image src={bellIcon} alt="icone de sino" />
          <Image src={chatIcon} alt="icone de caixa de chat" />
        </div>
      </header>
      <main className="flex flex-row">
        <div className="flex h-full w-[94px] flex-col items-center justify-between bg-black-black2">
          <Image
            className="mb-[492px] mt-16"
            src={personIcon}
            alt="icone representando pessoa"
          />
          <Image
            className="mb-8"
            src={doorIcon}
            alt="icone representando uma porta para sair"
          />
        </div>
        <div className="ml-[61px] mt-[47px] flex flex-col gap-[34px]">
          <section className="h-[164px] w-[485px] bg-black-black1"></section>
          <section className="h-[158px] w-[485px] bg-black-black1"></section>
          <section className="h-[277px] w-[485px] bg-black-black1"></section>
        </div>
        <div className="ml-[26px] mt-[47px]">
          <section className="h-[667px] w-[485px] bg-black-black1"></section>
        </div>
      </main>
    </div>
  );
};

export default Feed;
