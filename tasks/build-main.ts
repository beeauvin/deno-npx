/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { build, emptyDir } from 'dnt/mod.ts'

import { get_version } from '../functions/get-inputs.ts'
import { pkg } from '../package.ts'

emptyDir('build/deno-npx')
const version = get_version()

await build({
  entryPoints: [{
    kind: 'bin',
    name: 'deno-npx',
    path: './bin.ts',
  }],
  outDir: 'build/deno-npx',
  test: false,
  esModule: false,
  scriptModule: 'cjs',
  typeCheck: false,
  skipSourceOutput: true,
  declaration: 'inline',
  shims: {
    deno: 'dev',
  },
  package: {
    ...pkg,
    version,
    // The above entrypoints forces /esm on bin for some reason.
    bin: {
      'deno-npx': './script/bin.js',
    },
    optionalDependencies: {
      'deno-npx-apple-x64': version,
      'deno-npx-apple-arm64': version,
      'deno-npx-windows-x64': version,
      'deno-npx-windows-arm64': version,
      'deno-npx-linux-x64': version,
      'deno-npx-linux-arm64': version,
    },
  },
  postBuild() {
    Deno.copyFileSync('license.md', 'build/deno-npx/license.md')
    Deno.copyFileSync('readme.md', 'build/deno-npx/readme.md')
    Deno.removeSync('build/deno-npx/.npmignore')
  },
})
