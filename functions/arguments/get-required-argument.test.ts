/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { assertEquals, assertThrows } from 'std/testing/asserts.ts'

import { get_required_argument } from './get-required-argument.ts'

Deno.test('get_required_argument exists', () => {
  const result = get_required_argument('foo', 'nope', ['--foo', 'bar'])
  assertEquals(result, 'bar')
})

Deno.test('get_required_argument null', () => {
  assertThrows(() => get_required_argument('baz', 'yep', ['--foo']), 'yep')
})
