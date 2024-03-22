import { User } from '../../1-domain/entities';
import { type IUserRepository } from '../contracts/repositories/IUserRepository';
import { type InputCreateUserDto, type OutputCreateUserDto } from '../dto';
import { CreateUserError } from '../errors/CreateUserError';
import { UseCase } from './UseCase';

export class CreateUserUseCase extends UseCase<InputCreateUserDto, OutputCreateUserDto> {
  constructor(private readonly userRepository: IUserRepository) {
    super();
  }

  public async exec(input: InputCreateUserDto): Promise<OutputCreateUserDto> {
    try {
      const { name, email, password, phoneNumber, birthDate } = input;
      const user = new User(name, email, password, phoneNumber, birthDate);

      await this.userRepository.create(user);

      return {};
    } catch (error) {
      const message = (error as Error)?.message || 'Create User Failed';
      throw new CreateUserError(message);
    }
  }
}
