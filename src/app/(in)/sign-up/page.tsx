'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import SignUpImage from '@/assets/sign-up-image.svg';

const SignUp = () => {
  const [waitingCode, setWaitingCode] = useState(true);

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
            <p className="text-base font-normal leading-5">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using &apos;Content here,
              content here&apos;, making it look like readable English.
            </p>
          </div>
          <Image src={SignUpImage} alt="Sign Up Image" className="ml-[20%]" />
        </div>
      </div>
      <div className="flex w-[45%] flex-col bg-[#151819]">
        <span className="mb-6 ml-[36%] mt-28 text-[32px] font-medium leading-10 text-[#D9D9D9]">
          Cadastre-se
        </span>
        {waitingCode === false ? (
          <>
            <form className="ml-12 flex flex-col">
              <input
                type="text"
                className="input ml-[25%] mt-[1.2em] bg-[#EDF5FD] px-6 text-center text-xl font-normal text-[#111011] placeholder:text-[#706F76] hover:bg-[#FFF]"
                placeholder="Digite um nome de usuário"
              />
              <input
                type="text"
                className="input ml-[25%] mt-[1.2em] bg-[#EDF5FD] px-6 text-center text-xl font-normal text-[#111011] placeholder:text-[#706F76] hover:bg-[#FFF]"
                placeholder="Digite seu telefone"
              />
              <input
                type="text"
                className="input ml-[25%] mt-[1.2em] bg-[#EDF5FD] px-6 text-center text-xl font-normal text-[#111011] placeholder:text-[#706F76] hover:bg-[#FFF]"
                placeholder="Digite seu e-mail"
              />
              <input
                type="text"
                className="input ml-[25%] mt-[1.2em] bg-[#EDF5FD] px-6 text-center text-xl font-normal text-[#111011] placeholder:text-[#706F76] hover:bg-[#FFF]"
                placeholder="Confirme seu e-mail"
              />
              <input
                type="password"
                className="input ml-[25%] mt-[1.2em] bg-[#EDF5FD] px-6 text-center text-xl font-normal text-[#111011] placeholder:text-[#706F76] hover:bg-[#FFF]"
                placeholder="Digite sua senha"
              />
              <input
                type="password"
                className="input ml-[25%] mt-[1.2em] bg-[#EDF5FD] px-6 text-center text-xl font-normal text-[#111011] placeholder:text-[#706F76] hover:bg-[#FFF]"
                placeholder="Confirme sua senha"
              />
              <input
                type="submit"
                className="input ml-[25%] mt-[1.2em] cursor-pointer bg-[#1877DC] text-xl font-normal transition-all hover:bg-[#1463B8]"
                value="Cadastrar"
              />
            </form>
            <Link
              href="/login"
              className="ml-56 mt-[1.2em] text-[#D9D9D9] transition-all hover:text-[#EDF5FD]"
            >
              Já tem conta?
            </Link>
          </>
        ) : (
          <>
            <p className='text-[#D9D9D9]" mb-6 ml-[10em] mt-36 w-[60%] text-[16px] font-medium leading-5'>
              Digite o código que enviamos para o seu e-mail cadastrado
            </p>
            <form className="ml-12 flex flex-col">
              <input
                type="text"
                className="input ml-[25%] mt-[1.2em] bg-[#EDF5FD] px-6 text-center text-xl font-normal text-[#111011] placeholder:text-[#706F76] hover:bg-[#FFF]"
                placeholder="Digite o código"
              />
              <input
                type="submit"
                className="input ml-[25%] mt-[1.2em] cursor-pointer bg-[#1877DC] text-xl font-normal transition-all hover:bg-[#1463B8]"
                value="Verificar"
              />
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default SignUp;
