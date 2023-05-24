/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { assertSpyCalls, returnsNext, stub } from 'std/testing/mock.ts'

import { Result } from 'folklore'
import { assertEquals } from 'std/testing/asserts.ts'
import { remove_directory } from './remove-directory.ts'

Deno.test('remove_directory success', () => {
  const removeSyncSpy = stub(Deno, 'removeSync')
  const result = remove_directory('test')
  assertEquals(result, Result.Ok(undefined))
  assertSpyCalls(removeSyncSpy, 1)
  removeSyncSpy.restore()
})

Deno.test('remove_directory error', () => {
  const removeSyncSpy = stub(Deno, 'removeSync', returnsNext([new Error('some error')]))
  const result = remove_directory('test')
  assertEquals(result, Result.Error(new Error('some error')))
  assertSpyCalls(removeSyncSpy, 1)
  removeSyncSpy.restore()
})
