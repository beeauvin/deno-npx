/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { assertEquals, assertThrows } from 'std/testing/asserts.ts'
import { get_architecture, get_platform, get_version } from './get-inputs.ts'

import { PackageArchitecture } from './platform/architecture.ts'
import { PackagePlatform } from './platform/platform.ts'

Deno.test('get_version exists', () => {
  const result = get_version(() => '1.2.3')
  assertEquals(result, '1.2.3')
})

Deno.test('get_version null', () => {
  assertThrows(() => get_version(() => null!), 'Version is required.')
})

Deno.test('get_version invalid', () => {
  assertThrows(() => get_version(() => '1.2'), 'Version must be a somewhat valid semver.')
  assertThrows(() => get_version(() => 'a.b.c'), 'Version must be a somewhat valid semver.')
  assertThrows(() => get_version(() => ''), 'Version must be a somewhat valid semver.')
})

Deno.test('get_architecture exists', () => {
  const result = get_architecture(() => 'x64')
  assertEquals(result, PackageArchitecture.x64)

  const result2 = get_architecture(() => 'arm64')
  assertEquals(result2, PackageArchitecture.arm64)
})

Deno.test('get_architecture null', () => {
  assertThrows(() => get_architecture(() => null!), 'Architecture is required.')
})

Deno.test('get_architecture invalid', () => {
  assertThrows(() => get_architecture(() => 'x86'), 'Architecture must be one of x64 or arm64.')
  assertThrows(() => get_architecture(() => ''), 'Architecture must be one of x64 or arm64.')
})

Deno.test('get_platform exists', () => {
  const result = get_platform(() => 'apple')
  assertEquals(result, PackagePlatform.apple)

  const result2 = get_platform(() => 'linux')
  assertEquals(result2, PackagePlatform.linux)

  const result3 = get_platform(() => 'windows')
  assertEquals(result3, PackagePlatform.windows)
})

Deno.test('get_platform null', () => {
  assertThrows(() => get_platform(() => null!), 'Platform is required.')
})

Deno.test('get_platform invalid', () => {
  assertThrows(
    () => get_platform(() => 'android'),
    'Platform must be one of apple, linux, or windows',
  )
  assertThrows(() => get_platform(() => ''), 'Platform must be one of apple, linux, or windows')
})
