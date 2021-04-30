import Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import { PropertyValue } from './PropertyValue';
/**
 * <DOCUMENTATION ABOUT EVENT>
 */
export declare type OaEvent = {
    '@type': 'Event';
    /** <DOCUMENTATION ABOUT `identifier`> */
    identifier?: number | string | PropertyValue | PropertyValue[];
};
export declare const EventJoiSchema: Joi.ObjectSchema<any>;
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
export declare function validateEvent(maybeEvent: unknown): OaEvent | OaValidationError;
