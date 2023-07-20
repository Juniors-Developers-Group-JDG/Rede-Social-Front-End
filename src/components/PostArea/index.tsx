'use client';

import { useState, useContext } from 'react';

import { toastsContext } from '@/contexts/toasts';

import { Code, ImageSquare } from '../../components/PhosphorIcons';
import AutosizeTextarea from './TextArea';

export function PostArea() {
  const context = useContext(toastsContext);
  const [postText, setPostText] = useState('');

  async function handlePost() {
    if (!postText) {
      return;
    }
    const postData = {
      title: 'testando set vazio do post com value agora vai',
      content: postText,
      midia: 'string',
      user_id: 'bb39c108-89bd-44fb-b164-c2a562fc1d76',
      likes: 0,
    };

    try {
      const response = await fetch(
        'https://back-social-media-production.up.railway.app/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        },
      );

      if (response.ok) {
        setPostText('');
        context.addToast({
          title: 'Post enviado com sucesso!',
          type: 'success',
          durationInMs: 5000,
          closeButton: true,
          content: 'Parabéns por postar',
        });
        setTimeout(() => {
          window.location.reload();
        }, 5000);
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
            <Code className="h-6 w-6" />
            <ImageSquare className="h-6 w-6" />
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
