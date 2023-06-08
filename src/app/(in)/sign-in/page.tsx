import Link from 'next/link';
import React from 'react';
import { RiUserLine, RiLockPasswordLine } from 'react-icons/ri';

const SignIn = () => {
  return (
    <div className="flex h-screen bg-jdg-bg">
      <div className="w-7/12 bg-jdg-200">imagem</div>
      <form className="flex w-5/12 flex-col items-center justify-center">
        <h1 className="mb-2 text-2xl text-jdg-text">Login</h1>
        <div className="my-3 flex items-center justify-center">
          <input
            className=" h-10 w-80 rounded-md bg-jdg-50 p-2 placeholder:text-left"
            placeholder="Digite seu e-mail"
          />
        </div>
        <div className="mb-1 mt-3 flex items-center justify-center">
          <input
            className=" h-10 w-80 rounded-md bg-jdg-50 p-2 placeholder:text-left"
            placeholder="Digite seu e-mail"
          />
        </div>
        <div className="mb-3 flex w-80 items-center justify-between">
          <Link href="/sign-up">
            <span className="text-sm text-jdg-text">Esqueceu a senha?</span>
          </Link>
          <Link href="/">
            <span className="text-sm text-jdg-text">Não tem conta?</span>
          </Link>
        </div>

        <button className=" h-10 w-80 rounded-md bg-jdg-50 bg-jdg-500 p-2 font-bold text-jdg-text">
          Entrar
        </button>

        <div className="inline-flex w-80 items-center justify-center">
          <hr className="my-8 h-px w-36 border-0 bg-gray-200 dark:bg-gray-700"></hr>
          <span className="mx-2 text-jdg-text">ou</span>
          <hr className="my-8 h-px w-36 border-0 bg-gray-200 dark:bg-gray-700"></hr>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
