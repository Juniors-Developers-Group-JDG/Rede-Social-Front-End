import Image from 'next/image';
import { ReactNode } from 'react';

import SignUpImage from '@/assets/sign-up-image.svg';

interface InnerLayoutProps {
  children: ReactNode;
}

export default function InnerLayout({ children }: InnerLayoutProps) {
  return (
    <section className="flex h-screen max-md:flex-col">
      <div className="hidden flex-[3] flex-col items-start justify-center bg-[#1877DC] pr-4 text-center md:flex 2xl:items-center">
        <div className="flex h-[70px] w-3/4 min-w-fit max-w-xl items-center justify-center rounded-r-[15px] bg-[#D9D9D9] px-4 2xl:rounded-[15px]">
          <h1 className="text-[2rem] font-semibold text-[#1877DC]  max-lg:text-[1.75rem]">
            Welcome to Website
          </h1>
        </div>
        <div className="ml-8 flex flex-col">
          <div className="mt-8 max-w-md text-start">
            <p className="text-base font-normal leading-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &apos;Content here,
              content here&apos;, making it look like readable English.
            </p>
          </div>
          <Image
            src={SignUpImage}
            alt="Sign Up Image"
            className="mt-7"
            priority={true}
          />
        </div>
      </div>
      {children}
    </section>
  );
}
