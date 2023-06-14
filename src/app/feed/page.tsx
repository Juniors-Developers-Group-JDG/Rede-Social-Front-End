import Image from 'next/image';

import arrowLRIcon from '../../assets/arrowLR.svg';
import userImg from '../../assets/avatar_placeholder.svg';
import bellIcon from '../../assets/bell.svg';
import chatIcon from '../../assets/chat.svg';
import chatBuble from '../../assets/chatBuble.svg';
import doorIcon from '../../assets/door.svg';
import dotIcon from '../../assets/dot.svg';
import heartIcon from '../../assets/heart.svg';
import personIcon from '../../assets/personIcon.svg';
import pictureIcon from '../../assets/picture.svg';
import reactImg from '../../assets/react.png';
import searchIcon from '../../assets/search.svg';
import AutosizeTextarea from '../../components/TextArea';

const Feed = () => {
  return (
    <div>
      <header className="fixed flex h-16 w-screen flex-row justify-between bg-black-900">
        <div className="ml-44 flex">
          <Image src={searchIcon} alt="icone de lupa" />
          <input
            type="text"
            placeholder="Pesquisar"
            className="ml-3 mt-[21px] h-5 bg-transparent text-blue-500 placeholder-blue-500"
          />
        </div>
        <div className="mr-[89px] flex gap-16 border-l border-r border-blue-800 pl-11 pr-11">
          <Image src={bellIcon} alt="icone de sino" />
          <Image src={chatIcon} alt="icone de caixa de chat" />
        </div>
      </header>

      <aside className="fixed z-[-1] flex h-screen w-[94px] flex-col items-center justify-between bg-black-800">
        <Image
          className="mt-32"
          src={personIcon}
          alt="icone representando pessoa"
        />
        <Image
          className="mb-11"
          src={doorIcon}
          alt="icone representando uma porta para sair"
        />
      </aside>
      <main className="ml-[155px] flex flex-row">
        <div className="mt-[116px] flex flex-col gap-[34px]">
          <section className=" w-[485px] bg-black-900 pb-3">
            <div className="flex h-fit flex-col">
              <AutosizeTextarea></AutosizeTextarea>

              <div className="ml-5 mr-6 mt-10 flex flex-row justify-between">
                <div className="flex flex-row gap-6">
                  <Image
                    src={arrowLRIcon}
                    alt="setas para esquerda e direita"
                  />
                  <Image
                    src={pictureIcon}
                    alt="icone que representa uma imagem de paisagem"
                  />
                </div>
                <button className="flex h-9 w-[85px] flex-row justify-center rounded-[5px]  bg-blue-500 pt-1  text-2xl font-normal leading-6 text-blue-50">
                  Postar
                </button>
              </div>
            </div>
          </section>

          <section className="h-[158px] w-[485px] bg-black-900">
            <div className="flex flex-row">
              <Image
                className="ml-7 mt-4 h-[50px] w-[50px] rounded-full"
                src={userImg}
                width={50}
                height={50}
                alt="Foto do usuário"
              />
              <span className="ml-[10px] mt-6 flex flex-col">
                <div className="flex flex-row gap-1">
                  <p className="text-base font-medium leading-5">Edward Rell</p>
                  <span className="flex self-center text-xs font-medium leading-4">
                    @msFrontRell
                  </span>
                </div>
                <span className="text-xs font-light leading-4 text-blue-500">
                  Frontend Developer
                </span>
              </span>
              <div className="ml-[108px] mt-6 flex flex-row justify-center gap-2 self-start">
                <Image src={dotIcon} alt="ponto" />
                <p>3 minutes</p>
              </div>
            </div>
            <div className="ml-[87px] mr-10 border-b border-t border-blue-800">
              <p className="mb-[13px] mt-[10px] text-[13px] font-light leading-4 text-text-white">
                Eu estou adorando a nova atualização do react router dom.
              </p>
            </div>
            <div className="ml-[87px] mr-10 mt-3 flex flex-row">
              <Image src={heartIcon} alt="icone de coração" />
              <Image
                className="ml-10 mr-1"
                src={chatBuble}
                alt="icone de balão de fala"
              />
              <span className="flex flex-row self-center text-[8px] font-medium leading-[10px] text-blue-50">
                Digite sua opinião
              </span>
            </div>
          </section>
          <section className="h-fit w-[485px] bg-black-900 pb-4">
            <div className="flex flex-row">
              <Image
                className="ml-7 mt-4 h-[50px] w-[50px] rounded-full"
                src={userImg}
                width={50}
                height={50}
                alt="Foto do usuário"
              />
              <span className="ml-[10px] mt-6 flex flex-col">
                <div className="flex flex-row gap-1">
                  <p className="text-base font-medium leading-5">Edward Rell</p>
                  <span className="flex self-center text-xs font-medium leading-4">
                    @msFrontRell
                  </span>
                </div>
                <span className="text-xs font-light leading-4 text-blue-500">
                  Frontend Developer
                </span>
              </span>
              <div className="ml-[108px] mt-6 flex flex-row justify-center gap-2 self-start">
                <Image src={dotIcon} alt="ponto" />
                <p>3 minutes</p>
              </div>
            </div>
            <div className="ml-[87px] mr-10 border-b border-t border-blue-800">
              <p className="mb-[13px] mt-[10px] text-[13px] font-light leading-4 text-text-white">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum .
              </p>
            </div>
            <div className="ml-[87px] mr-10 mt-3 flex flex-row">
              <Image src={heartIcon} alt="icone de coração" />
              <Image
                className="ml-10 mr-1"
                src={chatBuble}
                alt="icone de balão de fala"
              />
              <span className="flex flex-row self-center text-[8px] font-medium leading-[10px] text-blue-50">
                Digite sua opinião
              </span>
            </div>
          </section>
        </div>
        <div className="ml-[26px] mt-[116px]">
          <section className="h-fit w-[485px] bg-black-900 pb-4">
            <div className="flex flex-row">
              <Image
                className="ml-7 mt-4 h-[50px] w-[50px] rounded-full"
                src={userImg}
                width={50}
                height={50}
                alt="Foto do usuário"
              />
              <span className="ml-[10px] mt-6 flex flex-col">
                <div className="flex flex-row gap-1">
                  <p className="text-base font-medium leading-5">Edward Rell</p>
                  <span className="flex self-center text-xs font-medium leading-4">
                    @msFrontRell
                  </span>
                </div>
                <span className="text-xs font-light leading-4 text-blue-500">
                  Frontend Developer
                </span>
              </span>
              <div className="ml-[108px] mt-6 flex flex-row justify-center gap-2 self-start">
                <Image src={dotIcon} alt="ponto" />
                <p>3 minutes</p>
              </div>
            </div>
            <div className="ml-[87px] mr-10 border-b border-t border-blue-800">
              <p className="mb-[13px] mt-[10px] text-[13px] font-light leading-4 text-text-white">
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum .
              </p>
              <Image
                src={reactImg}
                alt="foto com simbolo do react"
                className="mb-4"
              />
            </div>
            <div className="ml-[87px] mr-10 mt-3 flex flex-row">
              <Image src={heartIcon} alt="icone de coração" />
              <Image
                className="ml-10 mr-1"
                src={chatBuble}
                alt="icone de balão de fala"
              />
              <span className="flex flex-row self-center text-[8px] font-medium leading-[10px] text-blue-50">
                Digite sua opinião
              </span>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Feed;
