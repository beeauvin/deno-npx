/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { assertSpyCallArgs, assertSpyCalls, returnsNext, stub } from 'std/testing/mock.ts'

import { Result } from 'folklore'
import { assertEquals } from 'std/testing/asserts.ts'
import { command } from './command.ts'

function mockOutputSyncReturn(success: boolean, stdout = '', stderr = ''): Deno.CommandOutput {
  const stdoutBytes = new TextEncoder().encode(stdout)
  const stderrBytes = new TextEncoder().encode(stderr)
  return { success, stdout: stdoutBytes, stderr: stderrBytes, code: 0, signal: null }
}

Deno.test('command success', () => {
  const CommandSpy = stub(Deno, 'Command')
  const outputSyncSpy = stub(
    Deno.Command.prototype,
    'outputSync',
    returnsNext([mockOutputSyncReturn(true, 'yay')]),
  )
  const result = command('test', ['foo', 'bar'])

  assertEquals(result, Result.Ok('yay'))
  assertSpyCalls(CommandSpy, 1)
  assertSpyCalls(outputSyncSpy, 1)
  assertSpyCallArgs(CommandSpy, 0, 0, ['test', { args: ['foo', 'bar'] }])
  assertSpyCallArgs(outputSyncSpy, 0, 0, [])

  CommandSpy.restore()
  outputSyncSpy.restore()
})

Deno.test('command error', () => {
  const CommandSpy = stub(Deno, 'Command')
  const outputSyncSpy = stub(
    Deno.Command.prototype,
    'outputSync',
    returnsNext([mockOutputSyncReturn(false, '', 'boo')]),
  )
  const result = command('test', ['foo', 'bar'])

  assertEquals(result, Result.Error('boo'))
  assertSpyCalls(CommandSpy, 1)
  assertSpyCalls(outputSyncSpy, 1)
  assertSpyCallArgs(CommandSpy, 0, 0, ['test', { args: ['foo', 'bar'] }])
  assertSpyCallArgs(outputSyncSpy, 0, 0, [])

  CommandSpy.restore()
  outputSyncSpy.restore()
})
