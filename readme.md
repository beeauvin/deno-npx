<!--
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at https://mozilla.org/MPL/2.0/.
-->

# deno-npx

Use deno through npm | npx.

Currently only supports v1.0.0 of deno, as I test and build out automation.

Inspired by [Yoshiya Hinosawa (kt3k)](https://github.com/kt3k)'s work on [deno-bin](https://github.com/kt3k/deno-bin)
but I wanted a version that meets these requirements:

1. Is built with deno (and typescript).
2. Leverages npm and optional dependencies to do most of the work.
3. Other than optional dependencies, don't fetch anything over the network.
4. Has 0 other dependencies.
5. Automate all the things.

## License

deno-npx is provided under the [Mozilla Public License 2.0](https://mozilla.org/MPL/2.0/).

A copy of the MPLv2 is included [license.md](/license.md) file for convenience.
