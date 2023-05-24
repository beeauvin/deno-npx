/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Result } from 'folklore'

/**
 * Calls Deno.writeFileSync and wraps the result in a folklore Result.
 */
export function write_file(path: string, data: Uint8Array): Result<void> {
  return Result.Try(() => Deno.writeFileSync(path, data))
}
