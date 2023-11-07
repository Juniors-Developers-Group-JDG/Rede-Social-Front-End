import { User } from './User';

export interface Comment {
  id: string;
  user_id: string;
  post_id: string;
  content: string;
  created_at: Date;
  user: User;
  post: Post;
}

export interface Post {
  content: string;
  title: string;
  id: string;
  created_at: string;
  user: User;
  user_id: string;
  midia: string;
  likes: number;
  comments: Comment[];
}
