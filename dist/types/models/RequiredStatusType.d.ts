import Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
/**
 * <DOCUMENTATION ABOUT RequiredStatusType>
 */
export declare type RequiredStatusType = 
/** <YOU CANNOT DOCUMENT THE INDIVIDUAL VALUES THOUGH - THIS DOCSTRING ONLY WORKS FOR fields */
'https://openactive.io/Required' | 'https://openactive.io/Optional' | 'https://openactive.io/Unavailable';
export declare const RequiredStatusTypeJoiSchema: Joi.StringSchema;
export declare function validateRequiredStatusType(maybeRequiredStatusType: unknown): RequiredStatusType | OaValidationError;
