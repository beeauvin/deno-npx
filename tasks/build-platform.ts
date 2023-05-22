/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Architecture, PackageMap, Platform } from '../platforms.ts'

import { pkg } from '../package.ts'

const version = Deno.args[0]
const architecture = Deno.args[1] as Architecture
const platform = Deno.args[2] as Platform

const packageJson = {
  ...pkg,
  name: `${pkg.name}-${PackageMap[platform][architecture].name}`,
  version,
  os: [PackageMap[platform][architecture].platform],
  cpu: [PackageMap[platform][architecture].arch],
}

if (PackageMap[platform][architecture].supported) {
  const bin = PackageMap[platform][architecture].platform === 'win32' ? './bin/deno.exe' : './bin/deno'
  const finalPackageJson = { ...packageJson, bin: { 'deno': bin, 'deno-npx': bin }}
  const output = new TextEncoder().encode(JSON.stringify(finalPackageJson, null, 2))
  Deno.writeFileSync(`build/dist/package.json`, output)
} else {
  const bin = './bin/unsupported.js'
  const finalPackageJson = { ...packageJson, bin: { 'deno': bin, 'deno-npx': bin }}
  const output = new TextEncoder().encode(JSON.stringify(finalPackageJson, null, 2))
  Deno.writeFileSync(`build/dist/package.json`, output)
  Deno.copyFileSync('unsupported.js', 'build/dist/bin/unsupported.js')
}
