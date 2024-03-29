'use client';

import Image from 'next/image';
import Link from 'next/link';

import NotFoundImageWhite from '@/assets/not-found-image-white.svg';
import NotFoundImage from '@/assets/not-found-image.svg';

const NotFound = () => {
  return (
    <section className="flex h-screen  max-md:flex-col">
      <div className="flex w-4/6 flex-col justify-center text-center max-md:mt-0 max-md:w-full md:bg-blue-500">
        <div className="flex flex-col items-start justify-center">
          <div className="flex h-[70px] w-3/4 items-center justify-center rounded-r-[15px] bg-[#D9D9D9] max-lg:w-[90%] max-md:opacity-0">
            <h1 className="text-[32px] font-semibold text-blue-500 max-lg:text-[28px] max-md:text-[24px]">
              Welcome to Website
            </h1>
          </div>
          <div className="flex w-[85%] flex-col items-center max-lg:w-full">
            <div className="mt-8 w-[430px] text-start max-md:mb-[0.5em] max-md:flex max-md:h-28 max-md:w-full max-md:justify-center max-md:text-center">
              <p className="text-[32px] font-semibold leading-10  max-lg:text-[26px] max-md:w-3/4">
                Desculpe, infelizmente não temos essa página
              </p>
            </div>
            <Image
              src={NotFoundImage}
              alt="Sign Up Image"
              priority={true}
              className="max-md:hidden"
            />
            <Image
              src={NotFoundImageWhite}
              alt="Sign Up Image"
              priority={true}
              className="hidden max-md:absolute max-md:top-[32em] max-md:mb-8 max-md:flex max-md:h-[-webkit-fill-available] max-md:w-[85%] max-md:mix-blend-plus-lighter"
            />
          </div>
        </div>
      </div>
      <div className="min-md-h-screen flex w-[45em] flex-col justify-center max-md:w-full">
        <div className="flex flex-col items-center">
          <div className="w-[25em] max-lg:w-full max-md:hidden">
            <p className="md-[150px] mb-16 text-[32px] font-medium leading-10  max-lg:text-center max-lg:text-[28px]">
              Que tal acessar alguma dessas opções?
            </p>
          </div>
          <div className="flex flex-col ">
            <span className="mb-[.5em] text-[16px] font-normal leading-5">
              Caso tenha uma conta existente
            </span>
            <Link
              href="/sign-in"
              className="mb-[1.8em] h-[40px] w-[300px] rounded-[5px] bg-blue-500 p-[0.35em] text-center text-[20px] font-normal leading-6  transition-all hover:bg-[#1463B8] hover:text-[#EDF5FD]"
            >
              Login
            </Link>
            <span className="mb-[.5em] text-[16px] font-normal leading-5">
              Caso queira se registrar em nosso site
            </span>
            <Link
              href="/sign-up"
              className="mb-[1.8em] h-[40px] w-[300px] rounded-[5px] bg-blue-500 p-[0.35em] text-center text-[20px] font-normal leading-6  transition-all hover:bg-[#1463B8] hover:text-[#EDF5FD]"
            >
              Cadastrar
            </Link>
            <span className="mb-[.5em] text-[16px] font-normal leading-5">
              Caso queira recuperar sua conta
            </span>
            <Link
              href="/"
              className="mb-[1.8em] h-[40px] w-[300px] rounded-[5px] bg-blue-500 p-[0.35em] text-center text-[20px] font-normal leading-6  transition-all hover:bg-[#1463B8] hover:text-[#EDF5FD]"
            >
              Recuperar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
