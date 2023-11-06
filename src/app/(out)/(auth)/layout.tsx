import Image from 'next/image';
import { ReactNode } from 'react';

import SignUpImage from '@/assets/sign-up-image.svg';

interface InnerLayoutProps {
  children: ReactNode;
}

export default function InnerAuthLayout({ children }: InnerLayoutProps) {
  return (
    <section className="flex h-screen max-md:flex-col">
      <div className="hidden flex-[3] flex-col justify-center bg-blue-500 pr-10 md:flex 2xl:items-center 2xl:pr-0">
        <div className="flex w-full max-w-xl flex-col items-center">
          <div className="flex h-[70px] w-full min-w-fit  items-center justify-center rounded-r-[15px] bg-component-bg px-4 2xl:rounded-[15px]">
            <h1 className="text-[1.75rem] font-semibold text-blue-500 lg:text-[2rem]">
              TechSphere diz olá a você 👋
            </h1>
          </div>
          <div className="mx-8 flex flex-col 2xl:mx-0">
            <div className="mt-8 max-w-md text-start">
              <p className="text-base font-normal leading-5">
                TechSphere é uma rede social inovadora focada em comunidades da
                área de tecnologia. Ela serve como um hub para profissionais,
                entusiastas e estudantes de tecnologia se conectarem,
                compartilharem ideias e colaborarem em projetos.
              </p>
            </div>
            <div className="mt-7 w-full pr-12 ">
              <Image
                src={SignUpImage}
                alt="Sign Up Image"
                className="w-full max-w-md "
                width={448}
                height={299.797}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}
