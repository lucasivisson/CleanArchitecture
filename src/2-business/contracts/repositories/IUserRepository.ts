import { type User } from '../../../1-domain/entities';

export interface IUserRepository {
  create: (user: User) => Promise<{}>;
  update: (id: string) => Promise<{}>;
  show: (id: string) => Promise<{ user: User }>;
  index: () => Promise<{ users: User[] }>;
  delete: (id: string) => Promise<{}>;
}
