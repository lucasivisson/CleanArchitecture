import { IsDateString, IsEmail, IsString, type ValidationError, validateOrReject } from 'class-validator';
import { type UserEntity } from '../entities';
import { EntityError } from '../errors/EntityError';
import { type IValidatorStrategy } from './IValidatorStrategy';

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

  public async validateFields(input: UserEntity): Promise<EntityError | null> {
    try {
      await validateOrReject(input);
      return null;
    } catch (error) {
      const errors = error as ValidationError;
      throw new EntityError(errors);
    }
  }
}
