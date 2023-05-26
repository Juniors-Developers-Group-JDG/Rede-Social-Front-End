'use client';

import Image from 'next/image';
import Link from 'next/link';

import NotFoundImage from '@/assets/not-found-image.svg';

const NotFound = () => {
  return (
    <section className="flex h-screen bg-[#1877DC]">
      <div className="mt-36 w-4/6 text-center">
        <div className="flex h-[70px] w-3/4 items-center justify-center rounded-r-[15px] bg-[#D9D9D9]">
          <h1 className="text-[32px] font-semibold text-[#1877DC]">
            Welcome to Website
          </h1>
        </div>
        <div className="w-3/4">
          <div className="ml-[22%] mt-8 h-52 w-[430px] text-start">
            <p className="text-[32px] font-semibold leading-10 text-[#D9D9D9]">
              Desculpe, infelizmente não temos essa página
            </p>
          </div>
          <Image
            src={NotFoundImage}
            alt="Sign Up Image"
            className="ml-[20%] w-[70%]"
          />
        </div>
      </div>
      <div className="flex w-[45%] flex-col bg-[#151819]">
        <p className="mb-16 ml-[140px] mt-[150px] text-[32px] font-medium leading-10 text-[#D9D9D9]">
          Que tal acessar alguma dessas opções?
        </p>
        <span className="mb-[.5em] ml-[22%] text-[16px] font-normal leading-5">
          Caso tenha uma conta existente
        </span>
        <Link
          href="/sign-in"
          className="input mb-[1.8em] ml-[7.8em] bg-[#1877DC] p-[0.35em] text-center text-[20px] font-normal leading-6 text-[#D9D9D9] transition-all transition-all hover:bg-[#1463B8] hover:text-[#EDF5FD]"
        >
          Login
        </Link>
        <span className="mb-[.5em] ml-[22%] text-[16px] font-normal leading-5">
          Caso queira se registrar em nosso site
        </span>
        <Link
          href="/sign-up"
          className="input mb-[1.8em] ml-[7.8em] bg-[#1877DC] p-[0.35em] text-center text-[20px] font-normal leading-6 text-[#D9D9D9] transition-all transition-all hover:bg-[#1463B8] hover:text-[#EDF5FD]"
        >
          Cadastrar
        </Link>
        <span className="mb-[.5em] ml-[22%] text-[16px] font-normal leading-5">
          Caso queira recuperar sua conta
        </span>
        <Link
          href="/"
          className="input mb-[1.8em] ml-[7.8em] bg-[#1877DC] p-[0.35em] text-center text-[20px] font-normal leading-6 text-[#D9D9D9] transition-all transition-all hover:bg-[#1463B8] hover:text-[#EDF5FD]"
        >
          Recuperar
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
