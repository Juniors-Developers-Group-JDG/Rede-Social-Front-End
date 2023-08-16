import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { createCookie } from '@/app/actions';
import { auth } from '@/config/firebase';

const useGoogleLogin = () => {
  const { push } = useRouter();
  const [error, setError] = useState<string | null>(null); // Adicionei o tipo string para o erro

  const provider = new GoogleAuthProvider();

  const googleLogin = async () => {
    setError(null);

    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);

      if (res.user && res.user.email) {
        await createCookie('email', res.user.email);
      }

      push('/feed');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Erro desconhecido');
      }
    }
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('Deslogado com sucesso');
      })
      .catch(err => {
        if (err instanceof Error) {
          console.log(err.message);
        } else {
          console.log('Erro desconhecido');
        }
      });
  };

  return { error, googleLogin, logout };
};

export default useGoogleLogin;
