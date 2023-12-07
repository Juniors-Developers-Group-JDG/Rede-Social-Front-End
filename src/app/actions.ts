'use server';

import { cookies } from 'next/headers';

const appName = 'rede-social'; // Nome da aplicação, vai ser usado no começo do nome de qualquer cookie. Isso é necessário para evitar conflito com cookies criados por outras aplicações porém com o mesmo nome.

type CreateCookie = (
  key: string,
  value: string,
  maxAgeInMs?: number,
) => Promise<void>;

export const createCookie: CreateCookie = async (
  key,
  value,
  maxAgeInMs = 60 * 60 * 12, // 1 hour
) => {
  const cookieFullName = `${appName}.${key}`; // Junção do nome da aplicação com a "chave" passada para a função de criar cookie

  cookies().set(cookieFullName, value, {
    maxAge: maxAgeInMs,
  }); // Criação do cookie a partir do method set() da classe cookies do next/headers
};

type DeleteCookie = (key: string) => Promise<void>;

export const deleteCookie: DeleteCookie = async key => {
  const cookieFullName = `${appName}.${key}`; // Junção do nome da aplicação com a "chave" passada para a função de criar cookie

  cookies().set(cookieFullName, '', {
    maxAge: 0,
  }); // Delete do cookie a partir do method set() da classe cookies do next/headers com maxAge de 0
};

type GetCookie = (key: string) => Promise<string | undefined>;

export const getCookie: GetCookie = async key => {
  const cookieFullName = `${appName}.${key}`; // Junção do nome da aplicação com a "chave" passada para a função de criar cookie

  return cookies().get(cookieFullName)?.value; // Aquisição do cookie a partir do method get() da classe cookies do next/headers
};
