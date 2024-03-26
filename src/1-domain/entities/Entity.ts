import { type EntityError } from '../errors/EntityError';
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

  public async validate(input: T): Promise<EntityError | null> {
    return await this.validator.validateFields(input);
  }
}
