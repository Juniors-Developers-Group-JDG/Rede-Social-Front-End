'use client';

import Link from 'next/link';
import { useState } from 'react';

const SignUp = () => {
  const [waitingCode] = useState(false);

  return (
    <>
      <div className="flex h-full w-full items-center justify-center px-8 md:flex-[2]">
        <div className="flex h-full flex-col items-center justify-center">
          <span className="mb-6 text-[2rem] font-medium leading-10">
            Cadastre-se
          </span>
          {waitingCode === false ? (
            <>
              <form className="flex flex-col items-center gap-y-4">
                <input
                  type="text"
                  className="h-[40px] w-[300px] rounded-[5px] bg-[#EDF5FD] px-6 text-center text-xl font-normal text-[#111011] placeholder:text-[#706F76] hover:bg-[#FFF]"
                  placeholder="Digite um nome de usuário"
                />
                <input
                  type="text"
                  className=" h-[40px] w-[300px] rounded-[5px] bg-[#EDF5FD] px-6 text-center text-xl font-normal text-[#111011] placeholder:text-[#706F76] hover:bg-[#FFF]"
                  placeholder="Digite seu telefone"
                />
                <input
                  type="text"
                  className=" h-[40px] w-[300px] rounded-[5px] bg-[#EDF5FD] px-6 text-center text-xl font-normal text-[#111011] placeholder:text-[#706F76] hover:bg-[#FFF]"
                  placeholder="Digite seu e-mail"
                />
                <input
                  type="text"
                  className=" h-[40px] w-[300px] rounded-[5px] bg-[#EDF5FD] px-6 text-center text-xl font-normal text-[#111011] placeholder:text-[#706F76] hover:bg-[#FFF]"
                  placeholder="Confirme seu e-mail"
                />
                <input
                  type="password"
                  className=" h-[40px] w-[300px] rounded-[5px] bg-[#EDF5FD] px-6 text-center text-xl font-normal text-[#111011] placeholder:text-[#706F76] hover:bg-[#FFF]"
                  placeholder="Digite sua senha"
                />
                <input
                  type="password"
                  className=" h-[40px] w-[300px] rounded-[5px] bg-[#EDF5FD] px-6 text-center text-xl font-normal text-[#111011] placeholder:text-[#706F76] hover:bg-[#FFF]"
                  placeholder="Confirme sua senha"
                />
                <input
                  type="submit"
                  className=" h-[40px] w-[300px] cursor-pointer rounded-[5px] bg-[#1877DC] text-xl font-normal transition-all hover:bg-[#1463B8]"
                  value="Cadastrar"
                />
              </form>
              <Link
                href="/login"
                className="mr-[60%]  transition-all hover:text-[#EDF5FD]"
              >
                Já tem conta?
              </Link>
            </>
          ) : (
            <>
              <p className='" max-lg:w3/4 mb-6 mt-36 w-[60%] text-[16px] font-medium leading-5'>
                Digite o código que enviamos para o seu e-mail cadastrado
              </p>
              <form className="flex flex-col">
                <input
                  type="text"
                  className="mt-[1.2em] h-[40px] w-[300px] rounded-[5px] bg-[#EDF5FD] px-6 text-center text-xl font-normal text-[#111011] placeholder:text-[#706F76] hover:bg-[#FFF]"
                  placeholder="Digite o código"
                />
                <input
                  type="submit"
                  className="mt-[1.2em] h-[40px] w-[300px] cursor-pointer rounded-[5px] bg-[#1877DC] text-xl font-normal transition-all hover:bg-[#1463B8]"
                  value="Verificar"
                />
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
