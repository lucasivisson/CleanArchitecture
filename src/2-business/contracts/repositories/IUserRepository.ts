import { type UserEntity } from '../../../1-domain/entities';

export interface IUserRepository {
  create: (user: UserEntity) => Promise<{}>;
  update: (id: string) => Promise<{}>;
  show: (id: string) => Promise<{ user: UserEntity }>;
  index: () => Promise<{ users: UserEntity[] }>;
  delete: (id: string) => Promise<{}>;
}
