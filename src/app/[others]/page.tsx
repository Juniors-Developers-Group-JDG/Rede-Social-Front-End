'use client';

import Image from 'next/image';
import Link from 'next/link';

import NotFoundImage from '@/assets/not-found-image.svg';

const NotFound = () => {
  return (
    <section className="flex h-screen bg-[#1877DC]">
      <div className="mt-36 w-4/6 text-center">
        <div className="flex flex-col items-start justify-center">
          <div className="flex h-[70px] w-3/4 items-center justify-center rounded-r-[15px] bg-[#D9D9D9]">
            <h1 className="text-[32px] font-semibold text-[#1877DC]">
              Welcome to Website
            </h1>
          </div>
          <div className="flex w-3/4 flex-col items-center">
            <div className="mt-8 h-52 w-[430px] text-start">
              <p className="text-[32px] font-semibold leading-10 text-[#D9D9D9]">
                Desculpe, infelizmente não temos essa página
              </p>
            </div>
            <Image src={NotFoundImage} alt="Sign Up Image" priority={true} />
          </div>
        </div>
      </div>
      <div className="flex w-[45em] flex-col bg-[#151819]">
        <div className="flex flex-col items-center">
          <div className="w-[25em]">
            <p className="mb-16 mt-[150px] text-[32px] font-medium leading-10 text-[#D9D9D9]">
              Que tal acessar alguma dessas opções?
            </p>
          </div>
          <div className="flex flex-col ">
            <span className="mb-[.5em] text-[16px] font-normal leading-5">
              Caso tenha uma conta existente
            </span>
            <Link
              href="/sign-in"
              className="mb-[1.8em] h-[40px] w-[300px] rounded-[5px] bg-[#1877DC] p-[0.35em] text-center text-[20px] font-normal leading-6 text-[#D9D9D9] transition-all hover:bg-[#1463B8] hover:text-[#EDF5FD]"
            >
              Login
            </Link>
            <span className="mb-[.5em] text-[16px] font-normal leading-5">
              Caso queira se registrar em nosso site
            </span>
            <Link
              href="/sign-up"
              className="mb-[1.8em] h-[40px] w-[300px] rounded-[5px] bg-[#1877DC] p-[0.35em] text-center text-[20px] font-normal leading-6 text-[#D9D9D9] transition-all hover:bg-[#1463B8] hover:text-[#EDF5FD]"
            >
              Cadastrar
            </Link>
            <span className="mb-[.5em] text-[16px] font-normal leading-5">
              Caso queira recuperar sua conta
            </span>
            <Link
              href="/"
              className="mb-[1.8em] h-[40px] w-[300px] rounded-[5px] bg-[#1877DC] p-[0.35em] text-center text-[20px] font-normal leading-6 text-[#D9D9D9] transition-all hover:bg-[#1463B8] hover:text-[#EDF5FD]"
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
