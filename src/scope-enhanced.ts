import type { LoadOptions } from '@commitlint/types'

import { getPackages as getPkgs } from './utils'

export const getPackages = getPkgs

export const rules = {
  'scope-empty': [2, 'never'],
  'scope-enum': [0],
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  'scope-enum-enhanced': (ctx: LoadOptions) =>
    getPackages(ctx).then((pkgs) => [2, 'always', pkgs]),
}
