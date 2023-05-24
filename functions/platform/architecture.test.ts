/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  convert_arch_deno_to_package,
  convert_arch_package_to_deno,
  DenoArchitecture,
  PackageArchitecture,
} from './architecture.ts'

import { assertEquals } from 'std/testing/asserts.ts'

Deno.test('convert_arch_deno_to_package x86_64', () => {
  const result = convert_arch_deno_to_package(DenoArchitecture.x86_64)
  assertEquals(result, PackageArchitecture.x64)
})

Deno.test('convert_arch_deno_to_package aarch64', () => {
  const result = convert_arch_deno_to_package(DenoArchitecture.aarch64)
  assertEquals(result, PackageArchitecture.arm64)
})

Deno.test('convert_arch_package_to_deno x64', () => {
  const result = convert_arch_package_to_deno(PackageArchitecture.x64)
  assertEquals(result, DenoArchitecture.x86_64)
})

Deno.test('convert_arch_package_to_deno arm64', () => {
  const result = convert_arch_package_to_deno(PackageArchitecture.arm64)
  assertEquals(result, DenoArchitecture.aarch64)
})
