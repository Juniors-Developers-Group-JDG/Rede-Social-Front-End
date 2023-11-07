export type Role = 'User' | 'Admin';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
  created_at: Date;
  roles: Role;
}
