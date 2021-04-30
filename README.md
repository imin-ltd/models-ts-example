## Install deps:

```ts
npm install
```

## Build types (this also checks the types):

```ts
npm run build
```

This will generate `.d.ts` files and `.js` files into -> `/dist` so that this library can be used by normal JS users as well as TS.

This `/dist` code will need to be committed, so that users can use it.

NPM will resolve the module's code and types using the `module` and `typings` fields in package.json respectively.
