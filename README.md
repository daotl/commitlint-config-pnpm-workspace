# commitlint-config-pnpm-workspace

Shareable `commitlint` config enforcing scopes from `pnpm` workspace packages

## Installation

```sh
pnpm add -D commitlint-config-pnpm-workspace
```

## Usage

Add the following snippet in the `commitlint` config file of your project:

```json
{
  "extends": ["pnpm-workspace"]
}
```

To add custom scopes, use `getPackages` functions:

```javascript
const { getPackages } = require('commitlint-config-pnpm-workspace')

modules.exports = {
  ...,
  'scope-empty': [2, 'never'],
  'scope-enum': async (context) => [
    2,
    'always',
    [
      ...(await getPackages(context)),
      'root',
    ],
  ],
}
```

## License

[MIT](LICENSE)
