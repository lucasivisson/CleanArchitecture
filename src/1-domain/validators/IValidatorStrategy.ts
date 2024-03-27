import { type EntityValidationError } from '../errors/EntityValidationError';

export interface IValidatorStrategy<Class> {
  validateFields: (input: Class) => Promise<EntityValidationError | null>;
}
