'use server';

import { cookies } from 'next/headers';

const appName = 'rede-social';

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
  const cookieFullName = `${appName}.${key}`;

  // @ts-ignore
  cookies().set(cookieFullName, value, {
    maxAge: maxAgeInMs,
  });
};

type DeleteCookie = (key: string) => Promise<void>;

export const deleteCookie: DeleteCookie = async key => {
  const cookieFullName = `${appName}.${key}`;

  // @ts-ignore
  cookies().set(cookieFullName, '', {
    maxAge: 0,
  });
};

type GetCookie = (key: string) => Promise<string | undefined>;

export const getCookie: GetCookie = async key => {
  const cookieFullName = `${appName}.${key}`;

  return cookies().get(cookieFullName)?.value;
};
