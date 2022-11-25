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

Since `commitlint`'s `scope-enum` rule does not support `/` in the scope names,
scope names with `@scope/` prefix will be stripped.

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

## Usage with `commitlint-plugin-scope-enhanced`

To use the `scope-enum-enhanced` rule from [commitlint-plugin-scope-enhanced](https://github.com/daotl/commitlint-plugin-scope-enhanced) instead of the default `scope-enum` rule,
extend from `pnpm-workspace/scope-enhanced` instead:

```json
{
  "extends": ["pnpm-workspace/scope-enhanced"],
  "plugins": ["scope-enhanced"]
}
```

## License

[MIT](LICENSE)
