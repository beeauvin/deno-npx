/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

export enum DenoPlatform {
  apple_darwin = 'apple-darwin',
  pc_windows_msvc = 'pc-windows-msvc',
  unknown_linux_gnu = 'unknown-linux-gnu',
}

export enum NodePlatform {
  darwin = 'darwin',
  win32 = 'win32',
  linux = 'linux',
  aix = 'aix',
  freebsd = 'freebsd',
  openbsd = 'openbsd',
  sunos = 'sunos',
}

export enum PackagePlatform {
  apple = 'apple',
  windows = 'windows',
  linux = 'linux',
}

export function convert_platform_deno_to_node(platform: DenoPlatform): NodePlatform {
  switch (platform) {
    case DenoPlatform.apple_darwin:
      return NodePlatform.darwin
    case DenoPlatform.pc_windows_msvc:
      return NodePlatform.win32
    case DenoPlatform.unknown_linux_gnu:
      return NodePlatform.linux
  }
}

export function convert_platform_deno_to_package(platform: DenoPlatform): PackagePlatform {
  switch (platform) {
    case DenoPlatform.apple_darwin:
      return PackagePlatform.apple
    case DenoPlatform.pc_windows_msvc:
      return PackagePlatform.windows
    case DenoPlatform.unknown_linux_gnu:
      return PackagePlatform.linux
  }
}

export function convert_platform_node_to_deno(platform: NodePlatform): DenoPlatform {
  switch (platform) {
    case NodePlatform.darwin:
      return DenoPlatform.apple_darwin
    case NodePlatform.win32:
      return DenoPlatform.pc_windows_msvc
    case NodePlatform.linux:
      return DenoPlatform.unknown_linux_gnu
    default:
      throw new Error(`Unsupported platform: ${platform}`)
  }
}

export function convert_platform_node_to_package(platform: NodePlatform): PackagePlatform {
  switch (platform) {
    case NodePlatform.darwin:
      return PackagePlatform.apple
    case NodePlatform.win32:
      return PackagePlatform.windows
    case NodePlatform.linux:
      return PackagePlatform.linux
    default:
      throw new Error(`Unsupported platform: ${platform}`)
  }
}

export function convert_platform_package_to_deno(platform: PackagePlatform): DenoPlatform {
  switch (platform) {
    case PackagePlatform.apple:
      return DenoPlatform.apple_darwin
    case PackagePlatform.windows:
      return DenoPlatform.pc_windows_msvc
    case PackagePlatform.linux:
      return DenoPlatform.unknown_linux_gnu
  }
}

export function convert_platform_package_to_node(platform: PackagePlatform): NodePlatform {
  switch (platform) {
    case PackagePlatform.apple:
      return NodePlatform.darwin
    case PackagePlatform.windows:
      return NodePlatform.win32
    case PackagePlatform.linux:
      return NodePlatform.linux
  }
}
