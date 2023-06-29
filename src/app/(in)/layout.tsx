import Image from 'next/image';
import { ReactNode } from 'react';

import SignUpImage from '@/assets/sign-up-image.svg';

interface InnerLayoutProps {
  children: ReactNode;
}

export default function InnerLayout({ children }: InnerLayoutProps) {
  return (
    <section className="flex h-screen max-md:flex-col">
      <div className="hidden flex-[3] flex-col items-stretch justify-center bg-[#1877DC] pr-10 md:flex 2xl:items-center 2xl:pr-0">
        <div className="flex h-[70px] w-full min-w-fit max-w-xl items-center justify-center rounded-r-[15px] bg-[#D9D9D9] px-4 2xl:rounded-[15px]">
          <h1 className="text-[1.75rem] font-semibold text-[#1877DC]  lg:text-[2rem]">
            Welcome to Website
          </h1>
        </div>
        <div className="mx-8 flex w-fit flex-col 2xl:mx-0">
          <div className="mt-8 max-w-md text-start">
            <p className="text-base font-normal leading-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &apos;Content here,
              content here&apos;, making it look like readable English.
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
      {children}
    </section>
  );
}
