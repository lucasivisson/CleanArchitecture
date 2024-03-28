import { type EntityValidationError } from '../errors/EntityValidationError';
import { type Either } from '../helpers/either';
import { type IValidatorStrategy } from '../validators/IValidatorStrategy';

export class Entity<T> {
  private readonly props!: T;
  private validator: IValidatorStrategy;

  public export(): T {
    return { ...this.props };
  }

  public setValidator(validator: IValidatorStrategy): void {
    this.validator = validator;
  }

  public validate(): Either<EntityValidationError, null> {
    return this.validator.validateFields();
  }
}
