/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { download_binary, unzip_binary } from '../functions/download-unzip.ts'

import { PackageMetadata } from '../metadata.ts'
import { copy_file } from '../functions/files/copy-file.ts'
import { generatePackageJson } from '../package.ts'
import { get_inputs } from '../functions/get-inputs.ts'
import { make_directory } from '../functions/files/make-directory.ts'
import { remove_directory } from '../functions/files/remove-directory.ts'
import { write_file } from '../functions/files/write-file.ts'

/**
 * Step 1. Get all inputs for future steps and setup some variables. Throw if
 * any of them are invalid or missing. Every other step requires these.
 */
const { version, architecture, platform } = get_inputs()
const root = `build/deno-npx-${platform}-${architecture}`
const supported = PackageMetadata[platform][architecture].supported

/**
 * Step 2. Remove the build directory for this platform and architecture.
 * Swallow errors, we don't care if the directory doesn't exist and if any other
 * error pops some stage later in the process that should panic will if this
 * failed.
 */
remove_directory(root)

/**
 * Step 3. Create the build directory for this platform and architecture.
 */
make_directory(root)
  .chain(() => make_directory(`${root}/bin`))
  .chain(() => make_directory(`${root}/temp`))
  .orElse((result) => {
    throw new Error(`Failed to create build directory: ${result.merge()}`)
  })

/**
 * Step 4. Either download and unzip the binary for this platform and
 * architecture or copy the unsupported.js file into the build directory. If the
 * platform is supported but the download/unzip fails, throw an error.
 */
if (supported) {
  download_binary(version, architecture, platform, root)
    .chain(() => unzip_binary(root))
    .orElse((result) => {
      throw new Error(`Failed to download and unzip: ${result.merge()}`)
    })
} else {
  copy_file('unsupported.js', `${root}/bin/unsupported.js`)
    .orElse((result) => {
      throw new Error(`Failed to copy unsupported.js: ${result.merge()}`)
    })
}

/**
 * Step 5. Generate the package.json file for this platform and architecture.
 */
const packageJson = generatePackageJson(version, platform, architecture, supported)
const output = new TextEncoder().encode(JSON.stringify(packageJson, null, 2))
write_file(`${root}/package.json`, output)
  .orElse((result) => {
    throw new Error(`Failed to write package.json: ${result.merge()}`)
  })

/**
 * Step 6. Copy the files from the root of the project into the build directory
 * and delete the temp directory.
 */
remove_directory(`${root}/temp`)
  .chain(() => copy_file('license.md', `${root}/license.md`))
  .chain(() => copy_file('readme.md', `${root}/readme.md`))
  .orElse((result) => {
    throw new Error(`Failed to finalize package: ${result.merge()}`)
  })
