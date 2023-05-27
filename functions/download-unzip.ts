/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { convert_arch_package_to_deno, PackageArchitecture } from './platform/architecture.ts'
import { convert_platform_package_to_deno, PackagePlatform } from './platform/platform.ts'

import { command } from './command/command.ts'

export function download_binary(
  version: string,
  architecture: PackageArchitecture,
  platform: PackagePlatform,
  root: string,
  cmd = command,
) {
  return cmd('gh', [
    '--repo',
    'denoland/deno',
    'release',
    'download',
    `v${version}`,
    '--clobber',
    '--pattern',
    `deno-${convert_arch_package_to_deno(architecture)}-${
      convert_platform_package_to_deno(platform)
    }.zip`,
    '--output',
    `${root}/temp/deno.zip`,
  ])
}

export function unzip_binary(root: string, cmd = command) {
  return cmd('unzip', [`${root}/temp/deno.zip`, '-d', `${root}/bin`])
}
