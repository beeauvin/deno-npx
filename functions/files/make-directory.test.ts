/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { assertSpyCalls, returnsNext, stub } from 'std/testing/mock.ts'

import { Result } from 'folklore'
import { assertEquals } from 'std/testing/asserts.ts'
import { make_directory } from './make-directory.ts'

Deno.test('make_directory success', () => {
  const mkdirSyncSpy = stub(Deno, 'mkdirSync')
  const result = make_directory('test')
  assertEquals(result, Result.Ok(undefined))
  assertSpyCalls(mkdirSyncSpy, 1)
  mkdirSyncSpy.restore()
})

Deno.test('make_directory error', () => {
  const mkdirSyncSpy = stub(Deno, 'mkdirSync', returnsNext([new Error('some error')]))
  const result = make_directory('test')
  assertEquals(result, Result.Error(new Error('some error')))
  assertSpyCalls(mkdirSyncSpy, 1)
  mkdirSyncSpy.restore()
})
