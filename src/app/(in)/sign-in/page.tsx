import Link from 'next/link';
import React from 'react';
import { IoLogoGoogle } from 'react-icons/io5';
import { RiUserLine, RiLockPasswordLine } from 'react-icons/ri';

import Button from '@/components/Button';
import ImageLogin from '@/components/ImageLogin/page';
import Input from '@/components/Input';

const SignIn = () => {
  return (
    <div className="flex bg-jdg-bg">
      <ImageLogin />

      <div className="flex w-full flex-col lg:w-5/12">
        <div className="relative flex h-14 w-full items-center justify-center bg-jdg-text lg:hidden">
          <h1 className="absolute inset-x-0  text-center text-3xl font-semibold text-jdg-500">
            Welcome to Website
          </h1>
        </div>

        <form className="-mt-10 flex h-screen w-full flex-col items-center justify-center lg:mt-0 ">
          <h1 className="mb-2 text-2xl text-jdg-text">Login</h1>
          <Input
            placeholder={'Digite seu e-mail'}
            icon={<RiUserLine size={20} />}
          />
          <Input
            placeholder={'Digite sua senha'}
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
    </div>
  );
};

export default SignIn;
