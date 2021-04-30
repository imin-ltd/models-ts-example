import Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * <DOCUMENTATION ABOUT RequiredStatusType>
 */
export type RequiredStatusType =
  /** <YOU CANNOT DOCUMENT THE INDIVIDUAL VALUES THOUGH - THIS DOCSTRING ONLY WORKS FOR fields */
  | 'https://openactive.io/Required'
  | 'https://openactive.io/Optional'
  | 'https://openactive.io/Unavailable';

export const RequiredStatusTypeJoiSchema = Joi.string().valid(
  'https://openactive.io/Required',
  'https://openactive.io/Optional',
  'https://openactive.io/Unavailable');

export function validateRequiredStatusType(maybeRequiredStatusType: unknown): RequiredStatusType | OaValidationError {
  const { value, error } = RequiredStatusTypeJoiSchema.validate(maybeRequiredStatusType);
  if (error) {
    return new OaValidationError('RequiredStatusType', maybeRequiredStatusType, error);
  }
  return value as any;
}