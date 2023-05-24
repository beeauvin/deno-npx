/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  DenoPlatform,
  NodePlatform,
  PackagePlatform,
  convert_platform_deno_to_node,
  convert_platform_deno_to_package,
  convert_platform_node_to_deno,
  convert_platform_node_to_package,
  convert_platform_package_to_deno,
  convert_platform_package_to_node,
} from './platform.ts'

import { assertEquals } from 'std/testing/asserts.ts'

Deno.test('convert_platform_deno_to_node apple-darwin', () => {
  const result = convert_platform_deno_to_node(DenoPlatform.apple_darwin)
  assertEquals(result, NodePlatform.darwin)
})

Deno.test('convert_platform_deno_to_node pc-windows-msvc', () => {
  const result = convert_platform_deno_to_node(DenoPlatform.pc_windows_msvc)
  assertEquals(result, NodePlatform.win32)
})

Deno.test('convert_platform_deno_to_node unknown-linux-gnu', () => {
  const result = convert_platform_deno_to_node(DenoPlatform.unknown_linux_gnu)
  assertEquals(result, NodePlatform.linux)
})

Deno.test('convert_platform_deno_to_package apple-darwin', () => {
  const result = convert_platform_deno_to_package(DenoPlatform.apple_darwin)
  assertEquals(result, PackagePlatform.apple)
})

Deno.test('convert_platform_deno_to_package pc-windows-msvc', () => {
  const result = convert_platform_deno_to_package(DenoPlatform.pc_windows_msvc)
  assertEquals(result, PackagePlatform.windows)
})

Deno.test('convert_platform_deno_to_package unknown-linux-gnu', () => {
  const result = convert_platform_deno_to_package(DenoPlatform.unknown_linux_gnu)
  assertEquals(result, PackagePlatform.linux)
})

Deno.test('convert_platform_node_to_deno darwin', () => {
  const result = convert_platform_node_to_deno(NodePlatform.darwin)
  assertEquals(result, DenoPlatform.apple_darwin)
})

Deno.test('convert_platform_node_to_deno win32', () => {
  const result = convert_platform_node_to_deno(NodePlatform.win32)
  assertEquals(result, DenoPlatform.pc_windows_msvc)
})

Deno.test('convert_platform_node_to_deno linux', () => {
  const result = convert_platform_node_to_deno(NodePlatform.linux)
  assertEquals(result, DenoPlatform.unknown_linux_gnu)
})

Deno.test('convert_platform_node_to_package darwin', () => {
  const result = convert_platform_node_to_package(NodePlatform.darwin)
  assertEquals(result, PackagePlatform.apple)
})

Deno.test('convert_platform_node_to_package win32', () => {
  const result = convert_platform_node_to_package(NodePlatform.win32)
  assertEquals(result, PackagePlatform.windows)
})

Deno.test('convert_platform_node_to_package linux', () => {
  const result = convert_platform_node_to_package(NodePlatform.linux)
  assertEquals(result, PackagePlatform.linux)
})

Deno.test('convert_platform_package_to_deno apple', () => {
  const result = convert_platform_package_to_deno(PackagePlatform.apple)
  assertEquals(result, DenoPlatform.apple_darwin)
})

Deno.test('convert_platform_package_to_deno windows', () => {
  const result = convert_platform_package_to_deno(PackagePlatform.windows)
  assertEquals(result, DenoPlatform.pc_windows_msvc)
})

Deno.test('convert_platform_package_to_deno linux', () => {
  const result = convert_platform_package_to_deno(PackagePlatform.linux)
  assertEquals(result, DenoPlatform.unknown_linux_gnu)
})

Deno.test('convert_platform_package_to_node apple', () => {
  const result = convert_platform_package_to_node(PackagePlatform.apple)
  assertEquals(result, NodePlatform.darwin)
})

Deno.test('convert_platform_package_to_node windows', () => {
  const result = convert_platform_package_to_node(PackagePlatform.windows)
  assertEquals(result, NodePlatform.win32)
})

Deno.test('convert_platform_package_to_node linux', () => {
  const result = convert_platform_package_to_node(PackagePlatform.linux)
  assertEquals(result, NodePlatform.linux)
})
