/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { convert_platform_package_to_node, PackagePlatform } from './functions/platform/platform.ts'

import { PackageArchitecture } from './functions/platform/architecture.ts'

export const pkg = {
  name: 'deno-npx',
  version: '',
  description: 'Use deno through npm | npx.',
  keywords: ['deno', 'npm', 'npx', 'run', 'tasks'],
  author: 'Cassidy Spring <79487947+cassiecascade@users.noreply.github.com>',
  license: 'MPL-2.0',
  homepage: 'https://github.com/cassiecascade/deno-npx#readme',
  repository: {
    'type': 'git',
    'url': 'git+https://github.com/cassiecascade/deno-npx.git',
  },
  bugs: {
    'url': 'https://github.com/cassiecascade/deno-npx/issues',
  },
  engines: {
    node: '>=18',
  },
}

export function generatePackageJson(
  version: string,
  platform: PackagePlatform,
  architecture: PackageArchitecture,
  supported: boolean,
) {
  const bin = platform === PackagePlatform.windows ? './bin/deno.exe' : './bin/deno'
  return ({
    ...pkg,
    name: `${pkg.name}-${platform}-${architecture}`,
    version,
    os: [convert_platform_package_to_node(platform)],
    cpu: [architecture],
    bin: {
      'deno': supported ? bin : './bin/unsupported.js',
      'deno-npx-platform': supported ? bin : './bin/unsupported.js',
    },
  })
}
