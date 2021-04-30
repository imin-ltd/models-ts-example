import Joi from 'joi';
export declare class OaValidationError extends Error {
    item: unknown;
    validationError: Joi.ValidationError;
    constructor(type: string, item: unknown, validationError: Joi.ValidationError);
}
