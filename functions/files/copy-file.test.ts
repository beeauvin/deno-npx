/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { assertSpyCalls, returnsNext, stub } from 'std/testing/mock.ts'

import { Result } from 'folklore'
import { assertEquals } from 'std/testing/asserts.ts'
import { copy_file } from './copy-file.ts'

Deno.test('copy_file success', () => {
  const copyFileSpy = stub(Deno, 'copyFileSync')
  const result = copy_file('test', 'foobar')
  assertEquals(result, Result.Ok(undefined))
  assertSpyCalls(copyFileSpy, 1)
  copyFileSpy.restore()
})

Deno.test('copy_file error', () => {
  const copyFileSpy = stub(Deno, 'copyFileSync', returnsNext([new Error('some error')]))
  const result = copy_file('test', 'foobar')
  assertEquals(result, Result.Error(new Error('some error')))
  assertSpyCalls(copyFileSpy, 1)
  copyFileSpy.restore()
})
