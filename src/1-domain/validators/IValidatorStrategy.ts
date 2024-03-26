import { type EntityError } from '../errors/EntityError';

export interface IValidatorStrategy<Class> {
  validateFields: (input: Class) => Promise<EntityError | null>;
}
