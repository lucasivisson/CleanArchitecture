import { type EntityValidationError } from '../errors/EntityValidationError';
import { type IValidatorStrategy } from '../validators/IValidatorStrategy';

export abstract class Entity<T> {
  private readonly props!: T;
  private validator: IValidatorStrategy<T>;

  public export(): T {
    return { ...this.props };
  }

  public setValidator(validator: IValidatorStrategy<T>): void {
    this.validator = validator;
  }

  public async validate(input: T): Promise<EntityValidationError | null> {
    return await this.validator.validateFields(input);
  }
}
