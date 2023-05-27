/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  convert_platform_node_to_package,
  NodePlatform,
  PackagePlatform,
} from './functions/platform/platform.ts'

import process from 'node:process'
import { spawnSync } from 'node:child_process'

function findbin() {
  const arch = process.arch
  const platform = convert_platform_node_to_package(process.platform as NodePlatform)
  const extension = (platform === PackagePlatform.windows) ? '.exe' : ''

  try {
    // Required until node stabilizes the import.meta.resolve api
    return require.resolve(`deno-npx-${platform}-${arch}/bin/deno${extension}`)
  } catch (_error) {
    throw new Error(`
      Couldn't find deno binary for ${platform}-${arch}, this may be an unsupported platform.
      see https://deno.com/manual/getting_started/installation. If you believe this is a mistake,
      please open an issue at: https://github.com/cassiecascade/deno-npx/issues/new
    `)
  }
}

const args = process.argv.slice(2)
const processResult = spawnSync(findbin(), args, { stdio: 'inherit', shell: false })
process.exit(processResult.status ?? 0)
