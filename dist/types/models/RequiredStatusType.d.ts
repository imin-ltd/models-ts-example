import Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * <DOCUMENTATION ABOUT RequiredStatusType>
 */
export declare type Type = 
/** <YOU CANNOT DOCUMENT THE INDIVIDUAL VALUES THOUGH - THIS DOCSTRING ONLY WORKS FOR fields */
'https://openactive.io/Required' | 'https://openactive.io/Optional' | 'https://openactive.io/Unavailable';
export declare const Schema: Joi.StringSchema;
export declare function validate(maybeRequiredStatusType: unknown): Type | OaValidationError;
