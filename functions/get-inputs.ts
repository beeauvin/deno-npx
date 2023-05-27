/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { PackageArchitecture } from './platform/architecture.ts'
import { PackagePlatform } from './platform/platform.ts'
import { get_required_argument } from './arguments/get-required-argument.ts'

export function get_version(from = get_required_argument): string {
  const version = from('version', 'Version is required.')
  if (!version.match(/^\d+\.\d+\.\d+$/)) {
    throw new Error('Version must be a somewhat valid semver.')
  } else {
    return version
  }
}

export function get_architecture(from = get_required_argument): PackageArchitecture {
  const architecture = from('arch', 'Architecture is required.')
  if (
    architecture !== PackageArchitecture.x64 &&
    architecture !== PackageArchitecture.arm64
  ) {
    throw new Error(
      `Architecture must be one of ${PackageArchitecture.x64} or ${PackageArchitecture.arm64}.`,
    )
  } else {
    return architecture
  }
}

export function get_platform(from = get_required_argument): PackagePlatform {
  const platform = from('platform', 'Platform is required.')
  if (
    platform !== PackagePlatform.apple &&
    platform !== PackagePlatform.linux &&
    platform !== PackagePlatform.windows
  ) {
    throw new Error(
      `Platform must be one of ${PackagePlatform.apple}, ${PackagePlatform.linux}, or ${PackagePlatform.windows}`,
    )
  } else {
    return platform
  }
}

interface Inputs {
  version: string
  architecture: PackageArchitecture
  platform: PackagePlatform
}
export function get_inputs(): Inputs {
  return {
    version: get_version(),
    architecture: get_architecture(),
    platform: get_platform(),
  }
}
