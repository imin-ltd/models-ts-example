import Joi from 'joi';
import { OaValidationError } from '../OaValidationError';
/**
 * <DOCUMENTATION ABOUT PropertyValue>
 */
export declare type Type = {
    '@type': 'PropertyValue';
    /** <DOCUMENTATION ABOUT `name`> */
    name?: string;
    description?: string;
    propertyID?: string;
    value?: boolean | string;
};
export declare const Schema: Joi.ObjectSchema<any>;
export declare function validate(maybePropertyValue: unknown): Type | OaValidationError;
