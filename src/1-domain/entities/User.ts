import { Entity } from '.';
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
  private readonly name: string;
  private readonly email: string;
  private readonly password: string;
  private readonly phoneNumber: string;
  private readonly birthDate: Date;

  constructor(props: UserEntityInput) {
    super();
    this.setValidator(this.validatorEntity);
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.phoneNumber = props.phoneNumber;
    this.birthDate = props.birthDate;
    this.validate(this);
  }
}
