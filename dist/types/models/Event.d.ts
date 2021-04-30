import Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
import * as PropertyValue from './PropertyValue';
/**
 * <DOCUMENTATION ABOUT EVENT>
 */
export declare type Type = {
    '@type': 'Event';
    /** <DOCUMENTATION ABOUT `identifier`> */
    identifier?: number | string | PropertyValue.Type | PropertyValue.Type[];
};
export declare const Schema: Joi.ObjectSchema<any>;
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
export declare function validate(maybeEvent: unknown): Type | OaValidationError;
