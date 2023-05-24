/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a write of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { assertSpyCalls, returnsNext, stub } from 'std/testing/mock.ts'

import { Result } from 'folklore'
import { assertEquals } from 'std/testing/asserts.ts'
import { write_file } from './write-file.ts'

Deno.test('write_file success', () => {
  const writeFileSpy = stub(Deno, 'writeFileSync')
  const result = write_file('test', new TextEncoder().encode('foobar'))
  assertEquals(result, Result.Ok(undefined))
  assertSpyCalls(writeFileSpy, 1)
  writeFileSpy.restore()
})

Deno.test('write_file error', () => {
  const writeFileSpy = stub(Deno, 'writeFileSync', returnsNext([new Error('some error')]))
  const result = write_file('test', new TextEncoder().encode('foobar'))
  assertEquals(result, Result.Error(new Error('some error')))
  assertSpyCalls(writeFileSpy, 1)
  writeFileSpy.restore()
})
