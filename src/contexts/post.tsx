'use client';

import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';

import { useToasts } from '@/hooks/useToast';
import { Post } from '@/types/Post';

interface postContextData {
  posts: Post[];
  setPostQuery: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

export const postContext = createContext<postContextData>(
  {} as postContextData,
);

interface PostProviderProps {
  children: ReactNode;
}

export function PostProvider({ children }: PostProviderProps) {
  const { addToast } = useToasts();

  const [originalPosts, setOriginalPosts] = useState<Post[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const [postQuery, setPostQuery] = useState('');

  const filteredPosts = useMemo(() => {
    if (postQuery === '' || originalPosts.length === 0) return [];

    const postQueryLowerCase = postQuery.toLowerCase();

    const filtered = originalPosts.filter(post => {
      return post.content.toLowerCase().includes(postQueryLowerCase);
    });

    return filtered;
  }, [originalPosts, postQuery]);

  const posts = useMemo(
    () => (postQuery.length > 0 ? filteredPosts : originalPosts),
    [postQuery, filteredPosts, originalPosts],
  );

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res =>
        res.json().then(data => {
          setOriginalPosts(data);
          setIsLoading(false);
        }),
      )
      .catch(err => {
        addToast({
          title: 'Erro ao carregar os posts!',
          type: 'error',
        });
        console.error({ err });
        setIsLoading(false);
      });
  }, [addToast]);

  return (
    <postContext.Provider
      value={{
        isLoading,
        posts,
        setPostQuery,
      }}
    >
      {children}
    </postContext.Provider>
  );
}
