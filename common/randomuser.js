/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Spudmash Media Pty Ltd
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const API_URL = "https://randomuser.me/api/1.3";

// TODO: PORT THIS TO RUST WASM....
export default class randomuser {
  constructor(data) {
    this.data = data;
  }

  static getHost() {
    return API_URL;
  }

  static formatPath(args) {
    if (!args) {
      return `/`;
    }
    const { count, gender, nat } = args;
    return `/?results=${count}&gender=${gender}&nat=${nat}`;
  }

  get() {
    return this.data.results.map(user => ({
      id: user.id.value,
      name: `${user.name.first} ${user.name.last}`,
      username: user.login.username,
      password: user.login.password,
      email: user.email,
      phone: user.phone,
      location: `${user.location.city}, ${user.location.state} ${user.location.country}`,
      image_thumb: user.picture.thumbnail,
      image_mid: user.picture.medium,
      image_lrg: user.picture.large
    }));
  }
}
