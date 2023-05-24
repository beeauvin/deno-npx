/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export enum DenoArchitecture {
  x86_64 = 'x86_64',
  aarch64 = 'aarch64',
}

export enum PackageArchitecture {
  x64 = 'x64',
  arm64 = 'arm64',
}

export function convert_arch_deno_to_package(
  architecture: DenoArchitecture,
): PackageArchitecture {
  switch (architecture) {
    case DenoArchitecture.x86_64:
      return PackageArchitecture.x64
    case DenoArchitecture.aarch64:
      return PackageArchitecture.arm64
  }
}

export function convert_arch_package_to_deno(
  architecture: PackageArchitecture,
): DenoArchitecture {
  switch (architecture) {
    case PackageArchitecture.x64:
      return DenoArchitecture.x86_64
    case PackageArchitecture.arm64:
      return DenoArchitecture.aarch64
  }
}
