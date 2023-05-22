/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

Deno.removeSync('build', { recursive: true })
Deno.mkdirSync('build/dist/bin', { recursive: true })
Deno.copyFileSync('license.md', 'build/dist/license.md')
Deno.copyFileSync('readme.md', 'build/dist/readme.md')
