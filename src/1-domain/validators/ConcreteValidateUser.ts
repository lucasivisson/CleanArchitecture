import { IsDateString, IsEmail, IsString, type ValidationError, validateOrReject } from 'class-validator';
import { type UserEntity } from '../entities';
import { EntityError } from '../errors/EntityError';
import { type IValidatorStrategy } from './IValidatorStrategy';
import { type Either } from '../helpers/either';

export class ConcreteValidateUser implements IValidatorStrategy<UserEntity> {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  phoneNumber: string;

  @IsDateString()
  birthDate: string;

  public async validateFields(input: UserEntity): Promise<Either<EntityError, null>> {
    try {
      await validateOrReject(input);
      return null;
    } catch (error) {
      const errors = error as ValidationError;
      throw new EntityError(errors);
    }
  }
}
