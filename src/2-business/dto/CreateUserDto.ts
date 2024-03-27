import { type Either } from '../../1-domain/helpers/either';

export type InputCreateUserDto = {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  birthDate: string;
};

export type OutputCreateUserDto = Either<{}, Error>;
