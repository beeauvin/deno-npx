/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { assertSpyCallArgs, assertSpyCalls, spy } from 'std/testing/mock.ts'
import { download_binary, unzip_binary } from './download-unzip.ts'

import { PackageArchitecture } from './platform/architecture.ts'
import { PackagePlatform } from './platform/platform.ts'
import { Result } from "folklore";

Deno.test('download_binary', () => {
  const commandSpy = spy(() => Result.Ok(''))
  download_binary('1.2.3', PackageArchitecture.x64, PackagePlatform.linux, 'dir', commandSpy)
  assertSpyCalls(commandSpy, 1)
  assertSpyCallArgs(commandSpy, 0, [
    "gh",
    [
      "--repo",
      "denoland/deno",
      "release",
      "download",
      "v1.2.3",
      "--clobber",
      "--pattern",
      "deno-x86_64-unknown-linux-gnu.zip",
      "--output",
      "dir/temp/deno.zip",
    ]
  ])
})

Deno.test('unzip_binary', () => {
  const commandSpy = spy(() => Result.Ok(''))
  unzip_binary('dir', commandSpy)
  assertSpyCalls(commandSpy, 1)
  assertSpyCallArgs(commandSpy, 0, [
    "unzip",
    [
      "dir/temp/deno.zip",
      "-d",
      "dir/bin",
    ]
  ])
})
