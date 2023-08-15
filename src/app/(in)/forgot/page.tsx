import Link from 'next/link';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Lock } from '@/components/PhosphorIcons';

export default function ForgotPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <main className="flex min-h-screen max-w-[230px] flex-col items-center justify-center md:max-w-[400px]">
        <section className="mb-4 rounded-full border-[3px] border-white p-8 md:border-[6px] md:p-14">
          <Lock
            className="h-14 w-14 leading-none text-blue-500 md:h-28 md:w-28"
            weight="bold"
          />
        </section>
        <section className="flex flex-col items-center">
          <h1 className="mb-4 text-xl md:text-2xl md:font-medium">
            Esqueceu a sua senha?
          </h1>
          <p className="mb-4 text-center text-xs md:text-2xl">
            Insira o seu nome de usuário ou email para enviarmos o link de
            redefinição de senha.
          </p>
          <Input
            className="mb-4 w-fit px-2 py-7 text-xl"
            placeholder="Email ou nome de usuário"
          />
          <Button className="mb-4 w-full px-3 py-6 font-normal md:w-fit md:text-xl">
            Enviar link para o login
          </Button>
          <Link
            href="/sign-in"
            className="text-[0.625rem] underline decoration-white/60 md:text-base"
          >
            Lembrei a senha
          </Link>
        </section>
      </main>
    </div>
  );
}
