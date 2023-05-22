#!/usr/bin/env bash

# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at https://mozilla.org/MPL/2.0/.

gh --repo denoland/deno release download "v$1" --clobber --pattern "deno-$2-$3.zip" --output ./build/deno.zip
