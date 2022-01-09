This is an example project that represents how to set up a Node.js ES6 module project with
[Jasmine@4](https://github.com/jasmine/jasmine-npm) for [TypeScript](https://github.com/microsoft/TypeScript).

Key steps:
- add `@types/jasmine` and `ts-node` to the dev dependencies `$ npm i --save-dev @types/jasmine ts-node`
- set `"type": "module"` in the `package.json`
- set the `NODE_OPTIONS=--loader=ts-node/esm` environment variable before run jasmine.
- use `.js` file extension in Typescript relative import because ES6 import requires the full path
  BUT Typescript does not override or change the import path when transpile the code, or support `*.ts` extension so `.js`has to be used.
  You can read about more [here](https://github.com/Microsoft/TypeScript/issues/27481),
  [here](https://github.com/microsoft/TypeScript/issues/37582)
  or [here](https://github.com/microsoft/TypeScript/issues/39965)
