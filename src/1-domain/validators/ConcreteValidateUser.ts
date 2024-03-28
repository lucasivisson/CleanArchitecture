import { IsDateString, IsEmail, IsString, validateSync } from 'class-validator';
import { type IUserEntity } from '../entities';
import { EntityValidationError } from '../errors/EntityValidationError';
import { type IValidatorStrategy } from './IValidatorStrategy';
import { type Either } from '../helpers/either';
import 'reflect-metadata';

export class ConcreteValidateUser implements IValidatorStrategy {
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

  constructor(props: IUserEntity) {
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.phoneNumber = props.phoneNumber;
    this.birthDate = props.birthDate;
  }

  public validateFields(): Either<EntityValidationError, null> {
    const errors = validateSync(this);
    if (errors && errors.length > 0) {
      throw new EntityValidationError(errors);
    }
    return null;
  }
}
