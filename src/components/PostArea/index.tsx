'use client';

import { useContext, useState } from 'react';

import { getCookie } from '@/app/actions';
import { toastsContext } from '@/contexts/toasts';
import { usePost } from '@/hooks/usePost';

import { Code, ImageSquare } from '../../components/PhosphorIcons';
import AutosizeTextarea from './TextArea';

export function PostArea() {
  const context = useContext(toastsContext);
  const [postText, setPostText] = useState('');
  const { refetch } = usePost();

  function handleAlert() {
    alert('Aguarde novas funcionalidades em futuras versoes');
  }

  async function handlePost() {
    if (!postText) {
      return;
    }

    const user_id = await getCookie('id');

    const postData = {
      title: 'title',
      content: postText,
      user_id,
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        setPostText('');
        context.addToast({
          title: 'Post enviado com sucesso!',
          type: 'success',
          durationInMs: 5000,
          closeButton: true,
          content: 'Parabéns por postar',
        });
        await refetch();
      } else {
        context.addToast({
          title: 'Erro ao enviar o post!',
          type: 'error',
          durationInMs: 5000,
          closeButton: true,
          content: 'Tente novamente',
        });
      }
    } catch (error) {
      context.addToast({
        title: 'Erro ao enviar o post!',
        type: 'error',
        durationInMs: 5000,
        closeButton: true,
        content: 'Tente novamente',
      });
    }
  }

  return (
    <section className="h-fit w-full rounded-md bg-black-900 pb-3 lg:w-[40vw] lg:border-none">
      <div className="flex h-fit flex-col">
        <AutosizeTextarea value={postText} setPostText={setPostText} />

        <div className="ml-5 mr-6 mt-10 flex flex-row justify-between">
          <div className="flex items-center gap-6">
            <Code onClick={handleAlert} className="h-6 w-6 cursor-pointer" />
            <ImageSquare
              onClick={handleAlert}
              className="h-6 w-6 cursor-pointer"
            />
          </div>
          <button
            onClick={handlePost}
            className="flex h-9 w-[85px] flex-row justify-center rounded-[5px]  bg-blue-500 pt-1  text-2xl font-normal leading-6 text-blue-50"
          >
            Postar
          </button>
        </div>
      </div>
    </section>
  );
}
