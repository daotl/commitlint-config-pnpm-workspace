import { getPackages } from './index'

test('getPackages', async () => {
  expect(await getPackages()).toBe(['commitlint-config-pnpm-workspace'])
})
