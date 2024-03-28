import { type ValidationError } from 'class-validator';

export class EntityValidationError extends Error {
  constructor(message: ValidationError[]) {
    super(JSON.stringify(message));
    this.name = 'ValidationError';
  }
}
