import Link from 'next/link';
import { IoLogoGoogle } from 'react-icons/io5';
import { RiLockPasswordLine, RiUserLine } from 'react-icons/ri';

import { Button } from '../Button';
import { Input } from '../Input';

export const FormLogin = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center px-8 md:flex-[2]">
      <form className="flex w-full max-w-xs flex-col items-center">
        <h1 className="mb-2 text-2xl">Login</h1>
        <Input
          placeholder="Digite seu e-mail"
          icon={<RiUserLine size={20} />}
          className="mb-4"
        />
        <Input
          placeholder="Digite sua senha"
          icon={<RiLockPasswordLine size={20} />}
        />
        <div className="mb-3 flex w-full items-center justify-between gap-4 text-center">
          <Link href="/sign-up">
            <span className="text-sm">Esqueceu a senha?</span>
          </Link>
          <Link href="/">
            <span className="text-sm">Não tem conta?</span>
          </Link>
        </div>

        <Button text="Entrar" />

        <div className="my-3 inline-flex w-full items-center justify-center">
          <hr className="my-8 h-px w-full border-0 bg-blue-500"></hr>
          <span className="mx-2 text-sm">ou</span>
          <hr className="my-8 h-px w-full border-0 bg-blue-500"></hr>
        </div>

        <Button text="Entrar com o Google" icon={<IoLogoGoogle size={20} />} />
      </form>
    </div>
  );
};
