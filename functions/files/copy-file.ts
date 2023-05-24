/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Result } from 'folklore'

/**
 * Calls Deno.copyFileSync and wraps the result in a folklore Result.
 */
export function copy_file(from: string, to: string): Result<void> {
  return Result.Try(() => Deno.copyFileSync(from, to))
}
