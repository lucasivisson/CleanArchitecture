import { EntityValidationError } from '../../../../src/1-domain/errors/EntityValidationError';
import { type IUserRepository } from '../../../../src/2-business/contracts/repositories';
import { CreateUserError } from '../../../../src/2-business/errors/CreateUserError';
import { CreateUserUseCase } from '../../../../src/2-business/useCases';
import { InvalidCreateUserInput, CreateUserInput } from '../../../utility/dummies/useCases';
import { makeUserRepository } from '../../../utility/stubs/repositories/UserRepositoryStub';

type TSut = {
  sut: CreateUserUseCase;
  userRepositoryStub: IUserRepository;
};

const makeSut = (): TSut => {
  const userRepositoryStub = makeUserRepository();
  const sut = new CreateUserUseCase(userRepositoryStub);
  return {
    sut,
    userRepositoryStub,
  };
};

describe('2-business.useCases.CreateUserUseCase', () => {
  const { sut, userRepositoryStub } = makeSut();

  it('should throw EntityValidationError error from create UserEntity', async () => {
    try {
      await sut.exec(InvalidCreateUserInput);
    } catch (error) {
      expect(error).toBeInstanceOf(EntityValidationError);
    }
  });
  it('should throw CreateUserError error from create UserEntity', async () => {
    try {
      jest.spyOn(userRepositoryStub, 'create').mockReturnValueOnce(
        new Promise((resolve) => {
          resolve(new CreateUserError(''));
        }),
      );
      await sut.exec(CreateUserInput);
    } catch (error) {
      expect(error).toBeInstanceOf(CreateUserError);
    }
  });
});
