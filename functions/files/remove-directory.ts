/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Result } from 'folklore'

/**
 * Calls Deno.removeSync with recursive: true and wraps the result in a folklore Result.
 */
export function remove_directory(path: string): Result<void> {
  return Result.Try(() => Deno.removeSync(path, { recursive: true }))
}
