import { Entity } from './Entity';
import { type Either } from '../helpers/either';
import { ConcreteValidateUser } from '../validators/ConcreteValidateUser';
import { type IValidatorStrategy } from '../validators/IValidatorStrategy';

export type UserEntityInput = {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  birthDate: string;
};

export class UserEntity extends Entity<UserEntity> {
  public readonly validatorEntity: IValidatorStrategy<UserEntity> = new ConcreteValidateUser();
  public name: string;
  public email: string;
  public password: string;
  public phoneNumber: string;
  public birthDate: string;

  async create(props: UserEntityInput): Promise<Either<UserEntity, Error>> {
    this.setValidator(this.validatorEntity);
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.phoneNumber = props.phoneNumber;
    this.birthDate = props.birthDate;
    await this.validate(this);
    return this;
  }
}
