/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export enum Architecture {
  x86_64 = 'x86_64',
  aarch64 = 'aarch64',
}

export enum Platform {
  apple = 'apple-darwin',
  windows = 'pc-windows-msvc',
  linux = 'unknown-linux-gnu',
}

export const PackageMap = {
  [Platform.apple]: {
    [Architecture.x86_64]: {
      supported: true,
      name: 'apple-x64',
      platform: 'darwin',
      arch: 'x64',
    },
    [Architecture.aarch64]: {
      supported: false,
      name: 'apple-arm64',
      platform: 'darwin',
      arch: 'arm64',
    },
  },
  [Platform.windows]: {
    [Architecture.x86_64]: {
      supported: true,
      name: 'windows-x64',
      platform: 'win32',
      arch: 'x64',
    },
    [Architecture.aarch64]: {
      supported: false,
      name: 'windows-arm64',
      platform: 'win32',
      arch: 'arm64',
    },
  },
  [Platform.linux]: {
    [Architecture.x86_64]: {
      supported: true,
      name: 'linux-x64',
      platform: 'linux',
      arch: 'x64',
    },
    [Architecture.aarch64]: {
      supported: false,
      name: 'linux-arm64',
      platform: 'linux',
      arch: 'arm64',
    },
  },
}
