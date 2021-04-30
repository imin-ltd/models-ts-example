// import { oa } from '@openactive/models-ts';
import Joi from 'joi';
import { oa } from '..';
var x = 'https://openactive.io/Unavailable';
var y = oa.RequiredStatusType.validate('imnotoneofthevalues'); // this should return an error
var UserDefinedJoiSchema = Joi.object({
    requiredStatusType: oa.RequiredStatusType.Schema,
    // ...
});
// no `OaEvent` at least
var myEvent = { '@type': 'Event', identifier: 'abc' };
//# sourceMappingURL=consumerOfModelsTs.js.map