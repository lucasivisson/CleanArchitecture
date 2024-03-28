import { type IUserEntity } from '../../../1-domain/entities';

export interface IUserRepository {
  create: (user: IUserEntity) => Promise<{}>;
  update: (id: string) => Promise<{}>;
  show: (id: string) => Promise<{ user: IUserEntity }>;
  index: () => Promise<{ users: IUserEntity[] }>;
  delete: (id: string) => Promise<{}>;
}
