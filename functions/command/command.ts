/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Result } from 'folklore'

/**
 * Spawns a command, syncronously with Deno.Command and returns the result
 * wrapped in a folklore Result.
 */
export function command(command: string, args: string[] = []) {
  const cmd = new Deno.Command(command, { args })
  const { success, stdout, stderr } = cmd.outputSync()
  if (success) return Result.Ok(new TextDecoder().decode(stdout))
  else return Result.Error(new TextDecoder().decode(stderr))
}
