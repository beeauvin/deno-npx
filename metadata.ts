/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { PackageArchitecture } from './functions/platform/architecture.ts'
import { PackagePlatform } from './functions/platform/platform.ts'

export const PackageMetadata = {
  [PackagePlatform.apple]: {
    [PackageArchitecture.x64]: {
      supported: true,
    },
    [PackageArchitecture.arm64]: {
      supported: false,
    },
  },

  [PackagePlatform.linux]: {
    [PackageArchitecture.x64]: {
      supported: true,
    },
    [PackageArchitecture.arm64]: {
      supported: false,
    },
  },

  [PackagePlatform.windows]: {
    [PackageArchitecture.x64]: {
      supported: true,
    },
    [PackageArchitecture.arm64]: {
      supported: false,
    },
  },
}
