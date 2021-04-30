// import { oa } from '@openactive/models-ts';
import Joi from 'joi';
import { oa } from '..';

const x: oa.RequiredStatusType.Type = 'https://openactive.io/Unavailable';
const y = oa.RequiredStatusType.validate('imnotoneofthevalues'); // this should return an error
const UserDefinedJoiSchema = Joi.object({
  requiredStatusType: oa.RequiredStatusType.Schema,
  // ...
})

// no `OaEvent` at least
const myEvent: oa.Event.Type = { '@type': 'Event', identifier: 'abc' };