import Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as PropertyValue from './PropertyValue';

/**
 * <DOCUMENTATION ABOUT EVENT>
 */
export type Type = {
  '@type': 'Event';
  /** <DOCUMENTATION ABOUT `identifier`> */
  identifier?: number | string | PropertyValue.Type | PropertyValue.Type[];
  // ...
};

export const Schema = Joi.object({
  '@type': Joi.string().valid('Event').required(), // use .valid(..) for literal values like `'Event'`
  identifier: Joi.alternatives().try(
    Joi.number(),
    Joi.string(),
    PropertyValue.Schema,
    Joi.array().items(PropertyValue.Schema),
  ),
  // ...
});

/**
 * Use this function like:
 *
 * ```ts
 * const event = validateEvent(req.body);
 * if (event instanceof OaValidationError) {
 *   // maybe this is fine. Maybe not. As an example, here we'll just return
 *   return;
 * }
 * // otherwise, do stuff with the event. It will now be typed correctly
 * ```
 */
export function validate(maybeEvent: unknown): Type | OaValidationError {
  const { value, error } = Schema.validate(maybeEvent);
  if (error) {
    return new OaValidationError('Event', maybeEvent, error);
  }
  /* Joi already sets the `value` type to `any`, but it's good to make it explicit here that we're disregarding types.
  It's also not certain that Joi won't later upgrade this type to `unknown` (which they should) */
  return value as any;
}