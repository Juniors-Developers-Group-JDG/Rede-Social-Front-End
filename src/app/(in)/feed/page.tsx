'use client';

import { Post } from '@/components/Post';
import { usePost } from '@/hooks/usePost';

export default function Feed() {
  const { posts, isLoading } = usePost();

  return (
    <>
      {isLoading ? (
        <p>Carregando os posts...</p>
      ) : (
        posts.map(({ id, content, created_at, user_id }) => (
          <Post
            key={id}
            content={<p>{content}</p>}
            userId={user_id}
            timePostedUtcTimestamp={Date.parse(created_at)}
          />
        ))
      )}
    </>
  );
}
