import Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
export var RequiredStatusTypeJoiSchema = Joi.string().valid('https://openactive.io/Required', 'https://openactive.io/Optional', 'https://openactive.io/Unavailable');
export function validateRequiredStatusType(maybeRequiredStatusType) {
    var _a = RequiredStatusTypeJoiSchema.validate(maybeRequiredStatusType), value = _a.value, error = _a.error;
    if (error) {
        return new OaValidationError('RequiredStatusType', maybeRequiredStatusType, error);
    }
    return value;
}
//# sourceMappingURL=RequiredStatusType.js.map