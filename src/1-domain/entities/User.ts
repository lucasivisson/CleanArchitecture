import { Entity } from '.';

export class User extends Entity {
  constructor(
    private readonly name: string,
    private readonly email: string,
    private readonly password: string,
    private readonly phoneNumber: string,
    private readonly birthDate: Date,
  ) {
    super();
    this.name = name;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
    this.birthDate = birthDate;
  }
}
