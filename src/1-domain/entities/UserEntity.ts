import { Entity } from './Entity';
import { type Either } from '../helpers/either';
import { ConcreteValidateUser } from '../validators';

export type TUserEntity = {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  birthDate: string;
};

export class UserEntity extends Entity<TUserEntity> {
  public name: string;
  public email: string;
  public password: string;
  public phoneNumber: string;
  public birthDate: string;

  create(props: TUserEntity): Either<UserEntity, Error> {
    this.setValidator(new ConcreteValidateUser(props));
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.phoneNumber = props.phoneNumber;
    this.birthDate = props.birthDate;
    const validation = this.validate();
    if (validation instanceof Error) {
      return validation;
    }
    return this;
  }
}
