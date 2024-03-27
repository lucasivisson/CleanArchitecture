import { UserEntity } from '../../../src/1-domain/entities';
import { EntityValidationError } from '../../../src/1-domain/errors/EntityValidationError';
import { FakeInvalidUserEntityInput } from '../../utility/fakes/unit/FakeUserEntity';

describe('1-domain.entities.UserEntity', () => {
  it('should throw EntityValidationError error from create UserEntity', async () => {
    await expect(async () => {
      await new UserEntity().create({ ...FakeInvalidUserEntityInput });
    }).rejects.toThrow(EntityValidationError);
  });

  // it('should create UserEntity successfully', async () => {
  //   const user = await new UserEntity().create({ ...FakeUserEntityInput });
  //   expect(user).toBeDefined();
  // await expect(async () => {
  //   await new UserEntity().create({ ...FakeUserEntityInput });
  // }).rejects.toThrow(EntityValidationError);
  // });
});
