import { type EntityValidationError } from '../errors/EntityValidationError';
import { type Either } from '../helpers/either';

export interface IValidatorStrategy {
  validateFields: () => Either<EntityValidationError, null>;
}
