/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import process from 'node:process'
import { spawnSync } from 'node:child_process'

function findbin() {
  const arch = process.arch
  let platform: string = process.platform
  let extension = ''

  if (platform === 'win32') {
    platform = 'windows'
    extension = '.exe'
  } else if (platform === 'darwin') {
    platform = 'apple'
  }

  try {
    // Required until node stabilizes the import.meta.resolve api
    return require.resolve(`deno-npx-${platform}-${arch}/bin/deno${extension}`)
  } catch (_error) {
    throw new Error(`Couldn't find deno binary for ${platform}-${arch}`)
  }
}

const args = process.argv.slice(2)
const processResult = spawnSync(findbin(), args, { stdio: 'inherit', shell: false })
process.exit(processResult.status ?? 0)
