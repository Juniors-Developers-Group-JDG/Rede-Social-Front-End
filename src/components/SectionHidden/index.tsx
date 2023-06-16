import Image from 'next/image';

import userImg from '../../assets/avatar_placeholder.svg';
import chatBuble from '../../assets/chatBuble.svg';
import dotIcon from '../../assets/dot.svg';
import heartIcon from '../../assets/heart.svg';

function HiddenSection({ children }: React.HTMLProps<HTMLDivElement>) {
  return (
    <section className="hidden h-fit w-full border-b border-t border-blue-800 bg-black-900 pl-5 pr-7 pt-[11px] lg:block lg:border-none">
      <div className="flex flex-row">
        <div className="flex flex-row ">
          <Image
            className="h-[30px] w-[30px] rounded-full lg:h-[50px] lg:w-[50px]"
            src={userImg}
            width={50}
            height={50}
            alt="Foto do usuário"
          />
        </div>
        <div className="ml-[10px] mt-3 flex w-full flex-row justify-between lg:mt-4">
          <span className="flex flex-col">
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
          <div className="flex flex-row justify-center gap-2 self-start">
            <Image src={dotIcon} alt="ponto" />
            <p className="text-[10px] font-medium leading-3 lg:text-xs lg:leading-4">
              3 minutes
            </p>
          </div>
        </div>
      </div>
      <div className="mb-[13px] ml-[38px] mt-[10px] border-b border-t border-blue-800 lg:mb-[19px] lg:ml-12">
        {children}
      </div>

      <div className="mb-3 ml-9 mt-[9px] flex flex-row lg:ml-12 ">
        <Image src={heartIcon} alt="icone de coração" />
        <Image
          className="ml-10 mr-[5px]"
          src={chatBuble}
          alt="icone de balão de fala"
        />
        <span className="flex flex-row self-center text-[8px] font-medium leading-[10px] text-blue-50">
          Digite sua opinião
        </span>
      </div>
    </section>
  );
}

export default HiddenSection;
