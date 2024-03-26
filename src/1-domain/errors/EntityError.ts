import { type ValidationError } from 'class-validator';

export class EntityError extends Error {
  constructor(message: ValidationError) {
    super(JSON.stringify(message));
    this.name = 'ValidationError';
  }
}
