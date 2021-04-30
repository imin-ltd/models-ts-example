// Following advice from here: https://stackoverflow.com/a/47501654
// Library exports is a bit weird with TypeScript and I'm not very knowledgeable in this area, but this approach works well

// Therefore, this file is a necessary evil. index.ts will just export it
// export { OaEvent, EventJoiSchema, validateEvent } from './models/Event';
export * as Event from './models/Event';
export * as PropertyValue from './models/PropertyValue';
export * as RequiredStatusType from './models/RequiredStatusType';
// export { PropertyValue, PropertyValueJoiSchema, validatePropertyValue } from './models/PropertyValue';
// export { RequiredStatusType, RequiredStatusTypeJoiSchema, validateRequiredStatusType } from './models/RequiredStatusType';
