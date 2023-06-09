import Link from 'next/link';
import React from 'react';
import { IoLogoGoogle } from 'react-icons/io5';
import { RiUserLine, RiLockPasswordLine } from 'react-icons/ri';

import Button from '@/components/Button';
import Input from '@/components/Input';

const SignIn = () => {
  return (
    <div className="flex h-screen bg-jdg-bg">
      <div className="w-7/12 bg-jdg-200">imagem</div>
      <form className="flex w-5/12 flex-col items-center justify-center">
        <h1 className="mb-2 text-2xl text-jdg-text">Login</h1>
        <Input
          placeholder={'Digite seu e-mail'}
          icon={<RiUserLine size={20} />}
        />
        <Input
          placeholder={'Digite seu e-mail'}
          icon={<RiLockPasswordLine size={20} />}
        />
        <div className="mb-3 flex w-80 items-center justify-between">
          <Link href="/sign-up">
            <span className="text-sm text-jdg-text">Esqueceu a senha?</span>
          </Link>
          <Link href="/">
            <span className="text-sm text-jdg-text">Não tem conta?</span>
          </Link>
        </div>

        <Button text={'Entrar'} />

        <div className="my-3 inline-flex w-80 items-center justify-center">
          <hr className="my-8 h-px w-36 border-0 bg-jdg-500 "></hr>
          <span className="mx-2 text-sm text-jdg-text">ou</span>
          <hr className="my-8 h-px w-36 border-0 bg-jdg-500 "></hr>
        </div>

        <Button
          text={'Entrar com o Google'}
          icon={<IoLogoGoogle size={20} />}
        />
      </form>
    </div>
  );
};

export default SignIn;
