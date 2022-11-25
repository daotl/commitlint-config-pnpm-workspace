import { exec } from 'node:child_process'
import { promisify } from 'node:util'

import type { LoadOptions } from '@commitlint/types'

export async function getPackages(_: LoadOptions = {}): Promise<string[]> {
  try {
    const { stderr, stdout } = await promisify(exec)(
      'pnpm m ls --depth -1 --json',
      { encoding: 'utf-8' },
    )
    if (stderr) {
      return Promise.reject(new Error(stderr))
    }
    const pkgs = JSON.parse(stdout) as { name: string }[]
    return pkgs.map((p) => p.name)
  } catch (e) {
    console.error(e)
    return []
  }
}
