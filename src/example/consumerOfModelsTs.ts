// import { oa } from '@openactive/models-ts';
import { oa } from '..';

const x: oa.RequiredStatusType = 'https://openactive.io/Unavailable';

oa.validateRequiredStatusType('imnotoneofthevalues'); // this should return an error

// and of course there'll be oa.OaEvent, which'll be a bit awkward