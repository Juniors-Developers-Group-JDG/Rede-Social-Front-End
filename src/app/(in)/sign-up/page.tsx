'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Input } from '@/components/Input';

const SignUp = () => {
  const [waitingCode] = useState(true);

  return (
    <>
      <div className="flex h-full w-full items-center justify-center px-8 md:flex-[2]">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <span className="mb-6 text-[2rem] font-medium leading-10">
            Cadastre-se
          </span>
          {waitingCode === false ? (
            <div className="flex w-full max-w-xs flex-col items-center justify-center">
              <form className="mb-4 flex w-full flex-col items-center gap-y-4">
                <Input
                  textCentered={true}
                  type="text"
                  placeholder="Digite um nome de usuário"
                />
                <Input
                  textCentered={true}
                  type="text"
                  placeholder="Digite seu telefone"
                />
                <Input
                  textCentered={true}
                  type="text"
                  placeholder="Digite seu e-mail"
                />
                <Input
                  textCentered={true}
                  type="text"
                  placeholder="Confirme seu e-mail"
                />
                <Input
                  textCentered={true}
                  type="password"
                  placeholder="Digite sua senha"
                />
                <Input
                  textCentered={true}
                  type="password"
                  placeholder="Confirme sua senha"
                />
                <Input textCentered={true} type="submit" value="Cadastrar" />
              </form>
              <Link
                href="/login"
                className="ml-4 self-start transition-all hover:text-[#EDF5FD]"
              >
                Já tem conta?
              </Link>
            </div>
          ) : (
            <div className="flex w-full max-w-lg flex-col items-center justify-center">
              <p className="mb-6 mt-36 w-full self-center text-center font-medium">
                Digite o código que enviamos para o seu e-mail cadastrado
              </p>
              <form className="flex flex-col">
                <Input
                  type="text"
                  textCentered
                  className="mt-12 w-full max-w-[18.75rem] text-lg"
                  placeholder="Digite o código"
                />
                <input
                  type="submit"
                  className="mt-[1.2em] h-[40px] w-[300px] cursor-pointer rounded-[5px] bg-[#1877DC] text-xl font-normal transition-all hover:bg-[#1463B8]"
                  value="Verificar"
                />
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
