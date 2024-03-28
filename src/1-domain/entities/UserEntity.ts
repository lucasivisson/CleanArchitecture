import { Entity } from './Entity';
import { type Either } from '../helpers/either';
import { ConcreteValidateUser } from '../validators/ConcreteValidateUser';

export type IUserEntity = {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  birthDate: string;
};

export class UserEntity extends Entity<IUserEntity> {
  public name: string;
  public email: string;
  public password: string;
  public phoneNumber: string;
  public birthDate: string;

  create(props: IUserEntity): Either<UserEntity, Error> {
    // try {
    this.setValidator(new ConcreteValidateUser(props));
    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.phoneNumber = props.phoneNumber;
    this.birthDate = props.birthDate;
    this.validate();
    return this;
    // } catch (error) {
    // throw error;
    // }
  }
}
