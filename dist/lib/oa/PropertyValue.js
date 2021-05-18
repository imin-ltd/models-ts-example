import Joi from 'joi';
import { OaValidationError } from '../OaValidationError';
export var Schema = Joi.object({
    '@type': Joi.string().valid('PropertyValue').required(),
    name: Joi.string(),
    description: Joi.string(),
    propertyID: Joi.string().uri(),
    value: Joi.alternatives().try(Joi.boolean(), Joi.string())
    // ...
});
export function validate(maybePropertyValue) {
    var _a = Schema.validate(maybePropertyValue), value = _a.value, error = _a.error;
    if (error) {
        return new OaValidationError('PropertyValue', maybePropertyValue, error);
    }
    return value;
}
//# sourceMappingURL=PropertyValue.js.map