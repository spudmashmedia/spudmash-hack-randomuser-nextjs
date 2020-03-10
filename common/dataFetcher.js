/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import randomuser from "./randomuser";

async function dataFetcher(path) {
  const res = await fetch(`${randomuser.getHost()}${path}`);
  const js = await res.json();
  return js;
}

export default dataFetcher;
