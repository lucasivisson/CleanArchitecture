import { type UserEntityInput } from '../../../../src/1-domain/entities';

export const FakeUserEntityInput: UserEntityInput = {
  name: 'teste',
  email: 'lucas@gmail.com',
  password: '312312323',
  phoneNumber: '31312312',
  birthDate: new Date('2000-01-01').toISOString(),
};

export const FakeInvalidUserEntityInput: UserEntityInput = {
  name: 'teste',
  email: 'teste',
  password: '312312323',
  phoneNumber: '31312312',
  birthDate: new Date('2000-01-01').toISOString(),
};
