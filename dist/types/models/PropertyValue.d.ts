import Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * <DOCUMENTATION ABOUT PropertyValue>
 */
export declare type PropertyValue = {
    '@type': 'PropertyValue';
    /** <DOCUMENTATION ABOUT `name`> */
    name?: string;
    description?: string;
    propertyID?: string;
    value?: boolean | string;
};
export declare const PropertyValueJoiSchema: Joi.ObjectSchema<any>;
export declare function validatePropertyValue(maybePropertyValue: unknown): PropertyValue | OaValidationError;
