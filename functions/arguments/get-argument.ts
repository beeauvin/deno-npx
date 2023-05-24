/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { Maybe } from 'folklore'
import { parse } from 'std/flags/mod.ts'

/**
 * Parses Deno.args and returns the value of the given argument, parsed by
 * std/flags and wrapped in a folklore Maybe.
 */
export function get_argument(argument: string, args = Deno.args): Maybe<string | number | boolean> {
  return Maybe.FromNullable(parse(args)[argument])
}
