import * as oaModels from '..';

const x: oaModels.oa.enums.RequiredStatusType.Type = 'https://openactive.io/Required';
const y: oaModels.oa.Event.Type = { /* .. */ };
const z: oaModels.schema.enums.EventStatusType.Type = 'EventPostponed';
const a: oaModels.schema.CreativeWork.Type = { /* .. */ };

// Or with file paths:
import { RequiredStatusType } from '../oa/enums';
const x2: RequiredStatusType.Type = 'https://openactive.io/Optional';

// Or with slight destructuring of the import
import { oa } from '..';
const x3: oa.enums.RequiredStatusType.Type = 'https://openactive.io/Unavailable';
