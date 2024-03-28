import { type IUserEntity } from '../../../../src/1-domain/entities';

export const FakeUserEntityInput: IUserEntity = {
  name: 'teste',
  email: 'lucas@gmail.com',
  password: '312312323',
  phoneNumber: '31312312',
  birthDate: new Date('2000-01-01').toISOString(),
};

export const FakeInvalidUserEntityInput: IUserEntity = {
  name: 'teste',
  email: 'teste',
  password: '312312323',
  phoneNumber: '31312312',
  birthDate: new Date('2000-01-01').toISOString(),
};
