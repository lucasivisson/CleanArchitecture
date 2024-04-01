import { type TUserRepository } from '../../../../src/2-business/contracts/repositories';

export const UserRepositoryOutput: TUserRepository = {
  name: 'teste',
  email: 'lucas@gmail.com',
  password: '312312323',
  phoneNumber: '31312312',
  birthDate: new Date('2000-01-01').toISOString(),
};
