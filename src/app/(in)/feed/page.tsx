'use client';

import { Post } from '@/components/Post';
import { usePost } from '@/hooks/usePost';

export default async function Feed() {
  const { posts } = usePost();

  return (
    <>
      {posts.map(({ id, content, created_at, user: { name, email } }) => (
        <Post
          key={id}
          author={{ handle: email, name }}
          content={<p>{content}</p>}
          timePostedUtcTimestamp={Date.parse(created_at)}
        />
      ))}
    </>
  );
}
