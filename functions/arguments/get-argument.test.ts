/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Maybe } from 'folklore'
import { assertEquals } from 'std/testing/asserts.ts'
import { get_argument } from './get-argument.ts'

Deno.test('get_argument exists', () => {
  const result = get_argument('foo', ['--foo', 'bar'])
  assertEquals(result, Maybe.Just('bar'))
})

Deno.test('get_argument null', () => {
  const result = get_argument('baz', ['--foo'])
  assertEquals(result, Maybe.Nothing())
})
