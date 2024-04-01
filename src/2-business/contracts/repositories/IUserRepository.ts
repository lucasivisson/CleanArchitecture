import { type TUserEntity } from '../../../1-domain/entities';
import { type Either } from '../../../1-domain/helpers/either';

export type TUserRepository = TUserEntity;

export interface IUserRepository {
  create: (user: TUserEntity) => Promise<Either<TUserRepository, Error>>;
  update: (id: string) => Promise<Either<TUserRepository, Error>>;
  show: (id: string) => Promise<Either<TUserRepository, Error>>;
  index: () => Promise<Either<TUserRepository[], Error>>;
  delete: (id: string) => Promise<Either<{}, Error>>;
}
