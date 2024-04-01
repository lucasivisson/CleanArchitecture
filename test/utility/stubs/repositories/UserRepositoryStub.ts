import { type TUserEntity } from '../../../../src/1-domain/entities';
import { type TUserRepository, type IUserRepository } from '../../../../src/2-business/contracts/repositories';
import { UserRepositoryOutput } from '../../dummies/repositories/UserRepositoryDummy';

export const makeUserRepository = (): IUserRepository => {
  class UserRepositoryStub implements IUserRepository {
    async create(user: TUserEntity): Promise<TUserRepository> {
      return await new Promise((resolve) => {
        resolve(UserRepositoryOutput);
      });
    }

    async update(id: string): Promise<TUserRepository> {
      return await new Promise((resolve) => {
        resolve(UserRepositoryOutput);
      });
    }

    async show(id: string): Promise<TUserRepository> {
      return await new Promise((resolve) => {
        resolve(UserRepositoryOutput);
      });
    }

    async index(): Promise<TUserRepository[]> {
      return await new Promise((resolve) => {
        resolve([UserRepositoryOutput]);
      });
    }

    async delete(id: string): Promise<{}> {
      return await new Promise((resolve) => {
        resolve({});
      });
    }
  }
  return new UserRepositoryStub();
};
