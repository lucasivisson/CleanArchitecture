import { ValidationError } from 'class-validator';
import { UserEntity } from '../../1-domain/entities';
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
      const user = new UserEntity({ ...input });
      await this.userRepository.create(user.export());

      return {};
    } catch (error) {
      if (error instanceof ValidationError) {
        return error;
      }
      const message = (error as Error)?.message || 'Create User Failed';
      throw new CreateUserError(message);
    }
  }
}
