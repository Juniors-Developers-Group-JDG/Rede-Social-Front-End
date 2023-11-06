'use client';

import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Aside } from '../../../components/Aside';
import { Header } from '../../../components/Header';
import { Post } from '../../../components/Post';
import { PostArea } from '../../../components/PostArea';

interface postGet {
  id: string;
  content: string;
  created_at?: string;
}

const Feed = () => {
  const { push } = useRouter();
  const [posts, setPosts] = useState<postGet[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          'https://social-media-back-end.up.railway.app/posts',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          console.error('Erro ao obter postagens:', response.status);
        }
      } catch (error) {
        console.error('Erro ao obter postagens:', error);
      }
    }
    fetchPosts();

    const pollingInterval = 10 * 60 * 1000; // 5 minutos
    const intervalId = setInterval(fetchPosts, pollingInterval);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const userCookie = Cookies.get('user');
    if (!userCookie) {
      push('/sign-in');
    }
  }, []);

  return (
    <div className="flex max-h-screen min-h-screen flex-col lg:overflow-y-hidden">
      <Header onSearch={text => setSearchText(text)} />

      <div className="flex flex-1 items-stretch lg:overflow-y-hidden">
        <Aside />

        <main className="flex flex-1 flex-col gap-y-10 overflow-y-auto px-10 py-24 lg:ml-24 lg:flex-row lg:justify-start lg:gap-x-10 lg:px-10 lg:py-6">
          <section className="flex flex-col gap-y-10 lg:gap-y-9">
            <PostArea />
            {posts &&
              posts
                .filter(posts =>
                  posts.content
                    .toLowerCase()
                    .includes(searchText.toLowerCase()),
                )
                .map(post => (
                  <Post
                    key={String(post.id)}
                    author={{ handle: '@johndoe01', name: 'John Doe' }}
                    content={<p>{post.content}</p>}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    timePostedUtcTimestamp={Date.parse(post.created_at!)}
                  />
                ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Feed;
