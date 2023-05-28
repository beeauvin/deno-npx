<!--
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at https://mozilla.org/MPL/2.0/.
-->

# deno-npx [![npm](https://img.shields.io/npm/v/deno-npx)](https://www.npmjs.com/package/deno-npx)

Use deno through npm | npx.

Supports v1.1.0+ of deno, including patch versions. Versions with security warnings or that are
otherwise deprecated by the deno team will be reflected here. Note that some package versions may
not support your OS. `deno-npx-apple-arm64` for instance will give an unsupported error up until
v1.6.0 as that is when support was added by the deno team. Currently, there are no deno binaries for
windows or linux arm64 builds.

This package has two components: The main package (`deno-npx`) using npm optional dependencies and
the sub packages for individual platform support (`deno-npx-apple-arm64`, etc). This offloads most
of the work to npm and makes it possible to run commands, when installed locally, directly through
deno (not a node child process).

## Usage

Realistically you can run any deno cli command. See:

- https://deno.com/manual/introduction
- https://deno.com/manual/tools

### Through npx directly:

```bash
$ npx deno-npx --version

# Run in interactive (repl) mode
$ npx deno-npx

# If you know your platform/arch (apple, windows, linux)/(x64, arm64)
$ npx deno-npx-windows-x64 --version

# Specify a deno version
$ npx deno-npx@1.1.0 --version
```

### Install locally on a project:

```bash
$ npm install --save-dev deno-npx
```

```jsonc
// package.json
{
  "scripts": {
    // Uses the main package, through a node child process.
    "use-deno-npx": "deno-npx --version",
    // Both of these link directly to the underlying platfrom package installed
    // alongside deno-npx proper. They do -NOT- run deno through a node child
    // process and are preferred when running locally.
    "use-deno-platform": "deno-npx-platform --version",
    "use-deno": "deno --version"
  }
}
```

## A note on versions

This package (github releases) is versioned separately than the npm packages it creates. See the
badge at the top of the readme for the current latest version of the package on npm.

## Acknowledgement

This project was heavily inspired by [Yoshiya Hinosawa (kt3k)](https://github.com/kt3k)'s work on
[deno-bin](https://github.com/kt3k/deno-bin).

`deno-bin` is great but I wanted something that could use deno locally without going through a node
child process. I took the opportunity to do a couple other things I wanted to see as well: No
dependencies, built with deno, high test coverage, etc.

## License

deno-npx is provided under the [Mozilla Public License 2.0](https://mozilla.org/MPL/2.0/).

A copy of the MPLv2 is included [license.md](/license.md) file for convenience.
