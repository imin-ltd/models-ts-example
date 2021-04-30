import Joi from 'joi';
import { OaValidationError } from '../oaValidationError';

/**
 * <DOCUMENTATION ABOUT PropertyValue>
 */
export type PropertyValue = {
  '@type': 'PropertyValue';
  /** <DOCUMENTATION ABOUT `name`> */
  name?: string;
  description?: string;
  propertyID?: string;
  value?: boolean | string;
};

export const PropertyValueJoiSchema = Joi.object({
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

export function validatePropertyValue(maybePropertyValue: unknown): PropertyValue | OaValidationError {
  const { value, error } = PropertyValueJoiSchema.validate(maybePropertyValue);
  if (error) {
    return new OaValidationError('PropertyValue', maybePropertyValue, error);
  }
  return value as any;
}