import Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import { PropertyValue, PropertyValueJoiSchema } from './PropertyValue';

/* Unfortunately, "Event" is taken. It describes DOM Events. Maybe you could have a list of types which need an
OA prefix due to existing TS clashes? */
/**
 * <DOCUMENTATION ABOUT EVENT>
 */
export type OaEvent = {
  '@type': 'Event';
  /** <DOCUMENTATION ABOUT `identifier`> */
  identifier?: number | string | PropertyValue | PropertyValue[];
  // ...
};

export const EventJoiSchema = Joi.object({
  '@type': Joi.string().valid('Event').required(), // use .valid(..) for literal values like `'Event'`
  identifier: [ // array means union apparently
    Joi.number(),
    Joi.string(),
    PropertyValueJoiSchema,
    Joi.array().items(PropertyValueJoiSchema),
  ],
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
export function validateEvent(maybeEvent: unknown): OaEvent | OaValidationError {
  const { value, error } = EventJoiSchema.validate(maybeEvent);
  if (error) {
    return new OaValidationError('Event', maybeEvent, error);
  }
  /* Joi already sets the `value` type to `any`, but it's good to make it explicit here that we're disregarding types.
  It's also not certain that Joi won't later upgrade this type to `unknown` (which they should) */
  return value as any;
}