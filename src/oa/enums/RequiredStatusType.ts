import Joi from 'joi';
import { OaValidationError } from '../../oaValidationError';

/**
 * <DOCUMENTATION ABOUT RequiredStatusType>
 */
export type Type =
  /** <YOU CANNOT DOCUMENT THE INDIVIDUAL VALUES THOUGH - THIS DOCSTRING ONLY WORKS FOR fields */
  | 'https://openactive.io/Required'
  | 'https://openactive.io/Optional'
  | 'https://openactive.io/Unavailable';

export const Schema = Joi.string().valid(
  'https://openactive.io/Required',
  'https://openactive.io/Optional',
  'https://openactive.io/Unavailable');

export function validate(maybeRequiredStatusType: unknown): Type | OaValidationError {
  const { value, error } = Schema.validate(maybeRequiredStatusType);
  if (error) {
    return new OaValidationError('RequiredStatusType', maybeRequiredStatusType, error);
  }
  return value as any;
}