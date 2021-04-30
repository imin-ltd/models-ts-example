import Joi from 'joi';
import { OaValidationError } from '../oaValidationError';
export var PropertyValueJoiSchema = Joi.object({
    '@type': Joi.string().valid('PropertyValue').required(),
    name: Joi.string(),
    description: Joi.string(),
    propertyID: Joi.string().uri(),
    value: Joi.alternatives().try(Joi.boolean(), Joi.string())
    // ...
});
export function validatePropertyValue(maybePropertyValue) {
    var _a = PropertyValueJoiSchema.validate(maybePropertyValue), value = _a.value, error = _a.error;
    if (error) {
        return new OaValidationError('PropertyValue', maybePropertyValue, error);
    }
    return value;
}
//# sourceMappingURL=PropertyValue.js.map