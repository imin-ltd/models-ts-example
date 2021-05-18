import Joi from 'joi';
import { OaValidationError } from '../OaValidationError';

/**
 * <DOCUMENTATION ABOUT PropertyValue>
 */
export type Type = {
  '@type': 'PropertyValue';
  /** <DOCUMENTATION ABOUT `name`> */
  name?: string;
  description?: string;
  propertyID?: string;
  value?: boolean | string;
};

export const Schema = Joi.object({
  '@type': Joi.string().valid('PropertyValue').required(),
  name: Joi.string(),
  description: Joi.string(),
  propertyID: Joi.string().uri(),
  value: Joi.alternatives().try(
    Joi.boolean(),
    Joi.string(),
  )
  // ...
});

export function validate(maybePropertyValue: unknown): Type | OaValidationError {
  const { value, error } = Schema.validate(maybePropertyValue);
  if (error) {
    return new OaValidationError('PropertyValue', maybePropertyValue, error);
  }
  return value as any;
}