import Joi from 'joi';
import { OaValidationError } from '../../oaValidationError';
export var Schema = Joi.string().valid('https://openactive.io/Required', 'https://openactive.io/Optional', 'https://openactive.io/Unavailable');
export function validate(maybeRequiredStatusType) {
    var _a = Schema.validate(maybeRequiredStatusType), value = _a.value, error = _a.error;
    if (error) {
        return new OaValidationError('RequiredStatusType', maybeRequiredStatusType, error);
    }
    return value;
}
//# sourceMappingURL=RequiredStatusType.js.map