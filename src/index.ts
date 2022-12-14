import type { LoadOptions } from '@commitlint/types'

import { getPackages as getPkgs } from './utils'

export const getPackages = (ctx: LoadOptions = {}): Promise<string[]> =>
  getPkgs(ctx).then((pkgs) =>
    pkgs.map((p) =>
      p.startsWith('@') && p.includes('/') ? p.split('/')[1]! : p,
    ),
  )

export const rules = {
  'scope-empty': [2, 'never'],
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  'scope-enum': (ctx: LoadOptions) =>
    getPackages(ctx).then((pkgs) => [2, 'always', pkgs]),
}
