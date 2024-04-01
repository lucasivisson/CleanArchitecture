import { UserEntity } from '../../../../src/1-domain/entities';
import { EntityValidationError } from '../../../../src/1-domain/errors/EntityValidationError';
import { InvalidCreateUserInput, CreateUserInput } from '../../../utility/dummies/useCases';

describe('1-domain.entities.UserEntity', () => {
  it('should throw EntityValidationError error from create UserEntity', async () => {
    try {
      new UserEntity().create(InvalidCreateUserInput);
    } catch (error) {
      expect(error).toBeInstanceOf(EntityValidationError);
    }
  });

  it('should create UserEntity successfully', async () => {
    const user = new UserEntity().create(CreateUserInput);
    expect(user).toBeDefined();
    if (user instanceof UserEntity) {
      expect(user.name).toBe(CreateUserInput.name);
      expect(user.email).toBe(CreateUserInput.email);
      expect(user.password).toBe(CreateUserInput.password);
      expect(user.phoneNumber).toBe(CreateUserInput.phoneNumber);
      expect(user.birthDate).toBe(CreateUserInput.birthDate);
    }
  });
});
