import Image from 'next/image';
import { ReactNode } from 'react';

import SignUpImage from '@/assets/sign-up-image.svg';

interface InnerLayoutProps {
  children: ReactNode;
}

export default function InnerLayout({ children }: InnerLayoutProps) {
  return (
    <>
      <section className="flex h-screen bg-[#1877DC] max-md:flex-col">
        <div className="mt-36 w-4/6 text-center max-md:hidden">
          <div className="relative flex flex-col items-start justify-center">
            <div className="flex h-[70px] w-3/4 items-center justify-center rounded-r-[15px] bg-[#D9D9D9]">
              <h1 className="text-[32px] font-semibold text-[#1877DC] max-lg:text-[28px]">
                Welcome to Website
              </h1>
            </div>
            <div className="absolute left-[5%] top-[100%] flex w-3/4 flex-col items-center">
              <div className="mt-8 h-52 w-[430px] text-start max-lg:w-full">
                <p className="text-[16px] font-normal leading-5">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using
                  &apos;Content here, content here&apos;, making it look like
                  readable English.
                </p>
              </div>
              <Image src={SignUpImage} alt="Sign Up Image" priority={true} />
            </div>
          </div>
        </div>
        {children}
      </section>
    </>
  );
}
