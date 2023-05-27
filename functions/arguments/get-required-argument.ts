/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { get_argument } from './get-argument.ts'

/**
 * Calls get_argument but unwrapps the maybe with a custom error message.
 */
export function get_required_argument(argument: string, error: string, args = Deno.args): string {
  return get_argument(argument, args).getOrThrow(error)
}
