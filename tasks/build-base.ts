/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { pkg } from '../package.ts'

const version = Deno.args[0]

const packageJson = {
  ...pkg,
  version,
  optionalDependencies: {
    "deno-npx-apple-x64": version,
    "deno-npx-apple-arm64": version,
    "deno-npx-windows-x64": version,
    "deno-npx-windows-arm64": version,
    "deno-npx-linux-x64": version,
    "deno-npx-linux-arm64": version
  }
}

const output = new TextEncoder().encode(JSON.stringify(packageJson, null, 2))
Deno.writeFileSync(`build/dist/package.json`, output)
