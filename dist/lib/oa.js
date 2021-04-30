// Following advice from here: https://stackoverflow.com/a/47501654
// Library exports is a bit weird with TypeScript and I'm not very knowledgeable in this area, but this approach works well
import * as Event_1 from './models/Event';
export { Event_1 as Event };
import * as PropertyValue_1 from './models/PropertyValue';
export { PropertyValue_1 as PropertyValue };
import * as RequiredStatusType_1 from './models/RequiredStatusType';
export { RequiredStatusType_1 as RequiredStatusType };
// export { PropertyValue, PropertyValueJoiSchema, validatePropertyValue } from './models/PropertyValue';
// export { RequiredStatusType, RequiredStatusTypeJoiSchema, validateRequiredStatusType } from './models/RequiredStatusType';
//# sourceMappingURL=oa.js.map