/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

 // TODO: PORT THIS TO RUST WASM....
export default class randomuser {
  constructor(data) {
      this.data = data;
  }

  get() {
    return this.data.results.map(user => ({
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      phone: user.phone,
      location: `${user.location.city}, ${user.location.state} ${user.location.country}`,
      thumbnail: user.picture.thumbnail,
      image_mid: user.picture.medium,
      image_lrg: user.picture.large
    }));
  };
}
