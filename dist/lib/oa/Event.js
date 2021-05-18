import Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as PropertyValue from './PropertyValue';
export var Schema = Joi.object({
    '@type': Joi.string().valid('Event').required(),
    identifier: Joi.alternatives().try(Joi.number(), Joi.string(), PropertyValue.Schema, Joi.array().items(PropertyValue.Schema)),
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
export function validate(maybeEvent) {
    var _a = Schema.validate(maybeEvent), value = _a.value, error = _a.error;
    if (error) {
        return new OaValidationError('Event', maybeEvent, error);
    }
    /* Joi already sets the `value` type to `any`, but it's good to make it explicit here that we're disregarding types.
    It's also not certain that Joi won't later upgrade this type to `unknown` (which they should) */
    return value;
}
//# sourceMappingURL=Event.js.map