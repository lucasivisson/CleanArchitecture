import { Entity } from '.';
import { type Either } from '../helpers/either';
import { ConcreteValidateUser } from '../validators/ConcreteValidateUser';
import { type IValidatorStrategy } from '../validators/IValidatorStrategy';

export type UserEntityInput = {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  birthDate: Date;
};

export class UserEntity extends Entity<UserEntity> {
  private readonly validatorEntity: IValidatorStrategy<UserEntity> = new ConcreteValidateUser();
  private name: string;
  private email: string;
  private password: string;
  private phoneNumber: string;
  private birthDate: Date;

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
